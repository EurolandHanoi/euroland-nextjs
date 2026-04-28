"use client";

/**
 * IR SERVICES PAGE — Euroland IR
 * Typography spec:
 *   h2: 48px/300/-0.01em — hero banner headline
 *   h3: 40px/400/0.005em — section headings (services grid, why euroland)
 *   h5: 24px/500/0.005em — service card titles
 *   h6: 20px/500/0.01em  — contact panel heading
 *   p:  16px/400/0.01em  — body text
 */
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type TFunction = (key: string, fallback?: string) => string;

function getServices(t: TFunction) {
  return [
    {
      num: "01",
      icon: "🌐",
      title: t("irservices_ir_website_design_build", "IR Platform Design & Build"),
      desc: t(
        "irservices_ir_website_desc",
        "Best-practice investor relations websites designed to meet the disclosure requirements of every major exchange. Responsive, accessible, multi-language, and always up to date."
      ),
      features: [
        t("irservices_feature_custom_ir_website_design", "Custom IR platform design aligned to your brand"),
        t("irservices_feature_compliant_exchange_requirements", "Compliant with exchange disclosure requirements"),
        t("irservices_feature_multilanguage_support", "Multi-language support for global investor bases"),
        t("irservices_feature_fully_managed_hosting", "Fully managed hosting and maintenance"),
        t("irservices_feature_integrated_euroland_ir_data", "Integrated with Euroland IR data feeds"),
      ],
    },
    {
      num: "02",
      icon: "📋",
      title: t("irservices_ir_strategy_consulting", "IR Strategy & Consulting"),
      desc: t(
        "irservices_ir_strategy_desc",
        "Expert investor relations strategy and consulting to help you build a compelling equity story, target the right investors, and communicate effectively with the market."
      ),
      features: [
        t("irservices_feature_ir_programme_assessment", "IR programme assessment and benchmarking"),
        t("irservices_feature_equity_story_development", "Equity story development and messaging"),
        t("irservices_feature_investor_targeting_studies", "Investor targeting and perception studies"),
        t("irservices_feature_annual_report_review", "Annual report and results presentation review"),
        t("irservices_feature_ongoing_strategic_advisory", "Ongoing strategic advisory support"),
      ],
    },
    {
      num: "03",
      icon: "📊",
      title: t("irservices_annual_report_production", "Annual Report Production"),
      desc: t(
        "irservices_annual_report_desc",
        "End-to-end annual report production services — from content strategy and copywriting to design, print, and digital delivery. Aligned with CSRD, TCFD, and GRI frameworks."
      ),
      features: [
        t("irservices_feature_content_strategy", "Content strategy and editorial planning"),
        t("irservices_feature_copywriting_proofreading", "Copywriting and proofreading"),
        t("irservices_feature_design_layout", "Design and layout for print and digital"),
        t("irservices_feature_integrated_sustainability_reporting", "Integrated and sustainability reporting"),
        t("irservices_feature_translation_multiple_languages", "Translation into multiple languages"),
      ],
    },
    {
      num: "04",
      icon: "🎯",
      title: t("irservices_investor_targeting", "Investor Targeting"),
      desc: t(
        "irservices_investor_targeting_desc",
        "Data-driven investor targeting to identify and engage the right institutional investors for your equity story. Powered by Euroland IR's ownership analytics and market intelligence."
      ),
      features: [
        t("irservices_feature_institutional_investor_identification", "Institutional investor identification and profiling"),
        t("irservices_feature_peer_ownership_analysis", "Peer ownership analysis and benchmarking"),
        t("irservices_feature_roadshow_planning", "Roadshow planning and logistics support"),
        t("irservices_feature_investor_meeting_preparation", "Investor meeting preparation and briefing materials"),
        t("irservices_feature_post_roadshow_reporting", "Post-roadshow reporting and follow-up"),
      ],
    },
    {
      num: "05",
      icon: "📱",
      title: t("irservices_digital_ir_communications", "Digital IR Communications"),
      desc: t(
        "irservices_digital_ir_desc",
        "Digital-first investor communications that keep your investor base informed and engaged — from earnings webcasts and press releases to email alerts and social media."
      ),
      features: [
        t("irservices_feature_earnings_webcast_production", "Earnings webcast production and hosting"),
        t("irservices_feature_press_release_distribution", "Press release distribution and monitoring"),
        t("irservices_feature_email_alert_management", "Email alert management and automation"),
        t("irservices_feature_social_media_content", "Social media content for investor audiences"),
        t("irservices_feature_digital_ir_calendar_management", "Digital IR calendar management"),
      ],
    },
    {
      num: "06",
      icon: "🌿",
      title: t("irservices_esg_sustainability_reporting", "ESG & Sustainability Reporting"),
      desc: t(
        "irservices_esg_desc",
        "Structured ESG disclosure services to help listed companies present sustainability data clearly and credibly — aligned with CSRD, TCFD, GRI, and SASB frameworks."
      ),
      features: [
        t("irservices_feature_esg_data_collection", "ESG data collection and structuring"),
        t("irservices_feature_csrd_tcfb_gap_analysis", "CSRD and TCFD gap analysis"),
        t("irservices_feature_sustainability_report_production", "Sustainability report production"),
        t("irservices_feature_esg_rating_agency_engagement", "ESG rating agency engagement support"),
        t("irservices_feature_ongoing_esg_disclosure_management", "Ongoing ESG disclosure management"),
      ],
    },
  ];
}

