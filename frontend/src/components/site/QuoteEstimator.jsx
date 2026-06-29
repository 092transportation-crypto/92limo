import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calculator, ChevronRight, Info } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { VEHICLE_TYPES, VEHICLE_RATES } from "@/lib/data";
import { track } from "@/lib/analytics";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const RATES = VEHICLE_RATES;

const round5 = (n) => Math.round(n / 5) * 5;
const fieldCls =
  "bg-white border-black/15 text-[#0A0A0A] placeholder:text-neutral-400 focus-visible:ring-[#C9A227] focus-visible:border-[#C9A227]";
const menuCls = "bg-white border-black/10 text-[#0A0A0A]";
const itemCls = "focus:bg-[#C9A227]/15 focus:text-[#0A0A0A]";

export const QuoteEstimator = () => {
  const [vehicle, setVehicle] = useState(VEHICLE_TYPES[0]);
  const [mode, setMode] = useState("distance");
  const [miles, setMiles] = useState("20");
  const [hours, setHours] = useState("3");

  const estimate = useMemo(() => {
    const r = RATES[vehicle];
    if (!r) return null;
    let mid;
    if (mode === "hourly") {
      const h = Math.max(2, parseFloat(hours) || 0);
      mid = r.perHour * h;
    } else {
      const m = Math.max(0, parseFloat(miles) || 0);
      mid = r.base + r.perMile * m;
    }
    if (mid <= 0) return null;
    return { low: round5(mid * 0.92), high: round5(mid * 1.15) };
  }, [vehicle, mode, miles, hours]);

  return (
    <section data-testid="quote-estimator" className="py-20 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">INSTANT ESTIMATE</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">
            Get an Instant Quote
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
            Ballpark your fare in seconds. All-inclusive estimate — final price
            confirmed by our team when you book.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-[#F6F5F2] border border-black/10 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-sm">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className="text-neutral-700">Vehicle</Label>
                <Select value={vehicle} onValueChange={setVehicle}>
                  <SelectTrigger data-testid="quote-vehicle" className={fieldCls}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={menuCls}>
                    {VEHICLE_TYPES.map((v) => (
                      <SelectItem key={v} value={v} className={itemCls}>{v}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-neutral-700">Trip Type</Label>
                <Select value={mode} onValueChange={setMode}>
                  <SelectTrigger data-testid="quote-mode" className={fieldCls}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={menuCls}>
                    <SelectItem value="distance" className={itemCls}>Point-to-Point / Airport (by distance)</SelectItem>
                    <SelectItem value="hourly" className={itemCls}>Hourly / As-Directed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {mode === "distance" ? (
                <div className="space-y-2">
                  <Label className="text-neutral-700">Approx. Distance (miles)</Label>
                  <Input data-testid="quote-miles" type="number" min="1" value={miles} onChange={(e) => setMiles(e.target.value)} className={fieldCls} />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label className="text-neutral-700">Hours (2 hr minimum)</Label>
                  <Input data-testid="quote-hours" type="number" min="2" value={hours} onChange={(e) => setHours(e.target.value)} className={fieldCls} />
                </div>
              )}
            </div>

            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start text-neutral-500 text-sm">
                <Calculator size={16} className="text-[#B8860B]" /> Estimated fare
              </div>
              <div data-testid="quote-result" className="mt-2 text-4xl sm:text-5xl font-display font-bold gold-text tabnums">
                {estimate ? `$${estimate.low} – $${estimate.high}` : "—"}
              </div>
              <p className="mt-3 flex items-start gap-2 text-xs text-neutral-500 justify-center lg:justify-start">
                <Info size={13} className="mt-0.5 shrink-0" />
                Includes base fare, tolls, taxes &amp; gratuity. Excludes wait time,
                extra stops &amp; late-night surcharges.
              </p>
              <Link
                data-testid="quote-book-btn"
                to="/contact"
                onClick={() => track("get_quote", {
                  vehicle, mode,
                  estimate_low: estimate?.low,
                  estimate_high: estimate?.high,
                  currency: "USD",
                })}
                className="mt-6 inline-flex items-center justify-center gap-2 gold-gradient text-[#0A0A0A] font-bold px-7 py-3.5 rounded-full hover:brightness-105 transition-all"
              >
                Reserve This Estimate <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
