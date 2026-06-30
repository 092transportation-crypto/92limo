import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { track } from "@/lib/analytics";
import { SERVICE_TYPES, VEHICLE_TYPES } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// EmailJS config (set these in Vercel env). Booking inquiries are emailed to
// 092transportation@gmail.com, which is configured as the recipient in the
// EmailJS template itself. See EMAILJS_SETUP.md.
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const INQUIRY_EMAIL = "092transportation@gmail.com";

const EMPTY = {
  pickup_location: "",
  dropoff_location: "",
  date: "",
  time: "",
  passengers: "1",
  luggage: "0",
  service_type: "",
  vehicle_type: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

const fieldCls =
  "bg-white border-black/15 text-[#0A0A0A] placeholder:text-neutral-400 focus-visible:ring-[#C9A227] focus-visible:border-[#C9A227]";
const menuCls = "bg-white border-black/10 text-[#0A0A0A]";
const itemCls = "focus:bg-[#C9A227]/15 focus:text-[#0A0A0A]";

export const BookingForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    const required = [
      "pickup_location", "dropoff_location", "date", "time",
      "service_type", "vehicle_type", "name", "phone", "email",
    ];
    for (const k of required) {
      if (!form[k]) {
        toast.error("Please complete all required fields.");
        return;
      }
    }
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("Booking is not configured yet. Please call 877-679-0100.");
      // eslint-disable-next-line no-console
      console.error(
        "EmailJS env vars missing: set REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY."
      );
      return;
    }

    setLoading(true);
    try {
      const passengers = parseInt(form.passengers, 10) || 1;
      const luggage = parseInt(form.luggage, 10) || 0;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: INQUIRY_EMAIL,
          name: form.name,
          phone: form.phone,
          email: form.email,
          service_type: form.service_type,
          vehicle_type: form.vehicle_type,
          pickup_location: form.pickup_location,
          dropoff_location: form.dropoff_location,
          date: form.date,
          time: form.time,
          passengers,
          luggage,
          notes: form.notes || "—",
          subject: `New Booking Inquiry — ${form.name} (${form.service_type})`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Inquiry received! Our team will contact you shortly.");
      track("generate_lead", {
        service_type: form.service_type,
        vehicle_type: form.vehicle_type,
        currency: "USD",
        value: 1,
      });
      setForm(EMPTY);
    } catch (err) {
      toast.error("Something went wrong. Please call 877-679-0100.");
      // eslint-disable-next-line no-console
      console.error("EmailJS send failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="book"
      data-testid="booking-section"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">
            REQUEST A RIDE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">
            Reserve Your Chauffeur
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
            Tell us about your trip and we'll confirm your booking with an
            all-inclusive quote. No payment required to request.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            data-testid="booking-form"
            onSubmit={submit}
            className="bg-[#F6F5F2] border border-black/10 rounded-2xl p-6 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label className="text-neutral-700">Pickup Location *</Label>
                <Input data-testid="input-pickup" className={fieldCls} placeholder="Address, airport, or hotel" value={form.pickup_location} onChange={(e) => set("pickup_location", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Drop-off Location *</Label>
                <Input data-testid="input-dropoff" className={fieldCls} placeholder="Destination address or airport" value={form.dropoff_location} onChange={(e) => set("dropoff_location", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Date *</Label>
                <Input data-testid="input-date" type="date" className={fieldCls} value={form.date} onChange={(e) => set("date", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Time *</Label>
                <Input data-testid="input-time" type="time" className={fieldCls} value={form.time} onChange={(e) => set("time", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Passengers</Label>
                <Input data-testid="input-passengers" type="number" min="1" className={fieldCls} value={form.passengers} onChange={(e) => set("passengers", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Luggage</Label>
                <Input data-testid="input-luggage" type="number" min="0" className={fieldCls} value={form.luggage} onChange={(e) => set("luggage", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Service Type *</Label>
                <Select value={form.service_type} onValueChange={(v) => set("service_type", v)}>
                  <SelectTrigger data-testid="select-service" className={fieldCls}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className={menuCls}>
                    {SERVICE_TYPES.map((s) => (
                      <SelectItem key={s} value={s} className={itemCls}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Vehicle Type *</Label>
                <Select value={form.vehicle_type} onValueChange={(v) => set("vehicle_type", v)}>
                  <SelectTrigger data-testid="select-vehicle" className={fieldCls}>
                    <SelectValue placeholder="Select a vehicle" />
                  </SelectTrigger>
                  <SelectContent className={menuCls}>
                    {VEHICLE_TYPES.map((v) => (
                      <SelectItem key={v} value={v} className={itemCls}>{v}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Full Name *</Label>
                <Input data-testid="input-name" className={fieldCls} placeholder="Your name" value={form.name} onChange={(e) => set("name", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-neutral-700">Phone *</Label>
                <Input data-testid="input-phone" className={fieldCls} placeholder="(000) 000-0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-neutral-700">Email *</Label>
                <Input data-testid="input-email" type="email" className={fieldCls} placeholder="you@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-neutral-700">Notes</Label>
                <Textarea data-testid="input-notes" className={fieldCls} placeholder="Flight number, child seats, special requests…" rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} />
              </div>
            </div>

            <button
              type="submit"
              data-testid="booking-submit"
              disabled={loading}
              className="mt-8 w-full btn-press gold-gradient text-[#0A0A0A] font-bold py-4 rounded-full hover:brightness-105 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (<><Loader2 size={18} className="animate-spin" /> Sending…</>) : (<><Send size={18} /> Request Booking</>)}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
