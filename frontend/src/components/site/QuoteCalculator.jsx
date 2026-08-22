import { useEffect, useMemo, useRef, useState } from "react";
import { AddressAutocomplete } from "@/components/site/AddressAutocomplete";
import {
  computeQuote,
  isShortNotice,
  PRICING,
  money,
  MAX_MILES,
  SHORT_NOTICE_HOURS,
} from "@/lib/pricing";
import PayAndBook from "@/components/site/PayAndBook";
import {
  Calculator,
  Clock,
  Loader2,
  PartyPopper,
  Route,
  Car,
  CarFront,
  Bus,
  ArrowDown,
} from "lucide-react";

// Standalone instant-quote calculator. Sits ABOVE the inquiry form on the
// booking page; "Book this trip" prefills the form below via a window event.

const GOLD = "#C9A227";

const TRIP_TYPES = [
  { value: "Point-to-Point", icon: Route },
  { value: "Hourly", icon: Clock },
  { value: "Special/Event", icon: PartyPopper },
];

const VEHICLES = [
  { value: "Business Sedan", icon: Car },
  { value: "Mid-Size SUV", icon: CarFront },
  { value: "Luxury SUV", icon: CarFront },
  { value: "Premium SUV", icon: CarFront },
  { value: "First Class", icon: Car },
  { value: "Sprinter Van", icon: Bus },
  { value: "Sprinter Executive", icon: Bus },
];

const inputBase =
  "peer block w-full min-h-[58px] rounded-xl border border-white/15 bg-white/[0.04] px-4 pt-7 pb-2.5 text-white placeholder-transparent transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/60 focus:border-[#C9A227]";
const labelBase =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400 transition-all duration-200 " +
  "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[#C9A227] " +
  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-neutral-500";

const pillClasses = (active) =>
  `inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-all duration-300 active:scale-95 ${
    active
      ? "gold-gradient border-transparent text-[#0A0A0A] shadow-[0_0_18px_rgba(201,162,39,0.35)]"
      : "border-white/15 text-neutral-300 hover:border-[#C9A227]/60 hover:text-white"
  }`;

