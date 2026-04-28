"use client";

// Euroland IR — Contact page
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fields = [
    { key: "name", label: t("contact_field_name", "Full Name"), type: "text" },
    { key: "email", label: t("contact_field_email", "Email Address"), type: "email" },
    { key: "company", label: t("contact_field_company", "Company"), type: "text" },
  ];

  const offices = [
    { city: t("contact_office_stockholm", "Stockholm (HQ)"), address: "Stureplan 4C, 114 35 Stockholm, Sweden", email: "info@euroland.com" },
    { city: t("contact_office_london", "London"), address: "1 Canada Square, Canary Wharf, London E14 5AB", email: "uk@euroland.com" },
    { city: t("contact_office_frankfurt", "Frankfurt"), address: "Taunusanlage 8, 60329 Frankfurt am Main, Germany", email: "de@euroland.com" },
  ];

  return (
    <div>
      <section className="py-20" style={{ backgroundColor: "#082b45" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="max-w-2xl">
            <SectionLabel light>{t("contact_label", "Contact")}</SectionLabel>
            <h2 className="type-h2 text-4xl font-bold text-white mb-4">{t("contact_hero_title", "Get in touch")}</h2>
            <p className="text-white/70 leading-relaxed">
              {t("contact_hero_subtitle", "Whether you have a question about the platform, want to book a demo, or need support — our team is here to help.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h3 className="type-h6 font-bold text-[#0f1e2b] text-xl mb-6">{t("contact_form_heading", "Send us a message")}</h3>
              {submitted ? (
                <div className="p-8 border border-[#28628F] bg-[#f2f4f6]">
                  <p className="text-[#0f1e2b] font-semibold">{t("contact_form_success", "Thank you — we'll be in touch shortly.")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {fields.map(field => (
                    <div key={field.key}>
                      <label className="block text-sm font-semibold text-[#0f1e2b] mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        required
                        className="w-full px-4 py-3 border border-[#dde0e6] focus:border-[#082b45] focus:outline-none text-sm"
                        value={(form as any)[field.key]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-[#0f1e2b] mb-2">{t("contact_field_message", "Message")}</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-[#dde0e6] focus:border-[#082b45] focus:outline-none text-sm resize-none"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    {t("contact_form_submit", "Send Message")} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Office info */}
            <div>
              <h3 className="type-h6 font-bold text-[#0f1e2b] text-xl mb-6">{t("contact_offices_heading", "Our offices")}</h3>
              <div className="space-y-6">
                {offices.map((office, i) => (
                  <div key={i} className="p-5 border border-[#dde0e6]">
                    <div className="font-bold text-[#0f1e2b] mb-1">{office.city}</div>
                    <div className="text-sm text-[#5a6a7a] mb-1">{office.address}</div>
                    <a href={`mailto:${office.email}`} className="text-sm text-[#28628F] hover:underline">{office.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
