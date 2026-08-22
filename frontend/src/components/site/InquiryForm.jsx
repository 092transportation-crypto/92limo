import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  computeQuote,
  isShortNotice,
  money,
  MAX_MILES,
  SHORT_NOTICE_HOURS,
} from "@/lib/pricing";
import {
  Send,
  Loader2,
  Phone,
  MessageSquare,
  Mail,
  Plane,
  Briefcase,
  Heart,
  PartyPopper,
  Clock,
  Minus,
  Plus,
  Baby,
  BadgeCheck,
  ShieldCheck,
  BadgeDollarSign,
  UserCheck,
  Calculator,
  Lock,
} from "lucide-react";
import { track } from "@/lib/analytics";
import { FLEET, vehicleLabel } from "@/lib/data";
import { AddressAutocomplete } from "@/components/site/AddressAutocomplete";

// Inquiries POST to the same-origin Vercel serverless function
// (api/quote-requests), which emails NOTIFICATION_EMAIL via Gmail SMTP.
const API_BASE = process.env.REACT_APP_BACKEND_URL || "";

const CONTACT_METHODS = [
  { value: "Phone", icon: Phone },
  { value: "Text", icon: MessageSquare },
  { value: "Email", icon: Mail },
];

const SERVICE_OPTIONS = [
  { value: "Airport Transfer", icon: Plane },
  { value: "Corporate", icon: Briefcase },
  { value: "Wedding", icon: Heart },
  { value: "Special Event", icon: PartyPopper },
  { value: "Hourly", icon: Clock },
];

const CHILD_SEAT_OPTIONS = ["Rear-Facing", "Front-Facing", "Booster"];

// Services that always get a custom quote instead of instant pricing.
const CUSTOM_QUOTE_SERVICES = ["Hourly", "Wedding", "Special Event"];

// FLEET categories -> keys in the mileage-bracket rate table. Categories
// without a mapping (Sprinter Limo, Mini Coach, Party Bus) always get the
// custom-quote flow.
const PRICE_KEY = {
  "Business Sedan": "Business Sedan",
  "First Class Sedan": "First Class",
  "Midsize SUV": "Mid-Size SUV",
  "Luxury SUV": "Luxury SUV",
  "Premium SUV": "Premium SUV",
  "Sprinter Shuttle": "Sprinter Van",
  "Sprinter Executive": "Sprinter Executive",
};

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "Referral / Word of Mouth",
  "Social Media",
  "Repeat Customer",
  "Other",
];

const CARD_STYLE = {
  style: {
    base: {
      color: "#ffffff",
      fontSize: "15px",
      fontFamily: "inherit",
      "::placeholder": { color: "rgba(255,255,255,0.4)" },
    },
    invalid: { color: "#f87171" },
  },
};

const TRUST_BADGES = [
  { icon: BadgeCheck, label: "MD PSC Carrier No. 6325", sub: "Official Carrier License" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "Fully Certified Fleet" },
  { icon: Clock, label: "24/7 Available", sub: "Day or Night" },
  { icon: Plane, label: "Flight Tracking Included", sub: "We Watch Your Arrival" },
  { icon: BadgeDollarSign, label: "Flat Rates", sub: "No Surge Pricing" },
  { icon: UserCheck, label: "Professional Chauffeurs", sub: "Vetted & Uniformed" },
];

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  contact_method: "",
  service_type: "",
  vehicle_type: "",
  flight_number: "",
  pickup_location: "",
  dropoff_location: "",
  date: "",
  time: "",
  passengers: 1,
  child_seats: [],
  hear_about: "",
  notes: "",
  sms_consent: false,
};

