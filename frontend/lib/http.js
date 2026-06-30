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

const uuid = () => crypto.randomUUID();
const nowIso = () => new Date().toISOString();

module.exports = { readBody, applyCors, isEmail, uuid, nowIso };
