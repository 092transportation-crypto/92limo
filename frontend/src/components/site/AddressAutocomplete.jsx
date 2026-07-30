import { useCallback, useEffect, useRef, useState } from "react";
import { MapPin, Plane } from "lucide-react";

/*
 * Address autocomplete for the booking form's pickup / drop-off fields.
 *
 * Suggestions come from two sources, merged in this order:
 *   1. Regional airports (instant, local list) — the most common rides.
 *   2. The free Photon geocoder (photon.komoot.io, OpenStreetMap data),
 *      biased toward the DC / Maryland / Virginia service area. No API key
 *      required, so it works in every environment. Swap `fetchRemote` for
 *      Google Places Autocomplete if a Places API key is ever provisioned.
 *
 * The dropdown is rendered inside the component's relative wrapper on a solid
 * #1a1a1a panel (never transparent) above everything else (z-[70]), with
 * white suggestion text and a gold highlight on hover / keyboard focus.
 * Selection happens on pointerdown so it wins the race against input blur on
 * both desktop and mobile.
 */

const AIRPORTS = [
  { main: "BWI Airport (Baltimore/Washington International)", secondary: "Baltimore, MD", keywords: "bwi baltimore washington international thurgood marshall airport" },
  { main: "DCA Airport (Ronald Reagan National)", secondary: "Arlington, VA", keywords: "dca ronald reagan washington national airport" },
  { main: "IAD Airport (Washington Dulles International)", secondary: "Dulles, VA", keywords: "iad washington dulles international airport" },
  { main: "Martin State Airport (MTN)", secondary: "Middle River, MD", keywords: "mtn martin state airport baltimore" },
  { main: "Philadelphia International Airport (PHL)", secondary: "Philadelphia, PA", keywords: "phl philadelphia international airport" },
];

// Bias remote results toward the middle of the DMV service area.
const BIAS = { lat: 38.95, lon: -77.02 };

function airportMatches(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return AIRPORTS.filter((a) =>
    terms.every((t) => a.keywords.includes(t) || a.main.toLowerCase().includes(t))
  ).map((a) => ({ ...a, isAirport: true }));
}

function formatPhoton(feature) {
  const p = feature.properties || {};
  const main = [p.name || [p.street, p.housenumber].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join("");
  const secondary = [p.city || p.county, p.state, p.countrycode === "US" ? null : p.country]
    .filter(Boolean)
    .join(", ");
  if (!main) return null;
  return { main, secondary };
}

export function AddressAutocomplete({
  id,
  testId,
  value,
  onChange,
  placeholder,
  inputClassName,
  label,
}) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const abortRef = useRef(null);
  const debounceRef = useRef(null);
  const wrapRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    setActive(-1);
  }, []);

  const search = useCallback((query) => {
    const q = query.trim();
    const airports = airportMatches(q);
    if (q.length < 3) {
      setItems(airports);
      setOpen(airports.length > 0);
      setActive(-1);
      return;
    }

    // Show airport matches immediately while the remote lookup runs.
    setItems(airports);
    setOpen(airports.length > 0);

    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const url =
      "https://photon.komoot.io/api/?q=" +
      encodeURIComponent(q) +
      `&limit=6&lang=en&lat=${BIAS.lat}&lon=${BIAS.lon}`;

    fetch(url, { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : { features: [] }))
      .then((data) => {
        const seen = new Set(airports.map((a) => a.main.toLowerCase()));
        const remote = (data.features || [])
          .map(formatPhoton)
          .filter(Boolean)
          .filter((s) => {
            const key = (s.main + "|" + s.secondary).toLowerCase();
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
          });
        const merged = [...airports, ...remote].slice(0, 8);
        setItems(merged);
        setOpen(merged.length > 0);
        setActive(-1);
      })
      .catch(() => {
        /* aborted or offline — keep whatever is showing */
      });
  }, []);

  const handleInput = (v) => {
    onChange(v);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(v), 250);
  };

  const pick = (item) => {
    onChange(item.secondary ? `${item.main}, ${item.secondary}` : item.main);
    close();
  };

  const handleKeyDown = (e) => {
    if (!open || !items.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i <= 0 ? items.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      if (active >= 0) {
        e.preventDefault();
        pick(items[active]);
      }
    } else if (e.key === "Escape") {
      close();
    }
  };

  // Close when tapping/clicking anywhere outside (covers mobile taps that
  // don't move focus).
  useEffect(() => {
    const onPointerDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [close]);

  useEffect(() => () => {
    clearTimeout(debounceRef.current);
    if (abortRef.current) abortRef.current.abort();
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <input
        id={id}
        data-testid={testId}
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => value.trim() && search(value)}
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        aria-controls={`${id}-listbox`}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
      {label}
      {open && items.length > 0 && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          data-testid={`${testId}-suggestions`}
          className="absolute left-0 right-0 top-full z-[70] mt-2 max-h-72 overflow-y-auto rounded-xl border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {items.map((item, i) => {
            const Icon = item.isAirport ? Plane : MapPin;
            return (
              <li
                key={`${item.main}|${item.secondary}`}
                role="option"
                aria-selected={i === active}
                onPointerDown={(e) => {
                  e.preventDefault();
                  pick(item);
                }}
                onMouseEnter={() => setActive(i)}
                className={`flex cursor-pointer items-start gap-3 px-4 py-3 transition-colors duration-150 ${
                  i === active ? "bg-[#C9A227]/20" : ""
                }`}
              >
                <Icon
                  size={16}
                  className={`mt-0.5 shrink-0 ${i === active ? "text-[#C9A227]" : "text-neutral-500"}`}
                />
                <span className="min-w-0">
                  <span className={`block truncate text-sm font-medium ${i === active ? "text-[#C9A227]" : "text-white"}`}>
                    {item.main}
                  </span>
                  {item.secondary && (
                    <span className="block truncate text-xs text-neutral-400">{item.secondary}</span>
                  )}
                </span>
              </li>
            );
          })}
          <li aria-hidden="true" className="border-t border-white/10 px-4 py-1.5 text-right text-[10px] text-neutral-500">
            © OpenStreetMap contributors
          </li>
        </ul>
      )}
    </div>
  );
}
