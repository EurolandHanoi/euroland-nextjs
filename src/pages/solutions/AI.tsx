"use client";

// Euroland IR — AI Solutions page

import Link from "next/link";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionLabel from "@/components/ui/SectionLabel";

type TFunction = (key: string, fallback?: string) => string;

const CDN = {
  aiHero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/ai-hero_2d1f5b6a.jpg",
};

function getAiCapabilities(t: TFunction) {
  return [
    {
      icon: "✍️",
      title: t("solutions_ai_ai_drafting", "AI Drafting"),
      desc: t(
        "solutions_ai_ai_drafting_desc",
        "Draft press releases, earnings commentary, and investor communications in seconds. Trained on IR-specific language and best practice."
      ),
    },
    {
      icon: "📊",
      title: t("solutions_ai_earnings_analysis", "Earnings Analysis"),
      desc: t(
        "solutions_ai_earnings_analysis_desc",
        "Automatically analyse earnings results, identify key themes, and generate structured commentary for investor communications."
      ),
    },
    {
      icon: "🎯",
      title: t("solutions_ai_investor_sentiment", "Investor Sentiment"),
      desc: t(
        "solutions_ai_investor_sentiment_desc",
        "AI-powered analysis of investor questions, media coverage, and market sentiment to inform your IR strategy."
      ),
    },
    {
      icon: "🔍",
      title: t("solutions_ai_disclosure_review", "Disclosure Review"),
      desc: t(
        "solutions_ai_disclosure_review_desc",
        "AI review of draft disclosures for completeness, regulatory alignment, and consistency with previous communications."
      ),
    },
    {
      icon: "🌐",
      title: t("solutions_ai_translation_localisation", "Translation & Localisation"),
      desc: t(
        "solutions_ai_translation_localisation_desc",
        "AI-powered translation of IR content across 10 languages, with IR-specific terminology and tone."
      ),
    },
    {
      icon: "🤖",
      title: t("solutions_ai_workflow_automation", "Workflow Automation"),
      desc: t(
        "solutions_ai_workflow_automation_desc",
        "Automate repetitive IR tasks — from data collection to report generation — freeing your team for higher-value work."
      ),
    },
  ];
}

