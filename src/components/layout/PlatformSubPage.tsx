"use client";

/**
 * PlatformSubPage — Shared layout for all Platform sub-pages
 * Typography spec (corrected):
 *   h2: 48px/300/-0.01em — hero banner headline ONLY
 *   h3: 40px/400/0.005em — section headings (overview, capabilities, steps, CTA)
 *   h6: 20px/500/0.01em  — card/step titles within grids
 *   p:  16px/400/0.01em  — body text
 *   labels: 12px/600/0.08em uppercase — eyebrows
 */
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { ArrowRight, Check } from "lucide-react";
import { Nav, Footer } from "@/components/Layout";

export interface PlatformFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface PlatformStep {
  num: string;
  title: string;
  desc: string;
}

export interface PlatformBenefit {
  stat: string;
  label: string;
}

export interface PlatformSubPageProps {
  label: string;
  title: string;
  subtitle: string;
  heroBullets?: string[];
  overviewTitle: string;
  overviewBody: string;
  overviewImageAlt?: string;
  overviewImageUrl?: string;
  capabilitiesTitle: string;
  capabilities: PlatformFeature[];
  stepsTitle: string;
  steps: PlatformStep[];
  benefits: PlatformBenefit[];
  relatedPages: { label: string; href: string; active?: boolean }[];
}

