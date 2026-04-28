"use client";

/**
 * IR BLOG PAGE — Euroland IR
 * Source: euroland-ir-...-max-export(6).json
 * URL:    /resources/ir-blog
 * Viewport: 1440px wide
 *
 * Sections:
 *  S1  hero-navy (544px)   — "IR BLOG" eyebrow + H2 + subtitle
 *  S2  section white       — category filter tabs + featured card (full-width horizontal) + 3-col grid (5 cards)
 */
import { useState, useEffect, useRef } from "react";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { Clock } from "lucide-react";
import EnglishOnlyGuard from "@/components/EnglishOnlyGuard";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

type Category = "All" | "Best Practice" | "AI & Technology" | "Regulation" | "ESG" | "IPO";

interface BlogPost {
  category: Category;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  featured?: boolean;
  slug: string;
}

const POSTS: BlogPost[] = [
  {
    category: "Best Practice",
    title: "How to build an IR platform that investors actually use",
    desc: "The most effective IR platforms share five structural qualities. Here's what separates best-practice IR from the average.",
    date: "12 Mar 2026",
    readTime: "6 min read",
    featured: true,
    slug: "how-to-build-an-ir-website",
  },
  {
    category: "AI & Technology",
    title: "Purpose-built AI vs generic LLMs: what IR teams need to know",
    desc: "Not all AI is created equal. We explain why IR-specific training data and compliance guardrails matter for investor communications.",
    date: "5 Mar 2026",
    readTime: "8 min read",
    slug: "purpose-built-ai-vs-generic-llms",
  },
  {
    category: "Regulation",
    title: "MAR compliance in 2026: key changes and what they mean for IR teams",
    desc: "A practical overview of the latest Market Abuse Regulation updates and how to adapt your disclosure workflows.",
    date: "28 Feb 2026",
    readTime: "7 min read",
    slug: "mar-compliance-2026",
  },
  {
    category: "ESG",
    title: "ESG reporting: from obligation to competitive advantage",
    desc: "Companies that treat ESG as a communication opportunity — not just a compliance burden — are winning investor trust.",
    date: "20 Feb 2026",
    readTime: "5 min read",
    slug: "esg-reporting-competitive-advantage",
  },
  {
    category: "IPO",
    title: "The IR checklist every company should complete before listing",
    desc: "From website infrastructure to investor CRM, here are the twelve IR foundations every company should have in place before IPO.",
    date: "14 Feb 2026",
    readTime: "9 min read",
    slug: "ir-checklist-before-listing",
  },
  {
    category: "Best Practice",
    title: "Earnings season preparation: a week-by-week IR calendar",
    desc: "A structured timeline for preparing, distributing, and following up on quarterly earnings communications.",
    date: "7 Feb 2026",
    readTime: "6 min read",
    slug: "earnings-season-preparation",
  },
];

const CATEGORIES: Category[] = ["All", "Best Practice", "AI & Technology", "Regulation", "ESG", "IPO"];

// Kicker colour per category
const KICKER_COLORS: Record<string, string> = {
  "Best Practice":   "rgb(0, 107, 163)",
  "AI & Technology": "rgb(91, 107, 122)",
  "Regulation":      "rgb(58, 74, 88)",
  "ESG":             "rgb(0, 150, 81)",
  "IPO":             "rgb(0, 173, 240)",
};

function Kicker({ cat }: { cat: string }) {
  return (
    <div
      style={{
        fontSize: "10px",
        fontWeight: 700,
        lineHeight: "24px",
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: KICKER_COLORS[cat] ?? "rgb(0,107,163)",
        marginBottom: "8px",
      }}
    >
      {cat}
    </div>
  );
}

