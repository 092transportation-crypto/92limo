import { useEffect, useState } from "react";
import { toast } from "sonner";
import { sanitizePhone, isValidPhone } from "@/lib/phone";
import { track } from "@/lib/analytics";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const API_BASE = process.env.REACT_APP_BACKEND_URL || "";
// Below this width we treat the visitor as mobile/touch — there's no mouse
// leaving the viewport, so exit-intent detection doesn't apply there.
const DESKTOP_MIN_WIDTH = 1024;

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
      /* ignore */
    }
  },
};

const EMPTY = { name: "", phone: "" };

/**
 * Desktop-only exit-intent popup: fires once per session when the mouse
 * leaves the top of the viewport (the classic "about to close the tab"
 * signal). Skipped entirely once a lead has already been captured this
 * session. Collects name + phone only, posts to /api/lead-capture with
 * source "exit_intent".
 */
export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < DESKTOP_MIN_WIDTH) return;
    if (storage.get("exitIntentShown") || storage.get("leadSubmitted")) return;

    const onMouseOut = (e) => {
      if (e.clientY > 0 || e.relatedTarget) return;
      if (storage.get("exitIntentShown") || storage.get("leadSubmitted")) return;
      storage.set("exitIntentShown", "1");
      setOpen(true);
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
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
          source: "exit_intent",
          name: form.name.trim(),
          phone: form.phone.trim(),
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Request failed");
      }
      storage.set("leadSubmitted", "1");
      track("exit_intent_submit", { currency: "USD", value: 1 });
      setSubmitted(true);
      setTimeout(() => setOpen(false), 1800);
    } catch (err) {
      toast.error("Something went wrong. Please call (877) 609-1919.");
      // eslint-disable-next-line no-console
      console.error("Exit-intent submit failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const fieldCls =
    "bg-white/5 border-white/15 text-white placeholder:text-neutral-500 focus-visible:ring-[#C9A227] focus-visible:border-[#C9A227]";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-testid="exit-intent-popup"
        className="bg-[#0A0A0A] border border-[#C9A227]/40 text-white sm:max-w-md [&>button]:text-neutral-400 [&>button]:hover:text-white"
      >
        {submitted ? (
          <div className="py-6 text-center">
            <p className="text-lg font-display font-semibold text-[#C9A227]">Got it!</p>
            <p className="mt-2 text-sm text-neutral-300">
              A dispatcher will call or text you shortly with your quote.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-display text-white">
                Before you go — get an instant quote
              </DialogTitle>
              <p className="text-sm text-neutral-400">
                Leave your name and number — we'll text you a quote in minutes.
              </p>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-3 mt-1" data-testid="exit-intent-form">
              <div className="space-y-1.5">
                <Label htmlFor="exit-intent-name" className="text-neutral-300">
                  Name
                </Label>
                <Input
                  id="exit-intent-name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Jane Traveler"
                  maxLength={120}
                  className={fieldCls}
                  data-testid="exit-intent-name"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="exit-intent-phone" className="text-neutral-300">
                  Phone
                </Label>
                <Input
                  id="exit-intent-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", sanitizePhone(e.target.value))}
                  placeholder="(443) 555-0100"
                  maxLength={20}
                  className={fieldCls}
                  data-testid="exit-intent-phone"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-testid="exit-intent-submit"
                className="w-full gold-gradient text-[#0A0A0A] font-semibold rounded-lg py-2.5 mt-2 disabled:opacity-50 hover:brightness-110 transition-all"
              >
                {loading ? "Sending…" : "Get My Instant Quote"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
