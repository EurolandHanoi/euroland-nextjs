"use client";

/**
 * IR BLOG ARTICLE DETAIL PAGE — Euroland IR
 * Source: euroland-ir-...-max-export(7).json
 * URL:    /resources/ir-blog/:slug
 * Viewport: 1440px wide
 *
 * Layout:
 *  - Thin hero-navy breadcrumb bar (104px)
 *  - White content section: 2-col (left: article 1056px, right: sidebar 320px)
 *    - Left: header block (title h3 + subtitle p + meta) + image area + body paragraphs + tags + author card
 *    - Right: sticky "Related Articles" sidebar (3 items + view all)
 *  - Dark navy CTA band: "Stay ahead in investor relations"
 */
import { PageWrapper } from "@/components/Layout";
import { Clock, Calendar, User } from "lucide-react";
import EnglishOnlyGuard from "@/components/EnglishOnlyGuard";
import LangLink from "@/components/LangLink";

// Kicker colour per category
const KICKER_COLORS: Record<string, string> = {
  "Best Practice":   "rgb(0, 107, 163)",
  "AI & Technology": "rgb(91, 107, 122)",
  "Regulation":      "rgb(58, 74, 88)",
  "ESG":             "rgb(0, 150, 81)",
  "IPO":             "rgb(0, 173, 240)",
};

interface RelatedArticle {
  category: string;
  title: string;
  readTime: string;
  slug: string;
}

const RELATED: RelatedArticle[] = [
  {
    category: "AI & Technology",
    title: "Purpose-built AI vs generic LLMs: what IR teams need to know",
    readTime: "8 min read",
    slug: "purpose-built-ai-vs-generic-llms",
  },
  {
    category: "Regulation",
    title: "MAR compliance in 2026: key changes and what they mean for IR teams",
    readTime: "7 min read",
    slug: "mar-compliance-2026",
  },
  {
    category: "ESG",
    title: "ESG reporting: from obligation to competitive advantage",
    readTime: "5 min read",
    slug: "esg-reporting-competitive-advantage",
  },
];

const TAGS = ["Best Practice", "IR Strategy", "Best Practice"];

