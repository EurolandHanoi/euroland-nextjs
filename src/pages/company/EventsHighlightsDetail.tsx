"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

// Euroland IR — Events & Highlights Detail page
// Source: max-export(15).json
// URL: /events-highlights/:slug
// Viewport: 2004px → container 1536px → inner 1440px
//
// Layout (from JSON geometry):
//  Hero (y:0–480):          dark navy bg, breadcrumb ← Events & Highlights, tag + date/location row,
//                           H2 (y:244 h:56 w:760), subtitle p (y:316 h:48 w:600)
//  Content section (y:480–1844): white bg, 2-col layout
//    Left col (w:1092):     gallery main image (h:442) + thumbnail strip (4×267 + 1×267 row)
//                           + "About This Event" card (y:1222 h:562): u-label + h4 + 4 paragraphs + photo credit
//    Right sidebar (w:300): "Event Details" card (y:540 h:372): u-label + DATE/LOCATION/TYPE rows
//                           "Other Highlights" card (y:936 h:438): u-label + 3 highlight rows + SEE ALL link
//                           "Share" card (y:1398 h:167): u-label + 3 share buttons (IN / 𝕏 / ✉)
//  CTA band (y:1844–2144):  dark navy, eyebrow + H3 + subtitle + VIEW UPCOMING EVENTS button


import Link from "next/link";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";

// ── Tag colour map ─────────────────────────────────────────────────────────────
const TAG_COLORS: Record<string, string> = {
  CONFERENCE:          "rgb(0, 107, 163)",
  AWARDS:              "rgb(139, 92, 246)",
  "PRODUCT SHOWCASE":  "rgb(0, 163, 107)",
  WORKSHOP:            "rgb(234, 88, 12)",
  "INVESTOR EVENT":    "rgb(0, 107, 163)",
  FORUM:               "rgb(0, 107, 163)",
  RECEPTION:           "rgb(220, 38, 38)",
};

