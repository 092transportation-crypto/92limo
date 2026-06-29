from fastapi import FastAPI, APIRouter, HTTPException, Header, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, BeforeValidator, ConfigDict
from typing import List, Optional, Annotated
from bson import ObjectId
import uuid
from datetime import datetime, timezone

try:
    import resend
except Exception:
    resend = None

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
INQUIRY_EMAIL = os.environ.get('INQUIRY_EMAIL', 'info@92limo.com')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', '')
ADMIN_TOKEN = os.environ.get('ADMIN_TOKEN', '')

if resend and RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="92 Limo Service API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ---------- Mongo helpers ----------
def _validate_object_id(v):
    if isinstance(v, ObjectId):
        return str(v)
    return str(v)

PyObjectId = Annotated[str, BeforeValidator(_validate_object_id)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, arbitrary_types_allowed=True)
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    @classmethod
    def from_mongo(cls, doc):
        if not doc:
            return None
        doc.pop("_id", None)
        return cls(**doc)

    def to_mongo(self):
        data = self.model_dump(by_alias=True, exclude_none=True)
        data.pop("_id", None)
        return data


# ---------- Models ----------
class BookingInquiryCreate(BaseModel):
    pickup_location: str
    dropoff_location: str
    date: str
    time: str
    passengers: int = 1
    luggage: int = 0
    service_type: str
    vehicle_type: str
    name: str
    phone: str
    email: EmailStr
    notes: Optional[str] = ""


class BookingInquiry(BaseDocument):
    inquiry_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    pickup_location: str
    dropoff_location: str
    date: str
    time: str
    passengers: int = 1
    luggage: int = 0
    service_type: str
    vehicle_type: str
    name: str
    phone: str
    email: str
    notes: Optional[str] = ""
    status: str = "new"
    email_sent: bool = False
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class AdminLogin(BaseModel):
    password: str


# ---------- Email ----------
def _build_email_html(b: BookingInquiry) -> str:
    rows = [
        ("Name", b.name), ("Phone", b.phone), ("Email", b.email),
        ("Service Type", b.service_type), ("Vehicle", b.vehicle_type),
        ("Pickup", b.pickup_location), ("Drop-off", b.dropoff_location),
        ("Date", b.date), ("Time", b.time),
        ("Passengers", str(b.passengers)), ("Luggage", str(b.luggage)),
        ("Notes", b.notes or "—"),
    ]
    tr = "".join(
        f'<tr><td style="padding:8px 14px;color:#71717A;font-size:13px;border-bottom:1px solid #eee;">{k}</td>'
        f'<td style="padding:8px 14px;color:#15161A;font-size:14px;font-weight:600;border-bottom:1px solid #eee;">{v}</td></tr>'
        for k, v in rows
    )
    return f"""
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f4f5;padding:24px;">
      <table width="100%" style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;">
        <tr><td style="background:#090A0C;padding:24px;text-align:center;">
          <span style="color:#D4AF37;font-size:22px;font-weight:700;letter-spacing:1px;">92 LIMO SERVICE</span>
          <div style="color:#B0B0B0;font-size:12px;margin-top:4px;">New Booking Inquiry</div>
        </td></tr>
        <tr><td style="padding:20px;">
          <table width="100%" style="border-collapse:collapse;">{tr}</table>
        </td></tr>
        <tr><td style="padding:16px;text-align:center;background:#15161A;color:#71717A;font-size:12px;">
          Reply directly or call {b.phone}. — 92limo.com · 877-679-0100
        </td></tr>
      </table>
    </div>"""


async def send_inquiry_email(b: BookingInquiry) -> bool:
    if not (resend and RESEND_API_KEY):
        logger.warning("RESEND_API_KEY not configured; skipping email send.")
        return False
    params = {
        "from": SENDER_EMAIL,
        "to": [INQUIRY_EMAIL],
        "reply_to": b.email,
        "subject": f"New Booking Inquiry — {b.name} ({b.service_type})",
        "html": _build_email_html(b),
    }
    try:
        await asyncio.to_thread(resend.Emails.send, params)
        return True
    except Exception as e:
        logger.error(f"Failed to send inquiry email: {e}")
        return False


# ---------- Auth ----------
def require_admin(authorization: Optional[str] = Header(None)):
    token = (authorization or "").replace("Bearer ", "").strip()
    if not ADMIN_TOKEN or token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return True


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "92 Limo Service API", "status": "ok"}


@api_router.post("/bookings", response_model=BookingInquiry, response_model_exclude={"id"})
async def create_booking(payload: BookingInquiryCreate):
    inquiry = BookingInquiry(**payload.model_dump())
    sent = await send_inquiry_email(inquiry)
    inquiry.email_sent = sent
    await db.bookings.insert_one(inquiry.to_mongo())
    return inquiry


@api_router.post("/admin/login")
async def admin_login(payload: AdminLogin):
    if not ADMIN_PASSWORD or payload.password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid password")
    return {"token": ADMIN_TOKEN}


@api_router.get("/admin/bookings", response_model=List[BookingInquiry], response_model_exclude={"__all__": {"id"}})
async def list_bookings(_: bool = Depends(require_admin)):
    docs = await db.bookings.find().sort("created_at", -1).to_list(1000)
    return [BookingInquiry.from_mongo(d) for d in docs]


@api_router.get("/admin/stats")
async def admin_stats(_: bool = Depends(require_admin)):
    total = await db.bookings.count_documents({})
    new = await db.bookings.count_documents({"status": "new"})
    return {"total": total, "new": new}


@api_router.patch("/admin/bookings/{inquiry_id}")
async def update_booking_status(inquiry_id: str, status: str, _: bool = Depends(require_admin)):
    result = await db.bookings.update_one({"inquiry_id": inquiry_id}, {"$set": {"status": status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return {"ok": True}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
