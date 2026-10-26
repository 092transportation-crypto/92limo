/**
 * POST /api/admin-login
 *
 * Checks a password against ADMIN_PASSWORD (set as a Vercel environment
 * variable, never committed to source) and returns a bearer token on match.
 *
 * This replaces the old `${REACT_APP_BACKEND_URL}/api/admin/login` call to
 * the project's unused Python/FastAPI backend (see backend/server.py) —
 * REACT_APP_BACKEND_URL was never configured in this Vercel project, so
 * that call always resolved to "undefined/api/admin/login" and admin login
 * has never worked on the live site. This endpoint is same-origin, so no
 * backend URL configuration is needed.
 *
 * Note: this only gates the login screen. src/pages/Admin.jsx's bookings/
 * stats/status-update calls still point at the same unconfigured backend
 * URL and are not fixed by this change — they need their own data source
 * (see backend/server.py's MongoDB-backed endpoints for what that would
 * look like) before the dashboard itself shows real data.
 */
const crypto = require("crypto");
const { readBody, applyCors } = require("../lib/http");

function timingSafeEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) {
    // Still run a comparison of equal length so a length mismatch doesn't
    // return measurably faster than a length match.
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const adminPassword = process.env.ADMIN_PASSWORD || "";
  const body = readBody(req);
  const password = String(body.password || "");

  if (!adminPassword || !password || !timingSafeEqual(password, adminPassword)) {
    return res.status(401).json({ detail: "Invalid password" });
  }

  const token = crypto.randomBytes(32).toString("hex");
  return res.status(200).json({ token });
};
