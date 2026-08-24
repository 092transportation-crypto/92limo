import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { track } from "@/lib/analytics";
import { SERVICE_TYPES, VEHICLE_TYPES } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddressAutocomplete } from "@/components/site/AddressAutocomplete";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Booking inquiries POST to the same-origin Vercel serverless function
// (api/quote-requests), which emails NOTIFICATION_EMAIL via Gmail SMTP.
const API_BASE = process.env.REACT_APP_BACKEND_URL || "";

const EMPTY = {
  pickup_location: "",
  dropoff_location: "",
  date: "",
  time: "",
  passengers: "1",
  luggage: "0",
  service_type: "",
  vehicle_type: "",
  flight_number: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

const fieldCls =
  "bg-white border-black/15 text-[#0A0A0A] placeholder:text-neutral-400 focus-visible:ring-[#C9A227] focus-visible:border-[#C9A227]";
// Plain-input equivalent of the shadcn <Input> base styles, for the
// autocomplete fields which render their own native input.
const autoFieldCls =
  "flex h-10 w-full rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 " +
  fieldCls;
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
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/quote-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          passengers: parseInt(form.passengers, 10) || 1,
          luggage: parseInt(form.luggage, 10) || 0,
          // Flight number only applies to airport transfers.
          flight_number:
            form.service_type === "Airport Transfer"
              ? form.flight_number.trim()
              : "",
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Request failed");
      }
      toast.success("Inquiry received! Our team will contact you shortly.");
      track("generate_lead", {
        service_type: form.service_type,
        vehicle_type: form.vehicle_type,
        currency: "USD",
        value: 1,
      });
      setForm(EMPTY);
    } catch (err) {
      toast.error("Something went wrong. Please call (877) 609-1919.");
      // eslint-disable-next-line no-console
      console.error("Booking submit failed:", err);
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
            Tell us about your trip and we'll confirm your booking with a
            transparent quote. No payment required to request.
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
                <Label htmlFor="bf-pickup" className="text-neutral-700">Pickup Location *</Label>
                <AddressAutocomplete id="bf-pickup" testId="input-pickup" inputClassName={autoFieldCls} placeholder="Address, airport, or hotel" value={form.pickup_location} onChange={(v) => set("pickup_location", v)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bf-dropoff" className="text-neutral-700">Drop-off Location *</Label>
                <AddressAutocomplete id="bf-dropoff" testId="input-dropoff" inputClassName={autoFieldCls} placeholder="Destination address or airport" value={form.dropoff_location} onChange={(v) => set("dropoff_location", v)} />
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
              {form.service_type === "Airport Transfer" && (
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bf-flight" className="text-neutral-700">Flight Number (optional)</Label>
                  <Input id="bf-flight" data-testid="input-flight-number" className={fieldCls} placeholder="e.g. AA1234" value={form.flight_number} onChange={(e) => set("flight_number", e.target.value)} />
                </div>
              )}
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
                <Textarea data-testid="input-notes" className={fieldCls} placeholder="Child seats, extra luggage, special requests…" rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} />
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
