"use client";

import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { ArrowRight, Building2, Leaf, Rocket } from "lucide-react";

const SOLUTIONS = [
  {
    label: "Listed companies",
    title: "For listed companies",
    description:
      "Investor relations workflows, websites, disclosure support, market data, and stakeholder communication built for public-company teams.",
    href: "/solutions/listed-companies",
    icon: Building2,
  },
  {
    label: "IPO",
    title: "IPO solutions",
    description:
      "Launch with a dedicated investor story, IPO microsite, disclosure infrastructure, and post-listing support from day one.",
    href: "/ipo",
    icon: Rocket,
  },
  {
    label: "Sustainability",
    title: "ESG and sustainability reporting",
    description:
      "Present sustainability disclosures clearly with structured ESG pages, reporting support, and investor-ready communication tools.",
    href: "/solutions/sustainability-reporting",
    icon: Leaf,
  },
] as const;

const BUYER_NEEDS = [
  {
    title: "One platform, one delivery team",
    body: "Bring market data, investor communications, apps, analytics, and reporting workflows together without stitching together multiple vendors.",
  },
  {
    title: "Purpose-built for IR",
    body: "Every solution is grounded in public-company workflows rather than adapted from generic web or CMS tooling.",
  },
  {
    title: "Designed to support trust",
    body: "From investor-facing presentation to implementation clarity, the focus is on helping listed companies look credible to the market.",
  },
] as const;

export default function Solutions() {
  return (
    <PageWrapper>
      <BannerHero
        variant="solutions"
        label="Solutions"
        title="Solutions built around listed-company needs"
        subtitle="Use-case-led packages for public companies, IPO teams, and sustainability reporting needs - all powered by the Euroland IR platform."
        primaryCtaLabel="Book a Demo"
        primaryCtaHref="/book-demo"
        secondaryCtaLabel="Talk to Us"
        secondaryCtaHref="/contact"
      />

      <section style={{ background: "rgb(246,248,250)", padding: "80px 0" }}>
        <div className="container">
          <div style={{ marginBottom: "48px" }}>
            <div className="u-label" style={{ marginBottom: "16px" }}>Solution areas</div>
            <h2 className="type-h3" style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: 0, marginBottom: "16px" }}>
              Choose the route that matches your team and current priorities
            </h2>
            <p style={{ maxWidth: "720px", margin: 0 }}>
              This section is intentionally focused on buyer needs, not a flat catalogue of modules. Product-level detail lives in the Platform section.
            </p>
          </div>

          <div className="solutions-grid" style={{ gap: "24px" }}>
            {SOLUTIONS.map((solution) => (
              <LangLink
                key={solution.href}
                href={solution.href}
                className="card-link"
                style={{
                  padding: "40px",
                  minHeight: "100%",
                }}
              >
                <solution.icon size={22} color="#28628F" style={{ marginBottom: "20px" }} />
                <div className="u-label" style={{ marginBottom: "12px", fontSize: "10px" }}>{solution.label}</div>
                <h3 className="type-h5" style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", color: "rgb(13,27,42)", margin: "0 0 12px" }}>{solution.title}</h3>
                <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: "26px", color: "rgb(58,74,88)", margin: "0 0 24px", flex: 1 }}>{solution.description}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "rgb(0,107,163)", textTransform: "uppercase" }}>
                  Explore solution <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </LangLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "64px", alignItems: "start" }}>
            <div>
              <div className="u-label" style={{ marginBottom: "16px" }}>How this section works</div>
              <h2 className="type-h3" style={{ color: "var(--text-primary)", marginBottom: "20px" }}>
                Platform detail on one side. Buyer outcomes on the other.
              </h2>
              <p style={{ maxWidth: "640px", marginBottom: "24px" }}>
                Euroland IR is strongest when the information architecture stays clean: Platform explains product capabilities, while Solutions explains where those capabilities solve concrete public-company needs.
              </p>
              <LangLink href="/platform" className="btn-outline">
                View Platform Overview
              </LangLink>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              {BUYER_NEEDS.map((item) => (
                <div key={item.title} className="card" style={{ padding: "28px 32px" }}>
                  <h3 className="type-h6" style={{ fontSize: "20px", lineHeight: "28px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>Get started</div>
          <h2 className="type-h3" style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(255,255,255)", margin: "0 0 24px" }}>
            Need help finding the right path?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.80)", maxWidth: "620px", margin: "0 auto 32px" }}>
            Tell us whether you are evaluating the platform, planning an IPO, or improving sustainability reporting and we will route you to the right specialist.
          </p>
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
