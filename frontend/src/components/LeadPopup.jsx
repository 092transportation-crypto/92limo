import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { sanitizePhone, isValidPhone } from "@/lib/phone";
import { track } from "@/lib/analytics";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const API_BASE = process.env.REACT_APP_BACKEND_URL || "";
const SHOW_DELAY_MS = 30000;

/** Safe sessionStorage access — never throws (private browsing, blocked storage, etc). */
const storage = {
  get(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch {
      /* ignore — popup still works for this page view */
    }
  },
};

const EMPTY = { name: "", phone: "", email: "" };

/**
 * Lead-capture popup: appears 30s after mount, once per session, unless a
 * lead has already been captured this session. Collects name/phone/email,
 * posts to /api/lead-capture with source "lead_popup".
 */
export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (storage.get("leadPopupShown") || storage.get("leadSubmitted")) return;
    timerRef.current = setTimeout(() => {
      // Re-check at fire time — a lead may have been captured (e.g. via chat)
      // during the 30s wait.
      if (storage.get("leadSubmitted")) return;
      storage.set("leadPopupShown", "1");
      setOpen(true);
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timerRef.current);
  }, []);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    if (!isValidPhone(form.phone)) {
      toast.error("Please enter a valid phone number (digits only, at least 10).");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/lead-capture`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "lead_popup",
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Request failed");
      }
      storage.set("leadSubmitted", "1");
      track("lead_popup_submit", { currency: "USD", value: 1 });
      setSubmitted(true);
      setTimeout(() => setOpen(false), 1800);
    } catch (err) {
      toast.error("Something went wrong. Please call (877) 609-1919.");
      // eslint-disable-next-line no-console
      console.error("Lead popup submit failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const fieldCls =
    "bg-white/5 border-white/15 text-white placeholder:text-neutral-500 focus-visible:ring-[#C9A227] focus-visible:border-[#C9A227]";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-testid="lead-popup"
        className="bg-[#0A0A0A] border border-[#C9A227]/40 text-white sm:max-w-md [&>button]:text-neutral-400 [&>button]:hover:text-white"
      >
        {submitted ? (
          <div className="py-6 text-center">
            <p className="text-lg font-display font-semibold text-[#C9A227]">You're all set!</p>
            <p className="mt-2 text-sm text-neutral-300">
              A dispatcher will reach out shortly to confirm your quote.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-display text-white">
                Get a free quote in 60 seconds
              </DialogTitle>
              <p className="text-sm text-neutral-400">
                Leave your details and a dispatcher will text or call you right back with pricing.
              </p>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-3 mt-1" data-testid="lead-popup-form">
              <div className="space-y-1.5">
                <Label htmlFor="lead-popup-name" className="text-neutral-300">
                  Name
                </Label>
                <Input
                  id="lead-popup-name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Jane Traveler"
                  maxLength={120}
                  className={fieldCls}
                  data-testid="lead-popup-name"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lead-popup-phone" className="text-neutral-300">
                  Phone
                </Label>
                <Input
                  id="lead-popup-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", sanitizePhone(e.target.value))}
                  placeholder="(443) 555-0100"
                  maxLength={20}
                  className={fieldCls}
                  data-testid="lead-popup-phone"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lead-popup-email" className="text-neutral-300">
                  Email <span className="text-neutral-500">(optional)</span>
                </Label>
                <Input
                  id="lead-popup-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="jane@example.com"
                  maxLength={200}
                  className={fieldCls}
                  data-testid="lead-popup-email"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-testid="lead-popup-submit"
                className="w-full gold-gradient text-[#0A0A0A] font-semibold rounded-lg py-2.5 mt-2 disabled:opacity-50 hover:brightness-110 transition-all"
              >
                {loading ? "Sending…" : "Get My Free Quote"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
