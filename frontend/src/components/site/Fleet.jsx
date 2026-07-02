import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Users, Briefcase, ChevronRight, ChevronLeft } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FLEET } from "@/lib/data";

export const Fleet = ({
  heading = "A Vehicle for Every Occasion",
  eyebrow = "OUR FLEET",
  intro = "Late-model, meticulously maintained luxury vehicles — from executive sedans to spacious Sprinter vans.",
}) => {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCards = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-fleet-card]");
    const gap = 20; // matches gap-5 (1.25rem)
    const step = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section data-testid="fleet-section" className="py-20 lg:py-28 bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">{eyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">{heading}</h2>
            <p className="mt-3 text-neutral-600">{intro}</p>
          </div>

          {/* Desktop navigation arrows */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous vehicles"
              data-testid="fleet-prev"
              onClick={() => scrollByCards(-1)}
              disabled={!canScrollLeft}
              className="grid place-items-center h-12 w-12 rounded-full border border-[#0A0A0A]/15 bg-white text-[#0A0A0A] shadow-sm transition-all duration-300 hover:border-[#C9A227] hover:text-[#B8860B] hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#0A0A0A]/15 disabled:hover:text-[#0A0A0A] disabled:hover:shadow-sm"
            >
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label="Next vehicles"
              data-testid="fleet-next"
              onClick={() => scrollByCards(1)}
              disabled={!canScrollRight}
              className="grid place-items-center h-12 w-12 rounded-full border border-[#0A0A0A]/15 bg-white text-[#0A0A0A] shadow-sm transition-all duration-300 hover:border-[#C9A227] hover:text-[#B8860B] hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#0A0A0A]/15 disabled:hover:text-[#0A0A0A] disabled:hover:shadow-sm"
            >
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>
          </div>
        </Reveal>

        <Reveal>
          <div
            ref={scrollerRef}
            data-testid="fleet-scroller"
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-6 px-6 lg:-mx-8 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {FLEET.map((v, i) => (
              <div
                key={v.category}
                data-fleet-card
                data-testid={`fleet-card-${i}`}
                className="group flex-none w-[80%] sm:w-[46%] lg:w-[31.5%] snap-start flex flex-col bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-[#0A0A0A]">
                  {v.img ? (
                    <img
                      src={v.img}
                      alt={v.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 bg-[#0A0A0A]">
                      <span className="font-display text-2xl font-bold text-[#C9A227]">{v.category}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-bold text-[#B8860B] leading-snug">{v.category}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{v.description}</p>

                  <div className="mt-4 flex items-center gap-5 text-sm text-neutral-700 tabnums">
                    <span className="flex items-center gap-1.5">
                      <Users size={16} strokeWidth={1.6} className="text-[#B8860B]" />
                      {v.pax} passengers
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={16} strokeWidth={1.6} className="text-[#B8860B]" />
                      {v.bags} bags
                    </span>
                  </div>

                  <Link
                    data-testid={`fleet-reserve-${i}`}
                    to="/booking"
                    className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8860B] hover:gap-2.5 transition-all"
                  >
                    Book Now <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
