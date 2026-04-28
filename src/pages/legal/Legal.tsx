"use client";

// Euroland IR — Terms of Use page
// Design: Dark navy hero (SimplePage) → white content with structured sections
import SimplePage from "@/components/layout/SimplePage";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Euroland IR platform and platform (the "Services"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Services. These terms apply to all visitors, users, and clients of Euroland IR AB.`,
  },
  {
    title: "2. Description of Services",
    content: `Euroland IR provides investor relations software, IR platform solutions, disclosure management tools, and related services to publicly listed companies. The specific features and functionality available to you depend on your subscription plan and the terms of your client agreement.`,
  },
  {
    title: "3. User Accounts",
    content: `To access certain features of our platform, you must create an account. You are responsible for:`,
    list: [
      "Maintaining the confidentiality of your account credentials.",
      "All activities that occur under your account.",
      "Notifying us immediately of any unauthorised use of your account.",
      "Ensuring that your account information is accurate and up to date.",
    ],
  },
  {
    title: "4. Acceptable Use",
    content: `You agree not to use the Services to:`,
    list: [
      "Violate any applicable law or regulation.",
      "Transmit any material that is unlawful, harmful, defamatory, or otherwise objectionable.",
      "Attempt to gain unauthorised access to any part of the Services or related systems.",
      "Interfere with or disrupt the integrity or performance of the Services.",
      "Scrape, crawl, or extract data from the Services without our prior written consent.",
      "Use the Services for competitive intelligence or to build a competing product.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: `All content, software, trademarks, and other intellectual property on our website and platform are owned by or licensed to Euroland IR AB. You may not reproduce, distribute, modify, or create derivative works without our prior written consent. Your use of the Services does not grant you any ownership rights in our intellectual property.`,
  },
  {
    title: "6. Client Data",
    content: `You retain ownership of all data you upload or create using our platform ("Client Data"). By using our Services, you grant us a limited licence to process your Client Data solely to provide and improve the Services. We will handle your Client Data in accordance with our Privacy Policy and any applicable data processing agreement.`,
  },
  {
    title: "7. Disclaimers",
    content: `The Services are provided on an "as is" and "as available" basis. To the maximum extent permitted by law, Euroland IR disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or free from viruses or other harmful components.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, Euroland IR shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Services. Our total liability to you for any claim arising under these terms shall not exceed the amounts paid by you to us in the twelve months preceding the claim.`,
  },
  {
    title: "9. Termination",
    content: `We reserve the right to suspend or terminate your access to the Services at any time, with or without notice, if we believe you have violated these Terms of Use. You may terminate your account at any time by contacting us. Upon termination, your right to use the Services will immediately cease.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms of Use are governed by and construed in accordance with the laws of Sweden. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Stockholm, Sweden.`,
  },
  {
    title: "11. Changes to These Terms",
    content: `We may update these Terms of Use from time to time. We will notify you of material changes by posting the updated terms on our website with a revised effective date. Your continued use of the Services after such changes constitutes your acceptance of the updated terms.`,
  },
  {
    title: "12. Contact",
    content: `If you have questions about these Terms of Use, please contact us at:\n\nEuroland IR AB\nStureplan 4C, 114 35 Stockholm, Sweden\nEmail: legal@euroland.com`,
  },
];

export default function Legal() {
  return (
    <SimplePage
      label="Legal"
      title="Terms of Use"
      subtitle="The terms and conditions governing your use of our website and platform."
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