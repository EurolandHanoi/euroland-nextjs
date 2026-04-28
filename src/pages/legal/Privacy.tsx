"use client";

// Euroland IR — Privacy Policy page
// Design: Dark navy hero (SimplePage) → white content with structured sections
import SimplePage from "@/components/layout/SimplePage";

const SECTIONS = [
  {
    title: "1. Who We Are",
    content: `Euroland IR AB ("Euroland IR", "we", "us", "our") is a technology company providing investor relations software and services to publicly listed companies. Our registered office is at Stureplan 4C, 114 35 Stockholm, Sweden. We are the data controller for personal data processed in connection with our website and services.`,
  },
  {
    title: "2. Data We Collect",
    content: `We collect and process the following categories of personal data:`,
    list: [
      "Contact information: name, email address, telephone number, job title, and company name provided when you contact us, register for a demo, or subscribe to our communications.",
      "Account data: login credentials, usage preferences, and settings when you use our platform.",
      "Usage data: information about how you interact with our website and platform, including pages visited, features used, and time spent.",
      "Technical data: IP address, browser type and version, device identifiers, operating system, and referral source.",
      "Communications data: records of correspondence when you contact us by email, phone, or through our website.",
    ],
  },
  {
    title: "3. How We Use Your Data",
    content: `We use your personal data for the following purposes:`,
    list: [
      "To provide, operate, and improve our investor relations platform and services.",
      "To respond to enquiries, support requests, and demo bookings.",
      "To send you product updates, newsletters, and marketing communications (where you have consented or we have a legitimate interest).",
      "To comply with legal and regulatory obligations.",
      "To detect, prevent, and address technical issues, fraud, and security threats.",
      "To analyse usage patterns and improve the user experience of our platform.",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your personal data on the following legal bases under the General Data Protection Regulation (GDPR):`,
    list: [
      "Contract performance: where processing is necessary to fulfil a contract with you or to take steps at your request before entering into a contract.",
      "Legitimate interests: where we have a legitimate business interest that is not overridden by your rights, such as improving our services and direct marketing to existing clients.",
      "Consent: where you have given us explicit consent, such as subscribing to our newsletter.",
      "Legal obligation: where processing is necessary to comply with applicable law.",
    ],
  },
  {
    title: "5. Data Sharing",
    content: `We do not sell your personal data. We may share your data with:`,
    list: [
      "Service providers who assist us in operating our platform (e.g., cloud hosting, analytics, email delivery) under data processing agreements.",
      "Professional advisers including lawyers, accountants, and auditors where necessary.",
      "Regulatory authorities, law enforcement, or courts where required by law.",
      "Acquirers in the event of a merger, acquisition, or sale of all or part of our business.",
    ],
  },
  {
    title: "6. International Transfers",
    content: `Some of our service providers are located outside the European Economic Area (EEA). Where we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission or transfers to countries with an adequacy decision.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When data is no longer needed, we securely delete or anonymise it. Account data is retained for the duration of the client relationship and for up to 7 years thereafter for legal and tax purposes.`,
  },
  {
    title: "8. Your Rights",
    content: `Under GDPR, you have the following rights regarding your personal data:`,
    list: [
      "Right of access: to obtain a copy of the personal data we hold about you.",
      "Right to rectification: to correct inaccurate or incomplete data.",
      "Right to erasure: to request deletion of your data in certain circumstances.",
      "Right to restriction: to restrict how we process your data in certain circumstances.",
      "Right to data portability: to receive your data in a structured, machine-readable format.",
      "Right to object: to object to processing based on legitimate interests or for direct marketing.",
      "Right to withdraw consent: where processing is based on consent, to withdraw it at any time.",
    ],
  },
  {
    title: "9. Cookies",
    content: `Our website uses cookies and similar tracking technologies. Please refer to our Cookie Policy for detailed information on the cookies we use and how to manage your preferences.`,
  },
  {
    title: "10. Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. These include encryption, access controls, and regular security assessments. However, no method of transmission over the internet is completely secure.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website with a revised effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer:\n\nEuroland IR AB\nStureplan 4C, 114 35 Stockholm, Sweden\nEmail: privacy@euroland.com\n\nYou also have the right to lodge a complaint with your local supervisory authority. In Sweden, this is the Swedish Authority for Privacy Protection (IMY): www.imy.se`,
  },
];

export default function Privacy() {
  return (
    <SimplePage
      label="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal data."
      showCta={false}
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="max-w-3xl">
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.48px", color: "rgb(58, 74, 88)", marginBottom: "40px", paddingBottom: "16px", borderBottom: "1px solid rgb(221, 224, 230)" }}>
              Last updated: April 2025
            </p>
            {SECTIONS.map((section, i) => (
              <div key={i} style={{ marginBottom: "40px" }}>
                <h3 className="type-h6" style={{ fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: "rgb(13, 27, 42)", marginBottom: "12px" }}>
                  {section.title}
                </h3>
                {section.content && (
                  <p style={{ fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", marginBottom: section.list ? "12px" : "0", whiteSpace: "pre-line" }}>
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {section.list.map((item, j) => (
                      <li key={j} style={{ fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SimplePage>
  );
}