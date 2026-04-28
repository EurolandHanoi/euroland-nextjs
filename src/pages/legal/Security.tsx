"use client";

// Euroland IR — Security page
// Design: Dark navy hero (SimplePage) → white content with structured sections
import SimplePage from "@/components/layout/SimplePage";

const MEASURES = [
  { label: "Encryption in Transit", desc: "All data transmitted between your browser and our servers is encrypted using TLS 1.2 or higher. We enforce HTTPS across all endpoints." },
  { label: "Encryption at Rest", desc: "Sensitive data stored on our servers is encrypted at rest using AES-256. Database backups are also encrypted." },
  { label: "Access Controls", desc: "Access to production systems is restricted to authorised personnel only, using role-based access control (RBAC) and multi-factor authentication (MFA)." },
  { label: "Penetration Testing", desc: "We conduct regular third-party penetration tests and vulnerability assessments. Critical findings are remediated within 48 hours." },
  { label: "Infrastructure Security", desc: "Our platform is hosted on ISO 27001-certified cloud infrastructure with 24/7 monitoring, automated threat detection, and DDoS protection." },
  { label: "Secure Development", desc: "Our development process follows OWASP secure coding guidelines. All code changes undergo peer review and automated security scanning before deployment." },
  { label: "Incident Response", desc: "We maintain a documented incident response plan. In the event of a security breach, affected clients will be notified within 72 hours in accordance with GDPR requirements." },
  { label: "Business Continuity", desc: "We maintain automated daily backups with point-in-time recovery. Our recovery time objective (RTO) is 4 hours and recovery point objective (RPO) is 1 hour." },
];

const SECTIONS: Array<{ title: string; content?: string; list?: string[]; measures?: boolean }> = [
  {
    title: "Our Commitment to Security",
    content: `Security is a core component of everything we build at Euroland IR. We protect the confidentiality, integrity, and availability of your data through a comprehensive set of technical and organisational controls. Our security programme is aligned with ISO 27001 and SOC 2 Type II principles.`,
  },
  { title: "Security Measures", measures: true },
  {
    title: "Data Residency",
    content: `By default, all client data is stored within the European Economic Area (EEA) on servers located in Sweden and Germany. Clients with specific data residency requirements should contact their account manager.`,
  },
  {
    title: "Subprocessors",
    content: `We use a limited number of vetted subprocessors to deliver our services, including cloud infrastructure, email delivery, and customer support tooling. All subprocessors are bound by data processing agreements and are required to maintain security standards equivalent to our own. A full list of subprocessors is available on request.`,
  },
  {
    title: "Compliance",
    content: `Euroland IR maintains compliance with the following frameworks and regulations:`,
    list: [
      "General Data Protection Regulation (GDPR) — EU 2016/679",
      "Swedish Data Protection Act (Dataskyddslagen)",
      "ISO/IEC 27001 (Information Security Management) — aligned",
      "SOC 2 Type II — aligned",
      "OWASP Top 10 — addressed in development lifecycle",
    ],
  },
  {
    title: "Responsible Disclosure",
    content: `We welcome reports from security researchers who identify vulnerabilities in our systems. If you believe you have found a security issue, please contact us at security@euroland.com before disclosing it publicly. We commit to acknowledging your report within 24 hours and providing a resolution timeline within 5 business days.`,
  },
  {
    title: "Contact",
    content: `For security-related enquiries, please contact:\n\nSecurity Team — Euroland IR AB\nEmail: security@euroland.com\nFor urgent matters: +46 31 700 0888`,
  },
];

const SECTION_STYLE = { marginBottom: "40px" } as const;
const H3_STYLE = { fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: "rgb(13, 27, 42)", marginBottom: "12px" } as const;
const P_STYLE = { fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", whiteSpace: "pre-line" as const };
const LI_STYLE = { fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", marginBottom: "6px" } as const;

export default function Security() {
  return (
    <SimplePage label="Security" title="Security at Euroland IR" subtitle="How we protect your data and maintain the integrity of our platform." showCta={false}>
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
                {section.measures && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                    {MEASURES.map((m, j) => (
                      <div key={j} style={{ padding: "20px 24px", border: "1px solid rgb(221, 224, 230)", borderRadius: "4px", borderLeft: "3px solid rgb(0, 107, 163)" }}>
                        <div style={{ fontSize: "15px", fontWeight: 600, color: "rgb(13, 27, 42)", marginBottom: "6px" }}>{m.label}</div>
                        <div style={{ fontSize: "14px", lineHeight: "24px", color: "rgb(58, 74, 88)" }}>{m.desc}</div>
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