// Fields that count toward the completion meter (notes/seats are optional).
const PROGRESS_FIELDS = [
  "name", "phone", "email", "contact_method",
  "service_type", "pickup_location", "dropoff_location", "date", "time",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Staggered entrance for the form fields.
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/*
 * Floating-label geometry: inputs reserve 28px of top padding (pt-7); the
 * floated label lives at top-2.5 (10px) in 10px type, so label and value
 * never overlap — including native date/time inputs whose value is always
 * rendered by the browser.
 */
const inputBase =
  "peer block w-full min-h-[58px] rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-white placeholder-transparent transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/60 focus:border-[#C9A227]";
const floatedLabel =
  "top-2.5 translate-y-0 text-[10px] font-bold uppercase tracking-[0.14em]";
const labelBase =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400 transition-all duration-200 " +
  "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[#C9A227] " +
  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-neutral-500";
// Native date/time inputs always render a value, so their label is permanently floated.
const staticLabel =
  "pointer-events-none absolute left-4 " + floatedLabel + " text-neutral-500";
const groupLabel =
  "mb-3 block text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400";

const borderCls = (invalid) => (invalid ? "border-red-400/70" : "border-white/15");

// Selected state for pill buttons — its own background per button (no shared
// layout animation, which visually collides while flying between pills).
function PillFill({ active, rounded = "rounded-full" }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.span
          className={`absolute inset-0 ${rounded} gold-gradient`}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
}

// One gold particle of the success burst.
function Particle({ index }) {
  const angle = (index / 22) * Math.PI * 2 + Math.random() * 0.4;
  const dist = 50 + Math.random() * 80;
  const size = 4 + Math.random() * 6;
  const colors = ["#E3C04A", "#C9A227", "#F5DD8A", "#A9810F", "#FFFFFF"];
  return (
    <motion.span
      className="absolute left-1/2 top-1/2 rounded-full"
      style={{ width: size, height: size, background: colors[index % colors.length] }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
      animate={{
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        scale: [0, 1.2, 0.9],
        opacity: [1, 1, 0],
      }}
      transition={{ duration: 1 + Math.random() * 0.4, delay: 0.2, ease: "easeOut" }}
    />
  );
}

// Thank-you banner shown above the form after a successful submit.
// The form itself stays mounted (cleared) so the page never looks empty.
function SuccessBanner({ paid, onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
      data-testid="inquiry-success"
    >
      <div className="relative mx-6 mt-6 rounded-2xl border border-[#C9A227]/50 bg-[#C9A227]/[0.08] px-6 py-8 text-center sm:mx-10 sm:mt-8">
        <div className="relative mx-auto mb-4 h-16 w-16">
          {[...Array(22)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
          <motion.div
            className="relative flex h-16 w-16 items-center justify-center rounded-full gold-gradient shadow-[0_0_40px_-8px_rgba(201,162,39,0.8)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
          >
            <svg viewBox="0 0 52 52" className="h-8 w-8">
              <motion.path
                d="M14 27 L23 36 L38 18"
                fill="none"
                stroke="#0A0A0A"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              />
            </svg>
          </motion.div>
        </div>
        <h3 className="font-display text-2xl font-bold text-white">
          {paid ? "Payment Received — You're Booked!" : "Request Received!"}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-neutral-300">
          Our team will confirm your reservation with an all-inclusive quote shortly.
          Need us sooner? Call{" "}
          <a href="tel:+18776091919" className="font-semibold text-[#C9A227] hover:underline">
            (877) 609-1919
          </a>
          .
        </p>
        <button
          type="button"
          onClick={onDismiss}
          data-testid="inquiry-success-dismiss"
          className="mt-4 rounded-full border border-[#C9A227]/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#C9A227] transition-colors hover:bg-[#C9A227]/10"
        >
          Dismiss
        </button>
      </div>
    </motion.div>
  );
}

const InnerForm = ({ stripe, elements, stripeReady }) => {
  const [form, setForm] = useState(EMPTY);
  const [invalid, setInvalid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [shaking, setShaking] = useState(false);
  const cardRef = useRef(null);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setInvalid((keys) => keys.filter((key) => key !== k));
  };

  const toggleChildSeat = (seat) =>
    setForm((f) => ({
      ...f,
      child_seats: f.child_seats.includes(seat)
        ? f.child_seats.filter((s) => s !== seat)
        : [...f.child_seats, seat],
    }));

  const progress = useMemo(() => {
    const filled = PROGRESS_FIELDS.filter((k) => String(form[k]).trim()).length;
    return Math.round((filled / PROGRESS_FIELDS.length) * 100);
  }, [form]);

  // ---- Instant quote: driving distance once pickup + drop-off are in ----
  const [distance, setDistance] = useState({ status: "idle", miles: null });
  const [payError, setPayError] = useState("");
  const [paidDone, setPaidDone] = useState(false);
  const distTimerRef = useRef(null);
  const lastPairRef = useRef("");
  const pickupTrimmed = form.pickup_location.trim();
  const dropoffTrimmed = form.dropoff_location.trim();
  useEffect(() => {
    if (pickupTrimmed.length < 4 || dropoffTrimmed.length < 4) {
      lastPairRef.current = "";
      setDistance({ status: "idle", miles: null });
      return undefined;
    }
    const pair = `${pickupTrimmed}|${dropoffTrimmed}`;
    if (pair === lastPairRef.current) return undefined;
    if (distTimerRef.current) clearTimeout(distTimerRef.current);
    distTimerRef.current = setTimeout(async () => {
      setDistance({ status: "loading", miles: null });
      try {
        const res = await fetch("/api/distance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ origin: pickupTrimmed, destination: dropoffTrimmed }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.success) throw new Error(data.message || "failed");
        lastPairRef.current = pair;
        setDistance({ status: "ready", miles: data.miles });
      } catch {
        lastPairRef.current = "";
        setDistance({ status: "error", miles: null });
      }
    }, 800);
    return () => clearTimeout(distTimerRef.current);
  }, [pickupTrimmed, dropoffTrimmed]);

  const customService = CUSTOM_QUOTE_SERVICES.includes(form.service_type);
  const fleetEntry = FLEET.find((v) => vehicleLabel(v) === form.vehicle_type);
  const priceKey = fleetEntry ? PRICE_KEY[fleetEntry.category] : undefined;
  const shortNotice = useMemo(
    () => isShortNotice(form.date, form.time),
    [form.date, form.time]
  );
  const quote = useMemo(
    () =>
      !customService && priceKey && distance.status === "ready"
        ? computeQuote(distance.miles, priceKey, shortNotice)
        : null,
    [customService, priceKey, distance, shortNotice]
  );
  const payable = Boolean(quote && !quote.overLimit && stripeReady);

  // Bring the thank-you banner into view when it appears.
  useEffect(() => {
    if (done && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [done]);

  const buildNotes = (paidNote) =>
    [
      paidNote,
      `Preferred contact: ${form.contact_method}`,
      form.child_seats.length
        ? `Child seats: ${form.child_seats.join(", ")}`
        : "",
      form.hear_about ? `Heard about us: ${form.hear_about}` : "",
      form.sms_consent ? "SMS consent: yes" : "",
      form.notes.trim(),
    ]
      .filter(Boolean)
      .join("\n");

  // Pricing payload for the admin notification email. Mirrors exactly what
  // the quote panel shows: a full breakdown when an instant price was
  // calculated, otherwise the reason no price was generated.
  const buildPricing = (serverQuote, paymentIntentId) => {
    if (customService) {
      return { mode: "custom", reason: "Hourly / Wedding / Special Event" };
    }
    if (!form.vehicle_type) return { mode: "custom", reason: "No vehicle selected" };
    if (!priceKey) {
      return { mode: "custom", reason: `${form.vehicle_type} has no instant pricing` };
    }
    if (distance.status !== "ready") {
      return { mode: "custom", reason: "Driving distance could not be calculated" };
    }
    const q = serverQuote || quote;
    if (!q) return { mode: "custom", reason: "No instant price calculated" };
    if (q.overLimit) {
      return {
        mode: "custom",
        reason: `Trip is ${q.miles} miles (over the ${MAX_MILES}-mile instant-quote limit)`,
      };
    }
    return {
      mode: "instant",
      vehicle: priceKey,
      vehicle_label: form.vehicle_type,
      miles: q.miles,
      base_fare: q.baseFare,
      discount: q.discount,
      surcharge: q.surcharge,
      short_notice: q.surcharge > 0,
      card_fee: q.cardFee,
      total: q.total,
      paid: Boolean(paymentIntentId),
      payment_intent: paymentIntentId || "",
    };
  };

  const fileBooking = async (paidNote, pricing) => {
    const res = await fetch(`${API_BASE}/api/quote-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
        pickup_location: form.pickup_location,
        dropoff_location: form.dropoff_location,
        date: form.date,
        time: form.time,
        passengers: form.passengers,
        luggage: 0,
        service_type: form.service_type,
        vehicle_type: form.vehicle_type || "No preference",
        // Flight number only applies to airport transfers.
        flight_number:
          form.service_type === "Airport Transfer"
            ? form.flight_number.trim()
            : "",
        notes: buildNotes(paidNote),
        pricing,
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || "Request failed");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const missing = PROGRESS_FIELDS.filter((k) => !String(form[k]).trim());
    if (form.email && !EMAIL_RE.test(form.email) && !missing.includes("email")) {
      missing.push("email");
    }
    if (missing.length) {
      setInvalid(missing);
      setShaking(true);
      toast.error("Please complete the highlighted fields.");
      return;
    }

    setPayError("");
    setLoading(true);
    try {
      if (payable && stripe && elements) {
        // ---- Pay & Book Now: charge the exact server-verified total ----
        const intentRes = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            miles: quote.miles,
            vehicle: priceKey,
            pickup: form.pickup_location,
            dropoff: form.dropoff_location,
            pickupDate: form.date,
            pickupTime: form.time,
          }),
        });
        const intent = await intentRes.json().catch(() => ({}));
        if (!intentRes.ok || !intent.success) {
          throw new Error(intent.message || "Could not start the payment.");
        }
        const result = await stripe.confirmCardPayment(intent.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: form.name,
              email: form.email,
              phone: form.phone,
            },
          },
        });
        if (result.error) {
          setPayError(result.error.message || "Payment failed. Try another card.");
          setLoading(false);
          return;
        }
        const sq = intent.quote;
        // The fare breakdown travels in the `pricing` payload (rendered as
        // its own section in the admin email); notes only carry the receipt.
        const paidNote = [
          "✅ PAID ONLINE via Stripe",
          `Amount charged: $${sq.total.toFixed(2)}`,
          "Site: 92limo.com",
          `PaymentIntent: ${result.paymentIntent.id}`,
        ].join("\n");
        try {
          await fileBooking(paidNote, buildPricing(sq, result.paymentIntent.id));
        } catch {
          // Payment already captured — dispatch still sees it in Stripe.
        }
        track("purchase", {
          service_type: form.service_type,
          vehicle_type: form.vehicle_type || "No preference",
          currency: "USD",
          value: sq.total,
        });
        setPaidDone(true);
      } else {
        await fileBooking("", buildPricing());
        track("generate_lead", {
          service_type: form.service_type,
          vehicle_type: form.vehicle_type || "No preference",
          currency: "USD",
          value: 1,
        });
        setPaidDone(false);
      }
      setForm(EMPTY);
      setInvalid([]);
      setDone(true);
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please call (877) 609-1919.");
      // eslint-disable-next-line no-console
      console.error("Inquiry submit failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="book"
      data-testid="inquiry-section"
      className="relative overflow-hidden bg-[#0A0A0A] py-20 lg:py-28"
    >
      {/* Ambient gold glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #C9A227, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            Online Reservations
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Reserve Your Ride
          </h2>
          <p className="mt-3 text-neutral-400">
            Pick your vehicle and route for an instant all-inclusive quote —
            pay online or request a booking. Or call{" "}
            <a href="tel:+18776091919" className="font-semibold text-[#C9A227] hover:underline">
              (877) 609-1919
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          ref={cardRef}
          className="relative scroll-mt-28 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_30px_80px_-30px_rgba(201,162,39,0.35)] backdrop-blur-sm"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-1 w-full rounded-t-3xl gold-gradient" aria-hidden="true" />

          <AnimatePresence>
            {done && <SuccessBanner key="success" paid={paidDone} onDismiss={() => setDone(false)} />}
          </AnimatePresence>

          {/* Progress indicator */}
          <div className="px-6 pt-6 sm:px-10 sm:pt-8">
            <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em]">
              <span className="text-neutral-400">Trip Details</span>
              <span className="tabnums text-[#C9A227]" data-testid="inquiry-progress">
                {progress}% complete
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full gold-gradient"
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </div>
          </div>

          <motion.form
            data-testid="inquiry-form"
            onSubmit={submit}
            noValidate
            className="p-6 sm:p-10"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            animate={shaking ? { x: [0, -12, 12, -9, 9, -5, 5, 0] } : {}}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setShaking(false)}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Vehicle Type */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <span className={groupLabel}>
                  Vehicle Type
                  <span className="ml-2 normal-case tracking-normal text-neutral-500">— pick one for an instant price</span>
                </span>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {FLEET.map((v) => {
                    const value = vehicleLabel(v);
                    const active = form.vehicle_type === value;
                    return (
                      <motion.button
                        key={value}
                        type="button"
                        data-testid={`inquiry-vehicle-${v.category.toLowerCase().replace(/\s+/g, "-")}`}
                        aria-pressed={active}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => set("vehicle_type", active ? "" : value)}
                        className={`relative min-h-[58px] rounded-xl border px-3 py-2.5 text-center transition-colors duration-300 ${
                          active
                            ? "border-transparent"
                            : "border-white/15 hover:border-[#C9A227]/60"
                        }`}
                      >
                        <PillFill active={active} rounded="rounded-xl" />
                        <span className="relative block">
                          <span
                            className={`block text-[13px] font-bold leading-tight ${
                              active ? "text-[#0A0A0A]" : "text-white"
                            }`}
                          >
                            {v.category}
                          </span>
                          <span
                            className={`mt-0.5 block truncate text-[10px] uppercase tracking-[0.08em] ${
                              active ? "text-[#0A0A0A]/70" : "text-neutral-500"
                            }`}
                          >
                            {v.name} · {v.pax} pax
                          </span>
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Pickup */}
              <motion.div variants={itemVariants}>
                <AddressAutocomplete
                  id="inq-pickup"
                  testId="inquiry-pickup"
                  inputClassName={`${inputBase} ${borderCls(invalid.includes("pickup_location"))}`}
                  placeholder="Pickup Location"
                  value={form.pickup_location}
                  onChange={(v) => set("pickup_location", v)}
                  label={<label htmlFor="inq-pickup" className={labelBase}>Pickup Location *</label>}
                />
              </motion.div>

              {/* Drop-off */}
              <motion.div variants={itemVariants}>
                <AddressAutocomplete
                  id="inq-dropoff"
                  testId="inquiry-dropoff"
                  inputClassName={`${inputBase} ${borderCls(invalid.includes("dropoff_location"))}`}
                  placeholder="Drop-off Location"
                  value={form.dropoff_location}
                  onChange={(v) => set("dropoff_location", v)}
                  label={<label htmlFor="inq-dropoff" className={labelBase}>Drop-off Location *</label>}
                />
              </motion.div>

              {/* Instant quote */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <div
                  className="rounded-2xl border border-[#C9A227]/25 bg-black/40 p-5"
                  data-testid="inquiry-quote-panel"
                >
                  <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#C9A227]">
                    <Calculator size={14} /> Instant Quote
                  </p>
                  {customService ? (
                    <p className="text-sm text-neutral-300" data-testid="inquiry-quote-custom">
                      Custom pricing — we&apos;ll follow up with a quote.
                    </p>
                  ) : !form.vehicle_type ? (
                    <p className="text-sm text-neutral-400">
                      Select a vehicle above to see your instant price.
                    </p>
                  ) : !priceKey ? (
                    <p className="text-sm text-neutral-300" data-testid="inquiry-quote-custom">
                      Custom pricing for {fleetEntry ? fleetEntry.category : "this vehicle"} —
                      we&apos;ll follow up with a quote.
                    </p>
                  ) : distance.status === "idle" ? (
                    <p className="text-sm text-neutral-400">
                      Enter your pickup and drop-off locations to see your instant price.
                    </p>
                  ) : distance.status === "loading" ? (
                    <p className="flex items-center gap-2 text-sm text-neutral-300">
                      <Loader2 size={15} className="animate-spin text-[#C9A227]" />
                      Calculating your route…
                    </p>
                  ) : distance.status === "error" ? (
                    <p className="text-sm text-neutral-300">
                      We couldn&apos;t calculate that route — submit your request and
                      we&apos;ll follow up with an exact quote.
                    </p>
                  ) : quote?.overLimit ? (
                    <p className="text-sm text-neutral-300" data-testid="inquiry-quote-over-limit">
                      For trips over {MAX_MILES} miles, please submit your request and
                      we&apos;ll send a custom quote.
                    </p>
                  ) : quote ? (
                    <dl className="space-y-2 text-sm" data-testid="inquiry-quote-breakdown">
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-neutral-400">Estimated distance</dt>
                        <dd className="tabnums text-white">{quote.miles} miles</dd>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-neutral-400">
                          Flat rate — {fleetEntry ? fleetEntry.category : ""}
                        </dt>
                        <dd className="tabnums text-white">{money(quote.baseFare)}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-[#7FB58A]">Instant booking discount (10%)</dt>
                        <dd className="tabnums text-[#7FB58A]" data-testid="inquiry-quote-discount">
                          -{money(quote.discount)}
                        </dd>
                      </div>
                      {quote.surcharge > 0 && (
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-[#C9A227]">Short-notice surcharge (20%)</dt>
                          <dd className="tabnums text-[#C9A227]" data-testid="inquiry-quote-surcharge">
                            +{money(quote.surcharge)}
                          </dd>
                        </div>
                      )}
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-neutral-400">Card processing fee (3%)</dt>
                        <dd className="tabnums text-white">{money(quote.cardFee)}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-3 border-t border-[#C9A227]/25 pt-2.5">
                        <dt className="font-bold text-white">Total</dt>
                        <dd className="tabnums text-xl font-bold text-[#C9A227]" data-testid="inquiry-quote-total">
                          {money(quote.total)}
                        </dd>
                      </div>
                    </dl>
                  ) : null}
                  {quote && !quote.overLimit && !form.date && (
                    <p className="mt-3 text-[11px] text-neutral-500">
                      Pickups within {SHORT_NOTICE_HOURS} hours include a 20%
                      short-notice surcharge — set your date &amp; time below.
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Service Type */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <span className={groupLabel}>
                  Service Type *
                  {invalid.includes("service_type") && (
                    <span className="ml-2 normal-case tracking-normal text-red-400">— pick one</span>
                  )}
                </span>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map(({ value, icon: Icon }) => {
                    const active = form.service_type === value;
                    return (
                      <motion.button
                        key={value}
                        type="button"
                        data-testid={`inquiry-service-${value.toLowerCase().replace(/\s+/g, "-")}`}
                        aria-pressed={active}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => set("service_type", value)}
                        className={`relative flex min-h-[44px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300 ${
                          active
                            ? "border-transparent text-[#0A0A0A]"
                            : "border-white/15 text-neutral-300 hover:border-[#C9A227]/60 hover:text-white"
                        }`}
                      >
                        <PillFill active={active} />
                        <span className="relative flex items-center gap-2">
                          <Icon size={15} /> {value}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Flight number — airport transfers only */}
              {form.service_type === "Airport Transfer" && (
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative md:col-span-2"
                >
                  <label htmlFor="inq-flight" className={staticLabel}>Flight Number (optional)</label>
                  <input
                    id="inq-flight"
                    data-testid="inquiry-flight-number"
                    type="text"
                    placeholder="e.g. AA1234"
                    className="block w-full min-h-[58px] rounded-xl border border-white/15 bg-white/[0.04] px-4 pt-7 pb-2.5 text-white placeholder:text-neutral-500 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/60 focus:border-[#C9A227]"
                    value={form.flight_number}
                    onChange={(e) => set("flight_number", e.target.value)}
                  />
                </motion.div>
              )}

              {/* Full Name */}
              <motion.div variants={itemVariants} className="relative">
                <input
                  id="inq-name"
                  data-testid="inquiry-name"
                  className={`${inputBase} ${borderCls(invalid.includes("name"))}`}
                  placeholder="Full Name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
                <label htmlFor="inq-name" className={labelBase}>Full Name *</label>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="relative">
                <input
                  id="inq-phone"
                  data-testid="inquiry-phone"
                  type="tel"
                  className={`${inputBase} ${borderCls(invalid.includes("phone"))}`}
                  placeholder="Phone Number"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
                <label htmlFor="inq-phone" className={labelBase}>Phone Number *</label>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="relative md:col-span-2">
                <input
                  id="inq-email"
                  data-testid="inquiry-email"
                  type="email"
                  className={`${inputBase} ${borderCls(invalid.includes("email"))}`}
                  placeholder="Email Address"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
                <label htmlFor="inq-email" className={labelBase}>Email Address *</label>
              </motion.div>

              {/* Preferred Contact */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <span className={groupLabel}>
                  Preferred Contact *
                  {invalid.includes("contact_method") && (
                    <span className="ml-2 normal-case tracking-normal text-red-400">— pick one</span>
                  )}
                </span>
                <div className="grid grid-cols-3 gap-2 sm:max-w-md">
                  {CONTACT_METHODS.map(({ value, icon: Icon }) => {
                    const active = form.contact_method === value;
                    return (
                      <motion.button
                        key={value}
                        type="button"
                        data-testid={`inquiry-contact-${value.toLowerCase()}`}
                        aria-pressed={active}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => set("contact_method", value)}
                        className={`relative flex min-h-[48px] items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition-colors duration-300 ${
                          active
                            ? "border-transparent text-[#0A0A0A]"
                            : "border-white/15 text-neutral-300 hover:border-[#C9A227]/60 hover:text-white"
                        }`}
                      >
                        <PillFill active={active} rounded="rounded-xl" />
                        <span className="relative flex items-center gap-2">
                          <Icon size={15} /> {value}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Date */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="inq-date" className={staticLabel}>Date *</label>
                <input
                  id="inq-date"
                  data-testid="inquiry-date"
                  type="date"
                  style={{ colorScheme: "dark" }}
                  className={`block w-full min-h-[58px] appearance-none rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-left text-white transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/60 focus:border-[#C9A227] ${borderCls(invalid.includes("date"))}`}
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                />
              </motion.div>

              {/* Time */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="inq-time" className={staticLabel}>Time *</label>
                <input
                  id="inq-time"
                  data-testid="inquiry-time"
                  type="time"
                  style={{ colorScheme: "dark" }}
                  className={`block w-full min-h-[58px] appearance-none rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-left text-white transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/60 focus:border-[#C9A227] ${borderCls(invalid.includes("time"))}`}
                  value={form.time}
                  onChange={(e) => set("time", e.target.value)}
                />
              </motion.div>

              {/* Passengers stepper — full row so it never crowds neighbors */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <div className="flex min-h-[58px] flex-wrap items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500">
                    Passengers <span className="text-neutral-600">(1–14)</span>
                  </span>
                  <div className="flex shrink-0 items-center gap-2">
                    <motion.button
                      type="button"
                      aria-label="Fewer passengers"
                      data-testid="inquiry-passengers-minus"
                      whileTap={{ scale: 0.85 }}
                      onClick={() => set("passengers", Math.max(1, form.passengers - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
                    >
                      <Minus size={16} />
                    </motion.button>
                    <div className="relative h-10 w-12 overflow-hidden text-center">
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          key={form.passengers}
                          data-testid="inquiry-passengers-value"
                          className="tabnums absolute inset-0 flex items-center justify-center text-lg font-bold text-white"
                          initial={{ y: 16, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -16, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                        >
                          {form.passengers}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <motion.button
                      type="button"
                      aria-label="More passengers"
                      data-testid="inquiry-passengers-plus"
                      whileTap={{ scale: 0.85 }}
                      onClick={() => set("passengers", Math.min(14, form.passengers + 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
                    >
                      <Plus size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Child seats */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <span className={groupLabel}>
                  Child Seats
                  <span className="ml-2 normal-case tracking-normal text-neutral-500">— optional, tap all you need</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {CHILD_SEAT_OPTIONS.map((seat) => {
                    const active = form.child_seats.includes(seat);
                    return (
                      <motion.button
                        key={seat}
                        type="button"
                        data-testid={`inquiry-childseat-${seat.toLowerCase()}`}
                        aria-pressed={active}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => toggleChildSeat(seat)}
                        className={`relative flex min-h-[44px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300 ${
                          active
                            ? "border-transparent text-[#0A0A0A]"
                            : "border-white/15 text-neutral-300 hover:border-[#C9A227]/60 hover:text-white"
                        }`}
                      >
                        <PillFill active={active} />
                        <span className="relative flex items-center gap-2">
                          <Baby size={15} /> {seat}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* How did you hear about us */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <span className={groupLabel}>
                  How did you hear about us?
                  <span className="ml-2 normal-case tracking-normal text-neutral-500">— optional</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {HEAR_ABOUT_OPTIONS.map((value) => {
                    const active = form.hear_about === value;
                    return (
                      <motion.button
                        key={value}
                        type="button"
                        aria-pressed={active}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => set("hear_about", active ? "" : value)}
                        className={`relative flex min-h-[40px] items-center rounded-full border px-4 text-xs font-semibold transition-colors duration-300 sm:text-sm ${
                          active
                            ? "border-transparent text-[#0A0A0A]"
                            : "border-white/15 text-neutral-300 hover:border-[#C9A227]/60 hover:text-white"
                        }`}
                      >
                        <PillFill active={active} />
                        <span className="relative">{value}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Notes */}
              <motion.div variants={itemVariants} className="relative md:col-span-2">
                <textarea
                  id="inq-notes"
                  data-testid="inquiry-notes"
                  rows={3}
                  className={`${inputBase} resize-none border-white/15`}
                  placeholder="Notes / Special Requests"
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
                <label
                  htmlFor="inq-notes"
                  className={
                    "pointer-events-none absolute left-4 top-7 text-sm text-neutral-400 transition-all duration-200 " +
                    "peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[#C9A227] " +
                    "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-neutral-500"
                  }
                >
                  Notes / Special Requests
                </label>
              </motion.div>
            
              {/* SMS Consent */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    data-testid="inquiry-sms-consent"
                    checked={form.sms_consent}
                    onChange={(e) => set("sms_consent", e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#C9A227]"
                  />
                  <span className="text-sm leading-relaxed text-neutral-400">
                    By checking this box, you agree to receive SMS messages from 92 Limo Service
                    related to Customer Care. Reply STOP to opt out. Message &amp; data rates may apply.
                  </span>
                </label>
              </motion.div>

              {/* Card details — only when paying an instant quote */}
              {payable && (
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:col-span-2"
                >
                  <span className={groupLabel}>Card Details</span>
                  <div className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3.5">
                    <CardElement options={CARD_STYLE} />
                  </div>
                  {payError && (
                    <p className="mt-2 text-sm text-red-400" data-testid="inquiry-pay-error">
                      {payError}
                    </p>
                  )}
                  <p className="mt-2 flex items-center gap-1.5 text-[11px] text-neutral-500">
                    <Lock size={12} /> Secure payment by Stripe — you&apos;ll be
                    charged exactly {money(quote.total)}.
                  </p>
                </motion.div>
              )}
</div>

            {/* Submit */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                data-testid="inquiry-submit"
                disabled={loading}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shimmer relative mt-8 flex min-h-[56px] w-full items-center justify-center gap-2 overflow-hidden rounded-full gold-gradient font-bold text-[#0A0A0A] shadow-[0_12px_40px_-10px_rgba(201,162,39,0.7)] transition-[filter] hover:brightness-105 disabled:opacity-70"
              >
                {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />{" "}
                  {payable ? "Processing payment…" : "Sending…"}
                </>
              ) : payable ? (
                <>
                  <Lock size={18} /> Pay &amp; Book Now — {money(quote.total)}
                </>
              ) : (
                <>
                  <Send size={18} /> Request Booking
                </>
              )}
              </motion.button>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-4 text-center text-xs text-neutral-500">
              We respond within 15 minutes. We never share your info.
            </motion.p>
          </motion.form>
        </motion.div>

        {/* Trust badges */}
        <motion.ul
          data-testid="inquiry-trust-badges"
          className="mt-10 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
            <motion.li
              key={label}
              variants={itemVariants}
              className="flex items-center gap-3 rounded-xl border border-[#C9A227]/25 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-[#C9A227]/60"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10">
                <Icon size={17} className="text-[#C9A227]" />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-bold leading-tight text-white">{label}</span>
                <span className="block text-[11px] uppercase tracking-[0.08em] text-neutral-500">{sub}</span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

// Bridges the Stripe hooks to the form. MUST be rendered inside <Elements> —
// calling useStripe/useElements without that context throws and blanks the
// whole route, which is exactly why InnerForm takes them as props instead.
const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  return <InnerForm stripe={stripe} elements={elements} stripeReady />;
};

// Loads the shared Stripe publishable key so the card field can mount inside
// the form. If payments aren't configured yet, the form quietly falls back
// to the request-booking flow.
export function InquiryForm() {
  const [stripePromise, setStripePromise] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/create-payment-intent")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("unavailable"))))
      .then((data) => {
        if (!cancelled && data.success && data.publishableKey) {
          setStripePromise(loadStripe(data.publishableKey));
        }
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setChecked(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!checked) return null;
  if (!stripePromise) {
    return <InnerForm stripe={null} elements={null} stripeReady={false} />;
  }
  return (
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  );
}
