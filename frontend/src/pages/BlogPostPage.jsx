import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Calendar, Clock, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/data";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blogPosts";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  // Inject FAQPage + Article JSON-LD for this post (same pattern as FaqPage).
  useEffect(() => {
    if (!post) return undefined;
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          author: { "@type": "Organization", name: BRAND.name },
          mainEntityOfPage: `https://www.92limo.com/blog/${post.slug}`,
        },
      ],
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "blog-post-schema";
    el.text = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      const ex = document.getElementById("blog-post-schema");
      if (ex) ex.remove();
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
      />

      {/* Header */}
      <section className="relative bg-[#090A0C] pt-32 pb-14 grain">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-neutral-400 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft size={14} /> BACK TO BLOG
          </Link>
          <span className="block mt-6 text-xs font-semibold tracking-widest text-[#D4AF37]">
            {post.category.toUpperCase()}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-6 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <Calendar size={15} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-0 pt-10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl border border-black/10"
          />
        </div>
      </section>

      {/* Body */}
      <article className="py-12 lg:py-16 bg-white" data-testid="blog-post-body">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {post.intro.map((p, i) => (
            <p key={`intro-${i}`} className="text-lg text-neutral-700 leading-relaxed mb-6">
              {p}
            </p>
          ))}

          {post.sections.map((section, i) => (
            <Reveal key={i}>
              <h2 className="mt-10 mb-4 text-2xl font-display font-bold text-[#0A0A0A]">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-neutral-700 leading-relaxed mb-5">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mb-5 space-y-2.5">
                  {section.list.map((item, k) => (
                    <li key={k} className="flex items-start gap-3 text-neutral-700 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          {/* In-article CTA */}
          <div className="mt-12 bg-[#F6F5F2] border border-[#D4AF37]/40 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-display font-bold text-[#0A0A0A]">
              Ready to Ride with {BRAND.name}?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Flat-rate, flight-tracked chauffeur service across DC, Maryland &
              Virginia — available 24/7.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/booking"
                data-testid="blog-post-quote-cta"
                className="gold-gradient text-[#090A0C] font-bold px-7 py-3 rounded-full hover:brightness-110 transition-all"
              >
                Get an Instant Quote
              </Link>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-[#B8860B] text-[#B8860B] font-bold px-7 py-3 rounded-full hover:bg-[#B8860B] hover:text-white transition-all"
              >
                <Phone size={16} /> {BRAND.phone}
              </a>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-14" data-testid="blog-post-faqs">
            <h2 className="text-2xl font-display font-bold text-[#0A0A0A] mb-5">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {post.faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-[#F6F5F2] border border-black/10 rounded-xl px-5"
                >
                  <AccordionTrigger className="text-left text-[#0A0A0A] font-semibold hover:no-underline hover:text-[#B8860B]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-14 border-t border-black/10 pt-10">
              <h2 className="text-xl font-display font-bold text-[#0A0A0A] mb-6">
                Keep Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group bg-[#F6F5F2] border border-black/10 rounded-xl p-5 hover:border-[#D4AF37]/60 transition-all"
                  >
                    <span className="text-[11px] font-semibold tracking-widest text-[#B8860B]">
                      {r.category.toUpperCase()}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-[#0A0A0A] leading-snug group-hover:text-[#B8860B] transition-colors">
                      {r.title}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-neutral-500">
                      Read <ArrowRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </>
  );
}
