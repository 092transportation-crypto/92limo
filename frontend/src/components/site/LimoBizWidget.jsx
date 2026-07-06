import { useEffect, useRef } from "react";

const WIDGET_LOADER_SRC = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";

/**
 * MyLimoBiz online reservations widget (alias: 92transp).
 *
 * The widget-loader script scans the DOM for [data-ores-widget] anchors and
 * replaces them with the embedded booking form. Because this is a SPA, the
 * script is (re)injected on every mount so the loader rescans after client-side
 * navigation. If the script is blocked, the anchor still works as a direct
 * link to the hosted booking page.
 */
export function LimoBizWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Remove any previous copy so the loader runs its scan again on remount.
    document
      .querySelectorAll(`script[src="${WIDGET_LOADER_SRC}"]`)
      .forEach((el) => el.remove());

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = WIDGET_LOADER_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-[#F6F5F2]" data-testid="limobiz-widget-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B8860B]">
            Online Reservations
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">
            Book Your Ride Online
          </h2>
          <p className="mt-3 text-neutral-600">
            Instant quotes and confirmed reservations, 24/7 — or call{" "}
            <a href="tel:+18776790100" className="font-semibold text-[#B8860B] hover:underline">
              877-679-0100
            </a>
            .
          </p>
        </div>

        {/* Widget container — centered, gold-trimmed card on the site's palette */}
        <div
          ref={containerRef}
          className="bg-white border border-[#C9A227]/40 rounded-2xl shadow-xl p-4 sm:p-8 min-h-[600px] flex flex-col items-center justify-start"
        >
          <a
            href="https://book.mylimobiz.com/v4/92transp"
            data-ores-widget="website"
            data-ores-alias="92transp"
            className="inline-flex items-center justify-center gold-gradient text-[#0A0A0A] font-bold px-7 py-3.5 rounded-full hover:brightness-110"
          >
            Online Reservations
          </a>
        </div>
      </div>
    </section>
  );
}
