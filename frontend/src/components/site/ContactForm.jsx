import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Send, Loader2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { track } from "@/lib/analytics";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Messages POST to the same-origin Vercel serverless function (api/contact),
// which emails NOTIFICATION_EMAIL via Gmail SMTP.
const API_BASE = process.env.REACT_APP_BACKEND_URL || "";

// Text before the Privacy Policy link (rendered as a link below).
const SMS_CONSENT_TEXT =
  "I consent to receive conversational and informational SMS messages from 92 Limo Service. Reply STOP to opt-out; reply HELP for support; message & data rates may apply; messaging frequency may vary. View our Privacy Policy at ";

const EMPTY = { name: "", email: "", phone: "", preferred_contact: "", message: "", sms_consent: false };

const fieldCls =
  "bg-white border-black/15 text-[#0A0A0A] placeholder:text-neutral-400 focus-visible:ring-[#C9A227] focus-visible:border-[#C9A227]";

export const ContactForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    for (const k of ["name", "email", "phone", "message"]) {
      if (!form[k].trim()) {
        toast.error("Please complete all required fields.");
        return;
      }
    }
    // SMS consent is optional and does not block submission.

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          preferred_contact: form.preferred_contact,
          message: form.message,
          sms_consent: form.sms_consent,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Request failed");
      }
      toast.success("Message sent! Our team will get back to you shortly.");
      track("contact_submit", { currency: "USD", value: 1 });
      setForm(EMPTY);
    } catch (err) {
      toast.error("Something went wrong. Please call 877-679-0100.");
      // eslint-disable-next-line no-console
      console.error("Contact submit failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" data-testid="contact-form-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">SEND US A MESSAGE</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">Get in Touch</h2>
          <p className="mt-3 text-neutral-600">
            Questions, special requests, or anything else — send us a message and we'll respond promptly.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            data-testid="contact-form"
            onSubmit={submit}
            className="bg-[#F6F5F2] border border-black/10 rounded-2xl p-6 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label className="text-neutral-700">Full Name *</Label>
                <Input data-testid="contact-name" className={fieldCls} placeholder="Your name" value={form.name} onChange={(e) => set("name", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Phone *</Label>
                <Input data-testid="contact-phone" className={fieldCls} placeholder="(000) 000-0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Email *</Label>
                <Input data-testid="contact-email" type="email" className={fieldCls} placeholder="you@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Preferred Contact Method</Label>
                <select
                  data-testid="contact-preferred"
                  value={form.preferred_contact}
                  onChange={(e) => set("preferred_contact", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:border-[#C9A227]"
                >
                  <option value="">No preference</option>
                  <option value="Email">Email</option>
                  <option value="Phone / Text">Phone / Text</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-neutral-700">Message *</Label>
                <Textarea data-testid="contact-message" className={fieldCls} placeholder="How can we help?" rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} />
              </div>
            </div>

            <label className="mt-6 flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                data-testid="contact-sms-consent"
                checked={form.sms_consent}
                onChange={(e) => set("sms_consent", e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-[#C9A227]"
              />
              <span className="text-xs text-neutral-600 leading-relaxed">
                {SMS_CONSENT_TEXT}
                <Link to="/privacy-policy" className="text-[#B8860B] font-medium underline hover:text-[#8A6508]">
                  92limo.com/privacy-policy
                </Link>
                . <span className="text-neutral-400">(Optional)</span>
              </span>
            </label>

            <button
              type="submit"
              data-testid="contact-submit"
              disabled={loading}
              className="mt-8 w-full btn-press gold-gradient text-[#0A0A0A] font-bold py-4 rounded-full hover:brightness-105 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (<><Loader2 size={18} className="animate-spin" /> Sending…</>) : (<><Send size={18} /> Send Message</>)}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
