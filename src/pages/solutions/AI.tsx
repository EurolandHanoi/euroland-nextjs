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
  aiHero: "/banner-purpose-built-ai.jpg",
};

function getAiCapabilities(t: TFunction) {
  return [
    {
      icon: "✍️",
      title: t("solutions_ai_ai_drafting", "AI-Powered IR Search"),
      desc: t(
        "solutions_ai_ai_drafting_desc",
        "Help investors and stakeholders search across earnings materials, financial statements, IR presentations, reports, and public disclosures using natural language."
      ),
    },
    {
      icon: "ðŸ“Š",
      title: t("solutions_ai_earnings_analysis", "Verified Answers"),
      desc: t(
        "solutions_ai_earnings_analysis_desc",
        "Deliver context-aware responses with links, document names, and PDF page references so users can verify information quickly."
      ),
    },
    {
      icon: "ðŸŽ¯",
      title: t("solutions_ai_investor_sentiment", "Multilingual Access"),
      desc: t(
        "solutions_ai_investor_sentiment_desc",
        "Support multilingual IR information access, including English and Nordic languages, for international investor audiences."
      ),
    },
    {
      icon: "ðŸ”",
      title: t("solutions_ai_disclosure_review", "Website Integration"),
      desc: t(
        "solutions_ai_disclosure_review_desc",
        "Integrate generative AI-powered IR search directly into the corporate website as an intelligent investor information hub."
      ),
    },
    {
      icon: "ðŸŒ",
      title: t("solutions_ai_translation_localisation", "IR App Integration"),
      desc: t(
        "solutions_ai_translation_localisation_desc",
        "Extend AI-powered search into the IR mobile app so stakeholders can access relevant company information on the move."
      ),
    },
    {
      icon: "ðŸ¤–",
      title: t("solutions_ai_workflow_automation", "Investor Self-Service"),
      desc: t(
        "solutions_ai_workflow_automation_desc",
        "Reduce repetitive information requests by helping stakeholders find accurate, relevant, and verified IR information independently."
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
        title={t("solutions_ai_ai_that_understands_investor_relations", "Generative AI-powered search for Investor Relations")}
        subtitle={t(
          "solutions_ai_euroland_ai_description",
          "Euroland AI is designed to transform your corporate website and IR app into an intelligent information hub, helping shareholders and stakeholders access accurate, relevant, and verified information from your public IR materials."
        )}
        backgroundImage={CDN.aiHero}
        primaryCtaLabel={t("common_book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      {/* What makes it different */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>{t("solutions_ai_what_makes_it_different", "What Makes It Different")}</SectionLabel>
              <h2 className="type-h3 text-3xl font-bold text-[#0f1e2b] mb-6">
                {t("solutions_ai_built_for_ir_not_adapted_for_it", "Designed for Investor Relations content")}
              </h2>
              <p className="text-[#3a4a58] leading-relaxed mb-4">
                {t(
                  "solutions_ai_generic_ai_tools_require_significant_prompting_and_editing",
                  "Euroland AI is purpose-built for Investor Relations information access. It searches across dynamic IR content, including earnings materials, financial statements, IR presentations, reports, and publicly available disclosures, so users can find relevant information without navigating multiple documents manually."
                )}
              </p>
              <p className="text-[#3a4a58] leading-relaxed">
                {t(
                  "solutions_ai_the_result_is_ai_output_that_is_closer_to_publication_ready",
                  "The result is a clearer, more intuitive investor experience: users can ask questions in plain language and receive context-aware answers with source references for verification."
                )}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: t("solutions_ai_trained_on_ir_specific_data", "Searches IR-specific content"),
                  desc: t(
                    "solutions_ai_earnings_releases_annual_reports_investor_presentations",
                    "Earnings materials, reports, presentations, and disclosures"
                  ),
                },
                {
                  label: t("solutions_ai_understands_regulatory_context", "Provides source references"),
                  desc: t(
                    "solutions_ai_knows_what_can_and_cannot_be_said_in_different_disclosure_types",
                    "Links, document names, and PDF page references where available"
                  ),
                },
                {
                  label: t("solutions_ai_consistent_with_your_voice", "Supports multilingual access"),
                  desc: t(
                    "solutions_ai_learns_your_companys_tone_and_style_over_time",
                    "Including English and Nordic languages"
                  ),
                },
                {
                  label: t("solutions_ai_integrated_with_your_ir_data", "Integrated with your digital IR channels"),
                  desc: t(
                    "solutions_ai_accesses_your_financial_data_consensus_and_historical_communications",
                    "Corporate website and IR mobile app integration"
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
      <section className="py-16" style={{ backgroundColor: "#f2f4f6" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="text-center mb-12">
            <SectionLabel centered className="justify-center items-center flex flex-col">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-[#28628F] font-serif mb-6">"</div>
            <blockquote className="text-xl text-[#0f1e2b] italic leading-relaxed mb-8">
              {t(
                "solutions_ai_the_ai_drafting_tools_have_cut_our_disclosure_preparation_time_in_half",
                "Euroland AI helps our stakeholders find the information they need more quickly, with source references that make it easier to verify answers and continue reading in the original materials."
              )}
            </blockquote>
            <div>
              <p className="font-bold text-[#0f1e2b]">{t("solutions_ai_ir_manager", "Investor Relations Team")}</p>
              <p className="text-[#5a6a7a] text-sm">{t("solutions_ai_large_cap_company_london_stock_exchange", "Listed company client")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#f2f4f6" }}>
        <div className="container mx-auto px-4 lg:px-8 text-center" style={{ maxWidth: "1536px" }}>
          <h2 className="type-h5 text-2xl font-bold text-[#0f1e2b] mb-4">
            {t("solutions_ai_see_euroland_ai_in_action", "See Euroland AI in action")}
          </h2>
          <p className="text-[#3a4a58] mb-8 max-w-xl mx-auto">
            {t(
              "solutions_ai_book_a_demo_to_see_how_ai_can_transform_your_ir_workflow",
              "Book a demo to see how AI-powered IR search can help investors and stakeholders access relevant company information more easily."
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