function BlogInner() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const f1 = useFadeUp();

  const featured = POSTS.find((p) => p.featured)!;
  const rest = POSTS.filter((p) => !p.featured);

  const filteredFeatured = activeCategory === "All" || activeCategory === featured.category ? featured : null;
  const filteredRest = activeCategory === "All"
    ? rest
    : rest.filter((p) => p.category === activeCategory);

  return (
    <PageWrapper>

            <BannerHero
        variant="resources"
        label="Resources"
        title="IR Insights & Best Practice"
        subtitle="Expert perspectives on investor relations strategy, ESG disclosure, regulatory compliance, and the future of IR technology — written for IR professionals at listed companies."
        minHeight="440px"
        titleMaxWidth="640px"
        subtitleMaxWidth="560px"
      />

{/* ── S2: CONTENT ──────────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "rgb(255, 255, 255)", paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>

          {/* Category filter tabs: height 42px, active pill = dark navy bg */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              marginBottom: "48px",
              borderBottom: "2px solid rgb(221, 224, 230)",
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 20px",
                    height: "42px",
                    fontSize: "13px",
                    fontWeight: isActive ? 600 : 400,
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                    border: "none",
                    borderRadius: isActive ? "4px 4px 0 0" : "0",
                    background: isActive ? "rgb(8, 43, 69)" : "transparent",
                    color: isActive ? "rgb(255, 255, 255)" : "rgb(58, 74, 88)",
                    cursor: "pointer",
                    transition: "all 150ms ease",
                    marginBottom: "-2px",
                    borderBottom: isActive ? "2px solid rgb(8,43,69)" : "2px solid transparent",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div ref={f1} className="fade-up">

            {/* Featured card: full-width horizontal, 1440×310px */}
            {filteredFeatured && (
              <a
                href={`/resources/ir-blog/${filteredFeatured.slug}`}
                style={{ textDecoration: "none", display: "block", marginBottom: "32px" }}
              >
                <div
                  className="blog-card blog-featured-card"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    minHeight: "310px",
                    border: "1px solid rgb(221, 224, 230)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  {/* Left: image placeholder */}
                  <div
                    style={{
                      background: "rgb(8, 43, 69)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.30)",
                      }}
                    >
                      FEATURED
                    </span>
                  </div>

                  {/* Right: content */}
                  <div
                    style={{
                      padding: "40px 40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      background: "rgb(255, 255, 255)",
                    }}
                  >
                    <Kicker cat={filteredFeatured.category} />

                    {/* Title: 32px/500/40px/rgb(13,27,42) */}
                    <h4
                      style={{
                        fontSize: "32px",
                        fontWeight: 500,
                        lineHeight: "40px",
                        letterSpacing: "0.01em",
                        color: "rgb(13, 27, 42)",
                        margin: "0 0 16px",
                      }}
                    >
                      {filteredFeatured.title}
                    </h4>

                    {/* Desc: 16px/400/24px/rgb(58,74,88) */}
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        color: "rgb(58, 74, 88)",
                        margin: "0 0 24px",
                      }}
                    >
                      {filteredFeatured.desc}
                    </p>

                    {/* Meta + CTA row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "rgba(58,74,88,0.60)",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Clock size={12} />
                        {filteredFeatured.date} · {filteredFeatured.readTime}
                      </span>
                      <span
                        className="btn-link"
                        style={{ fontSize: "12px", fontWeight: 600, color: "rgb(0,107,163)" }}
                      >
                        READ ARTICLE →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            )}

            {/* 3-col grid of article cards: 464×414px each */}
            {filteredRest.length > 0 && (
              <div
                className="rg-3 grid-3col"
                style={{
                  gap: "24px",
                }}
              >
                {filteredRest.map((post) => (
                  <a
                    key={post.slug}
                    href={`/resources/ir-blog/${post.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <article
                      className="blog-card"
                      style={{
                        border: "1px solid rgb(221, 224, 230)",
                        borderRadius: "4px",
                        overflow: "hidden",
                        minHeight: "414px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Image area: 462×160px */}
                      <div
                        style={{
                          height: "160px",
                          background: "rgb(240, 244, 248)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "rgba(58,74,88,0.30)",
                          }}
                        >
                          ARTICLE IMAGE
                        </span>
                      </div>

                      {/* Content area: 462×252px */}
                      <div
                        style={{
                          padding: "24px",
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Kicker cat={post.category} />

                        {/* Title: 20px/600/32px/rgb(13,27,42) */}
                        <h5 className="type-h6"
                          style={{
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "32px",
                            letterSpacing: "0.01em",
                            color: "rgb(13, 27, 42)",
                            margin: "0 0 12px",
                            flex: 1,
                          }}
                        >
                          {post.title}
                        </h5>

                        {/* Desc: 12px/400/20px/rgb(58,74,88) */}
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "20px",
                            color: "rgb(58, 74, 88)",
                            margin: "0 0 16px",
                          }}
                        >
                          {post.desc}
                        </p>

                        {/* Meta + CTA row */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "12px",
                              color: "rgba(58,74,88,0.60)",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <Clock size={11} />
                            {post.readTime}
                          </span>
                          <span
                            className="btn-link"
                            style={{ fontSize: "12px", fontWeight: 600, color: "rgb(0,107,163)" }}
                          >
                            READ ARTICLE →
                          </span>
                        </div>
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            )}

            {/* Empty state when filter has no results */}
            {!filteredFeatured && filteredRest.length === 0 && (
              <div
                style={{
                  padding: "80px 0",
                  textAlign: "center",
                  color: "rgb(91,107,122)",
                  fontSize: "16px",
                }}
              >
                No articles in this category yet.
              </div>
            )}

          </div>
        </div>
      </section>

    </PageWrapper>
  );
}

export default function Blog() {
  return (
    <EnglishOnlyGuard>
      <BlogInner />
    </EnglishOnlyGuard>
  );
}
