"use client";

/**
 * IR TOOLS PAGE — Euroland IR
 * Nordic Minimalism design
 * Modals: Share Graphs, Key Financial Figures, Advanced AI, Corporate Factsheet,
 *         Corporate Announcements, IR Calendar, Email Alerts
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import { BarChart2, Calendar, Globe, Smartphone, Leaf, Users, FileText, TrendingUp, Bell, Search, LineChart, Megaphone, Mail } from "lucide-react";
import ToolModal, { ModalData } from "@/components/ToolModal";
import { useLanguage } from "@/contexts/LanguageContext";
type TFunction = (key: string, fallback?: string) => string;

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Modal data (from original ZIP) ───────────────────────────
function getToolModals(t: TFunction): Record<string, ModalData> {
  return {
    "share-graphs": {
      id: "share-graphs",
      iconLabel: t("irtools_ir_software_tools", "IR Software"),
      title: t("irtools_share_graphs", "Share Graphs"),
      subtitle: t("irtools_share_graphs_subtitle", "Real-time stock performance visualization"),
      features: [
        t("irtools_real_time_price_updates", "Real-time price updates"),
        t("irtools_historical_data_visualization", "Historical data visualization"),
        t("irtools_customizable_time_intervals", "Customizable time intervals"),
        t("irtools_moving_averages_and_technical_indicators", "Moving averages and technical indicators"),
        t("irtools_interactive_chart_controls", "Interactive chart controls"),
        t("irtools_peer_and_sector_comparison_views", "Peer and sector comparison views"),
        t("irtools_mobile_responsive_design", "Mobile-responsive design"),
        t("irtools_easy_integration_with_ir_websites", "Easy integration with IR platforms"),
      ],
      benefits: [
        t("irtools_enhanced_transparency_for_investors", "Enhanced transparency for investors"),
        t("irtools_professional_data_presentation", "Professional data presentation"),
        t("irtools_mobile_responsive_design", "Mobile-responsive design"),
        t("irtools_easy_integration_with_ir_websites", "Easy integration with IR platforms"),
      ],
    },
    "financial-figures": {
      id: "financial-figures",
      iconLabel: t("irtools_ir_software_tools", "IR Software"),
      title: t("irtools_key_financial_figures", "Key Financial Figures"),
      subtitle: t("irtools_key_financial_figures_subtitle", "Interactive financial metrics dashboard"),
      features: [
        t("irtools_revenue_and_earnings_tracking", "Revenue and earnings tracking"),
        t("irtools_quarterly_and_annual_comparisons", "Quarterly and annual comparisons"),
        t("irtools_growth_rate_calculations", "Growth rate calculations"),
        t("irtools_customizable_reporting_periods", "Customizable reporting periods"),
        t("irtools_export_capabilities_for_reports", "Export capabilities for reports"),
        t("irtools_automated_data_integration", "Automated data integration"),
        t("irtools_investor_friendly_presentation", "Investor-friendly presentation"),
        t("irtools_multi_currency_support", "Multi-currency support"),
      ],
      benefits: [
        t("irtools_simplified_financial_storytelling", "Simplified financial storytelling"),
        t("irtools_clear_trend_visualization", "Clear trend visualization"),
        t("irtools_investor_friendly_presentation", "Investor-friendly presentation"),
        t("irtools_export_capabilities_for_reports", "Export capabilities for reports"),
      ],
    },
    "ai-solutions": {
      id: "ai-solutions",
      iconLabel: t("irtools_ai_solutions", "AI Solutions"),
      title: t("irtools_advanced_ai_solutions", "Advanced AI Solutions"),
      subtitle: t("irtools_advanced_ai_solutions_subtitle", "Purpose-built AI for Investor Relations"),
      features: [
        t("irtools_document_analysis_and_extraction", "Document analysis and extraction"),
        t("irtools_sentiment_analysis_on_communications", "Sentiment analysis on communications"),
        t("irtools_automated_content_tagging", "Automated content tagging"),
        t("irtools_qa_automation_with_high_accuracy", "Q&A automation with high accuracy"),
        t("irtools_time_saving_workflow_automation", "Time-saving workflow automation"),
        t("irtools_purpose_built_ir_training_data", "Purpose-built IR training data"),
        t("irtools_compliance_aware_outputs", "Compliance-aware outputs"),
        t("irtools_natural_language_processing", "Natural language processing"),
      ],
      benefits: [
        t("irtools_70_percent_time_savings_on_routine_tasks", "70%+ time savings on routine tasks"),
        t("irtools_95_percent_accuracy_in_document_processing", "95%+ accuracy in document processing"),
        t("irtools_enhanced_investor_communication", "Enhanced investor communication"),
        t("irtools_scalable_ir_operations", "Scalable IR operations"),
      ],
    },
    "factsheet": {
      id: "factsheet",
      iconLabel: t("irtools_ir_documents", "IR Documents"),
      title: t("irtools_corporate_factsheet", "Corporate Factsheet"),
      subtitle: t("irtools_corporate_factsheet_subtitle", "One-page company overview"),
      features: [
        t("irtools_company_overview_and_mission", "Company overview and mission"),
        t("irtools_key_financial_highlights", "Key financial highlights"),
        t("irtools_leadership_team_profiles", "Leadership team profiles"),
        t("irtools_market_position_and_strategy", "Market position and strategy"),
        t("irtools_contact_information", "Contact information"),
        t("irtools_professional_pdf_generation", "Professional PDF generation"),
        t("irtools_customizable_branding", "Customizable branding"),
        t("irtools_multi_language_support", "Multi-language support"),
      ],
      benefits: [
        t("irtools_professional_pdf_generation", "Professional PDF generation"),
        t("irtools_customizable_branding", "Customizable branding"),
        t("irtools_multi_language_support", "Multi-language support"),
        t("irtools_regular_update_scheduling", "Regular update scheduling"),
      ],
    },
    "announcements": {
      id: "announcements",
      iconLabel: t("irtools_ir_comms", "IR Comms"),
      title: t("irtools_corporate_announcements", "Corporate Announcements"),
      subtitle: t("irtools_corporate_announcements_subtitle", "Centralized news and filings platform"),
      features: [
        t("irtools_earnings_releases", "Earnings releases"),
        t("irtools_regulatory_filings", "Regulatory filings"),
        t("irtools_press_releases", "Press releases"),
        t("irtools_material_events", "Material events"),
        t("irtools_corporate_updates", "Corporate updates"),
        t("irtools_advanced_search_and_filtering", "Advanced search and filtering"),
        t("irtools_email_notification_system", "Email notification system"),
        t("irtools_mobile_optimized_viewing", "Mobile-optimized viewing"),
      ],
      benefits: [
        t("irtools_advanced_search_and_filtering", "Advanced search and filtering"),
        t("irtools_email_notification_system", "Email notification system"),
        t("irtools_archive_management", "Archive management"),
        t("irtools_mobile_optimized_viewing", "Mobile-optimized viewing"),
      ],
    },
    "calendar": {
      id: "calendar",
      iconLabel: t("irtools_ir_calendar", "IR Calendar"),
      title: t("irtools_ir_calendar", "IR Calendar"),
      subtitle: t("irtools_ir_calendar_subtitle", "Event scheduling and management"),
      features: [
        t("irtools_earnings_calls_and_webcasts", "Earnings calls and webcasts"),
        t("irtools_annual_general_meetings", "Annual general meetings"),
        t("irtools_investor_conferences", "Investor conferences"),
        t("irtools_roadshows_and_presentations", "Roadshows and presentations"),
        t("irtools_filing_deadlines", "Filing deadlines"),
        t("irtools_ical_and_outlook_integration", "iCal and Outlook integration"),
        t("irtools_automated_email_reminders", "Automated email reminders"),
        t("irtools_multi_timezone_support", "Multi-timezone support"),
      ],
      benefits: [
        t("irtools_ical_and_outlook_integration", "iCal and Outlook integration"),
        t("irtools_automated_email_reminders", "Automated email reminders"),
        t("irtools_multi_timezone_support", "Multi-timezone support"),
        t("irtools_public_and_private_events", "Public and private events"),
      ],
    },
    "email-alerts": {
      id: "email-alerts",
      iconLabel: t("irtools_ir_alerts", "IR Alerts"),
      title: t("irtools_email_alerts", "Email Alerts"),
      subtitle: t("irtools_email_alerts_subtitle", "Automated investor notifications"),
      features: [
        t("irtools_price_movement_notifications", "Price movement notifications"),
        t("irtools_news_and_announcement_alerts", "News and announcement alerts"),
        t("irtools_event_reminders", "Event reminders"),
        t("irtools_document_publication_notices", "Document publication notices"),
        t("irtools_custom_trigger_based_alerts", "Custom trigger-based alerts"),
        t("irtools_subscriber_segmentation", "Subscriber segmentation"),
        t("irtools_customizable_templates", "Customizable templates"),
        t("irtools_delivery_analytics", "Delivery analytics"),
      ],
      benefits: [
        t("irtools_subscriber_segmentation", "Subscriber segmentation"),
        t("irtools_customizable_templates", "Customizable templates"),
        t("irtools_delivery_analytics", "Delivery analytics"),
        t("irtools_gdpr_compliant_management", "GDPR-compliant management"),
      ],
    },
  };
}

// ── Tool categories with modal IDs ────────────────────────────
function getToolCategories(t: TFunction) {
  return [
    {
      id: "stock",
      label: t("irtools_stock_financial", "Stock & Financial"),
      tools: [
        { icon: LineChart, name: t("irtools_share_graphs", "Share Graphs"), desc: t("irtools_share_graphs_desc", "Real-time and historical price charts with peer comparison and event markers."), modalId: "share-graphs" },
        { icon: BarChart2, name: t("irtools_key_financial_figures", "Key Financial Figures"), desc: t("irtools_key_financial_figures_desc", "Earnings, revenue, balance sheet, and cash flow data in investor-ready formats."), modalId: "financial-figures" },
        { icon: Search, name: t("irtools_analyst_coverage", "Analyst Coverage"), desc: t("irtools_analyst_coverage_desc", "Track analyst ratings, price targets, and consensus estimates."), modalId: null },
      ],
    },
    {
      id: "ai",
      label: t("irtools_ai_solutions", "AI Solutions"),
      tools: [
        { icon: TrendingUp, name: t("irtools_advanced_ai_solutions", "Advanced AI Solutions"), desc: t("irtools_advanced_ai_solutions_desc", "Purpose-built AI delivers best-in-class data and text completion services."), modalId: "ai-solutions" },
        { icon: FileText, name: t("irtools_corporate_factsheet", "Corporate Factsheet"), desc: t("irtools_corporate_factsheet_desc", "One-page company overview — automatically generated and always up to date."), modalId: "factsheet" },
        { icon: Megaphone, name: t("irtools_corporate_announcements", "Corporate Announcements"), desc: t("irtools_corporate_announcements_desc", "Centralized news and filings platform with advanced search and filtering."), modalId: "announcements" },
      ],
    },
    {
      id: "calendar",
      label: t("irtools_calendar_alerts", "Calendar & Alerts"),
      tools: [
        { icon: Calendar, name: t("irtools_ir_calendar", "IR Calendar"), desc: t("irtools_ir_calendar_desc", "Earnings dates, AGMs, roadshows, and investor events — always up to date."), modalId: "calendar" },
        { icon: Mail, name: t("irtools_email_alerts", "Email Alerts"), desc: t("irtools_email_alerts_desc", "Automated investor notifications for price movements, news, and events."), modalId: "email-alerts" },
        { icon: Bell, name: t("irtools_push_notifications", "Push Notifications"), desc: t("irtools_push_notifications_desc", "Reach investors directly with earnings alerts, press releases, and event reminders."), modalId: null },
      ],
    },
    {
      id: "website",
      label: t("irtools_ir_website", "IR Platform"),
      tools: [
        { icon: Globe, name: t("irtools_ir_website_design", "IR Platform Design"), desc: t("irtools_ir_website_design_desc", "Award-winning IR platform design with all the tools investors and analysts need."), modalId: null },
        { icon: FileText, name: t("irtools_disclosure_management", "Disclosure Management"), desc: t("irtools_disclosure_management_desc", "Streamlined regulatory filing, press release distribution, and compliance workflows."), modalId: null },
        { icon: Search, name: t("irtools_document_library", "Document Library"), desc: t("irtools_document_library_desc", "Organised, searchable repository for annual reports, presentations, and filings."), modalId: null },
      ],
    },
    {
      id: "apps",
      label: t("irtools_ir_apps", "IR Apps"),
      tools: [
        { icon: Smartphone, name: t("irtools_investor_app", "Investor App"), desc: t("irtools_investor_app_desc", "Easy-to-use IR App giving investors real-time access to company information on the go."), modalId: null },
        { icon: Bell, name: t("irtools_push_notifications", "Push Notifications"), desc: t("irtools_push_notifications_desc", "Reach investors directly with earnings alerts, press releases, and event reminders."), modalId: null },
        { icon: BarChart2, name: t("irtools_app_analytics", "App Analytics"), desc: t("irtools_app_analytics_desc", "Understand how investors engage with your content through detailed usage analytics."), modalId: null },
      ],
    },
    {
      id: "esg",
      label: t("irtools_esg_solutions", "ESG Solutions"),
      tools: [
        { icon: Leaf, name: t("irtools_esg_pages", "ESG Pages"), desc: t("irtools_esg_pages_desc", "Customisable ESG pages that simplify reporting and enhance transparency."), modalId: null },
        { icon: FileText, name: t("irtools_esg_reporting", "ESG Reporting"), desc: t("irtools_esg_reporting_desc", "Structured ESG data presentation aligned with GRI, TCFD, and SASB frameworks."), modalId: null },
        { icon: Users, name: t("irtools_stakeholder_engagement", "Stakeholder Engagement"), desc: t("irtools_stakeholder_engagement_desc", "Tools to engage ESG-focused investors and analysts with targeted content."), modalId: null },
      ],
    },
  ];
}

export default function IRTools() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<ModalData | null>(null);
  const f3 = useFadeUp();

  const TOOL_MODALS = getToolModals(t);
  const TOOL_CATEGORIES = getToolCategories(t);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="hero-dark banner-hero-section" style={{ minHeight: "440px", overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
        <div className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div className="u-label" style={{ marginBottom: "var(--sp-4)" }}>{t("irtools_ir_software_tools", "IR Software Tools")}</div>
          <h2 style={{ color: "white", fontWeight: 300, marginBottom: "var(--sp-6)", maxWidth: "720px" }}>
            {t("irtools_every_ir_tool_your_team_needs", "Every IR tool your team needs")}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.70)", fontSize: "var(--fs-md)", maxWidth: "560px", marginBottom: "var(--sp-10)" }}>
            {t("irtools_hero_body", "From stock performance and financial data to IR apps and ESG reporting — our complete platform covers every aspect of modern investor relations.")}
          </p>
          <div style={{ display: "flex", gap: "var(--sp-3)" }}>
            <LangLink href="/book-demo" className="btn-primary">{t("common_book_demo", "Book a Demo")}</LangLink>
            <LangLink href="/contact" className="btn-secondary">{t("irtools_contact_us", "Talk to Us")}</LangLink>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="container">
          <div className="grid-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--sp-8)" }}>
            {[
              { stat: "1,400+", label: t("irtools_clients", "Clients") },
              { stat: "60+", label: t("irtools_stock_exchanges", "Stock Exchanges") },
              { stat: "20+", label: t("irtools_ir_tools", "IR Tools") },
              { stat: "24/7", label: t("irtools_support_and_service", "Support & Service") },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "var(--fs-2xl)", fontWeight: 300, color: "white", lineHeight: "48px" }}>{s.stat}</div>
                <div style={{ fontSize: "var(--fs-xs)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool categories */}
      {TOOL_CATEGORIES.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          style={{ background: idx % 2 === 0 ? "white" : "var(--slate)", padding: "80px 0" }}
        >
          <div className="container">
            <div style={{ marginBottom: "var(--sp-12)" }}>
              <div className="u-label" style={{ marginBottom: "var(--sp-4)" }}>{cat.label}</div>
              <h3 style={{ color: "var(--text-primary)" }}>{cat.label}</h3>
            </div>
            <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--sp-6)" }}>
              {cat.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="feature-card"
                  style={{ cursor: tool.modalId ? "pointer" : "default" }}
                  onClick={() => { if (tool.modalId) setActiveModal(TOOL_MODALS[tool.modalId]); }}
                >
                  <tool.icon size={24} color="#327AB1" strokeWidth={1.5} style={{ marginBottom: "var(--sp-4)" }} />
                  <h5 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-3)" }}>{tool.name}</h5>
                  <p style={{ fontSize: "var(--fs-sm)", marginBottom: tool.modalId ? "var(--sp-4)" : 0 }}>{tool.desc}</p>
                  {tool.modalId && (
                    <span className="btn-link" style={{ fontSize: "var(--fs-xs)" }}>{t("irtools_learn_more", "Learn more")}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="cta-band">
        <div className="container" style={{ textAlign: "center" }}>
          <div ref={f3} className="fade-up">
            <div className="u-label" style={{ marginBottom: "var(--sp-4)", display: "inline-block" }}>{t("irtools_get_started", "Get Started")}</div>
            <h3 style={{ color: "white", fontWeight: 300, marginBottom: "var(--sp-8)", maxWidth: "600px", margin: "0 auto var(--sp-8)" }}>
              {t("irtools_ready_to_transform_your_investor_relations", "Ready to transform your investor relations?")}
            </h3>
            <div style={{ display: "flex", gap: "var(--sp-3)", justifyContent: "center" }}>
              <LangLink href="/book-demo" className="btn-primary">{t("irtools_book_a_demo", "Book a Demo")}</LangLink>
              <LangLink href="/contact" className="btn-secondary">{t("irtools_contact_us", "Talk to Us")}</LangLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />

      <ToolModal modal={activeModal} onClose={() => setActiveModal(null)} />
    </PageWrapper>
  );
}
