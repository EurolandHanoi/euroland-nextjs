"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { CheckCircle2, ExternalLink, LifeBuoy, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitLead } from "@/lib/leadApi";

type TFunction = (key: string, fallback?: string) => string;
type Status = "idle" | "submitting" | "success" | "error";

function getRegions(t: TFunction) {
  return [
    {
      region: "EUROPE",
      offices: [
        { country: "ESTONIA", city: "Tallinn", address: "Turi 10c, 11313 Tallinn, Estonia", phone: "+372 6788 400", mapsUrl: "https://maps.google.com/?q=Turi+10c+11313+Tallinn+Estonia" },
        { country: "SWEDEN", city: "Gothenburg", address: "Kronhusgatan 2d, Gothenburg, Sweden", phone: "+46 31 105 600", mapsUrl: "https://maps.google.com/?q=Kronhusgatan+2d+Gothenburg" },
      ],
    },
    {
      region: "MIDDLE EAST",
      offices: [
        { country: "UAE", city: "Dubai", address: "Indigo Icon Tower, Jumeirah Lake Towers, 634305 Dubai, UAE", phone: "+971 44362374", mapsUrl: "https://maps.google.com/?q=Indigo+Icon+Tower+Jumeirah+Lake+Towers+Dubai" },
      ],
    },
    {
      region: "ASIA PACIFIC",
      offices: [
        { country: "CHINA", city: "Shanghai", address: "Jiaxing Building, Dongfang Road 877, Shanghai 200122, China", phone: "+86 21 6881 3591", mapsUrl: "https://maps.google.com/?q=Dongfang+Road+877+Shanghai+200122" },
        { country: "HONG KONG", city: "Hong Kong", address: "7B One Capital Place, 18 Luard Road, Wanchai, Hong Kong", phone: "+86 21 6881 3591", mapsUrl: "https://maps.google.com/?q=18+Luard+Road+Wanchai+Hong+Kong" },
        { country: "JAPAN", city: "Tokyo", address: "Nippo Kanda Awajicho Cross, 3rd Floor, 1-1-7 Kanda Awajicho, Chiyoda-ku, Tokyo 101-0063, Japan", phone: "", mapsUrl: "https://maps.google.com/?q=1-1-7+Kanda+Awajicho+Chiyoda-ku+Tokyo" },
      ],
    },
  ];
}