export function QuoteCalculator() {
  const [tripType, setTripType] = useState("Point-to-Point");
  const [vehicle, setVehicle] = useState("Business Sedan");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  // idle | loading | ready | error
  const [distance, setDistance] = useState({ status: "idle", miles: null });
  const timerRef = useRef(null);
  const lastPairRef = useRef("");

  const pickupTrimmed = pickup.trim();
  const dropoffTrimmed = dropoff.trim();

  useEffect(() => {
    if (tripType !== "Point-to-Point") return undefined;
    if (pickupTrimmed.length < 4 || dropoffTrimmed.length < 4) {
      lastPairRef.current = "";
      setDistance({ status: "idle", miles: null });
      return undefined;
    }
    const pair = `${pickupTrimmed}|${dropoffTrimmed}`;
    if (pair === lastPairRef.current) return undefined;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      setDistance({ status: "loading", miles: null });
      try {
        const res = await fetch("/api/distance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            origin: pickupTrimmed,
            destination: dropoffTrimmed,
          }),
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
    return () => clearTimeout(timerRef.current);
  }, [tripType, pickupTrimmed, dropoffTrimmed]);

  const shortNotice = useMemo(
    () => isShortNotice(pickupDate, pickupTime),
    [pickupDate, pickupTime]
  );

  const quote = useMemo(
    () =>
      tripType === "Point-to-Point" && distance.status === "ready"
        ? computeQuote(distance.miles, vehicle, shortNotice)
        : null,
    [tripType, vehicle, distance, shortNotice]
  );

  const applyToForm = () => {
    window.dispatchEvent(
      new CustomEvent("limo:quote-apply", {
        detail: {
          tripType,
          vehicle,
          pickup: pickupTrimmed,
          dropoff: dropoffTrimmed,
          pickupDate,
          pickupTime,
        },
      })
    );
    const target = document.getElementById("book");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isP2P = tripType === "Point-to-Point";

  return (
    <section className="relative bg-[#0A0A0A] pt-16 lg:pt-20" data-testid="quote-calculator-section">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div
          data-testid="quote-calculator"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_30px_80px_-30px_rgba(201,162,39,0.35)] backdrop-blur-sm"
        >
          <div className="h-1 w-full rounded-t-3xl gold-gradient" aria-hidden="true" />
          <div className="p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="gold-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                <Calculator className="h-5 w-5 text-[#0A0A0A]" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Instant Quote Calculator
                </h2>
                <p className="mt-0.5 text-xs text-neutral-400">
                  Point-to-point trips price instantly — all-inclusive, no surge.
                </p>
              </div>
            </div>

            {/* Trust line */}
            <p
              data-testid="calc-trust-line"
              className="mb-5 flex items-center gap-2 rounded-xl border border-[#C9A227]/25 bg-[#C9A227]/[0.07] px-4 py-2.5 text-xs font-semibold text-[#e0c05e] sm:text-sm"
            >
              <Clock className="h-4 w-4 shrink-0" style={{ color: GOLD }} />
              We reply to all quote requests in under 20 minutes.
            </p>

            {/* Trip type */}
            <div className="mb-4 flex flex-wrap gap-2">
              {TRIP_TYPES.map(({ value, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  data-testid={`calc-trip-${value.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  onClick={() => setTripType(value)}
                  className={pillClasses(tripType === value)}
                >
                  <Icon className="h-3.5 w-3.5" /> {value}
                </button>
              ))}
            </div>

            {isP2P ? (
              <>
                {/* Addresses */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="relative z-30">
                    <AddressAutocomplete
                      id="calc-pickup"
                      testId="calc-pickup"
                      inputClassName={inputBase}
                      placeholder="Pickup Location"
                      value={pickup}
                      onChange={setPickup}
                      label={
                        <label htmlFor="calc-pickup" className={labelBase}>
                          Pickup Location
                        </label>
                      }
                    />
                  </div>
                  <div className="relative z-20">
                    <AddressAutocomplete
                      id="calc-dropoff"
                      testId="calc-dropoff"
                      inputClassName={inputBase}
                      placeholder="Drop-off Location"
                      value={dropoff}
                      onChange={setDropoff}
                      label={
                        <label htmlFor="calc-dropoff" className={labelBase}>
                          Drop-off Location
                        </label>
                      }
                    />
                  </div>
                </div>

                {/* Vehicle */}
                <div className="mt-4">
                  <p className="mb-2 pl-1 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400">
                    Vehicle Class
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {VEHICLES.map(({ value, icon: Icon }) => (
                      <button
                        key={value}
                        type="button"
                        data-testid={`calc-vehicle-${value.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                        onClick={() => setVehicle(value)}
                        className={pillClasses(vehicle === value)}
                      >
                        <Icon className="h-3.5 w-3.5" /> {value}
                      </button>
                    ))}
                  </div>
                  {PRICING[vehicle]?.model && (
                    <p className="mt-2 pl-1 text-xs text-neutral-500">
                      {PRICING[vehicle].model}
                    </p>
                  )}
                </div>

                {/* Pickup date & time — short-notice check */}
                <div className="mt-4">
                  <p className="mb-2 pl-1 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400">
                    Pickup Date &amp; Time
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:max-w-md">
                    <input
                      type="date"
                      data-testid="calc-pickup-date"
                      aria-label="Pickup date"
                      style={{ colorScheme: "dark" }}
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="block w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white transition-colors duration-300 focus:border-[#C9A227] focus:outline-none focus:ring-1 focus:ring-[#C9A227]/60"
                    />
                    <input
                      type="time"
                      data-testid="calc-pickup-time"
                      aria-label="Pickup time"
                      style={{ colorScheme: "dark" }}
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="block w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white transition-colors duration-300 focus:border-[#C9A227] focus:outline-none focus:ring-1 focus:ring-[#C9A227]/60"
                    />
                  </div>
                  <p className="mt-2 pl-1 text-[11px] text-neutral-500">
                    Pickups within {SHORT_NOTICE_HOURS} hours include a 20% short-notice surcharge.
                  </p>
                </div>

                {/* Price */}
                <div
                  className="mt-5 rounded-2xl border border-[#C9A227]/25 bg-black/50 p-5"
                  data-testid="calc-result"
                >
                  {distance.status === "idle" ? (
                    <p className="text-sm text-neutral-400">
                      Enter your pickup and drop-off locations above to see your
                      instant price.
                    </p>
                  ) : distance.status === "loading" ? (
                    <p className="flex items-center gap-2 text-sm text-neutral-300">
                      <Loader2 className="h-4 w-4 animate-spin" style={{ color: GOLD }} />
                      Calculating your route…
                    </p>
                  ) : distance.status === "error" ? (
                    <p className="text-sm text-neutral-300">
                      We couldn&apos;t calculate that route — submit the form below
                      and we&apos;ll follow up with an exact quote.
                    </p>
                  ) : quote?.overLimit ? (
                    <p className="text-sm text-neutral-300" data-testid="calc-over-limit">
                      For trips over {MAX_MILES} miles, please submit your request
                      and we&apos;ll send a custom quote.
                    </p>
                  ) : !quote ? (
                    <p className="text-sm text-neutral-300">
                      Custom pricing for {vehicle} — submit the form below and
                      we&apos;ll follow up with a quote.
                    </p>
                  ) : (
                    <div data-testid="calc-breakdown">
                      <dl className="space-y-2 text-sm">
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-neutral-400">Estimated distance</dt>
                          <dd className="tabnums text-white">{quote.miles} miles</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-neutral-400">
                            Flat rate — {quote.vehicle}
                          </dt>
                          <dd className="tabnums text-white">
                            {money(quote.baseFare)}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-[#7FB58A]">Instant booking discount (10%)</dt>
                          <dd className="tabnums text-[#7FB58A]" data-testid="calc-discount">
                            -{money(quote.discount)}
                          </dd>
                        </div>
                        {quote.surcharge > 0 && (
                          <div className="flex items-center justify-between gap-3">
                            <dt className="text-[#C9A227]">Short-notice surcharge (20%)</dt>
                            <dd className="tabnums text-[#C9A227]" data-testid="calc-surcharge">
                              +{money(quote.surcharge)}
                            </dd>
                          </div>
                        )}
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-neutral-400">
                            Card processing fee (3%)
                          </dt>
                          <dd className="tabnums text-white">
                            {money(quote.cardFee)}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-3 border-t border-[#C9A227]/25 pt-2.5">
                          <dt className="font-bold text-white">Total</dt>
                          <dd
                            className="tabnums text-xl font-bold"
                            style={{ color: GOLD }}
                            data-testid="calc-total"
                          >
                            {money(quote.total)}
                          </dd>
                        </div>
                      </dl>
                      <button
                        type="button"
                        data-testid="calc-book-btn"
                        onClick={applyToForm}
                        className="gold-gradient mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.015] active:scale-[0.99]"
                      >
                        <ArrowDown className="h-4 w-4" /> Book this trip — details below
                      </button>
                      <PayAndBook
                        quote={quote}
                        meta={{
                          pickup: pickupTrimmed,
                          dropoff: dropoffTrimmed,
                          miles: quote.miles,
                          vehicle,
                          pickupDate,
                          pickupTime,
                        }}
                      />
                      <p className="mt-3 text-center text-[11px] leading-relaxed text-neutral-500">
                        All-inclusive flat rate — tolls, taxes &amp; gratuity. Pay
                        securely now to lock it in, or send the request below and
                        we&apos;ll confirm your ride either way.
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div
                className="rounded-2xl border border-[#C9A227]/25 bg-black/50 p-5"
                data-testid="calc-custom"
              >
                <p className="text-sm text-neutral-300">
                  Custom pricing — submit your request and we&apos;ll follow up
                  with a quote.
                </p>
                <button
                  type="button"
                  onClick={applyToForm}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/60 px-5 py-2.5 text-sm font-semibold text-[#C9A227] transition-colors hover:bg-[#C9A227]/10"
                >
                  <ArrowDown className="h-4 w-4" /> Continue to the request form
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
