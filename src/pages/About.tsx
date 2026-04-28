"use client";

// Euroland IR — About page

import { useLanguage } from "@/contexts/LanguageContext";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { ArrowRight } from "lucide-react";

type TFunction = (key: string, fallback?: string) => string;

function getValues(t: TFunction) {
  return [
    {
      icon: "🎯",
      title: t("about_values_client_centricity", "Client-Centricity"),
      desc: t(
        "about_values_client_centricity_desc",
        "Every product decision starts with the IR professional's workflow. We build what our clients actually need."
      ),
    },
    {
      icon: "🔒",
      title: t("about_values_reliability", "Reliability"),
      desc: t(
        "about_values_reliability_desc",
        "Listed companies depend on us for time-sensitive disclosures. We take that responsibility seriously."
      ),
    },
    {
      icon: "🌍",
      title: t("about_values_global_reach", "Global Reach"),
      desc: t(
        "about_values_global_reach_desc",
        "IR is a global discipline. Our platform supports 10 languages and 40+ markets out of the box."
      ),
    },
    {
      icon: "🚀",
      title: t("about_values_continuous_innovation", "Continuous Innovation"),
      desc: t(
        "about_values_continuous_innovation_desc",
        "We invest heavily in R&D — from AI-powered workflows to real-time data infrastructure."
      ),
    },
  ];
}

function getOffices(t: TFunction) {
  return [
    { city: "Stockholm", country: "Sweden", role: t("about_offices_headquarters", "Headquarters") },
    { city: "London", country: "United Kingdom", role: t("about_offices_regional_office", "Regional Office") },
    { city: "Frankfurt", country: "Germany", role: t("about_offices_regional_office", "Regional Office") },
    { city: "Hong Kong", country: "China SAR", role: t("about_offices_asia_pacific_office", "Asia Pacific Office") },
    { city: "Tokyo", country: "Japan", role: t("about_offices_japan_office", "Japan Office") },
    { city: "New York", country: "United States", role: t("about_offices_americas_office", "Americas Office") },
  ];
}

const CDN = {
  officeMap: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/office-map_a8a2d1c1.webp",
};

export default function About() {
  const { t } = useLanguage();

  const values = getValues(t);
  const offices = getOffices(t);

  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: "#082b45" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="max-w-3xl">
            <SectionLabel light>{t("about_hero_label", "About Euroland IR")}</SectionLabel>
            <h2 className="type-h2 text-4xl lg:text-5xl font-bold text-white mb-6">{t("about_hero_title", "Built for the IR profession")}</h2>
            <p className="text-lg text-white/70 leading-relaxed">{t("about_hero_subtitle", "We help listed companies communicate with investors more effectively.")}</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>{t("about_mission_label", "Our Mission")}</SectionLabel>
              <h2 className="type-h3 text-3xl font-bold text-[#0f1e2b] mb-6">{t("about_mission_title", "Empowering investor relations teams worldwide")}</h2>
              <p className="text-[#3a4a58] leading-relaxed mb-4">
                Euroland IR was founded in 1999 with a clear purpose: to give every publicly listed company access to the same quality of investor relations tools and infrastructure that was previously only available to the largest corporations.
              </p>
              <p className="text-[#3a4a58] leading-relaxed">
                Today, we serve over 1,400 listed companies across 40+ countries — from newly listed micro-cap companies to global large-cap enterprises — all on the same platform, with the same commitment to reliability and best practice.
              </p>
            </div>
            <div className="bg-[#f2f4f6] p-8 border-l-4 border-[#28628F]">
              <div className="text-5xl font-bold text-[#082b45] mb-2">1999</div>
              <p className="text-[#3a4a58] text-sm">{t("about_mission_founded", "Founded in Stockholm, Sweden")}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#082b45]">1,400+</div>
                  <div className="text-xs text-[#5a6a7a] uppercase tracking-wide">{t("about_mission_listed_companies", "Listed Companies")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#082b45]">40+</div>
                  <div className="text-xs text-[#5a6a7a] uppercase tracking-wide">{t("about_mission_countries", "Countries")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#082b45]">25+</div>
                  <div className="text-xs text-[#5a6a7a] uppercase tracking-wide">{t("about_mission_years_experience", "Years Experience")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#082b45]">10</div>
                  <div className="text-xs text-[#5a6a7a] uppercase tracking-wide">{t("about_mission_languages", "Languages")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "#f2f4f6" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="text-center mb-12">
            <SectionLabel className="justify-center items-center flex flex-col">{t("about_values_label", "Our Values")}</SectionLabel>
            <h2 className="type-h3 text-3xl font-bold text-[#0f1e2b] mt-2">{t("about_values_title", "What drives us")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 border border-[#dde0e6]">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="type-h5 font-bold text-[#0f1e2b] mb-2">{v.title}</h3>
                <p className="text-sm text-[#5a6a7a] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="mb-12">
            <SectionLabel>{t("about_offices_label", "Global Offices")}</SectionLabel>
            <h2 className="type-h3 text-3xl font-bold text-[#0f1e2b] mt-2">{t("about_offices_title", "Present in 40+ markets worldwide")}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {offices.map((office, i) => (
                <div key={i} className="p-4 border border-[#dde0e6]">
                  <div className="font-bold text-[#0f1e2b]">{office.city}</div>
                  <div className="text-sm text-[#3a4a58]">{office.country}</div>
                  <div className="text-xs text-[#28628F] font-semibold mt-1 uppercase tracking-wide">{office.role}</div>
                </div>
              ))}
            </div>
            <div>
              <img
                src={CDN.officeMap}
                alt={t("about_offices_map_alt", "Global offices map")}
                className="w-full rounded-sm shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#f2f4f6" }}>
        <div className="container mx-auto px-4 lg:px-8 text-center" style={{ maxWidth: "1536px" }}>
          <h2 className="type-h5 text-2xl font-bold text-[#0f1e2b] mb-4">{t("about_cta_title", "Work with us")}</h2>
          <p className="text-[#3a4a58] mb-8 max-w-xl mx-auto">
            {t(
              "about_cta_text",
              "Whether you're a listed company looking for a better IR platform, or a talented professional looking to join our team — we'd love to hear from you."
            )}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <LangLink href="/book-demo" className="btn-primary">
              {t("common_book_demo", "Book a Demo")} <ArrowRight size={16} />
            </LangLink>
            <LangLink href="/careers" className="btn-outline">
              {t("about_cta_view_careers", "View Careers")}
            </LangLink>
          </div>
        </div>
      </section>
    </div>
  );
}