export default function ContactUs() {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const regions = getRegions(t);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitLead({
        type: "contact",
        firstName: String(formData.get("firstName") || ""),
        lastName: String(formData.get("lastName") || ""),
        email: String(formData.get("email") || ""),
        company: String(formData.get("company") || ""),
        role: String(formData.get("role") || ""),
        phone: String(formData.get("phone") || ""),
        message: String(formData.get("message") || ""),
        interests: [],
        locale: lang,
        sourcePath: pathname ?? undefined,
        website: String(formData.get("website") || ""),
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t("contactus_form_generic_error", "We could not submit your enquiry right now."));
    }
  }

  return (
    <PageWrapper>
      <BannerHero
        variant="resources"
        label={t("contactus_contact", "Contact")}
        title={t("contactus_get_in_touch", "Talk to the Euroland IR team")}
        subtitle={
          <>
            <span>
              {t(
                "contactus_hero_subtitle",
                "Speak with a specialist about platform fit, implementation, investor communications, market data, AI, sustainability reporting, or support for your listed-company workflow."
              )}
            </span>
            <div className="form-help" style={{ color: "rgba(255,255,255,0.72)", marginTop: "16px" }}>
              {t("contactus_hero_helper", "Most enquiries receive a response within one business day.")}
            </div>
          </>
        }
      />

      <section className="section" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="container">
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <div>
              <h2 className="type-h3" style={{ color: "var(--text-primary)", fontWeight: 400, fontSize: "40px", lineHeight: "48px", letterSpacing: "0.005em", marginBottom: "24px" }}>
                {t("contactus_get_in_touch_with_our_team", "Get in touch with our team")}
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "0.01em", color: "var(--text-secondary)", marginBottom: "32px", maxWidth: "560px" }}>
                {t(
                  "contactus_clients_relationship",
                  "Euroland IR supports listed companies and IR teams with managed software, specialist guidance, and global delivery across investor communications, disclosure, and shareholder engagement."
                )}
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                {[
                  { icon: CheckCircle2, text: t("contactus_dedicated_support", "Dedicated support for disclosure, IR platforms, and investor communication.") },
                  { icon: ShieldCheck, text: t("contactus_security_governance", "Security, governance, and workflow conversations for listed and pre-IPO companies.") },
                  { icon: LifeBuoy, text: t("contactus_best_practice_examples", "Clear next steps whether you need a product consultation, a project conversation, or helpdesk support.") },
                ].map((item) => (
                  <li key={item.text} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <item.icon size={16} color="#28628F" strokeWidth={2} style={{ flexShrink: 0, marginTop: "4px" }} />
                    <span style={{ fontSize: "14px", lineHeight: "24px", color: "var(--text-primary)" }}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Mail size={14} color="#28628F" />
                  <a href="mailto:info@euroland.com" style={{ fontSize: "14px", lineHeight: "24px", color: "#28628F", textDecoration: "none" }}>info@euroland.com</a>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Phone size={14} color="rgb(58, 74, 88)" />
                  <span style={{ fontSize: "14px", lineHeight: "24px", color: "rgb(58, 74, 88)" }}>+45 33 12 34 56</span>
                </div>
              </div>

              <div id="helpdesk" className="card" style={{ scrollMarginTop: "96px", background: "rgb(247, 248, 250)" }}>
                <div className="u-label" style={{ marginBottom: "12px" }}>{t("contactus_helpdesk_label", "Helpdesk")}</div>
                <h3 className="type-h5" style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "12px" }}>
                  {t("contactus_helpdesk_heading", "Need product or client support?")}
                </h3>
                <p style={{ marginBottom: "16px", maxWidth: "520px" }}>
                  {t(
                    "contactus_helpdesk_body",
                    "Existing clients can use this contact point for product questions, ongoing project support, or helpdesk assistance. Include your company name and a short description so we can route your request quickly."
                  )}
                </p>
                <a href="https://helpdesk.euroland.com/support/home" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: "inline-flex" }}>
                  {t("contactus_helpdesk_cta", "Email the helpdesk")}
                </a>
              </div>
            </div>

            <div className="card">
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "64px 0" }}>
                  <CheckCircle2 size={48} color="#28628F" strokeWidth={1.5} style={{ marginBottom: "24px" }} />
                  <h2 className="type-h5" style={{ color: "var(--text-primary)", marginBottom: "16px", fontSize: "24px", fontWeight: 500, lineHeight: "32px" }}>
                    {t("contactus_message_sent", "Thank you. Your message has been sent.")}
                  </h2>
                  <p style={{ color: "var(--text-secondary)", marginBottom: "12px" }}>{t("contactus_message_sent_body", "We will respond within one business day.")}</p>
                  <p className="form-help" style={{ margin: 0 }}>{t("contactus_message_sent_context", "Your enquiry will be routed to the most relevant team.")}</p>
                </div>
              ) : (
                <>
                  <h2 className="type-h4" style={{ color: "var(--text-primary)", fontSize: "32px", lineHeight: "40px", fontWeight: 400, marginBottom: "8px" }}>
                    {t("contactus_share_your_details", "Share your details")}
                  </h2>
                  <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--text-secondary)", marginBottom: "32px" }}>
                    {t("contactus_most_enquiries_response", "Most enquiries receive a response within one business day.")} Fields marked <span style={{ color: "#e53e3e" }}>*</span> are required.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true" />

                    <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label className="form-label" htmlFor="contact-first-name">{t("contactus_first_name", "First name")} <span style={{ color: "#e53e3e" }}>*</span></label>
                        <input className="form-input" id="contact-first-name" name="firstName" type="text" placeholder={t("contactus_first_name_placeholder", "John")} required />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="contact-last-name">{t("contactus_last_name", "Last name")} <span style={{ color: "#e53e3e" }}>*</span></label>
                        <input className="form-input" id="contact-last-name" name="lastName" type="text" placeholder={t("contactus_last_name_placeholder", "Smith")} required />
                      </div>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="contact-email">{t("contactus_work_email", "Work email")} <span style={{ color: "#e53e3e" }}>*</span></label>
                      <input className="form-input" id="contact-email" name="email" type="email" placeholder={t("contactus_work_email_placeholder", "owner@company.com")} required />
                    </div>

                    <div>
                      <label className="form-label" htmlFor="contact-company">{t("contactus_company", "Company")} <span style={{ color: "#e53e3e" }}>*</span></label>
                      <input className="form-input" id="contact-company" name="company" type="text" placeholder={t("contactus_company_placeholder", "Example Corporation")} required />
                    </div>

                    <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label className="form-label" htmlFor="contact-role">{t("contactus_role", "Your role")}</label>
                        <input className="form-input" id="contact-role" name="role" type="text" placeholder="Head of IR" />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="contact-phone">{t("contactus_phone", "Phone number")}</label>
                        <input className="form-input" id="contact-phone" name="phone" type="tel" placeholder="+1 555 000 0000" />
                      </div>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="contact-message">{t("contactus_message", "Message")} <span style={{ color: "#e53e3e" }}>*</span></label>
                      <textarea className="form-input" id="contact-message" name="message" rows={5} placeholder="How can we help you?" style={{ resize: "vertical" }} required />
                    </div>

                    {status === "error" && (
                      <p className="form-status-error" role="alert">{errorMessage}</p>
                    )}

                    <p className="form-help" style={{ margin: 0 }}>
                      {t(
                        "contactus_privacy_note",
                        "By submitting this form, you agree that Euroland IR may contact you about your enquiry. We do not use this form for unrelated marketing."
                      )}
                    </p>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", height: "48px", letterSpacing: "0.96px" }} disabled={status === "submitting"}>
                      {status === "submitting" ? t("contactus_send_loading", "Sending message...") : t("contactus_send_message", "Send Message")}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "rgb(247, 248, 250)", padding: "80px 0" }}>
        <div className="container">
          <div className="u-label" style={{ marginBottom: "16px" }}>{t("contactus_global_offices", "Global offices")}</div>
          <h2 className="type-h3" style={{ color: "var(--text-primary)", fontWeight: 400, fontSize: "40px", lineHeight: "48px", letterSpacing: "0.005em", marginBottom: "48px" }}>
            {t("contactus_find_us_worldwide", "Find us worldwide")}
          </h2>

          {regions.map((region) => (
            <div key={region.region} style={{ marginBottom: "48px" }}>
              <div style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(13, 27, 42)", marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid rgb(229, 231, 235)" }}>
                {region.region}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {region.offices.map((office) => (
                  <div key={`${region.region}-${office.city}`} className="card" style={{ width: "275px", flexShrink: 0 }}>
                    <div style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "#28628F", marginBottom: "16px" }}>{office.country}</div>
                    <h3 className="type-h5" style={{ color: "var(--text-primary)", fontSize: "24px", lineHeight: "32px", fontWeight: 500, marginBottom: "16px" }}>{office.city}</h3>
                    <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "8px" }}>
                      <MapPin size={14} color="rgb(58, 74, 88)" style={{ flexShrink: 0, marginTop: "3px" }} />
                      <p style={{ fontSize: "13px", lineHeight: "20px", color: "rgb(58, 74, 88)", margin: 0 }}>{office.address}</p>
                    </div>
                    {office.phone && (
                      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px" }}>
                        <Phone size={14} color="rgb(58, 74, 88)" />
                        <p style={{ fontSize: "13px", lineHeight: "24px", color: "rgb(58, 74, 88)", margin: 0 }}>{office.phone}</p>
                      </div>
                    )}
                    <a href={office.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 500, lineHeight: "24px", color: "#28628F", textDecoration: "none" }}>
                      {t("contactus_view_on_google_maps", "View on Google Maps")} <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