// ── Event data (mirrors EventsHighlights.tsx) ──────────────────────────────────
const EVENTS = [
  {
    slug: "ubhar-capital-partnership-2025",
    tag: "PARTNERSHIP",
    date: "2025",
    location: "Muscat, Oman",
    type: "Partnership Signing",
    title: "Euroland IR & Ubhar Capital Partnership",
    desc: "Euroland IR and Ubhar Capital announce a strategic partnership to strengthen digital IR communication and investor engagement across Oman's capital market.",
    body: [
      "We are proud to announce a partnership between Euroland IR and Ubhar Capital, underscoring a strategic commitment to strengthening digital IR Communication and investor engagement across Oman.",
      "The agreement was signed in the presence of Muscat Stock Exchange S.A.O.C's CEO, Haitham Al Salmi, and signed by Ubhar Capital's CEO, Abdulaziz Al-Saadi, and Euroland IR CEO and Founder, Lisa Marklund. The signing ceremony was attended by Team Euroland IR, as well as CFOs and Investor Relations Officers from leading listed Omani companies.",
      "By combining Ubhar Capital's deep local market expertise with Euroland IR's award-winning IR Solutions and Purpose-Built AI for IR, the partnership will elevate investor outreach for Omani issuers, enhance transparency and accessibility in capital markets communication, strengthen investor trust through interactive financial storytelling, and expand regional and international visibility.",
      "Aligned with Oman Vision 2040, this partnership reinforces Oman's strategic ambition to enhance global visibility and to deepen international investor engagement within its capital markets. Euroland IR looks forward to partnering with issuers and driving long-term value creation for issuers and investors alike.",
    ],
    photoCredit: "",
    photoCount: 0,
  },
  {
    slug: "plc-awards-2025",
    tag: "AWARDS",
    date: "2025",
    location: "London, UK",
    type: "Awards Ceremony",
    title: "PLC Awards 2025",
    desc: "Euroland IR at the PLC Awards 2025 — celebrating excellence across the UK main market with clients and partners.",
    body: [
      "Euroland IR was delighted to attend the PLC Awards 2025, celebrating excellence across the UK main market. The evening brought together leading listed companies, advisers, and capital market professionals to recognise outstanding achievement in investor relations, corporate communications, and governance.",
      "We were especially proud to see our clients and partners recognised among this year's winners, including the Best Investor Communication, Fund Manager, and Company of the Year categories. The PLC Awards, held in association with the London Stock Exchange and sponsored by BDO, are one of the most prestigious recognitions on the UK main market.",
      "The evening was a wonderful opportunity to connect with IR teams, advisers, and partners who share a commitment to best-practice investor relations. Euroland IR congratulates all the winners and nominees, and thanks our hosts for the invitations.",
      "We look forward to continuing to support our clients in delivering the transparency, communication quality, and digital IR capabilities that underpin recognition at events like these.",
    ],
    photoCredit: "Photography: Euroland IR Events Team",
    photoCount: 2,
    mainImage: "/images/events/plc-awards-2025/ceremony.png",
    galleryImages: [
      "/images/events/plc-awards-2025/ceremony.png",
      "/images/events/plc-awards-2025/team.png",
    ],
  },
  {
    slug: "jira-ir-conference-2025-tokyo",
    tag: "CONFERENCE",
    date: "2025",
    location: "Tokyo, Japan",
    type: "Conference",
    title: "JIRA IR Conference 2025 — Tokyo",
    desc: "Euroland IR at the Japan Investor Relations Association conference, exploring the evolving role of IR in Japan's capital markets.",
    body: [
      "Team Euroland IR attended the Japan Investor Relations Association (JIRA) IR Conference 2025 in Tokyo, held at the Tokyo Stock Exchange. The conference brought together IR professionals, listed companies, and capital market leaders to discuss the evolving role of investor relations in Japan's rapidly transforming market environment.",
      "The keynote by Hiromi Yamaji, CEO of the Tokyo Stock Exchange, set the tone with a compelling Vision 2030 — outlining how Japan's capital market is evolving and how the role of Investor Relations is expanding. Three priorities stood out: attracting international capital, enhancing transparency and disclosure, and strengthening trust between companies and investors.",
      "Euroland IR's Managing Director joined discussions on how Wise Solutions and AI-enabled IR tools empower IR teams to meet these priorities. Key themes included global readiness in IR communication, digital and AI-enabled IR workflows, and the shift from reporting efficiency to strategic investor engagement.",
      "AI-driven IR tools are redefining how Investor Relations delivers value in a rapidly evolving digital capital-markets environment. It was a privilege to meet our clients and connections in Tokyo, and Euroland IR looks forward to continuing the conversation and supporting IR Teams implement AI Solutions that tell the equity story and engage investors.",
    ],
    photoCredit: "Photography: Euroland IR Events Team",
    photoCount: 3,
    mainImage: "/images/events/jira-tokyo-2025/presentation.png",
    galleryImages: [
      "/images/events/jira-tokyo-2025/conference-hall.png",
      "/images/events/jira-tokyo-2025/presentation.png",
      "/images/events/jira-tokyo-2025/team-photo.png",
    ],
  },
];

// ── Other Highlights (sidebar) — always show 3 events that are NOT the current one ──
function getOtherHighlights(currentSlug: string) {
  return EVENTS.filter((e) => e.slug !== currentSlug).slice(0, 3);
}

