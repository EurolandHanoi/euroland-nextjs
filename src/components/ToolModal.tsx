"use client";

/**
 * TOOL MODAL — Euroland IR
 * Exact structure from Netlify reference DOM audit at 1280px viewport
 * Overlay: position:fixed, z:1000, bg:rgba(8,27,42,0.8)
 * Modal: 1216×596px, display:flex, 2 cols 608px each, border-radius:16px
 * Left panel: navy bg(8,43,69), padding:48px 40px, animation placeholder
 * Right panel: white, padding:48px 40px, header+divider+features+impact+buttons
 */
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import LangLink from "@/components/LangLink";

export interface ModalData {
  id: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
  features: string[];
  impact?: string[];
  learnMoreHref?: string;
  animationVideoSrc?: string;
  animationImageSrcs?: string[];
  animationVariant?: "investor-calendar";
  /** Legacy fields — kept for backward compat with IRTools.tsx */
  iconLabel?: string;
  benefits?: string[];
}

interface ToolModalProps {
  modal: ModalData | null;
  onClose: () => void;
}

function InvestorCalendarPreview() {
  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];
  const events = [
    ["29/04/2026", "Year 2026 3-month interim report"],
    ["22/07/2026", "Year 2026 6-month half-year financial report"],
    ["29/10/2026", "Year 2026 9-month interim report"],
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#ffffff",
        color: "#111827",
        padding: "16px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <h3 style={{ margin: "0 0 14px", textAlign: "center", color: "#c94a00", fontSize: "var(--fs-lg)", lineHeight: "var(--lh-lg)", fontWeight: 800, letterSpacing: "0.06em" }}>
        INVESTOR CALENDAR
      </h3>
      <div style={{ fontSize: "var(--fs-sm)", lineHeight: "var(--lh-sm)", marginBottom: "16px" }}>
        <strong style={{ display: "block", marginBottom: "16px" }}>Next Event:</strong>
        <strong style={{ display: "block" }}>29/04/2026</strong>
        <span>Year 2026 3-month interim report</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", border: "1px solid #e5e7eb", marginBottom: "16px" }}>
        {months.map((month) => (
          <div
            key={month}
            style={{
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid #e5e7eb",
              background: month === "Apr" ? "#e8e8e8" : "#ffffff",
              fontSize: "var(--fs-sm)",
              position: "relative",
            }}
          >
            {month}
            {["Mar", "Apr", "Jul", "Oct"].includes(month) && (
              <span style={{ position: "absolute", bottom: "3px", width: "2px", height: "2px", borderRadius: "50%", background: "#0057b8" }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div>
          <strong style={{ display: "block", fontSize: "var(--fs-sm)", marginBottom: "16px" }}>Download all upcoming events</strong>
          <div style={{ width: "22px", height: "22px", borderRadius: "4px", background: "#d7e8ef", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6", fontSize: "var(--fs-sm)" }}>▦</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "var(--fs-sm)", marginBottom: "16px" }}>Subscribe for events</strong>
          <button style={{ border: 0, background: "#092b67", color: "#ffffff", padding: "16px 12px", fontSize: "var(--fs-sm)", fontWeight: 700 }}>
            Subscribe
          </button>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #6b7280", display: "flex", gap: "8px", fontSize: "var(--fs-sm)", marginBottom: "16px" }}>
        <span style={{ border: "1px solid #6b7280", borderBottom: "0", padding: "16px 10px", color: "#4b5563" }}>Upcoming Events</span>
        <span style={{ padding: "16px 10px", color: "#05245c" }}>Past Events</span>
      </div>
      <div style={{ fontSize: "var(--fs-sm)", lineHeight: "var(--lh-sm)" }}>
        {events.map(([date, label]) => (
          <div key={date} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", borderBottom: "1px solid #e5e7eb", padding: "16px 0" }}>
            <div>
              <strong style={{ display: "block", marginBottom: "16px" }}>{date}</strong>
              <span>{label}</span>
            </div>
            <strong style={{ alignSelf: "center" }}>Results</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolModal({ modal, onClose }: ToolModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isAppsCarousel = modal?.id === "ir-apps" && Boolean(modal?.animationImageSrcs?.length);

  useEffect(() => {
    if (!modal) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [modal, onClose]);

  useEffect(() => {
    setActiveImageIndex(0);
    if (!modal?.animationImageSrcs?.length) return;
    const interval = window.setInterval(() => {
      setActiveImageIndex((index) => (index + 1) % modal.animationImageSrcs!.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [modal]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!modal) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(8, 27, 42, 0.8)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
        padding: "24px",
        boxSizing: "border-box",
        animation: "fadeIn 160ms ease",
      }}
    >
      {/* Modal card: 1216×596px, 2 equal columns */}
      <div
        className="tool-modal-card"
        style={{
          width: "1248px",
          maxWidth: "calc(100vw - 48px)",
          height: "640px",
          display: "flex",
          flexDirection: "row",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(8, 43, 69, 0.4)",
          animation: "slideUp 200ms ease",
        }}
      >
        {/* LEFT PANEL — navy, 608px, animation placeholder */}
        <div
          className="tool-modal-media-panel"
          style={{
            width: "624px",
            flexShrink: 0,
            flexBasis: "624px",
            background: "rgb(8, 43, 69)",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative orb top-left */}
          <div
            className="tool-modal-animation"
            style={{
              position: "absolute",
              width: "324px",
              height: "324px",
              borderRadius: "50%",
              background: "rgba(0, 173, 240, 0.06)",
              top: "-68px",
              left: "-68px",
              pointerEvents: "none",
            }}
          />
          {/* Decorative orb bottom-right */}
          <div
            style={{
              position: "absolute",
              width: "248px",
              height: "248px",
              borderRadius: "50%",
              background: "rgba(0, 173, 240, 0.04)",
              bottom: "-80px",
              right: "-60px",
              pointerEvents: "none",
            }}
          />

          {/* Animation placeholder: 528×508px */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "560px",
              height: "576px",
              flexShrink: 0,
              background: "rgba(0, 173, 240, 0.03)",
              border: "1px dashed rgba(0, 173, 240, 0.22)",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            {modal.animationVideoSrc ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #ffffff 0%, #eef7fb 100%)",
                  padding: "16px",
                  boxSizing: "border-box",
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${modal.title} preview`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                    borderRadius: "12px",
                    background: "#ffffff",
                    boxShadow: "0 18px 48px rgba(0, 0, 0, 0.24)",
                  }}
                >
                  <source src={modal.animationVideoSrc} type="video/mp4" />
                </video>
              </div>
            ) : modal.animationImageSrcs?.length ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #ffffff 0%, #eef7fb 100%)",
                  padding: "16px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: isAppsCarousel ? "72%" : "100%",
                    height: isAppsCarousel ? "72%" : "100%",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: "#ffffff",
                    boxShadow: "0 18px 48px rgba(0, 0, 0, 0.24)",
                  }}
                >
                  <img
                    src={modal.animationImageSrcs[activeImageIndex]}
                    alt={`${modal.title} preview`}
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      display: "block",
                      borderRadius: "12px",
                      background: "#ffffff",
                    }}
                  />
                </div>
              </div>
            ) : modal.animationVariant === "investor-calendar" ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #ffffff 0%, #eef7fb 100%)",
                  padding: "32px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "480px",
                    aspectRatio: "16 / 10",
                    background: "#ffffff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 18px 48px rgba(0, 0, 0, 0.24)",
                  }}
                >
                  <InvestorCalendarPreview />
                </div>
              </div>
            ) : (
              <>
                {/* Play icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1px solid rgba(0, 173, 240, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "8px solid transparent",
                      borderBottom: "8px solid transparent",
                      borderLeft: "14px solid rgba(0, 173, 240, 0.7)",
                      marginLeft: "4px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-base)",
                    letterSpacing: "1.2px",
                    color: "rgba(255, 255, 255, 0.28)",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  ANIMATION AREA
                </div>
                <div
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-sm)",
                    letterSpacing: "0.01em",
                    color: "rgba(255, 255, 255, 0.18)",
                    textAlign: "center",
                  }}
                >
                  {modal.title}
                </div>
              </>
            )}
          </div>
        </div>

        {/* RIGHT PANEL — white, 608px */}
        <div
          className="tool-modal-content-panel"
          style={{
            width: "624px",
            flexShrink: 0,
            flexBasis: "624px",
            background: "rgb(255, 255, 255)",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            overflow: "visible",
            position: "relative",
          }}
        >
          {/* Close button — top-right */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgb(221, 224, 230)",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "rgb(107, 114, 128)",
              transition: "background 160ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgb(245, 245, 245)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            <X size={16} strokeWidth={2} />
          </button>

          {/* Header block: 528×92px, padding-right:44px */}
          <div style={{ paddingRight: "44px", marginBottom: "12px" }}>
            {/* Eyebrow: 12px/700/24px/0.96px, color:rgb(156,163,175) */}
            <div className="u-label" style={{ marginBottom: "12px", display: "inline-block" }}>
              {modal.eyebrow}
            </div>
            {/* Title: 20px/400/28px/0.1px — from typography-export row 55 */}
            <h4 className="type-h5"
              style={{
                fontSize: "var(--fs-lg)",
                fontWeight: 600,
                lineHeight: "var(--lh-lg)",
                letterSpacing: "var(--ls-h4)",
                color: "rgb(13, 31, 45)",
                margin: "0 0 12px 0",
              }}
            >
              {modal.title}
            </h4>
            {/* Subtitle: 16px/400/24px/0.16px */}
            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgb(71, 85, 105)",
                margin: 0,
              }}
            >
              {modal.subtitle}
            </p>
          </div>

          {/* Divider bar: 36×2px, bg:rgb(0,173,240), border-radius:4px */}
          <div
              style={{
              width: "64px",
              height: "2px",
              background: "rgb(0, 173, 240)",
              borderRadius: "4px",
              marginBottom: "12px",
            }}
          />

          <div className="u-label" style={{ marginBottom: "12px", display: "inline-block" }}>
            KEY FEATURES
          </div>

          {/* Features list: flex col, gap:8px, each li: flex row, gap:12px */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 12px 0",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {modal.features.map((f) => (
              <li
                key={f}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "var(--fs-sm)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-sm)",
                  letterSpacing: "0.01em",
                  color: "rgb(55, 65, 81)",
                }}
              >
                {/* Bullet dot: 8×8px, bg:rgb(0,107,163), border-radius:50% */}
                <span
                  style={{
                    display: "block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "rgb(0, 116, 217)",
                    flexShrink: 0,
                  }}
                />
                {f}
              </li>
            ))}
          </ul>

          {/* IMPACT label */}
          <div className="u-label" style={{ marginBottom: "12px", display: "inline-block" }}>
            IMPACT
          </div>

          {/* Impact list: same structure but bullet dot is rgb(0,173,240) */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 24px 0",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {(modal.impact || []).map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "var(--fs-sm)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-sm)",
                  letterSpacing: "0.01em",
                  color: "rgb(55, 65, 81)",
                }}
              >
                {/* Cyan bullet: rgb(0,173,240) */}
                <span
                  style={{
                    display: "block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "rgb(0, 173, 240)",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons row */}
          <div style={{ display: "flex", flexDirection: "row", gap: "12px", marginTop: "auto" }}>
            <LangLink href={modal.learnMoreHref || "#"} className="btn-secondary">
              Learn More
            </LangLink>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 767px) {
          .tool-modal-card {
            width: calc(100vw - 24px) !important;
            max-width: calc(100vw - 24px) !important;
            height: auto !important;
            min-height: 0 !important;
            flex-direction: column !important;
          }
          .tool-modal-media-panel {
            width: 100% !important;
            height: 260px !important;
            padding: 16px !important;
          }
          .tool-modal-animation {
            width: 100% !important;
            height: 100% !important;
          }
          .tool-modal-content-panel {
            padding: 32px 24px !important;
            overflow: visible !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .tool-modal-card {
            width: calc(100vw - 48px) !important;
            min-height: 0 !important;
          }
          .tool-modal-media-panel {
            width: 48% !important;
            padding: 32px 24px !important;
          }
          .tool-modal-animation {
            width: 100% !important;
            height: 100% !important;
          }
          .tool-modal-content-panel {
            padding: 32px 32px !important;
          }
        }
      `}</style>
    </div>
  );
}

