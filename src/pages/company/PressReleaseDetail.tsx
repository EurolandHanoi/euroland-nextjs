"use client";
import { useParams } from "next/navigation";

// Euroland IR — Press Release Detail page
// Source: max-export(18).json
// URL: /company/newsroom/press/:slug
// Viewport: 2004px → container 1536px → inner 1440px
//
// Layout (from JSON geometry):
//  Hero (y:0–402):          dark navy bg, breadcrumb "← Newsroom" (y:82 h:24),
//                           tag row: "PRESS RELEASE" badge + date (y:130 h:32),
//                           H2 (y:178 h:80 w:760), subtitle p (y:274 h:48 w:600)
//  Content section (y:402–1396): light grey bg
//    Left col (w:1092 → card w:1092):
//      card (y:460 h:778 w:1092): lead p (y:500 h:112 w:1010), body div (y:644 h:448 w:1010),
//        5 body paragraphs, ### end mark (y:1140 h:57 w:1010)
//    Right sidebar (w:300 x:1422):
//      Actions card (y:462 h:185): ACTIONS u-label + "Print release" btn + "Share" btn
//      Media Contact card (y:671 h:149): MEDIA CONTACT u-label + email link
//      More Releases card (y:844 h:492): MORE RELEASES u-label + 3 linked releases + SEE ALL RELEASES link
//  CTA band (y:1396–1696): dark navy, MEDIA ENQUIRIES eyebrow + H3 "Press contact" + subtitle + CONTACT PRESS TEAM btn


import Link from "next/link";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";

// ── Press release data ─────────────────────────────────────────────────────────
const RELEASES = [
  {
    slug: "euroland-ir-expands-platform-ai-disclosure-tools",
    tag: "PRESS RELEASE",
    date: "12 Mar 2026",
    title: "Euroland IR expands best-practice platform with new AI disclosure tools",
    subtitle:
      "New AI-assisted drafting and disclosure management capabilities now available to all 1,400+ listed clients.",
    lead: "New AI-assisted drafting and disclosure management capabilities now available to all 1,400+ listed clients.",
    body: [
      "Euroland IR today announced the expansion of its best-practice investor relations platform with the introduction of new AI-assisted disclosure tools, now available to all 1,400+ listed company clients.",
      "The new capabilities include AI-assisted earnings release drafting, automated consistency checking across disclosure documents, and a MAR compliance review module that flags language requiring legal review before publication.",
      "\u201cThese tools represent a significant step forward in how IR teams can use AI responsibly,\u201d said the CEO of Euroland IR. \u201cWe\u2019ve built them with compliance at the core \u2014 not as an afterthought \u2014 and we\u2019re making them available to all clients as part of their existing subscription.\u201d",
      "The AI disclosure tools are built on Euroland IR\u2019s proprietary language model, trained on a corpus of verified regulatory filings and investor communications from publicly listed companies across 60+ stock exchanges.",
      "The tools are available immediately to all Euroland IR clients. A guided onboarding session is available through the client helpdesk.",
    ],
  },
  {
    slug: "euroland-ir-announces-partnership-nordic-stock-exchange",
    tag: "PRESS RELEASE",
    date: "5 Mar 2026",
    title: "Euroland IR announces partnership with leading Nordic stock exchange",
    subtitle:
      "Strategic partnership to provide integrated IR services to listed companies across the Nordic region.",
    lead: "Strategic partnership to provide integrated IR services to listed companies across the Nordic region.",
    body: [
      "Euroland IR has entered into a strategic partnership with a leading Nordic stock exchange to provide integrated investor relations services to listed companies across the Nordic region.",
      "The partnership will enable listed companies to access Euroland IR\u2019s full suite of IR tools directly through the exchange\u2019s client portal, streamlining onboarding and reducing the administrative burden for IR teams.",
      "\u201cThis partnership reflects our commitment to making best-practice IR accessible to all listed companies, regardless of size or market,\u201d said the Head of Partnerships at Euroland IR.",
      "The integrated service will be available to all companies listed on the exchange from Q2 2026, with a phased rollout beginning in April.",
      "Euroland IR currently serves more than 1,400 listed companies across 60+ stock exchanges worldwide.",
    ],
  },
  {
    slug: "euroland-ir-wins-ir-magazine-award-best-digital-ir-innovation",
    tag: "PRESS RELEASE",
    date: "21 Feb 2026",
    title: "Euroland IR wins IR Magazine Award for Best Digital IR Innovation",
    subtitle:
      "Award recognises Euroland IR\u2019s AI-powered disclosure tools and purpose-built IR platform.",
    lead: "Award recognises Euroland IR\u2019s AI-powered disclosure tools and purpose-built IR platform.",
    body: [
      "Euroland IR has been awarded the IR Magazine Award for Best Digital IR Innovation, recognising the company\u2019s AI-powered disclosure tools and purpose-built investor relations platform.",
      "The award was presented at the IR Magazine Europe Awards ceremony in London, attended by investor relations professionals from across Europe.",
      "\u201cThis award is a recognition of the work our product and engineering teams have done to build tools that genuinely improve the quality and efficiency of investor communications,\u201d said the CEO of Euroland IR.",
      "The winning submission highlighted Euroland IR\u2019s AI-assisted earnings release drafting tool, which has been shown to reduce drafting time by up to 60% while improving consistency and compliance.",
      "Euroland IR will continue to invest in AI-powered IR tools throughout 2026, with new features planned for release in Q2 and Q3.",
    ],
  },
  {
    slug: "new-esg-reporting-module-launched-for-listed-companies",
    tag: "PRESS RELEASE",
    date: "14 Feb 2026",
    title: "New ESG reporting module launched for listed companies",
    subtitle:
      "Euroland IR launches dedicated ESG reporting module to help listed companies meet CSRD requirements.",
    lead: "Euroland IR launches dedicated ESG reporting module to help listed companies meet CSRD requirements.",
    body: [
      "Euroland IR has launched a new ESG reporting module designed to help listed companies meet the requirements of the Corporate Sustainability Reporting Directive (CSRD) and other ESG disclosure frameworks.",
      "The module provides structured templates for double materiality assessments, automated data collection workflows, and a review process that aligns with ESRS reporting standards.",
      "\u201cCSRD compliance is a significant challenge for many listed companies, particularly those without dedicated sustainability teams,\u201d said the Head of Product at Euroland IR. \u201cOur module is designed to make this process as straightforward as possible.\u201d",
      "The ESG reporting module is available to all Euroland IR clients as part of the standard platform subscription, with an optional advisory service available for companies requiring additional support.",
      "Euroland IR has been working with a panel of listed companies and ESG advisors to develop the module over the past 12 months.",
    ],
  },
];

