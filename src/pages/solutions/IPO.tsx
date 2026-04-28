"use client";

import LangLink from "@/components/LangLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ArrowRight } from "lucide-react";
import BannerHero from "@/components/layout/BannerHero";
import SectionLabel from "@/components/ui/SectionLabel";

export default function IPO() {
  const { t } = useLanguage();

  const phases = [
    {
      phase: t("ipo_phase_1_label", "Pre-IPO"),
      title: t("ipo_phase_1_title", "Prepare your IR infrastructure"),
      items: [
        t("ipo_phase_1_item_1", "IR platform design and build"),
        t("ipo_phase_1_item_2", "Investor targeting and profiling"),
        t("ipo_phase_1_item_3", "Equity story development support"),
        t("ipo_phase_1_item_4", "Roadshow presentation tools"),
      ],
    },
    {
      phase: t("ipo_phase_2_label", "IPO"),
      title: t("ipo_phase_2_title", "Execute with confidence"),
      items: [
        t("ipo_phase_2_item_1", "Roadshow management and scheduling"),
        t("ipo_phase_2_item_2", "Real-time investor feedback tracking"),
        t("ipo_phase_2_item_3", "Press release and announcement distribution"),
        t("ipo_phase_2_item_4", "Virtual roadshow and webcast tools"),
      ],
    },
    {
      phase: t("ipo_phase_3_label", "Post-IPO"),
      title: t("ipo_phase_3_title", "Build your investor base"),
      items: [
        t("ipo_phase_3_item_1", "Ongoing IR platform management"),
        t("ipo_phase_3_item_2", "Earnings management and reporting"),
        t("ipo_phase_3_item_3", "Investor CRM and relationship tracking"),
        t("ipo_phase_3_item_4", "Analytics and investor intelligence"),
      ],
    },
  ];

  const whyItems = [
    t("ipo_why_item_1", "Experienced in 40+ markets and exchanges"),
    t("ipo_why_item_2", "Regulatory compliance built in from day one"),
    t("ipo_why_item_3", "Fast setup — live before your listing date"),
    t("ipo_why_item_4", "Dedicated IPO support team"),
  ];

  return (
    <div>
      <BannerHero
        variant="solutions"
        label={t("ipo_hero_label", "IPO Solutions")}
        title={t("ipo_hero_title", "IR infrastructure for your IPO and beyond")}
        subtitle={t("ipo_hero_subtitle", "From pre-IPO preparation to post-listing IR management, Euroland IR provides the tools and expertise to support your listing journey at every stage.")}
        backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/ipo-hero_b561af4e.jpg"
        primaryCtaLabel={t("book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      {/* Phase timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="text-center mb-12">
            <SectionLabel className="justify-center items-center flex flex-col">{t("ipo_journey_label", "The IPO Journey")}</SectionLabel>
            <h2 className="type-h3 text-3xl font-bold text-[#0f1e2b] mt-2">{t("ipo_journey_heading", "Support at every stage")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <div key={i} className="border border-[#dde0e6] overflow-hidden">
                <div className="p-4 text-white text-sm font-bold uppercase tracking-widest" style={{ backgroundColor: "#082b45" }}>
                  {phase.phase}
                </div>
                <div className="p-6">
                  <h3 className="type-h5 font-bold text-[#0f1e2b] mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#3a4a58]">
                        <Check size={16} className="text-[#28628F] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Euroland for IPO */}
      <section className="py-20" style={{ backgroundColor: "#f2f4f6" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>{t("why_euroland_ir", "Why Euroland IR")}</SectionLabel>
              <h2 className="type-h3 text-3xl font-bold text-[#0f1e2b] mb-6">{t("ipo_why_heading", "Built for the demands of a listing")}</h2>
              <p className="text-[#3a4a58] leading-relaxed mb-4">{t("ipo_why_body_1", "An IPO is one of the most demanding periods in a company's life. Your IR infrastructure needs to be ready from day one — professional, reliable, and scalable.")}</p>
              <p className="text-[#3a4a58] leading-relaxed mb-6">{t("ipo_why_body_2", "Euroland IR has supported hundreds of IPOs across major exchanges worldwide. Our team understands the regulatory requirements, the investor expectations, and the operational demands of a listing.")}</p>
              <ul className="space-y-2">
                {whyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#3a4a58]">
                    <Check size={16} className="text-[#28628F] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-[#dde0e6]">
              <blockquote className="text-lg text-[#0f1e2b] italic leading-relaxed mb-6">
                {t("ipo_testimonial_quote", "\"Euroland IR had our IR platform live two weeks before our IPO date. The platform handled everything — from the roadshow tools to the post-listing disclosure management. It was one less thing to worry about during an incredibly busy period.\"")}
              </blockquote>
              <div>
                <p className="font-bold text-[#0f1e2b] text-sm">{t("ipo_testimonial_name", "Chief Financial Officer")}</p>
                <p className="text-[#5a6a7a] text-sm">{t("ipo_testimonial_company", "Recent IPO, Nasdaq Stockholm")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#eef0f3" }}>
        <div className="container mx-auto px-4 lg:px-8 text-center" style={{ maxWidth: "1536px" }}>
          <h2 className="type-h5 text-2xl font-bold text-[#0f1e2b] mb-4">{t("ipo_cta_heading", "Planning an IPO?")}</h2>
          <p className="text-[#3a4a58] mb-8 max-w-xl mx-auto">{t("ipo_cta_body", "Talk to our IPO specialists about how we can support your listing and build your IR infrastructure for the long term.")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <LangLink href="/book-demo" className="btn-primary">
              {t("common_request_briefing", "Request a Briefing")} <ArrowRight size={16} />
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