function BlogDetailInner() {
  return (
    <PageWrapper>

      {/* ── BREADCRUMB HERO (104px) ───────────────────────────────────────── */}
      <section
        className="hero-navy banner-hero-section"
        style={{ minHeight: "104px", display: "flex", alignItems: "center" }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "rgba(255,255,255,0.60)",
            }}
          >
            <LangLink
              href="/resources/ir-blog"
              style={{ color: "rgba(255,255,255,0.60)", textDecoration: "none" }}
            >
              IR Blog
            </LangLink>
            <span style={{ color: "rgba(255,255,255,0.35)" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Best Practice</span>
          </nav>
        </div>
      </section>

      {/* ── CONTENT SECTION ──────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "rgb(255, 255, 255)", paddingTop: "0", paddingBottom: "80px" }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1536px",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >

          {/* ── LEFT: ARTICLE ──────────────────────────────────────────────── */}
          <div style={{ paddingTop: "48px" }}>

            {/* Header block: title + subtitle + meta */}
            <div style={{ marginBottom: "32px" }}>
              {/* H3 title: 32px/500/40px/rgb(13,27,42) — from node[42] geo:282,164 1056x56 */}
              <h3 className="type-h4"
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: "40px",
                  letterSpacing: "0.01em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 16px",
                }}
              >
                How to build an IR platform that investors actually use
              </h3>

              {/* Subtitle: 16px/400/32px/rgb(58,74,88) — node[43] geo:282,236 600x64 */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "32px",
                  color: "rgb(58, 74, 88)",
                  margin: "0 0 24px",
                  maxWidth: "600px",
                }}
              >
                The most effective IR platforms share five structural qualities. Here's what separates best-practice IR from the average.
              </p>

              {/* Meta row: date + author — node[44] geo:282,324 1056x24 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgba(58,74,88,0.70)",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Calendar size={12} />
                  12 Mar 2026
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <User size={12} />
                  Euroland IR Editorial
                </span>
              </div>
            </div>

            {/* Article image: 1056×320px — node[49] */}
            <div
              style={{
                width: "100%",
                height: "320px",
                background: "rgb(240, 244, 248)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "48px",
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

            {/* Body copy — nodes[50-71]: 16px/400/32px/rgb(13,27,42) */}
            <div
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "32px",
                color: "rgb(13, 27, 42)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginBottom: "48px",
              }}
            >
              <p style={{ margin: 0 }}>
                Investor relations websites are often treated as a compliance checkbox — a place to park annual reports and stock charts. But the best IR teams understand that a well-structured IR platform is one of the most powerful tools in their communications arsenal.
              </p>
              <p style={{ margin: 0 }}>
                After analysing hundreds of IR platforms across Europe and North America, we've identified five structural qualities that consistently separate best-practice IR from the average.
              </p>
              <p style={{ margin: 0 }}>
                <strong>1. A clear investor journey from the homepage.</strong>{" "}
                Investors arriving at your IR site should immediately understand where to go. The most effective sites present a logical hierarchy: stock performance → financials → governance → contact. Avoid burying key data behind multiple clicks.
              </p>
              <p style={{ margin: 0 }}>
                <strong>2. Real-time data that loads instantly.</strong>{" "}
                Slow-loading stock charts or delayed financial data erode trust. Investors expect the same responsiveness from your IR site as they get from a Bloomberg terminal. If your data provider introduces latency, it shows.
              </p>
              <p style={{ margin: 0 }}>
                <strong>3. Mobile-first design.</strong>{" "}
                More than 40% of IR platform visits now come from mobile devices. Yet the majority of IR sites are still designed desktop-first. A responsive, touch-optimised layout is no longer optional.
              </p>
              <p style={{ margin: 0 }}>
                <strong>4. Structured financial data.</strong>{" "}
                Presenting financials in a structured, comparable format — not just as PDF attachments — dramatically improves usability. Interactive income statements, balance sheets, and cash flow tables allow investors to analyse your performance without leaving your site.
              </p>
              <p style={{ margin: 0 }}>
                <strong>5. A consistent narrative thread.</strong>{" "}
                The best IR platforms tell a coherent equity story across every section. The homepage headline, the CEO message, the financial highlights, and the ESG summary should all reinforce the same core investment thesis.
              </p>
              <p style={{ margin: 0 }}>
                Implementing these five qualities doesn't require a complete redesign. In many cases, structural improvements to navigation, data presentation, and mobile responsiveness can be achieved incrementally — and the impact on investor engagement is measurable.
              </p>
            </div>

            {/* Tags row — node[72-77]: pill tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "40px",
              }}
            >
              {TAGS.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    border: "1px solid rgb(221, 224, 230)",
                    borderRadius: "100px",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgb(58, 74, 88)",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "rgb(0, 107, 163)",
                      flexShrink: 0,
                    }}
                  />
                  {tag}
                </span>
              ))}
            </div>

            {/* Author card — node[79-84]: 1056×122px */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "24px",
                border: "1px solid rgb(221, 224, 230)",
                borderRadius: "4px",
              }}
            >
              {/* Avatar circle */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgb(8, 43, 69)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <User size={20} color="rgba(255,255,255,0.70)" />
              </div>
              <div>
                {/* Author name: 14px/600/24px/rgb(13,27,42) */}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    color: "rgb(13, 27, 42)",
                  }}
                >
                  Euroland IR Editorial
                </div>
                {/* Role: 12px/400/24px/rgb(58,74,88) */}
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgb(58, 74, 88)",
                  }}
                >
                  IR Strategy Team
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT: SIDEBAR ─────────────────────────────────────────────── */}
          <aside style={{ paddingTop: "48px", position: "sticky", top: "80px" }}>
            <div
              style={{
                border: "1px solid rgb(221, 224, 230)",
                borderRadius: "4px",
                padding: "24px",
                width: "320px",
              }}
            >
              {/* "Related Articles" kicker: 10px/700/24px/rgb(0,107,163) */}
              <div
                className="kicker"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "rgb(0, 107, 163)",
                  marginBottom: "16px",
                }}
              >
                Related Articles
              </div>

              {/* Related article list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {RELATED.map((article, i) => (
                  <LangLink
                    key={i}
                    href={`/resources/ir-blog/${article.slug}`}
                    style={{
                      textDecoration: "none",
                      display: "block",
                      padding: "16px 0",
                      borderBottom: i < RELATED.length - 1 ? "1px solid rgb(221,224,230)" : "none",
                    }}
                  >
                    {/* Category kicker */}
                    <span
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        color: KICKER_COLORS[article.category] ?? "rgb(0,107,163)",
                        marginBottom: "4px",
                      }}
                    >
                      {article.category}
                    </span>
                    {/* Title: 14px/500/24px/rgb(13,27,42) */}
                    <span
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "24px",
                        color: "rgb(13, 27, 42)",
                        marginBottom: "8px",
                      }}
                    >
                      {article.title}
                    </span>
                    {/* Read time: 12px/400/24px/rgb(58,74,88) */}
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        color: "rgb(58, 74, 88)",
                      }}
                    >
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                  </LangLink>
                ))}
              </div>

              {/* "View all articles" link */}
              <LangLink
                href="/resources/ir-blog"
                className="btn-link"
                style={{
                  display: "block",
                  marginTop: "16px",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  color: "rgb(0, 107, 163)",
                  textDecoration: "none",
                }}
              >
                View all articles →
              </LangLink>
            </div>
          </aside>

        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
      <div
        className="cta-band"
        style={{
          background: "rgb(8, 43, 69)"
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1536px",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: eyebrow + H3 + subtitle */}
          <div>
            <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>
              IR BLOG
            </div>
            {/* H3: 40px/300/48px/rgb(255,255,255) */}
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 300,
                lineHeight: "48px",
                letterSpacing: "0.005em",
                color: "rgb(255, 255, 255)",
                margin: "0 0 16px",
              }}
            >
              Stay ahead in investor relations
            </h3>
            {/* Subtitle: 16px/400/24px/rgba(255,255,255,0.70) */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.70)",
                margin: 0,
              }}
            >
              Monthly insights on best practice IR, regulatory updates, and technology trends.
            </p>
          </div>

          {/* Right: CTA button */}
          <LangLink
            href="/resources/ir-blog"
            className="btn-primary"
            style={{ flexShrink: 0, marginLeft: "48px" }}
          >
            VIEW ALL ARTICLES
          </LangLink>
        </div>
      </div>

    </PageWrapper>
  );
}

export default function BlogDetail() {
  return (
    <EnglishOnlyGuard>
      <BlogDetailInner />
    </EnglishOnlyGuard>
  );
}