export default function AI() {
  const { t } = useLanguage();

  const aiCapabilities = getAiCapabilities(t);

  return (
    <div>
      <BannerHero
        variant="solutions"
        label={t("solutions_ai_ai_solutions", "AI Solutions")}
        title={t("solutions_ai_ai_that_understands_investor_relations", "AI that understands investor relations")}
        subtitle={t(
          "solutions_ai_euroland_ai_description",
          "Euroland AI is not a generic large language model applied to IR. It is trained on IR-specific data, workflows, and best practice — so the output is relevant, accurate, and ready to use."
        )}
        backgroundImage={CDN.aiHero}
        primaryCtaLabel={t("common_book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      {/* What makes it different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>{t("solutions_ai_what_makes_it_different", "What Makes It Different")}</SectionLabel>
              <h2 className="type-h3 text-3xl font-bold text-[#0f1e2b] mb-6">
                {t("solutions_ai_built_for_ir_not_adapted_for_it", "Built for IR, not adapted for it")}
              </h2>
              <p className="text-[#3a4a58] leading-relaxed mb-4">
                {t(
                  "solutions_ai_generic_ai_tools_require_significant_prompting_and_editing",
                  "Generic AI tools require significant prompting and editing to produce IR-quality output. Euroland AI is trained on thousands of real IR documents — earnings releases, annual reports, investor presentations, and regulatory filings — so it understands the language, structure, and expectations of professional investor communications."
                )}
              </p>
              <p className="text-[#3a4a58] leading-relaxed">
                {t(
                  "solutions_ai_the_result_is_ai_output_that_is_closer_to_publication_ready",
                  "The result is AI output that is closer to publication-ready, with less editing required and fewer hallucinations or off-tone suggestions."
                )}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: t("solutions_ai_trained_on_ir_specific_data", "Trained on IR-specific data"),
                  desc: t(
                    "solutions_ai_earnings_releases_annual_reports_investor_presentations",
                    "Earnings releases, annual reports, investor presentations"
                  ),
                },
                {
                  label: t("solutions_ai_understands_regulatory_context", "Understands regulatory context"),
                  desc: t(
                    "solutions_ai_knows_what_can_and_cannot_be_said_in_different_disclosure_types",
                    "Knows what can and cannot be said in different disclosure types"
                  ),
                },
                {
                  label: t("solutions_ai_consistent_with_your_voice", "Consistent with your voice"),
                  desc: t(
                    "solutions_ai_learns_your_companys_tone_and_style_over_time",
                    "Learns your company's tone and style over time"
                  ),
                },
                {
                  label: t("solutions_ai_integrated_with_your_ir_data", "Integrated with your IR data"),
                  desc: t(
                    "solutions_ai_accesses_your_financial_data_consensus_and_historical_communications",
                    "Accesses your financial data, consensus, and historical communications"
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-[#dde0e6]">
                  <div className="w-2 h-2 rounded-full bg-[#28628F] mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[#0f1e2b] text-sm">{item.label}</div>
                    <div className="text-sm text-[#5a6a7a]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20" style={{ backgroundColor: "#f2f4f6" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="text-center mb-12">
            <SectionLabel className="justify-center items-center flex flex-col">
              {t("solutions_ai_ai_capabilities", "AI Capabilities")}
            </SectionLabel>
            <h2 className="type-h3 text-3xl font-bold text-[#0f1e2b] mt-2">
              {t("solutions_ai_what_euroland_ai_can_do", "What Euroland AI can do")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap, i) => (
              <div key={i} className="bg-white p-6 border border-[#dde0e6] card-hover">
                <div className="text-2xl mb-3">{cap.icon}</div>
                <h3 className="type-h5 font-bold text-[#0f1e2b] mb-2">{cap.title}</h3>
                <p className="text-sm text-[#5a6a7a] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-[#28628F] font-serif mb-6">"</div>
            <blockquote className="text-xl text-[#0f1e2b] italic leading-relaxed mb-8">
              {t(
                "solutions_ai_the_ai_drafting_tools_have_cut_our_disclosure_preparation_time_in_half",
                "The AI drafting tools have cut our disclosure preparation time in half. The quality of output is consistently high and aligned with best practice — it's become an essential part of our IR workflow."
              )}
            </blockquote>
            <div>
              <p className="font-bold text-[#0f1e2b]">{t("solutions_ai_ir_manager", "IR Manager")}</p>
              <p className="text-[#5a6a7a] text-sm">{t("solutions_ai_large_cap_company_london_stock_exchange", "Large-cap company, London Stock Exchange")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#f2f4f6" }}>
        <div className="container mx-auto px-4 lg:px-8 text-center" style={{ maxWidth: "1536px" }}>
          <h2 className="type-h5 text-2xl font-bold text-[#0f1e2b] mb-4">
            {t("solutions_ai_see_euroland_ai_in_action", "See Euroland AI in action")}
          </h2>
          <p className="text-[#3a4a58] mb-8 max-w-xl mx-auto">
            {t(
              "solutions_ai_book_a_demo_to_see_how_ai_can_transform_your_ir_workflow",
              "Book a demo to see how AI can transform your IR workflow — from drafting to analysis to automation."
            )}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <LangLink href="/book-demo" className="btn-primary">
              {t("common_book_demo", "Book a Demo")} <ArrowRight size={16} />
            </LangLink>
            <LangLink href="/contact" className="btn-outline">
              {t("common_talk_to_us", "Talk to Us")}
            </LangLink>
          </div>
        </div>
      </section>
    </div>
  );
}
