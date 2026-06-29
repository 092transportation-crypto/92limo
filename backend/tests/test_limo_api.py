"""Tests for 92 Limo Service backend API."""
import os
import pytest
import requests
from pathlib import Path

# Load REACT_APP_BACKEND_URL from /app/frontend/.env
FRONTEND_ENV = Path("/app/frontend/.env")
BASE_URL = None
for line in FRONTEND_ENV.read_text().splitlines():
    if line.startswith("REACT_APP_BACKEND_URL="):
        BASE_URL = line.split("=", 1)[1].strip().strip('"').rstrip('/')
        break

API = f"{BASE_URL}/api"
ADMIN_PASSWORD = "92Limo!Admin2026"


# ---------- Fixtures ----------
@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def admin_token(session):
    r = session.post(f"{API}/admin/login", json={"password": ADMIN_PASSWORD})
    assert r.status_code == 200, f"login failed: {r.status_code} {r.text}"
    return r.json()["token"]


@pytest.fixture(scope="module")
def created_booking(session):
    payload = {
        "pickup_location": "TEST_Dulles International Airport (IAD)",
        "dropoff_location": "TEST_The Ritz-Carlton, Washington DC",
        "date": "2026-03-15",
        "time": "14:30",
        "passengers": 3,
        "luggage": 4,
        "service_type": "Airport Transfer",
        "vehicle_type": "Luxury Sedan",
        "name": "TEST_John Smith",
        "phone": "555-123-4567",
        "email": "TEST_john@example.com",
        "notes": "TEST_Please meet at baggage claim 5",
    }
    r = session.post(f"{API}/bookings", json=payload)
    assert r.status_code == 200, f"create failed: {r.status_code} {r.text}"
    return r.json()


# ---------- Root ----------
def test_api_root(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"


# ---------- Bookings ----------
def test_create_booking_returns_inquiry(session, created_booking):
    b = created_booking
    assert "inquiry_id" in b and isinstance(b["inquiry_id"], str) and len(b["inquiry_id"]) > 0
    assert b["status"] == "new"
    assert b["email_sent"] is False  # No RESEND_API_KEY configured
    assert b["name"] == "TEST_John Smith"
    assert b["email"] == "TEST_john@example.com"
    assert b["passengers"] == 3
    assert b["luggage"] == 4
    assert b["service_type"] == "Airport Transfer"


def test_create_booking_missing_field_returns_422(session):
    payload = {"pickup_location": "X"}  # incomplete
    r = session.post(f"{API}/bookings", json=payload)
    assert r.status_code == 422


def test_create_booking_invalid_email(session):
    payload = {
        "pickup_location": "A", "dropoff_location": "B", "date": "2026-01-01",
        "time": "10:00", "passengers": 1, "luggage": 0,
        "service_type": "Airport Transfer", "vehicle_type": "Luxury Sedan",
        "name": "Bad", "phone": "111", "email": "not-an-email", "notes": "",
    }
    r = session.post(f"{API}/bookings", json=payload)
    assert r.status_code == 422


# ---------- Admin Auth ----------
def test_admin_login_correct_password(session):
    r = session.post(f"{API}/admin/login", json={"password": ADMIN_PASSWORD})
    assert r.status_code == 200
    assert "token" in r.json()
    assert isinstance(r.json()["token"], str) and len(r.json()["token"]) > 0


def test_admin_login_wrong_password(session):
    r = session.post(f"{API}/admin/login", json={"password": "wrong-pass-xyz"})
    assert r.status_code == 401


def test_admin_bookings_no_auth_returns_401(session):
    # use fresh session without auth header
    r = requests.get(f"{API}/admin/bookings")
    assert r.status_code == 401


def test_admin_bookings_with_token(session, admin_token, created_booking):
    r = session.get(
        f"{API}/admin/bookings",
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    ids = [b.get("inquiry_id") for b in data]
    assert created_booking["inquiry_id"] in ids
    # confirm no _id leakage
    for b in data:
        assert "_id" not in b


def test_admin_stats(session, admin_token):
    r = session.get(
        f"{API}/admin/stats",
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert r.status_code == 200
    data = r.json()
    assert "total" in data and "new" in data
    assert isinstance(data["total"], int) and isinstance(data["new"], int)
    assert data["total"] >= 1
    assert data["new"] >= 1


def test_admin_stats_no_auth(session):
    r = requests.get(f"{API}/admin/stats")
    assert r.status_code == 401


# ---------- Status update ----------
def test_patch_booking_status(session, admin_token, created_booking):
    iid = created_booking["inquiry_id"]
    r = session.patch(
        f"{API}/admin/bookings/{iid}?status=confirmed",
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert r.status_code == 200
    assert r.json().get("ok") is True

    # Verify via GET
    r2 = session.get(
        f"{API}/admin/bookings",
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert r2.status_code == 200
    found = next((b for b in r2.json() if b["inquiry_id"] == iid), None)
    assert found is not None
    assert found["status"] == "confirmed"


def test_patch_booking_status_unknown_id(session, admin_token):
    r = session.patch(
        f"{API}/admin/bookings/nonexistent-id-xxx?status=confirmed",
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert r.status_code == 404


def test_patch_no_auth(session, created_booking):
    iid = created_booking["inquiry_id"]
    r = requests.patch(f"{API}/admin/bookings/{iid}?status=confirmed")
    assert r.status_code == 401
