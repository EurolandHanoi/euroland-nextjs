"use client";

// Euroland IR — GDPR page
// Design: Dark navy hero (SimplePage) → white content with structured sections
import SimplePage from "@/components/layout/SimplePage";

const RIGHTS = [
  { title: "Right of Access", desc: "You have the right to request a copy of the personal data we hold about you, along with information about how we process it." },
  { title: "Right to Rectification", desc: "You have the right to request that we correct any inaccurate or incomplete personal data we hold about you." },
  { title: "Right to Erasure", desc: "You have the right to request that we delete your personal data in certain circumstances, such as when it is no longer necessary for the purpose it was collected." },
  { title: "Right to Restrict Processing", desc: "You have the right to request that we restrict the processing of your personal data in certain circumstances, for example while we verify the accuracy of data you have contested." },
  { title: "Right to Data Portability", desc: "You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit it to another controller." },
  { title: "Right to Object", desc: "You have the right to object to the processing of your personal data where we rely on legitimate interests as our legal basis, or where we process your data for direct marketing purposes." },
  { title: "Right to Withdraw Consent", desc: "Where we process your personal data based on your consent, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing before the withdrawal." },
];

const SECTIONS: Array<{ title: string; content?: string; list?: string[]; rights?: boolean }> = [
  {
    title: "1. Introduction",
    content: `Euroland IR AB ("Euroland IR", "we", "us", "our") is committed to protecting your personal data and respecting your privacy rights under the General Data Protection Regulation (GDPR) (EU) 2016/679 and the Swedish Data Protection Act (Dataskyddslagen).

This page explains how we comply with GDPR obligations and how you can exercise your rights as a data subject.`,
  },
  {
    title: "2. Data Controller",
    content: `Euroland IR AB is the data controller for personal data processed in connection with our website and services.\n\nEuroland IR AB\nStureplan 4C, 114 35 Stockholm, Sweden\nOrganisation number: 556608-6768\nEmail: privacy@euroland.com\nData Protection Officer: dpo@euroland.com`,
  },
  {
    title: "3. Legal Bases for Processing",
    content: `We process personal data on the following legal bases under Article 6 GDPR:`,
    list: [
      "Contract (Art. 6(1)(b)): processing necessary for the performance of a contract with you, such as providing our platform services.",
      "Legitimate Interests (Art. 6(1)(f)): processing necessary for our legitimate interests, such as improving our services, preventing fraud, and direct marketing to existing clients.",
      "Legal Obligation (Art. 6(1)(c)): processing necessary to comply with a legal obligation, such as tax and accounting requirements.",
      "Consent (Art. 6(1)(a)): processing based on your freely given, specific, informed, and unambiguous consent, such as for marketing communications to prospects.",
    ],
  },
  {
    title: "4. Categories of Personal Data",
    content: `We process the following categories of personal data:`,
    list: [
      "Identity data: name, job title, employer.",
      "Contact data: email address, telephone number, postal address.",
      "Account data: login credentials, platform usage history, preferences.",
      "Technical data: IP address, browser type, device identifiers, cookies.",
      "Communications data: emails, support tickets, and other correspondence.",
      "Marketing data: communication preferences and engagement history.",
    ],
  },
  { title: "5. Your Rights Under GDPR", rights: true },
  {
    title: "6. Exercising Your Rights",
    content: `To exercise any of your rights, please submit a request to privacy@euroland.com. We will respond within 30 days. We may need to verify your identity before processing your request. There is no charge for exercising your rights unless requests are manifestly unfounded or excessive.`,
  },
  {
    title: "7. International Transfers",
    content: `Where we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the European Commission, or we rely on adequacy decisions where applicable.`,
  },
  {
    title: "8. Retention Periods",
    content: `We retain personal data only for as long as necessary for the purposes for which it was collected, or as required by law. Client account data is retained for the duration of the contract and for 7 years thereafter for accounting purposes. Marketing data is retained until you withdraw consent or object to processing.`,
  },
  {
    title: "9. Supervisory Authority",
    content: `You have the right to lodge a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY) at imy.se, or with the supervisory authority in your country of residence, if you believe we have processed your personal data in violation of GDPR.`,
  },
  {
    title: "10. Changes to This Page",
    content: `We may update this GDPR information page from time to time to reflect changes in our processing activities or legal requirements. The effective date at the top of this page indicates when it was last updated.`,
  },
];

const SECTION_STYLE = { marginBottom: "40px" } as const;
const H3_STYLE = { fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: "rgb(13, 27, 42)", marginBottom: "12px" } as const;
const P_STYLE = { fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", whiteSpace: "pre-line" as const };
const LI_STYLE = { fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", marginBottom: "6px" } as const;

export default function GDPR() {
  return (
    <SimplePage label="Legal" title="GDPR Compliance" subtitle="How Euroland IR processes personal data and your rights under the General Data Protection Regulation." showCta={false}>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="max-w-3xl">
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.48px", color: "rgb(58, 74, 88)", marginBottom: "40px", paddingBottom: "16px", borderBottom: "1px solid rgb(221, 224, 230)" }}>
              Last updated: April 2025
            </p>
            {SECTIONS.map((section, i) => (
              <div key={i} style={SECTION_STYLE}>
                <h3 className="type-h6" style={H3_STYLE}>{section.title}</h3>
                {section.content && (
                  <p style={{ ...P_STYLE, marginBottom: section.list ? "12px" : "0" }}>{section.content}</p>
                )}
                {section.list && (
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {section.list.map((item, j) => <li key={j} style={LI_STYLE}>{item}</li>)}
                  </ul>
                )}
                {section.rights && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                    {RIGHTS.map((r, j) => (
                      <div key={j} style={{ padding: "20px 24px", border: "1px solid rgb(221, 224, 230)", borderRadius: "4px", borderLeft: "3px solid rgb(0, 107, 163)" }}>
                        <div style={{ fontSize: "15px", fontWeight: 600, color: "rgb(13, 27, 42)", marginBottom: "6px" }}>{r.title}</div>
                        <div style={{ fontSize: "14px", lineHeight: "24px", color: "rgb(58, 74, 88)" }}>{r.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SimplePage>
  );
}