export default function IRServices() {
  const { t } = useLanguage();
  const SERVICES = getServices(t);

  return (
    <PageWrapper>
      {/* ── Hero ── h2: 48px/300/-0.01em */}
      <section style={{ backgroundColor: "#082b45", minHeight: "440px", overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
        <div className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div style={{ maxWidth: "640px" }}>
            <SectionLabel light>{t("irservices_ir_services", "IR Services")}</SectionLabel>
            {/* h2 — banner headline: 48px/300/-0.01em */}
            <h2 style={{ fontSize: "48px", fontWeight: 300, lineHeight: "64px", letterSpacing: "-0.01em", color: "#ffffff", margin: "0 0 24px" }}>
              {t("irservices_investor_relations_services_for_listed_companies", "Investor Relations Services for Listed Companies")}
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(255,255,255,0.70)", margin: "0 0 40px", letterSpacing: "0.01em" }}>
              {t(
                "irservices_hero_body",
                "From IR platform design and strategy to annual report production and ESG reporting — Euroland IR provides the full range of investor relations services to support every aspect of your investor communications programme."
              )}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <LangLink href="/book-demo" className="btn-primary">
                {t("irservices_book_a_consultation", "Book a Consultation")} <ArrowRight size={16} />
              </LangLink>
              <LangLink href="/contact" className="btn-secondary">
                {t("irservices_talk_to_our_team", "Talk to Our Team")}
              </LangLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── h3: 40px/400/0.005em, h5: 24px/500/0.005em */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}><SectionLabel>{t("irservices_our_services", "Our Services")}</SectionLabel></div>
            {/* h3 — section heading: 40px/400/0.005em */}
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "#0f1e2b", margin: "12px 0 20px" }}>
              {t("irservices_full_service_investor_relations_support", "Full-service investor relations support")}
            </h3>
            <p style={{ fontSize: "16px", color: "#3a4a58", lineHeight: "24px", letterSpacing: "0.01em", maxWidth: "640px", margin: "0 auto" }}>
              {t(
                "irservices_services_intro",
                "Whether you need a complete IR programme or targeted support in a specific area, our team of investor relations specialists is here to help."
              )}
            </p>
          </div>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            {SERVICES.map((service) => (
              <div
                key={service.num}
                style={{ padding: "40px", border: "1px solid #dde0e6", borderRadius: "4px" }}
              >
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{service.icon}</div>
                <div style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#327AB1", marginBottom: "12px" }}>{service.num}</div>
                {/* h5 — card title: 24px/500/0.005em */}
                <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "#0f1e2b", margin: "0 0 16px" }}>
                  {service.title}
                </h5>
                <p style={{ fontSize: "16px", color: "#5a6a7a", lineHeight: "24px", letterSpacing: "0.01em", margin: "0 0 24px" }}>
                  {service.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <CheckCircle2 size={16} color="#28628F" style={{ flexShrink: 0, marginTop: "4px" }} />
                      <span style={{ fontSize: "14px", color: "#3a4a58", lineHeight: "22px", letterSpacing: "0.01em" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Euroland ── h3: 40px/400/0.005em, h6: 20px/500/0.01em */}
      <section style={{ padding: "80px 0", backgroundColor: "#f2f4f6" }}>
        <div style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <SectionLabel>{t("irservices_why_euroland_ir", "Why Euroland IR")}</SectionLabel>
              {/* h3 — section heading: 40px/400/0.005em */}
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "#0f1e2b", margin: "12px 0 24px" }}>
                {t("irservices_years_of_investor_relations_expertise", "25+ years of investor relations expertise")}
              </h3>
              <p style={{ fontSize: "16px", color: "#3a4a58", lineHeight: "24px", letterSpacing: "0.01em", margin: "0 0 40px" }}>
                {t(
                  "irservices_why_body",
                  "Euroland IR has been supporting listed companies with investor relations services since 1997. Our team combines deep IR expertise with cutting-edge technology to deliver services that are both strategically sound and operationally efficient."
                )}
              </p>
              <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                {[
                  { stat: "1,400+", label: t("irservices_listed_clients", "Listed clients") },
                  { stat: "60+", label: t("irservices_stock_exchanges", "Stock exchanges") },
                  { stat: "25+", label: t("irservices_years_of_experience", "Years of experience") },
                  { stat: "24/7", label: t("irservices_support_available", "Support available") },
                ].map((item, i) => (
                  <div key={i} style={{ backgroundColor: "#ffffff", padding: "24px", border: "1px solid #dde0e6", borderRadius: "4px" }}>
                    <div style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "-0.01em", color: "#082b45", marginBottom: "4px" }}>{item.stat}</div>
                    <div style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5a6a7a" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: "#ffffff", padding: "48px", border: "1px solid #dde0e6", borderRadius: "4px" }}>
              {/* h6 — panel heading: 20px/500/0.01em */}
              <h6 style={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px", letterSpacing: "0.01em", color: "#0f1e2b", margin: "0 0 16px" }}>
                {t("irservices_speak_with_our_ir_services_team", "Speak with our IR Services team")}
              </h6>
              <p style={{ fontSize: "16px", color: "#3a4a58", lineHeight: "24px", letterSpacing: "0.01em", margin: "0 0 32px" }}>
                {t(
                  "irservices_speak_body",
                  "Our investor relations specialists are available to discuss your requirements and recommend the right combination of services for your programme."
                )}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <LangLink href="/book-demo" className="btn-primary" style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  {t("irservices_book_a_consultation", "Book a Consultation")} <ArrowRight size={16} />
                </LangLink>
                <LangLink href="/contact" className="btn-outline" style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {t("irservices_contact_us", "Talk to Us")}
                </LangLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── h3: 40px/400/0.005em */}
      <section style={{ padding: "96px 0", backgroundColor: "#082b45" }}>
        <div style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box", textAlign: "center" }}>
          {/* h3 — CTA heading: 40px/400/0.005em */}
          <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "#ffffff", margin: "0 0 20px" }}>
            {t("irservices_ready_to_elevate_your_investor_relations_programme", "Ready to elevate your investor relations programme?")}
          </h3>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.70)", lineHeight: "24px", letterSpacing: "0.01em", maxWidth: "520px", margin: "0 auto 40px" }}>
            {t(
              "irservices_cta_body",
              "Join 1,400+ listed companies across 60+ exchanges who trust Euroland IR to support their investor communications."
            )}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <LangLink href="/book-demo" className="btn-primary">
              {t("irservices_book_a_demo", "Book a Demo")} <ArrowRight size={16} />
            </LangLink>
            <LangLink href="/contact" className="btn-secondary">
              {t("irservices_contact_us", "Talk to Us")}
            </LangLink>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
