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
 *  - No CTA band on detail pages
 */
import { PageWrapper } from "@/components/Layout";
import { Clock, Calendar, User } from "lucide-react";
import EnglishOnlyGuard from "@/components/EnglishOnlyGuard";
import LangLink from "@/components/LangLink";
import { useParams } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedBlogPosts } from "@/data/blogPosts";

function BlogDetailInner() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(params?.slug) || BLOG_POSTS[0];
  const related = getRelatedBlogPosts(post.slug);

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
              fontSize: "var(--fs-sm)",
              fontWeight: 400,
              lineHeight: "var(--lh-base)",
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
            <span style={{ color: "rgba(255,255,255,0.85)" }}>{post.category}</span>
          </nav>
        </div>
      </section>

      {/* ── CONTENT SECTION ──────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "rgb(255, 255, 255)" }}
      >
        <div
          className="blog-detail-grid container"
          style={{
            maxWidth: "1536px",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 320px",
            gap: "64px",
            alignItems: "start",
          }}
        >

          {/* ── LEFT: ARTICLE ──────────────────────────────────────────────── */}
          <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "48px" }}>
            <div className="blog-detail-feature-layout" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", alignItems: "start" }}>
              {/* Header block: title + subtitle + meta */}
              <div style={{ marginBottom: 0, minWidth: 0 }}>
                {/* H3 title: 32px/500/40px/rgb(13,27,42) — from node[42] geo:282,164 1056x56 */}
                <h3
                  className="type-h4"
                  style={{
                    fontSize: "var(--fs-xl)",
                    fontWeight: 500,
                    lineHeight: "var(--lh-xl)",
                    letterSpacing: "0.01em",
                    color: "rgb(13, 27, 42)",
                    margin: "0 0 16px",
                  }}
                >
                  {post.title}
                </h3>

                {/* Subtitle: 16px/400/32px/rgb(58,74,88) — node[43] geo:282,236 600x64 */}
                <p
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-lg)",
                    color: "rgb(58, 74, 88)",
                    margin: "0 0 32px",
                    maxWidth: "600px",
                  }}
                >
                  {post.desc}
                </p>

                {/* Meta row: date + author — node[44] geo:282,324 1056x24 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-base)",
                    color: "rgba(58,74,88,0.70)",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Calendar size={12} />
                    {post.date}
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
                  height: "420px",
                  background: "rgb(240, 244, 248)",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 0,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(58,74,88,0.30)",
                  }}
                >
                  ARTICLE IMAGE
                </span>
              </div>
            </div>

            {/* Body copy — nodes[50-71]: 16px/400/32px/rgb(13,27,42) */}
            <div
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-lg)",
                color: "rgb(13, 27, 42)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginBottom: "48px",
              }}
            >
              {post.body.map((paragraph) => (
                <p key={paragraph} style={{ margin: 0 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags row — node[72-77]: pill tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "16px 12px",
                    border: "1px solid rgb(221, 224, 230)",
                    borderRadius: "100px",
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-base)",
                    color: "rgb(58, 74, 88)",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "rgb(0, 116, 217)",
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
                padding: "32px",
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
                    fontSize: "var(--fs-base)",
                    fontWeight: 600,
                    lineHeight: "var(--lh-base)",
                    color: "rgb(13, 27, 42)",
                  }}
                >
                  Euroland IR Editorial
                </div>
                {/* Role: 12px/400/24px/rgb(58,74,88) */}
                <div
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-base)",
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
                padding: "32px",
                width: "320px",
              }}
            >
              {/* "Related Articles" kicker: 10px/700/24px/rgb(0,107,163) */}
              <div
                className="kicker"
                style={{
                  fontSize: "var(--fs-sm)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
                  letterSpacing: "var(--ls-label)",
                  textTransform: "uppercase",
                  color: "#0074D9",
                  marginBottom: "16px",
                }}
              >
                Related Articles
              </div>

              {/* Related article list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {related.map((article, i) => (
                  <LangLink
                    key={i}
                    href={`/resources/ir-blog/${article.slug}`}
                    style={{
                      textDecoration: "none",
                      display: "block",
                      padding: "16px 0",
                      borderBottom: i < related.length - 1 ? "1px solid rgb(221,224,230)" : "none",
                    }}
                  >
                    {/* Category kicker */}
                    <span
                      style={{
                        display: "block",
                        fontSize: "var(--fs-sm)",
                        fontWeight: 400,
                        lineHeight: "var(--lh-base)",
                        letterSpacing: "var(--ls-label)",
                        textTransform: "uppercase",
                        color: "var(--button-blue)",
                        marginBottom: "16px",
                      }}
                    >
                      {article.category}
                    </span>
                    {/* Title: 14px/500/24px/rgb(13,27,42) */}
                    <span
                      style={{
                        display: "block",
                        fontSize: "var(--fs-base)",
                        fontWeight: 500,
                        lineHeight: "var(--lh-base)",
                        color: "rgb(13, 27, 42)",
                        marginBottom: "16px",
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
                        fontSize: "var(--fs-sm)",
                        fontWeight: 400,
                        lineHeight: "var(--lh-base)",
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
                  fontSize: "var(--fs-sm)",
                  fontWeight: 600,
                  lineHeight: "var(--lh-base)",
                  color: "rgb(0, 116, 217)",
                  textDecoration: "none",
                }}
              >
                View all articles →
              </LangLink>
            </div>
          </aside>

        </div>
      </section>

      <style>{`
        .blog-detail-grid {
          grid-template-columns: minmax(0, 1fr) 320px;
        }

        .blog-detail-feature-layout {
          grid-template-columns: minmax(0, 1fr) 440px;
        }

        @media (max-width: 1023px) {
          .blog-detail-grid {
            grid-template-columns: 1fr !important;
          }

          .blog-detail-feature-layout {
            grid-template-columns: 1fr !important;
          }

          .blog-detail-grid > aside {
            position: static !important;
            top: auto !important;
            padding-top: 0 !important;
          }
        }
      `}</style>

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



