/** Small helpers shared by the serverless form endpoints. */
const crypto = require("crypto");

/** Parse the request body whether Vercel pre-parsed it or handed us a string. */
function readBody(req) {
  const b = req.body;
  if (!b) return {};
  if (typeof b === "string") {
    try {
      return JSON.parse(b);
    } catch {
      return {};
    }
  }
  return b;
}

function applyCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function isEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Same rule as the frontend's src/lib/phone.js (isValidPhone): a usable phone
// number has 10–15 digits once formatting characters are stripped. Kept as a
// separate CommonJS copy here because src/lib/phone.js is an ES module used
// by the React build and can't be require()'d from these serverless functions.
function isValidPhone(value) {
  const digits = String(value ?? "").replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

const uuid = () => crypto.randomUUID();
const nowIso = () => new Date().toISOString();

module.exports = { readBody, applyCors, isEmail, isValidPhone, uuid, nowIso };
