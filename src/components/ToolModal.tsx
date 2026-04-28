"use client";

/**
 * TOOL MODAL — Euroland IR
 * Exact structure from Netlify reference DOM audit at 1280px viewport
 * Overlay: position:fixed, z:1000, bg:rgba(8,27,42,0.8)
 * Modal: 1216×596px, display:flex, 2 cols 608px each, border-radius:16px
 * Left panel: navy bg(8,43,69), padding:44px 40px, animation placeholder
 * Right panel: white, padding:44px 40px, header+divider+features+impact+buttons
 */
import { useEffect, useRef } from "react";
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
  /** Legacy fields — kept for backward compat with IRTools.tsx */
  iconLabel?: string;
  benefits?: string[];
}

interface ToolModalProps {
  modal: ModalData | null;
  onClose: () => void;
}

export default function ToolModal({ modal, onClose }: ToolModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

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
        animation: "fadeIn 160ms ease",
      }}
    >
      {/* Modal card: 1216×596px, 2 equal columns */}
      <div
        style={{
          width: "1216px",
          maxWidth: "calc(100vw - 48px)",
          height: "596px",
          maxHeight: "90vh",
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
          style={{
            width: "608px",
            flexShrink: 0,
            background: "rgb(8, 43, 69)",
            padding: "44px 40px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative orb top-left */}
          <div
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
              width: "528px",
              height: "508px",
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
            {/* Play icon */}
            <div
              style={{
                width: "56px",
                height: "56px",
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
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
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
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.01em",
                color: "rgba(255, 255, 255, 0.18)",
                textAlign: "center",
              }}
            >
              {modal.title}         </div>
          </div>
        </div>

        {/* RIGHT PANEL — white, 608px */}
        <div
          style={{
            flex: 1,
            background: "rgb(255, 255, 255)",
            padding: "44px 40px",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
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
          <div style={{ paddingRight: "44px", marginBottom: "16px" }}>
            {/* Eyebrow: 12px/700/24px/0.96px, color:rgb(156,163,175) */}
            <div
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.96px",
                color: "rgb(156, 163, 175)",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              {modal.eyebrow}
            </div>
            {/* Title: 20px/400/28px/0.1px — from typography-export row 55 */}
            <h4 className="type-h6"
              style={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "28px",
                letterSpacing: "0.1px",
                color: "rgb(13, 31, 45)",
                margin: "0 0 8px 0",
              }}
            >
              {modal.title}
            </h4>
            {/* Subtitle: 16px/400/24px/0.16px */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
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
              width: "36px",
              height: "2px",
              background: "rgb(0, 173, 240)",
              borderRadius: "4px",
              marginBottom: "16px",
            }}
          />

          {/* KEY FEATURES label: 12px/700/24px/0.96px, color:rgb(156,163,175) */}
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0.96px",
              color: "rgb(156, 163, 175)",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            KEY FEATURES
          </div>

          {/* Features list: flex col, gap:8px, each li: flex row, gap:12px */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 16px 0",
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
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
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
                    background: "rgb(0, 107, 163)",
                    flexShrink: 0,
                  }}
                />
                {f}
              </li>
            ))}
          </ul>

          {/* IMPACT label */}
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0.96px",
              color: "rgb(156, 163, 175)",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
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
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
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
            <LangLink href="/book-demo" className="btn-primary">
              Book a Demo
            </LangLink>
            <LangLink href={modal.learnMoreHref || "#"} className="btn-secondary">
              Learn More
            </LangLink>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
