import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blogPosts";

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Blog | Travel Guides & Tips | 92 Limo Service"
        description="Guides and tips from 92 Limo Service — BWI, DCA & IAD airport travel, corporate transportation, weddings, and getting around the DMV in style."
        path="/blog"
      />
      <PageHero
        eyebrow="THE 92 LIMO BLOG"
        title="Travel Guides & Tips"
        subtitle="Airport strategy, corporate travel, weddings, and the practical side of moving through DC, Maryland, and Virginia."
        image={IMAGES.dcSkyline}
        alt="Washington DC skyline"
        height="min-h-[48vh]"
      />

      <section className="py-20 lg:py-24 bg-white" data-testid="blog-index">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link
                  to={`/blog/${post.slug}`}
                  data-testid={`blog-card-${post.slug}`}
                  className="group flex flex-col h-full bg-[#F6F5F2] border border-black/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/60 hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#090A0C]/85 text-[#D4AF37] text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg font-display font-bold text-[#0A0A0A] leading-snug group-hover:text-[#B8860B] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8860B]">
                      Read the guide
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
