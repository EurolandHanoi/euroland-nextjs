"use client";

import { useEffect, useRef } from "react";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { PageWrapper } from "@/components/Layout";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

const TEAM_VALUES = [
  { num: "01", title: "Transparency", desc: "We believe in open, honest communication — with our clients, our partners, and the capital markets we serve." },
  { num: "02", title: "Innovation", desc: "We continuously invest in technology to keep IR teams ahead of regulatory and market demands." },
  { num: "03", title: "Partnership", desc: "We work alongside our clients as long-term partners, not just software vendors." },
  { num: "04", title: "Excellence", desc: "Award-winning design and engineering standards applied to every product we ship." },
];

export default function AboutUs() {
  const f1 = useFadeUp(); const f2 = useFadeUp(); const f3 = useFadeUp(); const f4 = useFadeUp();
  return (
    <PageWrapper>
      {/* Hero */}
      <BannerHero
        variant="resources"
        label="Company"
        title="About Euroland IR"
        subtitle="Best-practice IR solutions and purpose-built AI for investor relations, trusted by more than 1,400 publicly listed companies across 60+ stock exchanges worldwide."
      />

      {/* Intro */}
      <section style={{ background: "rgb(255,255,255)", padding: "80px 0" }}>
        <div className="container inner-container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f1} className="fade-up flex-col-mobile" style={{ display: "flex", gap: "48px", alignItems: "center" }}>
            {/* Left: video */}
            <div className="mobile-full-w" style={{ width: "688px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", background: "rgb(8,43,69)", aspectRatio: "16/9" }}>
              <video
                src="/Euroland_IR_Video.mp4"
                controls
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                preload="metadata"
              />
            </div>
            {/* Right: card */}
            <div className="card" style={{ flex: 1, padding: "40px" }}>
              <div className="u-label" style={{ marginBottom: "16px" }}>Euroland IR</div>
              <h4 style={{ fontSize: "32px", fontWeight: 400, lineHeight: "40px", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: "0 0 24px" }}>Award-winning IR technology</h4>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", color: "rgb(58,74,88)", margin: "0 0 16px" }}>
                Euroland IR has been shaping the practice of Investor Relations for over two decades. Founded with a deep understanding of capital markets and the evolving needs of publicly listed companies, we combine long-standing IR expertise with modern financial technology to support IR teams worldwide.
              </p>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", color: "rgb(58,74,88)", margin: 0 }}>
                Today, we serve 1,400+ listed companies across 60+ stock exchanges, providing the tools, data, and expertise they need to communicate effectively with investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "rgb(246,248,250)", padding: "80px 0" }}>
        <div className="container inner-container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f2} className="fade-up" style={{ marginBottom: "48px" }}>
            <div className="u-label" style={{ marginBottom: "16px" }}>Our Values</div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: 0 }}>What drives us</h3>
          </div>
          <div className="grid-4col">
            {TEAM_VALUES.map((v) => (
              <div key={v.num} className="card" style={{ padding: "40px" }}>
                <div className="num-label" style={{ marginBottom: "16px" }}>{v.num}</div>
                <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: "0 0 12px" }}>{v.title}</h5>
                <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: "26px", color: "rgb(58,74,88)", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: "rgb(255,255,255)", padding: "80px 0" }}>
        <div className="container inner-container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f3} className="fade-up card mobile-full-w" style={{ width: "900px", margin: "0 auto", padding: "48px", textAlign: "center" }}>
            <p style={{ fontSize: "24px", fontWeight: 300, lineHeight: "40px", color: "rgb(13,27,42)", margin: 0 }}>
              "We are stewards of optimal stakeholder value and are committed to making capital markets more accessible, transparent, and connected."
            </p>
          </div>
        </div>
      </section>

      {/* Work With Us */}
      <section style={{ background: "rgb(246,248,250)", padding: "80px 0" }}>
        <div className="container inner-container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f4} className="fade-up flex-col-mobile" style={{ display: "flex", gap: "48px", alignItems: "center" }}>
            {/* Left */}
            <div className="mobile-full-w" style={{ width: "688px", flexShrink: 0 }}>
              <div className="u-label" style={{ marginBottom: "16px" }}>Careers</div>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: "0 0 24px" }}>Global delivery with a collaborative culture</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", color: "rgb(58,74,88)", margin: "0 0 32px" }}>We combine international reach with a close-working, low-ego culture across our offices, helping listed companies get consistent support from teams that understand IR in practice.</p>
              <LangLink href="/company/careers" className="btn-outline">View Openings</LangLink>
            </div>
            {/* Right: world map panel */}
            <div style={{ flex: 1, minHeight: "200px", borderRadius: "8px", overflow: "hidden" }}>
              <img
                src="/Eurolandoffices11.svg"
                alt="Euroland IR global offices"
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="cta-band">
        <div className="container inner-container" style={{ maxWidth: "1536px", padding: "0 48px", textAlign: "center" }}>
          <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>Get Started</div>
          <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(255,255,255)", margin: "0 0 32px" }}>
            Ready to transform your investor relations?
          </h3>
          <div className="flex-wrap-mobile" style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <LangLink href="/book-demo" className="btn-primary">Book a Demo</LangLink>
            <LangLink href="/contact" className="btn-secondary">Talk to Us</LangLink>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}
