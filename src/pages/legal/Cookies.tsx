"use client";

// Euroland IR — Cookie Policy page
// Design: Dark navy hero (SimplePage) → white content with structured sections
import SimplePage from "@/components/layout/SimplePage";

const COOKIE_TABLE = [
  { name: "session_id", type: "Essential", purpose: "Maintains your login session across page requests.", duration: "Session" },
  { name: "csrf_token", type: "Essential", purpose: "Protects against cross-site request forgery attacks.", duration: "Session" },
  { name: "lang_pref", type: "Functional", purpose: "Stores your language preference (EN/DE/FR/SE).", duration: "1 year" },
  { name: "_ga", type: "Analytics", purpose: "Google Analytics — distinguishes unique users.", duration: "2 years" },
  { name: "_ga_*", type: "Analytics", purpose: "Google Analytics — maintains session state.", duration: "2 years" },
  { name: "_gid", type: "Analytics", purpose: "Google Analytics — distinguishes users within a 24-hour window.", duration: "24 hours" },
  { name: "hs_*", type: "Marketing", purpose: "HubSpot — tracks visitors for CRM and marketing automation.", duration: "Up to 13 months" },
  { name: "intercom-*", type: "Functional", purpose: "Intercom — powers the live chat and support widget.", duration: "9 months" },
];

const SECTIONS = [
  {
    title: "1. What Are Cookies?",
    content: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to website owners. Cookies cannot execute programs or deliver viruses to your device.`,
  },
  {
    title: "2. How We Use Cookies",
    content: `We use cookies and similar technologies (such as web beacons and local storage) for the following purposes:`,
    list: [
      "Essential cookies: required for the website and platform to function correctly. These cannot be disabled.",
      "Functional cookies: remember your preferences (such as language) to provide a personalised experience.",
      "Analytics cookies: help us understand how visitors interact with our website so we can improve it.",
      "Marketing cookies: used to track visitors across websites to display relevant advertisements.",
    ],
  },
  {
    title: "3. Cookies We Use",
    table: true,
  },
  {
    title: "4. Third-Party Cookies",
    content: `Some cookies are placed by third-party services that appear on our pages. These include Google Analytics (analytics), HubSpot (CRM and marketing), and Intercom (customer support). We do not control these third-party cookies. Please refer to the respective third-party privacy policies for more information.`,
  },
  {
    title: "5. Managing Your Cookie Preferences",
    content: `You can control and manage cookies in several ways:`,
    list: [
      "Cookie consent banner: when you first visit our website, you can accept or decline non-essential cookies via our consent banner.",
      "Browser settings: most browsers allow you to refuse or delete cookies. Refer to your browser's help documentation for instructions.",
      "Opt-out tools: you can opt out of Google Analytics tracking at tools.google.com/dlpage/gaoptout and HubSpot tracking at legal.hubspot.com/privacy-policy.",
    ],
  },
  {
    title: "6. Impact of Disabling Cookies",
    content: `Disabling essential cookies will prevent the website and platform from functioning correctly. Disabling functional cookies may mean your preferences are not saved between visits. Disabling analytics and marketing cookies will not affect your ability to use the site but will limit our ability to improve the service.`,
  },
  {
    title: "7. Changes to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will post any changes on this page with a revised effective date.`,
  },
  {
    title: "8. Contact Us",
    content: `If you have questions about our use of cookies, please contact us at:\n\nEuroland IR AB\nStureplan 4C, 114 35 Stockholm, Sweden\nEmail: privacy@euroland.com`,
  },
];

const SECTION_STYLE = { marginBottom: "40px" } as const;
const H3_STYLE = { fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: "rgb(13, 27, 42)", marginBottom: "12px" } as const;
const P_STYLE = { fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", whiteSpace: "pre-line" as const };
const LI_STYLE = { fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", marginBottom: "6px" } as const;

export default function Cookies() {
  return (
    <SimplePage
      label="Legal"
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies on our website and platform."
      showCta={false}
    >
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
                {section.table && (
                  <div style={{ overflowX: "auto", marginTop: "8px" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                      <thead>
                        <tr style={{ background: "rgb(242, 244, 246)" }}>
                          {["Cookie Name", "Type", "Purpose", "Duration"].map(h => (
                            <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: "rgb(13, 27, 42)", borderBottom: "1px solid rgb(221, 224, 230)", whiteSpace: "nowrap" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {COOKIE_TABLE.map((row, j) => (
                          <tr key={j} style={{ borderBottom: "1px solid rgb(238, 240, 243)" }}>
                            <td style={{ padding: "10px 14px", fontFamily: "monospace", fontSize: "13px", color: "rgb(0, 107, 163)" }}>{row.name}</td>
                            <td style={{ padding: "10px 14px", color: "rgb(58, 74, 88)" }}>{row.type}</td>
                            <td style={{ padding: "10px 14px", color: "rgb(58, 74, 88)" }}>{row.purpose}</td>
                            <td style={{ padding: "10px 14px", color: "rgb(58, 74, 88)", whiteSpace: "nowrap" }}>{row.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
