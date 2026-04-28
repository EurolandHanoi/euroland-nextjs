"use client";

// Euroland IR — Partners page
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageWrapper } from "@/components/Layout";
import SectionLabel from "@/components/ui/SectionLabel";
import LangLink from "@/components/LangLink";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Partners() {
  const { t } = useLanguage();

  const PARTNER_CATEGORIES = [
    {
      category: t("partners_cat_data", "Data Partners"),
      desc: t("partners_cat_data_desc", "Real-time and historical financial data powering our stock feeds, analytics, and market intelligence."),
      partners: [
        { name: "Bloomberg", desc: t("partners_bloomberg_desc", "Real-time market data and financial information services.") },
        { name: "Refinitiv (LSEG)", desc: t("partners_refinitiv_desc", "Financial data, analytics, and trading infrastructure.") },
        { name: "FactSet", desc: t("partners_factset_desc", "Integrated financial data and analytical applications.") },
        { name: "Morningstar", desc: t("partners_morningstar_desc", "Investment research and data for institutional investors.") },
      ],
    },
    {
      category: t("partners_cat_distribution", "Distribution Partners"),
      desc: t("partners_cat_distribution_desc", "Global press release and regulatory disclosure distribution networks reaching investors worldwide."),
      partners: [
        { name: "PR Newswire", desc: t("partners_prnewswire_desc", "Global press release distribution to financial media and investors.") },
        { name: "Business Wire", desc: t("partners_businesswire_desc", "News distribution to financial media, investors, and regulators.") },
        { name: "GlobeNewswire", desc: t("partners_globenewswire_desc", "Press release distribution across North America and Europe.") },
        { name: "EQS Group", desc: t("partners_eqs_desc", "Regulatory disclosure and investor relations distribution.") },
      ],
    },
    {
      category: t("partners_cat_technology", "Technology Partners"),
      desc: t("partners_cat_technology_desc", "Technology integrations that extend the Euroland IR platform with specialised capabilities."),
      partners: [
        { name: "Broadridge", desc: t("partners_broadridge_desc", "Investor communications and proxy voting solutions.") },
        { name: "Computershare", desc: t("partners_computershare_desc", "Share registry and transfer agency services.") },
        { name: "Donnelley Financial", desc: t("partners_donnelley_desc", "Financial reporting and compliance solutions.") },
        { name: "Workiva", desc: t("partners_workiva_desc", "Connected reporting and compliance platform.") },
      ],
    },
    {
      category: t("partners_cat_exchange", "Exchange Partners"),
      desc: t("partners_cat_exchange_desc", "Listed company data and disclosure integrations with major stock exchanges globally."),
      partners: [
        { name: "Nasdaq", desc: t("partners_nasdaq_desc", "Market data and listed company services integration.") },
        { name: "London Stock Exchange", desc: t("partners_lse_desc", "RNS regulatory news service and market data.") },
        { name: "Euronext", desc: t("partners_euronext_desc", "Pan-European exchange data and disclosure services.") },
        { name: "Deutsche Börse", desc: t("partners_deutsche_boerse_desc", "German market data and regulatory reporting.") },
      ],
    },
  ];

  const STATS = [
    { value: "60+", label: t("partners_stat_1", "Exchange integrations") },
    { value: "1,400+", label: t("partners_stat_2", "Listed company clients") },
    { value: "20+", label: t("partners_stat_3", "Years of partnerships") },
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <section style={{ backgroundColor: "#082b45", minHeight: "440px", overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "120px 48px 80px" }}>
          <div style={{ maxWidth: "640px" }}>
            <SectionLabel light>{t("company_label", "Company")}</SectionLabel>
            <h2 style={{ fontSize: "48px", fontWeight: 300, lineHeight: "64px", letterSpacing: "-0.01em", color: "#ffffff", margin: "0 0 24px" }}>{t("partners_hero_title", "Partners")}</h2>
            <p style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(255,255,255,0.70)", letterSpacing: "0.01em", marginBottom: "40px" }}>
              {t("partners_hero_subtitle", "Euroland IR works with leading data providers, distribution networks, technology vendors, and stock exchanges to deliver a complete, integrated IR solution for listed companies worldwide.")}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <LangLink href="/book-demo" className="btn-primary">
                {t("book_demo", "Book a Demo")} <ArrowRight size={16} />
              </LangLink>
              <LangLink href="/contact" className="btn-secondary">
                {t("contact_us", "Talk to Us")}
              </LangLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ backgroundColor: "#0b2743", padding: "64px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", gap: "80px", flexWrap: "wrap" }}>
            {STATS.map((s) => (
              <div key={s.value} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "-0.01em", color: "#ffffff" }}>{s.value}</div>
                <div style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.48px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner categories */}
      {PARTNER_CATEGORIES.map((cat, ci) => (
        <section key={cat.category} style={{ backgroundColor: ci % 2 === 0 ? "#ffffff" : "#f2f4f6", padding: "80px 0" }}>
          <div className="container">
            <div style={{ marginBottom: "48px" }}>
              <SectionLabel>{cat.category}</SectionLabel>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "#0f1e2b", maxWidth: "640px", margin: "12px 0 0" }}>{cat.desc}</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {cat.partners.map((p) => (
                <div key={p.name} style={{ backgroundColor: "#ffffff", border: "1px solid #dde0e6", padding: "32px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "#327AB1" }}>
                    {cat.category.replace(` ${t("partners_suffix", "Partners")}`, "")}
                  </div>
                  <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "#0f1e2b", margin: "0 0 8px" }}>{p.name}</h5>
                  <p style={{ fontSize: "16px", color: "#5a6a7a", lineHeight: "24px", letterSpacing: "0.01em", margin: 0 }}>{p.desc}</p>
                  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: 600, color: "#28628F", textDecoration: "none", marginTop: "8px" }}>
                    {t("learn_more", "Learn more")} <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Become a partner CTA */}
      <section style={{ backgroundColor: "#082b45", padding: "96px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <SectionLabel light>{t("partners_cta_label", "Partner Programme")}</SectionLabel>
          <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "#ffffff", margin: "12px 0 20px" }}>{t("partners_cta_heading", "Interested in partnering with us?")}</h3>
          <p style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(255,255,255,0.70)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
            {t("partners_cta_body", "We work with data providers, technology vendors, and service firms to extend the value of the Euroland IR platform for listed companies worldwide.")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <LangLink href="/contact" className="btn-primary">
              {t("get_in_touch", "Get in Touch")} <ArrowRight size={16} />
            </LangLink>
            <LangLink href="/book-demo" className="btn-primary">
              {t("book_demo", "Book a Demo")}
            </LangLink>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
