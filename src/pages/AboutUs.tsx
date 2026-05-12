"use client";

import { useEffect, useRef } from "react";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { PageWrapper } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();
  const f1 = useFadeUp(); const f2 = useFadeUp(); const f3 = useFadeUp(); const f4 = useFadeUp();
  const teamValues = [
    { num: "01", title: t("aboutus_value_transparency_title", "Transparency"), desc: t("aboutus_value_transparency_desc", "We believe in open, honest communication with our clients, our partners, and the capital markets we serve.") },
    { num: "02", title: t("aboutus_value_innovation_title", "Innovation"), desc: t("aboutus_value_innovation_desc", "We continuously invest in technology to keep IR teams ahead of regulatory and market demands.") },
    { num: "03", title: t("aboutus_value_partnership_title", "Partnership"), desc: t("aboutus_value_partnership_desc", "We work alongside our clients as long-term partners, not just software vendors.") },
    { num: "04", title: t("aboutus_value_excellence_title", "Excellence"), desc: t("aboutus_value_excellence_desc", "Award-winning design and engineering standards applied to every product we ship.") },
  ];
  return (
    <PageWrapper>
      {/* Hero */}
      <BannerHero
        variant="resources"
        label={t("aboutus_hero_label", "Company")}
        title={t("aboutus_hero_title", "About Euroland IR")}
        subtitle={t("aboutus_hero_subtitle", "Award-winning IR Solutions, best practice IR tools, and purpose built AI for listed companies worldwide.")}
        backgroundImage="/hero-bg_c3bbfd60.jpg"
      />

      {/* Intro */}
      <section style={{ background: "rgb(255,255,255)", padding: "64px 0" }}>
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
            <div className="card" style={{ flex: 1, padding: "32px" }}>
              <div className="u-label" style={{ marginBottom: "16px" }}>{t("aboutus_intro_label", "Euroland IR")}</div>
              <h4 style={{ fontSize: "var(--fs-xl)", fontWeight: 400, lineHeight: "var(--lh-xl)", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: "0 0 32px" }}>{t("aboutus_intro_title", "Award-winning IR technology and managed digital solutions")}</h4>
              <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", color: "rgb(58,74,88)", margin: "0 0 16px" }}>
                {t("aboutus_intro_body_1", "Euroland IR has created professional Investor Relations solutions for more than 25 years. Founded with a deep understanding of capital markets and the evolving needs of listed companies, we combine long-standing IR expertise with modern financial technology to support IR teams worldwide.")}
              </p>
              <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", color: "rgb(58,74,88)", margin: 0 }}>
                {t("aboutus_intro_body_2", "Today, we serve 1,400+ listed companies across 60+ stock exchanges, providing the tools, data, AI capabilities, and service support they need to communicate effectively with investors.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "rgb(246,248,250)", padding: "64px 0" }}>
        <div className="container inner-container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f2} className="fade-up" style={{ marginBottom: "48px" }}>
            <div className="u-label" style={{ marginBottom: "16px" }}>{t("about_values_label", "Our Values")}</div>
            <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: 0 }}>{t("about_values_title", "What drives us")}</h3>
          </div>
          <div className="grid-4col">
            {teamValues.map((v) => (
              <div key={v.num} className="card" style={{ padding: "32px" }}>
                <div className="num-label" style={{ marginBottom: "16px" }}>{v.num}</div>
                <h5 style={{ fontSize: "var(--fs-lg)", fontWeight: 500, lineHeight: "var(--lh-lg)", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: "0 0 16px" }}>{v.title}</h5>
                <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", color: "rgb(58,74,88)", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: "rgb(255,255,255)", padding: "64px 0" }}>
        <div className="container inner-container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f3} className="fade-up card mobile-full-w" style={{ width: "900px", margin: "0 auto", padding: "48px", textAlign: "center" }}>
            <p style={{ fontSize: "var(--fs-lg)", fontWeight: 300, lineHeight: "var(--lh-xl)", color: "rgb(13,27,42)", margin: 0 }}>
              "{t("aboutus_quote", "We work in long-term partnership with listed companies, with a focus on reliability, clarity, service, and continuous improvement.")}"
            </p>
          </div>
        </div>
      </section>

      {/* Work With Us */}
      <section style={{ background: "rgb(246,248,250)", padding: "64px 0" }}>
        <div className="container inner-container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f4} className="fade-up flex-col-mobile" style={{ display: "flex", gap: "48px", alignItems: "center" }}>
            {/* Left */}
            <div className="mobile-full-w" style={{ width: "688px", flexShrink: 0 }}>
              <div className="u-label" style={{ marginBottom: "16px" }}>{t("aboutus_careers_label", "Careers")}</div>
              <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: "0 0 32px" }}>{t("aboutus_careers_title", "Global delivery with a collaborative culture")}</h3>
              <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", color: "rgb(58,74,88)", margin: "0 0 32px" }}>{t("aboutus_careers_body", "We combine international reach with a collaborative service culture across our offices, helping listed companies receive consistent support from teams that understand Investor Relations in practice.")}</p>
              <LangLink href="/company/careers" className="btn-outline">{t("aboutus_careers_cta", "View Openings")}</LangLink>
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
          <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>{t("get_started", "Get Started")}</div>
          <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(255,255,255)", margin: "0 0 32px" }}>
            {t("aboutus_cta_title", "Ready to transform your Investor Relations?")}
          </h3>
          <div className="flex-wrap-mobile" style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <LangLink href="/book-demo" className="btn-primary">{t("common_book_demo", "Book a Demo")}</LangLink>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}