export default function EventsHighlightsDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || EVENTS[0].slug;
  const event = EVENTS.find((e) => e.slug === slug) || EVENTS[0];
  const others = getOtherHighlights(event.slug);
  const tagColor = TAG_COLORS[event.tag] || "rgb(0, 107, 163)";
  const galleryImages: string[] = (event as any).galleryImages || [];
  const defaultIndex = galleryImages.indexOf((event as any).mainImage ?? "");
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex >= 0 ? defaultIndex : 0);
  const activeImage: string | null = galleryImages.length > 0 ? galleryImages[activeIndex] : ((event as any).mainImage ?? null);
  const goPrev = () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % galleryImages.length);

  return (
    <PageWrapper>
      {/* ── 1. HERO (y:0–480) ─────────────────────────────────────────────────── */}
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
              Events &amp; Highlights
            </h2>
            {/* Date · Location as subtitle */}
            <p className="banner-hero-subtitle" style={{ fontSize: "20px", fontWeight: 400, lineHeight: "28px", color: "rgba(255,255,255,0.72)", margin: 0 }}>
              {event.date} · {event.location}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. CONTENT SECTION (y:480–1844) ──────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "rgb(248, 249, 250)",
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
          {/* ── LEFT COLUMN (w:1092) ─────────────────────────────────────────── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            {/* Event title above gallery */}
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "32px",
                letterSpacing: "0.005em",
                color: "rgb(13, 27, 42)",
                margin: "0 0 20px",
              }}
            >
              {event.title}
            </h2>

            {/* Main gallery image — y:540 h:442 w:1092 */}
            <div
              style={{
                width: "100%",
                height: "442px",
                backgroundColor: "rgb(26, 43, 60)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={event.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              )}
              {/* Prev / Next arrows — only show when there are multiple images */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    style={{
                      position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
                      background: "rgba(8,43,69,0.72)", border: "none", borderRadius: "50%",
                      width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", color: "#fff", backdropFilter: "blur(4px)",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(50,122,177,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(8,43,69,0.72)")}
                    aria-label="Previous photo"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={goNext}
                    style={{
                      position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                      background: "rgba(8,43,69,0.72)", border: "none", borderRadius: "50%",
                      width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", color: "#fff", backdropFilter: "blur(4px)",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(50,122,177,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(8,43,69,0.72)")}
                    aria-label="Next photo"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                  {/* Dot indicator */}
                  <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px" }}>
                    {galleryImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        style={{
                          width: i === activeIndex ? "20px" : "8px",
                          height: "8px",
                          borderRadius: "4px",
                          background: i === activeIndex ? "#327AB1" : "rgba(255,255,255,0.45)",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          transition: "all 0.2s",
                        }}
                        aria-label={`Go to photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {galleryImages.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${galleryImages.length}, 1fr)`,
                  gap: "8px",
                  marginBottom: "32px",
                }}
              >
                {galleryImages.map((src: string, i: number) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      height: "88px",
                      borderRadius: "2px",
                      overflow: "hidden",
                      cursor: "pointer",
                      border: i === activeIndex ? "2px solid #327AB1" : "2px solid transparent",
                      transition: "border-color 0.15s",
                    }}
                  >
                    <img
                      src={src}
                      alt={`${event.title} photo ${i + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        height: "88px",
                        backgroundColor: "rgb(26, 43, 60)",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "32px" }}>
                  <div style={{ height: "88px", backgroundColor: "rgb(26, 43, 60)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </div>
              </>
            )}

            {/* About This Event card — y:1222 h:562 w:1092 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "40px",
              }}
            >
              {/* u-label — y:1264 h:34 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(0, 107, 163)",
                  }}
                >
                  ABOUT THIS EVENT
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "rgb(229, 231, 235)",
                  }}
                />
              </div>

              {/* h4 — y:1314 h:40 */}
              <h4 className="type-h5"
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "32px",
                  letterSpacing: "0.01em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 24px",
                }}
              >
                Event overview
              </h4>

              {/* Body paragraphs — y:1378–1662 h:56 each */}
              {event.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    color: "rgb(58, 74, 88)",
                    margin: "0 0 16px",
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Photo credit — y:1694 h:49 */}
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgb(100, 116, 139)",
                  margin: "16px 0 0",
                  borderTop: "1px solid rgb(229, 231, 235)",
                  paddingTop: "16px",
                }}
              >
                {event.photoCredit}
              </p>
            </div>
          </div>

          {/* Spacer — preserves left-column proportions from when sidebar was visible */}
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
            {/* Event Details card — y:540 h:372 w:300 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "32px",
              }}
            >
              {/* u-label — y:574 h:34 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(0, 107, 163)",
                  }}
                >
                  EVENT DETAILS
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "rgb(229, 231, 235)",
                  }}
                />
              </div>

              {/* DATE — y:632 h:69 */}
              <div
                style={{
                  marginBottom: "28px",
                  paddingBottom: "28px",
                  borderBottom: "1px solid rgb(229, 231, 235)",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(58, 74, 88)",
                    marginBottom: "4px",
                  }}
                >
                  DATE
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    color: "rgb(13, 27, 42)",
                  }}
                >
                  {event.date}
                </div>
              </div>

              {/* LOCATION — y:721 h:69 */}
              <div
                style={{
                  marginBottom: "28px",
                  paddingBottom: "28px",
                  borderBottom: "1px solid rgb(229, 231, 235)",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(58, 74, 88)",
                    marginBottom: "4px",
                  }}
                >
                  LOCATION
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    color: "rgb(13, 27, 42)",
                  }}
                >
                  {event.location}
                </div>
              </div>

              {/* TYPE — y:810 h:69 */}
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(58, 74, 88)",
                    marginBottom: "4px",
                  }}
                >
                  TYPE
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    color: "rgb(13, 27, 42)",
                  }}
                >
                  {event.type}
                </div>
              </div>
            </div>

            {/* Other Highlights card — y:936 h:438 w:300 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "32px",
              }}
            >
              {/* u-label — y:970 h:34 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(0, 107, 163)",
                  }}
                >
                  OTHER HIGHLIGHTS
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "rgb(229, 231, 235)",
                  }}
                />
              </div>

              {/* 3 highlight rows — y:1028–1293 h:75 each */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {others.map((other, i) => (
                  <LangLink key={other.slug} href={`/events-highlights/${other.slug}`}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "12px 0",
                        borderBottom:
                          i < others.length - 1 ? "1px solid rgb(229, 231, 235)" : "none",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {/* Thumbnail placeholder — y:1028 h:48 w:60 */}
                      <div
                        style={{
                          width: "60px",
                          height: "48px",
                          backgroundColor: "rgb(26, 43, 60)",
                          borderRadius: "2px",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="1.5"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      {/* Text — y:1028 h:75 w:162 */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            color: "rgb(58, 74, 88)",
                          }}
                        >
                          {other.date}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 500,
                            lineHeight: "20px",
                            color: "rgb(13, 27, 42)",
                          }}
                        >
                          {other.title}
                        </div>
                      </div>
                  </LangLink>
                ))}
              </div>

              {/* SEE ALL HIGHLIGHTS → — y:1317 h:24 */}
              <LangLink href="/events-highlights"
                  style={{
                    display: "block",
                    marginTop: "16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    color: "rgb(0, 107, 163)",
                    textDecoration: "none",
                  }}
                >
                  SEE ALL HIGHLIGHTS →
              </LangLink>
            </div>

            {/* Share card — y:1398 h:167 w:300 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "32px",
              }}
            >
              {/* u-label — y:1432 h:34 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(0, 107, 163)",
                  }}
                >
                  SHARE
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "rgb(229, 231, 235)",
                  }}
                />
              </div>

              {/* Share buttons — y:1482 h:50 each (w:71 / 69 / 70) */}
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { label: "IN", title: "Share on LinkedIn" },
                  { label: "𝕏", title: "Share on X" },
                  { label: "✉", title: "Share by email" },
                ].map((btn) => (
                  <button
                    key={btn.label}
                    title={btn.title}
                    style={{
                      flex: 1,
                      height: "50px",
                      backgroundColor: "rgb(13, 27, 42)",
                      color: "rgb(255, 255, 255)",
                      border: "none",
                      borderRadius: "2px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background-color 200ms ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "rgb(0, 107, 163)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "rgb(13, 27, 42)")
                    }
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>}
        </div>
      </section>

       {/* ── 3. CTA BAND — hidden for now */}
      {false && <section
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
            {/* Eyebrow — y:1925 h:34 */}
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
                  textTransform: "uppercase",
                  color: "rgb(91, 200, 245)",
                }}
              >
                STAY CONNECTED
              </span>
              <div
                style={{
                  width: "25%",
                  height: "2px",
                  backgroundColor: "rgb(91, 200, 245)",
                }}
              />
            </div>
            {/* H3 — y:1975 h:48 */}
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
              Join us at our next event
            </h3>
            {/* Subtitle — y:2039 h:24 */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.7)",
                margin: 0,
              }}
            >
              Discover upcoming conferences, workshops, and webinars for IR professionals.
            </p>
          </div>
          {/* CTA button — y:1969 h:48 w:203 */}
          <LangLink href="/events-highlights"
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
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                whiteSpace: "nowrap",
                transition: "background-color 200ms ease",
              }}
            >
              VIEW UPCOMING EVENTS
          </LangLink>
        </div>
      </section>}
    </PageWrapper>
  );
}
