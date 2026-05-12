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
import {
  EVENT_HIGHLIGHTS,
  EVENT_HIGHLIGHT_TAG_COLORS,
  getEventHighlightBySlug,
  getOtherEventHighlights,
} from "@/data/eventsHighlights";

export default function EventsHighlightsDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || EVENT_HIGHLIGHTS[0].slug;
  const event = getEventHighlightBySlug(slug) || EVENT_HIGHLIGHTS[0];
  const others = getOtherEventHighlights(event.slug);
  const tagColor = EVENT_HIGHLIGHT_TAG_COLORS[event.tag] || "rgb(0, 116, 217)";
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
          style={{ maxWidth: "1536px", padding: "64px 48px 64px", position: "relative", zIndex: 1 }}
        >
          {/* Breadcrumb */}
          <LangLink href="/company/newsroom"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "var(--fs-sm)", fontWeight: 400, lineHeight: "var(--lh-base)", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "32px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Newsroom
          </LangLink>

          <div style={{ maxWidth: "720px" }}>
            {/* Heading */}
            <h2 className="banner-hero-title type-h2" style={{ fontSize: "var(--fs-3xl)", fontWeight: 300, lineHeight: "var(--lh-3xl)", letterSpacing: "-0.01em", color: "#ffffff", margin: "0 0 32px" }}>
              Events &amp; Highlights
            </h2>
            {/* Date · Location as subtitle */}
            <p className="banner-hero-subtitle" style={{ fontSize: "var(--fs-md)", fontWeight: 400, lineHeight: "var(--lh-md)", color: "rgba(255,255,255,0.72)", margin: 0 }}>
              {event.date} · {event.location}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. CONTENT SECTION (y:480–1844) ──────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "rgb(248, 249, 250)",
          padding: "64px 0",
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
                fontSize: "var(--fs-lg)",
                fontWeight: 500,
                lineHeight: "var(--lh-lg)",
                letterSpacing: "0.005em",
                color: "rgb(13, 27, 42)",
                margin: "0 0 16px",
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
                marginBottom: "16px",
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
                          background: i === activeIndex ? "#00ADF0" : "rgba(255,255,255,0.45)",
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
                      border: i === activeIndex ? "2px solid #00ADF0" : "2px solid transparent",
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
                    marginBottom: "16px",
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
                padding: "32px",
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
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "var(--label-blue-light)",
                  }}
                >
                  ABOUT THIS EVENT
                </span>
                <div
                  style={{
                    width: "25%",
                    height: "2px",
                    backgroundColor: "var(--label-blue-light)",
                  }}
                />
              </div>

              {/* h4 — y:1314 h:40 */}
              <h4 className="type-h5"
                style={{
                  fontSize: "var(--fs-lg)",
                  fontWeight: 500,
                  lineHeight: "var(--lh-lg)",
                  letterSpacing: "0.01em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 32px",
                }}
              >
                Event overview
              </h4>

              {/* Body paragraphs — y:1378–1662 h:56 each */}
              {event.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-md)",
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
                  fontSize: "var(--fs-sm)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
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
                  marginBottom: "32px",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "var(--label-blue-light)",
                  }}
                >
                  EVENT DETAILS
                </span>
                <div
                  style={{
                    width: "25%",
                    height: "2px",
                    backgroundColor: "var(--label-blue-light)",
                  }}
                />
              </div>

              {/* DATE — y:632 h:69 */}
              <div
                style={{
                  marginBottom: "32px",
                  paddingBottom: "32px",
                  borderBottom: "1px solid rgb(229, 231, 235)",
                }}
              >
                <div
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(58, 74, 88)",
                    marginBottom: "16px",
                  }}
                >
                  DATE
                </div>
                <div
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 500,
                    lineHeight: "var(--lh-base)",
                    color: "rgb(13, 27, 42)",
                  }}
                >
                  {event.date}
                </div>
              </div>

              {/* LOCATION — y:721 h:69 */}
              <div
                style={{
                  marginBottom: "32px",
                  paddingBottom: "32px",
                  borderBottom: "1px solid rgb(229, 231, 235)",
                }}
              >
                <div
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(58, 74, 88)",
                    marginBottom: "16px",
                  }}
                >
                  LOCATION
                </div>
                <div
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 500,
                    lineHeight: "var(--lh-base)",
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
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(58, 74, 88)",
                    marginBottom: "16px",
                  }}
                >
                  TYPE
                </div>
                <div
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 500,
                    lineHeight: "var(--lh-base)",
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
                  marginBottom: "32px",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "var(--label-blue-light)",
                  }}
                >
                  OTHER HIGHLIGHTS
                </span>
                <div
                  style={{
                    width: "25%",
                    height: "2px",
                    backgroundColor: "var(--label-blue-light)",
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
                        padding: "16px 0",
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
                            fontSize: "var(--fs-sm)",
                            fontWeight: 400,
                            lineHeight: "var(--lh-base)",
                            color: "rgb(58, 74, 88)",
                          }}
                        >
                          {other.date}
                        </div>
                        <div
                          style={{
                            fontSize: "var(--fs-sm)",
                            fontWeight: 500,
                            lineHeight: "var(--lh-sm)",
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
                    fontSize: "var(--fs-sm)",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    color: "rgb(0, 116, 217)",
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
                  marginBottom: "32px",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "var(--label-blue-light)",
                  }}
                >
                  SHARE
                </span>
                <div
                  style={{
                    width: "25%",
                    height: "2px",
                    backgroundColor: "var(--label-blue-light)",
                  }}
                />
              </div>

              {/* Share buttons — y:1482 h:50 each (w:71 / 69 / 70) */}
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { label: "IN", title: "Share on LinkedIn" },
                  { label: "ð•", title: "Share on X" },
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
                      fontSize: "var(--fs-base)",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background-color 200ms ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "var(--button-blue-hover)")
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
                  fontSize: "var(--fs-sm)",
                  fontWeight: 400,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  color: "var(--label-blue-light)",
                }}
              >
                STAY CONNECTED
              </span>
              <div
                style={{
                  width: "25%",
                  height: "2px",
                  backgroundColor: "var(--label-blue-light)",
                }}
              />
            </div>
            {/* H3 — y:1975 h:48 */}
            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                fontWeight: 300,
                lineHeight: "var(--lh-2xl)",
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
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
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
                padding: "16px 24px",
                backgroundColor: "var(--button-blue)",
                color: "rgb(255, 255, 255)",
                fontSize: "var(--fs-sm)",
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


