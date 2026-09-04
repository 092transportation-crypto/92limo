import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ShieldCheck, Star, MessagesSquare, Clock, Trophy, BadgeCheck, ExternalLink } from "lucide-react";
import { CHAMBER } from "@/lib/data";

// Award-style trust signal cards.
const SIGNALS = [
  {
    icon: ShieldCheck,
    title: "MD PSC Licensed Carrier #6325",
    subtitle: "Maryland Public Service Commission",
  },
  {
    icon: Star,
    title: "5-Star Rated Service",
    subtitle: "Consistently rated five stars by riders",
  },
  {
    icon: MessagesSquare,
    title: "33+ Google Reviews",
    subtitle: "Verified feedback from real clients",
  },
  {
    icon: Clock,
    title: "24/7 Professional Service",
    subtitle: "Day or night, we're on the road",
  },
  {
    icon: Trophy,
    title: "15+ Years of Transportation Industry Experience",
    subtitle: "DC, Maryland & Virginia",
  },
  {
    icon: BadgeCheck,
    title: CHAMBER.label,
    subtitle: CHAMBER.subtitle,
    href: CHAMBER.href,
  },
];

// Genuine award certificates — kept as supporting proof beneath the cards.
const AWARDS = [
  {
    img: "/awards/award-quality-winner.jpg",
    alt: "92 Limo Service — 2026 Quality Business Award Winner, quality rating over 95%",
    caption: "2026 Quality Business Award Winner",
  },
  {
    img: "/awards/award-top-1-percent.jpg",
    alt: "92 Transportation LLC recognized among the top 1% of American businesses for quality",
    caption: "Top 1% of American Businesses",
  },
  {
    img: "/awards/award-press-release.jpg",
    alt: "92 Limo Service recognized as the leading limousine service in Reisterstown, MD",
    caption: "Leading Limousine Service — Reisterstown, MD",
  },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const Awards = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Subtle parallax on the spotlight as the section scrolls by.
  const glowY = useTransform(scrollYProgress, [0, 1], ["-12%", "18%"]);

  return (
    <section
      ref={sectionRef}
      data-testid="awards-section"
      className="gold-sheen relative overflow-hidden bg-[#090A0C] py-24 lg:py-32 grain"
    >
      {/* Dramatic top spotlight with parallax */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[70rem] -translate-x-1/2 opacity-30 blur-3xl"
        style={{
          y: glowY,
          background:
            "radial-gradient(ellipse at center top, #C9A227 0%, rgba(201,162,39,0.25) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Side rim lights */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #C9A227, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #C9A227, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            <Award size={15} /> Awards &amp; Recognition
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            TRUSTED &amp; <span className="gold-text">RECOGNIZED</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gold-gradient" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            Five-star chauffeured service across the DMV backed by 15+ years of transportation industry experience — licensed,
            reviewed, and awarded among the top 1% of American businesses.
          </p>
        </motion.div>

        {/* Trust signal cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SIGNALS.map(({ icon: Icon, title, subtitle, href }, i) => {
            const Card = href ? motion.a : motion.div;
            const linkProps = href
              ? { href, target: "_blank", rel: "noopener noreferrer", "aria-label": `${title} — view our listing (opens in a new tab)` }
              : {};
            return (
              <Card
                key={title}
                variants={itemVariants}
                data-testid={`trust-card-${i}`}
                {...linkProps}
                className="glow-card group relative block rounded-2xl border border-[#C9A227]/25 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 text-center backdrop-blur-sm lg:col-span-2"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#C9A227]/10 shadow-[0_0_30px_-8px_rgba(201,162,39,0.6)]">
                  <Icon size={28} className="text-[#D4AF37]" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-bold text-white sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-neutral-500">{subtitle}</p>
                {href ? (
                  <span className="mx-auto mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#B8860B] transition-colors group-hover:text-[#D4AF37]">
                    View Listing <ExternalLink size={12} aria-hidden="true" />
                  </span>
                ) : (
                  <div className="mx-auto mt-5 h-px w-10 bg-[#C9A227]/40" aria-hidden="true" />
                )}
              </Card>
            );
          })}
        </motion.div>

        {/* Genuine certificates */}
        <motion.div
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {AWARDS.map((a, i) => (
            <motion.a
              key={a.img}
              variants={itemVariants}
              href={a.img}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`award-card-${i}`}
              className="glow-card group block overflow-hidden rounded-2xl border border-[#C9A227]/25 bg-[#0c0d10]"
            >
              <div className="flex h-[340px] items-center justify-center bg-[#0c0d10] p-3 lg:h-[380px]">
                <img
                  src={a.img}
                  alt={a.alt}
                  loading="lazy"
                  className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center gap-2 border-t border-white/5 px-5 py-4">
                <Award size={16} className="shrink-0 text-[#C9A227]" />
                <span className="text-sm font-semibold text-neutral-200">{a.caption}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