export default function PlatformSubPage({
  label,
  title,
  subtitle,
  heroBullets = [],
  overviewTitle,
  overviewBody,
  overviewImageUrl,
  overviewImageAlt,
  capabilitiesTitle,
  capabilities,
  stepsTitle,
  steps,
  benefits,
  relatedPages,
}: PlatformSubPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <style>{`
        @media (max-width: 1023px) {
          .psp-hero { height: auto !important; min-height: 400px !important; overflow: visible !important; }
          .psp-hero-grid { grid-template-columns: 1fr !important; }
          .psp-hero-nav { display: none !important; }
          .psp-overview-grid { grid-template-columns: 1fr !important; }
          .psp-caps-grid { grid-template-columns: 1fr 1fr !important; }
          .psp-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .psp-benefits-grid { grid-template-columns: 1fr 1fr !important; }
          .psp-section-pad { padding: 0 32px !important; }
          .psp-hero-container { padding: 64px 32px 64px !important; }
        }
        @media (max-width: 767px) {
          .psp-hero { min-height: 280px !important; }
          .psp-hero-container { padding: 48px 20px 48px !important; }
          .psp-hero h2 { font-size: var(--fs-xl) !important; line-height: var(--lh-xl) !important; }
          .psp-caps-grid { grid-template-columns: 1fr !important; }
          .psp-steps-grid { grid-template-columns: 1fr !important; }
          .psp-benefits-grid { grid-template-columns: 1fr 1fr !important; }
          .psp-section-pad { padding: 0 20px !important; }
          .psp-section { padding: 48px 0 !important; }
          .psp-h3 { font-size: var(--fs-xl) !important; line-height: var(--lh-xl) !important; }
        }
      `}</style>
      <main className="flex-1">

        {/* ── HERO ── h2: 48px/300/-0.01em (banner headline) */}
        <section
          className="psp-hero"
          style={{ backgroundColor: "#082b45", height: "500px", overflow: "hidden", display: "flex", alignItems: "flex-start", position: "relative" }}
        >
          {/* Subtle grid pattern */}
          <div
            style={{
              position: "absolute", inset: 0, opacity: 0.04,
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="psp-hero-container" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "96px 48px 96px", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
            <div className="psp-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "48px", alignItems: "center" }}>
              {/* Left: text */}
              <div>
                {/* Breadcrumb */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "var(--fs-sm)", color: "rgba(255,255,255,0.40)", marginBottom: "32px", letterSpacing: "0.08em" }}>
                  <LangLink href="/platform" style={{ color: "rgba(255,255,255,0.40)", textDecoration: "none" }}>Platform</LangLink>
                  <span>/</span>
                  <span style={{ color: "rgba(255,255,255,0.70)" }}>{label}</span>
                </div>
                {/* Eyebrow label */}
                <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>
                  {label}
                </div>
                {/* h2 — banner headline: 48px/300/-0.01em */}
                <h2 style={{ fontSize: "var(--fs-3xl)", fontWeight: 300, lineHeight: "var(--lh-3xl)", letterSpacing: "-0.01em", color: "#ffffff", margin: "0 0 32px", maxWidth: "600px" }}>
                  {title}
                </h2>
                <p style={{ fontSize: "var(--fs-base)", color: "rgba(255,255,255,0.65)", lineHeight: "var(--lh-base)", letterSpacing: "0.01em", margin: "0 0 32px", maxWidth: "520px" }}>
                  {subtitle}
                </p>
                {heroBullets.length > 0 && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                    {heroBullets.map((b, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "var(--fs-base)", color: "rgba(255,255,255,0.70)", letterSpacing: "0.01em" }}>
                        <span style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#0074D9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Check size={10} strokeWidth={3} color="white" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right: related nav — hidden on tablet/mobile via CSS */}
              <div className="psp-hero-nav" style={{ border: "1px solid rgba(255,255,255,0.10)", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.04)" }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                  <span style={{ fontSize: "var(--fs-sm)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)" }}>Platform</span>
                </div>
                {relatedPages.map((p) => (
                  <LangLink
                    key={p.href}
                    href={p.href}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none", fontSize: "var(--fs-base)", fontWeight: 500, letterSpacing: "0.01em",
                      color: p.active ? "#00ADF0" : "rgba(255,255,255,0.60)",
                      backgroundColor: p.active ? "rgba(255,255,255,0.10)" : "transparent",
                    }}
                  >
                    <span>{p.label}</span>
                    {p.active && <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#00ADF0" }} />}
                  </LangLink>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS STRIP ── stat numbers: 40px/300 */}
        <section style={{ padding: "48px 0", borderBottom: "1px solid #dde0e6", backgroundColor: "#f7f9fc" }}>
          <div className="psp-section-pad" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
            <div className="psp-benefits-grid grid-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", borderLeft: "1px solid #dde0e6" }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ padding: "0 24px", borderRight: "1px solid #dde0e6", textAlign: "center" }}>
                  <div style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "-0.01em", color: "#082b45" }}>{b.stat}</div>
                  <div style={{ fontSize: "var(--fs-sm)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5a6a7a", marginTop: "16px" }}>{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ── h3: 40px/400/0.005em (section heading) */}
        <section className="psp-section" style={{ padding: "64px 0", backgroundColor: "#ffffff" }}>
          <div className="psp-section-pad" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
            <div className="psp-overview-grid grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
              <div>
                <div className="u-label" style={{ marginBottom: "16px" }}>Overview</div>
                {/* h3 — section heading: 40px/400/0.005em */}
                <h3 className="psp-h3" style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "#0f1e2b", margin: "0 0 32px" }}>
                  {overviewTitle}
                </h3>
                <p style={{ fontSize: "var(--fs-base)", color: "#3a4a58", lineHeight: "var(--lh-base)", letterSpacing: "0.01em", margin: "0 0 32px" }}>
                  {overviewBody}
                </p>
                <LangLink href="/book-demo" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  See it in action <ArrowRight size={15} />
                </LangLink>
              </div>
              <div style={{ backgroundColor: "#eef1f6", minHeight: "320px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {overviewImageUrl ? (
                  <img src={overviewImageUrl} alt={overviewImageAlt ?? title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: "64px", height: "64px", margin: "0 auto 16px", backgroundColor: "#082b45", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "var(--fs-lg)" }}>ðŸ“Š</span>
                    </div>
                    <div style={{ fontSize: "var(--fs-sm)", color: "#8a9aaa", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>{label}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES GRID ── h3: 40px/400/0.005em, h6: 20px/500/0.01em */}
        <section className="psp-section" style={{ padding: "64px 0", backgroundColor: "#f2f4f6" }}>
          <div className="psp-section-pad" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div className="u-label" style={{ marginBottom: "16px" }}>Capabilities</div>
              {/* h3 — section heading: 40px/400/0.005em */}
              <h3 className="psp-h3" style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "#0f1e2b", margin: 0 }}>
                {capabilitiesTitle}
              </h3>
            </div>
            <div className="psp-caps-grid grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {capabilities.map((cap, i) => (
                <div key={i} style={{ backgroundColor: "#ffffff", padding: "32px", border: "1px solid #dde0e6", borderRadius: "4px" }}>
                  <div style={{ fontSize: "var(--fs-lg)", marginBottom: "16px" }}>{cap.icon}</div>
                  {/* h6 — card title: 20px/500/0.01em */}
                  <h6 style={{ fontSize: "var(--fs-md)", fontWeight: 500, lineHeight: "var(--lh-md)", letterSpacing: "0.01em", color: "#0f1e2b", margin: "0 0 16px" }}>
                    {cap.title}
                  </h6>
                  <p style={{ fontSize: "var(--fs-base)", color: "#5a6a7a", lineHeight: "var(--lh-base)", letterSpacing: "0.01em", margin: 0 }}>
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── h3: 40px/400/0.005em, h6: 20px/500/0.01em */}
        <section className="psp-section" style={{ padding: "64px 0", backgroundColor: "#ffffff" }}>
          <div className="psp-section-pad" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div className="u-label" style={{ marginBottom: "16px" }}>Process</div>
              {/* h3 — section heading: 40px/400/0.005em */}
              <h3 className="psp-h3" style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "#0f1e2b", margin: 0 }}>
                {stepsTitle}
              </h3>
            </div>
            <div className="psp-steps-grid grid-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
              {steps.map((step, i) => (
                <div key={i} style={{ position: "relative" }}>
                  {i < steps.length - 1 && (
                    <div style={{
                      position: "absolute", top: "20px", left: "40px",
                      width: "calc(100% - 40px)", height: "1px",
                      backgroundColor: "#dde0e6",
                    }} />
                  )}
                  <div style={{
                    width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: "#082b45", color: "#ffffff", fontWeight: 700,
                    fontSize: "var(--fs-sm)", letterSpacing: "0.08em", marginBottom: "16px",
                  }}>
                    {step.num}
                  </div>
                  {/* h6 — step title: 20px/500/0.01em */}
                  <h6 style={{ fontSize: "var(--fs-md)", fontWeight: 500, lineHeight: "var(--lh-md)", letterSpacing: "0.01em", color: "#0f1e2b", margin: "0 0 16px" }}>
                    {step.title}
                  </h6>
                  <p style={{ fontSize: "var(--fs-base)", color: "#5a6a7a", lineHeight: "var(--lh-base)", letterSpacing: "0.01em", margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── h3: 40px/400/0.005em */}
        <section className="psp-section" style={{ padding: "96px 0", backgroundColor: "#082b45" }}>
          <div className="psp-section-pad" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box", textAlign: "center" }}>
            {/* h3 — CTA heading: 40px/400/0.005em */}
            <h3 className="psp-h3" style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "#ffffff", margin: "0 0 16px" }}>
              Ready to see {title} in action?
            </h3>
            <p style={{ fontSize: "var(--fs-base)", color: "rgba(255,255,255,0.60)", lineHeight: "var(--lh-base)", letterSpacing: "0.01em", maxWidth: "480px", margin: "0 auto 32px" }}>
              Join 1,400+ listed companies across 60+ stock exchanges who rely on Euroland IR for their Investor Relations platform.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
              <LangLink href="/book-demo" className="btn-primary">
                Book a Demo <ArrowRight size={16} />
              </LangLink>
              <LangLink href="/contact" className="btn-secondary">
                Talk to Us
              </LangLink>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

