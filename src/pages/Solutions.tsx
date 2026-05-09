"use client";

import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { ArrowRight, Building2, Leaf, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SOLUTIONS = [
  {
    label: "Listed companies",
    title: "For listed companies",
    description:
      "Best-practice IR tools, investor websites, disclosure workflows, market data, apps, alerts, and managed services for public-company IR teams.",
    href: "/solutions/listed-companies",
    icon: Building2,
  },
  {
    label: "IPO readiness",
    title: "IPO solutions",
    description:
      "IPO microsites, investor-facing content infrastructure, disclosure support, and post-listing IR tools to help companies enter the public market with confidence.",
    href: "/ipo",
    icon: Rocket,
  },
  {
    label: "Sustainability",
    title: "ESG and CSRD communication",
    description:
      "Structured ESG and CSRD-related presentation tools that help investors and stakeholders navigate complex sustainability information more easily.",
    href: "/solutions/sustainability-reporting",
    icon: Leaf,
  },
] as const;

const BUYER_NEEDS = [
  {
    title: "One platform, one accountable partner",
    body: "Bring market data, investor communications, disclosure workflows, IR apps, ESG presentation, and purpose-built AI together through one managed service model.",
  },
  {
    title: "Purpose-built for Investor Relations",
    body: "Euroland IR solutions are built around listed-company workflows, capital markets content, financial data, and the expectations of investors, analysts, and communications teams.",
  },
  {
    title: "Service-minded implementation and support",
    body: "Our team supports onboarding, configuration, managed updates, and ongoing client assistance so IR teams can maintain a professional investor experience with less manual work.",
  },
] as const;

export default function Solutions() {
  const { t } = useLanguage();
  const solutions = [
    {
      label: t("solutions_page_listed_label", "Listed companies"),
      title: t("solutions_page_listed_title", "For listed companies"),
      description: t("solutions_page_listed_desc", "Best-practice IR tools, investor websites, disclosure workflows, market data, apps, alerts, and managed services for public-company IR teams."),
      href: "/solutions/listed-companies",
      icon: Building2,
    },
    {
      label: t("solutions_page_ipo_label", "IPO readiness"),
      title: t("solutions_page_ipo_title", "IPO solutions"),
      description: t("solutions_page_ipo_desc", "IPO microsites, investor-facing content infrastructure, disclosure support, and post-listing IR tools to help companies enter the public market with confidence."),
      href: "/ipo",
      icon: Rocket,
    },
    {
      label: t("solutions_page_esg_label", "Sustainability"),
      title: t("solutions_page_esg_title", "ESG and CSRD communication"),
      description: t("solutions_page_esg_desc", "Structured ESG and CSRD-related presentation tools that help investors and stakeholders navigate complex sustainability information more easily."),
      href: "/solutions/sustainability-reporting",
      icon: Leaf,
    },
  ] as const;
  const buyerNeeds = [
    {
      title: t("solutions_page_need_1_title", "One platform, one accountable partner"),
      body: t("solutions_page_need_1_body", "Bring market data, investor communications, disclosure workflows, IR apps, ESG presentation, and purpose-built AI together through one managed service model."),
    },
    {
      title: t("solutions_page_need_2_title", "Purpose-built for Investor Relations"),
      body: t("solutions_page_need_2_body", "Euroland IR solutions are built around listed-company workflows, capital markets content, financial data, and the expectations of investors, analysts, and communications teams."),
    },
    {
      title: t("solutions_page_need_3_title", "Service-minded implementation and support"),
      body: t("solutions_page_need_3_body", "Our team supports onboarding, configuration, managed updates, and ongoing client assistance so IR teams can maintain a professional investor experience with less manual work."),
    },
  ] as const;
  return (
    <PageWrapper>
      <BannerHero
        variant="solutions"
        label={t("nav_solutions", "Solutions")}
        title={t("solutions_page_hero_title", "Solutions built around listed-company needs")}
        subtitle={t("solutions_page_hero_subtitle", "Explore best-practice IR solutions for listed companies, IPO readiness, and sustainability communication - all supported by the Euroland IR platform and specialist service team.")}
        primaryCtaLabel={t("common_book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      <section style={{ background: "rgb(246,248,250)", padding: "64px 0" }}>
        <div className="container">
          <div style={{ marginBottom: "48px" }}>
            <div className="u-label" style={{ marginBottom: "16px" }}>{t("solutions_page_areas_label", "Solution areas")}</div>
            <h2 className="type-h3" style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13,27,42)", margin: 0, marginBottom: "16px" }}>
              {t("solutions_page_areas_title", "Choose the solution area that reflects your current priorities")}
            </h2>
            <p style={{ maxWidth: "720px", margin: 0 }}>
              {t("solutions_page_areas_body", "Select the area that best matches your company, stage, and investor communications needs. For a detailed view of individual modules and platform capabilities, visit the Platform overview.")}
            </p>
          </div>

          <div className="solutions-grid" style={{ gap: "24px" }}>
            {solutions.map((solution) => (
              <LangLink
                key={solution.href}
                href={solution.href}
                className="card-link"
                style={{
                  padding: "32px",
                  minHeight: "100%",
                }}
              >
                <solution.icon size={22} color="#28628F" style={{ marginBottom: "16px" }} />
                <div className="type-label" style={{ marginBottom: "16px", color: "var(--label-blue-light)" }}>{solution.label}</div>
                <h3 className="type-h5" style={{ fontSize: "var(--fs-lg)", fontWeight: 500, lineHeight: "var(--lh-lg)", color: "rgb(13,27,42)", margin: "0 0 16px" }}>{solution.title}</h3>
                <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", color: "rgb(58,74,88)", margin: "0 0 32px", flex: 1 }}>{solution.description}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.08em", color: "#00ADF0", textTransform: "uppercase" }}>
                  {t("solutions_page_explore_solution", "Explore solution")} <ArrowRight size={14} strokeWidth={2.5} />
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
              <div className="u-label" style={{ marginBottom: "16px" }}>{t("solutions_page_support_label", "How Euroland IR supports you")}</div>
              <h2 className="type-h3" style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                {t("solutions_page_support_title", "Platform capabilities, applied to specific IR needs")}
              </h2>
              <p style={{ maxWidth: "640px", marginBottom: "32px" }}>
                {t("solutions_page_support_body", "Euroland IR combines award-winning technology, managed data, purpose-built AI, and client support to help listed companies present information clearly and maintain a reliable digital Investor Relations presence.")}
              </p>
              <LangLink href="/platform" className="btn-outline">
                {t("solutions_page_support_cta", "View Platform Overview")}
              </LangLink>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              {buyerNeeds.map((item) => (
                <div key={item.title} className="card" style={{ padding: "32px 32px" }}>
                  <h3 className="type-h6" style={{ fontSize: "var(--fs-md)", lineHeight: "var(--lh-md)", fontWeight: 500, color: "var(--text-primary)", marginBottom: "16px" }}>{item.title}</h3>
                  <p style={{ margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>{t("solutions_page_cta_label", "Discuss your requirements")}</div>
          <h2 className="type-h3" style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(255,255,255)", margin: "0 0 32px" }}>
            {t("solutions_page_cta_title", "Need help finding the right solution?")}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.80)", maxWidth: "620px", margin: "0 auto 32px" }}>
            {t("solutions_page_cta_body", "Tell us whether you are evaluating the platform, planning an IPO, or improving sustainability reporting and we will route you to the right specialist.")}
          </p>
          <div className="flex-wrap-mobile" style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <LangLink href="/book-demo" className="btn-primary">{t("common_book_demo", "Book a Demo")}</LangLink>
            <LangLink href="/contact" className="btn-secondary">{t("common_talk_to_us", "Talk to Us")}</LangLink>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}