function getMoreReleases(currentSlug: string) {
  return RELEASES.filter((r) => r.slug !== currentSlug).slice(0, 3);
}

export default function PressReleaseDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || RELEASES[0].slug;
  const release = RELEASES.find((r) => r.slug === slug) || RELEASES[0];
  const moreReleases = getMoreReleases(release.slug);

  return (
    <PageWrapper>
      {/* ── 1. HERO (y:0–402) ─────────────────────────────────────────────────── */}
      <section
        className="hero-navy banner-hero-section"
        style={{
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, rgb(13, 27, 42), rgb(14, 45, 74) 60%, rgb(8, 43, 69))",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(13,27,42,0.92), rgba(14,45,74,0.90) 60%, rgba(8,43,69,0.94))", pointerEvents: "none" }} />
        <div
          className="container banner-hero-container"
          style={{ maxWidth: "1536px", padding: "120px 48px 80px", position: "relative", zIndex: 1 }}
        >
          {/* Breadcrumb */}
          <LangLink href="/company/newsroom"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 400, lineHeight: "24px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "24px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Newsroom
          </LangLink>

          <div style={{ maxWidth: "720px" }}>
            {/* Heading */}
            <h2 className="banner-hero-title type-h2" style={{ fontSize: "48px", fontWeight: 300, lineHeight: "64px", letterSpacing: "-0.01em", color: "#ffffff", margin: "0 0 24px" }}>
              Press Release
            </h2>
            {/* Date as subtitle */}
            <p className="banner-hero-subtitle" style={{ fontSize: "20px", fontWeight: 400, lineHeight: "28px", color: "rgba(255,255,255,0.72)", margin: 0 }}>
              {release.date}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. CONTENT SECTION (y:402–1396) ──────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "rgb(247, 248, 250)",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            gap: "48px",
            alignItems: "flex-start",
          }}
        >
          {/* ── LEFT COLUMN — card (y:460 h:778 w:1092) ─────────────────────── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "40px",
              }}
            >
              {/* Title — type-h5: 24px/32px/500 */}
              <h3
                className="type-h5"
                style={{
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 12px",
                }}
              >
                {release.title}
              </h3>

              {/* Lead paragraph — type-h6: 20px/28px/500 */}
              <p
                className="type-h6"
                style={{
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 40px",
                  paddingBottom: "40px",
                  borderBottom: "1px solid rgb(229, 231, 235)",
                }}
              >
                {release.lead}
              </p>

              {/* Body paragraphs — y:644 h:448 w:1010 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {release.body.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "28px",
                      color: "rgb(58, 74, 88)",
                      margin: 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* End mark — y:1140 h:57 */}
              <div
                style={{
                  marginTop: "48px",
                  paddingTop: "24px",
                  borderTop: "1px solid rgb(229, 231, 235)",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgb(58, 74, 88)",
                    margin: 0,
                  }}
                >
                  ###
                </p>
              </div>
            </div>
          </div>

          {/* Spacer — preserves left-column proportions */}
          <div style={{ width: "300px", flexShrink: 0 }} />
          {false && <aside
            style={{
              width: "300px",
              flexShrink: 0,
              position: "sticky",
              top: "80px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Actions card — y:462 h:185 w:300 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "28px",
              }}
            >
              {/* ACTIONS u-label */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(0, 107, 163)",
                  marginBottom: "8px",
                }}
              >
                ACTIONS
              </div>
              <div
                style={{
                  width: "25%",
                  height: "2px",
                  backgroundColor: "rgb(0, 107, 163)",
                  marginBottom: "20px",
                }}
              />
              {/* Print release button — y:554 h:24 */}
              <button
                onClick={() => window.print()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "8px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgb(58, 74, 88)",
                  borderBottom: "1px solid rgb(229, 231, 235)",
                  marginBottom: "8px",
                  textAlign: "left" as const,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                Print release
              </button>
              {/* Share button — y:590 h:24 */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: release.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "8px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgb(58, 74, 88)",
                  textAlign: "left" as const,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Share
              </button>
            </div>

            {/* Media Contact card — y:671 h:149 w:300 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "28px",
              }}
            >
              {/* MEDIA CONTACT u-label — y:705 h:34 */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(0, 107, 163)",
                  marginBottom: "8px",
                }}
              >
                MEDIA CONTACT
              </div>
              <div
                style={{
                  width: "25%",
                  height: "2px",
                  backgroundColor: "rgb(0, 107, 163)",
                  marginBottom: "20px",
                }}
              />
              {/* Email link — y:763 h:24 */}
              <a
                href="mailto:press@euroland.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgb(13, 27, 42)",
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                press@euroland.com
              </a>
            </div>

            {/* More Releases card — y:844 h:492 w:300 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "28px",
              }}
            >
              {/* MORE RELEASES u-label — y:878 h:34 */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(0, 107, 163)",
                  marginBottom: "8px",
                }}
              >
                MORE RELEASES
              </div>
              <div
                style={{
                  width: "25%",
                  height: "2px",
                  backgroundColor: "rgb(0, 107, 163)",
                  marginBottom: "20px",
                }}
              />

              {/* 3 release rows — y:936–1254 h:93 each */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {moreReleases.map((rel, i) => (
                  <LangLink key={rel.slug} href={`/company/newsroom/press/${rel.slug}`}
                      style={{
                        display: "block",
                        padding: "12px 0",
                        borderBottom:
                          i < moreReleases.length - 1
                            ? "1px solid rgb(229, 231, 235)"
                            : "none",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {/* Date — y:936 h:24 */}
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "24px",
                          color: "rgb(58, 74, 88)",
                          marginBottom: "4px",
                        }}
                      >
                        {rel.date}
                      </div>
                      {/* Title — y:964 h:48 */}
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          lineHeight: "20px",
                          color: "rgb(13, 27, 42)",
                        }}
                      >
                        {rel.title}
                      </div>
                  </LangLink>
                ))}
              </div>

              {/* SEE ALL RELEASES link — y:1279 h:24 */}
              <LangLink href="/company/newsroom"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    color: "rgb(0, 107, 163)",
                    textDecoration: "none",
                  }}
                >
                  SEE ALL RELEASES →
              </LangLink>
            </div>
          </aside>}
        </div>
      </section>

      {/* ── 3. CTA BAND (y:1396–1696) ────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "rgb(13, 27, 42)",
          padding: "0 48px",
        }}
      >
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          <div>
            {/* MEDIA ENQUIRIES eyebrow — y:1477 h:34 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(91, 200, 245)",
                }}
              >
                MEDIA ENQUIRIES
              </span>
              <div
                style={{
                  width: "25%",
                  height: "2px",
                  backgroundColor: "rgb(91, 200, 245)",
                }}
              />
            </div>
            {/* H3 — y:1527 h:48 */}
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
              Press contact
            </h3>
            {/* Subtitle — y:1591 h:24 */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.7)",
                margin: 0,
              }}
            >
              For press enquiries, interview requests, or media resources, please contact our communications team.
            </p>
          </div>
          {/* CONTACT PRESS TEAM button — y:1521 h:48 w:189 */}
          <a
            href="mailto:press@euroland.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 24px",
              backgroundColor: "rgb(0, 173, 240)",
              color: "rgb(255, 255, 255)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.96px",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              borderRadius: "2px",
              whiteSpace: "nowrap" as const,
              transition: "background-color 200ms ease",
            }}
          >
            CONTACT PRESS TEAM
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
