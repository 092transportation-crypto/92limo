import { Reveal } from "@/components/site/Reveal";

// Numbered/unnumbered cards for { title, text } items from lib/staticPages.js.
export const CopyCards = ({ eyebrow, heading, items, numbered = false, testId }) => (
  <section className="py-16 lg:py-20 bg-white" data-testid={testId}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <Reveal className="mb-10">
        {eyebrow && <span className="text-xs font-semibold tracking-widest text-[#B8860B]">{eyebrow}</span>}
        <h2 className="mt-3 text-3xl font-display font-bold text-[#0A0A0A]">{heading}</h2>
      </Reveal>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-5`}>
        {items.map((it, i) => (
          <Reveal key={it.title} delay={(i % 4) * 0.07}>
            <div className="h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-6">
              {numbered && <span className="text-lg font-display font-bold gold-text">{String(i + 1).padStart(2, "0")}</span>}
              <h3 className={`${numbered ? "mt-2 " : ""}text-base font-display font-semibold text-[#0A0A0A]`}>{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// Long-form { heading, paragraphs } sections from lib/staticPages.js.
export const CopySections = ({ sections, testId }) => (
  <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid={testId}>
    <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">
      {sections.map((s) => (
        <Reveal key={s.heading}>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">{s.heading}</h2>
          <div className="mt-4 space-y-4 text-neutral-700 leading-relaxed">
            {s.paragraphs.map((t) => (
              <p key={t.slice(0, 40)}>{t}</p>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
