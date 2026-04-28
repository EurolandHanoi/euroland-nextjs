"use client";

// Euroland IR — Accessibility Statement page
// Design: Dark navy hero (SimplePage) → white content with structured sections
import SimplePage from "@/components/layout/SimplePage";

const MEASURES = [
  { label: "Semantic HTML", desc: "We use semantic HTML5 elements (nav, main, article, section, aside) to provide meaningful structure for screen readers and assistive technologies." },
  { label: "Colour Contrast", desc: "All text and interactive elements meet WCAG 2.1 Level AA contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text and UI components)." },
  { label: "Keyboard Navigation", desc: "All interactive elements are fully operable via keyboard. We provide visible focus indicators and logical tab order throughout the interface." },
  { label: "Screen Reader Support", desc: "We use ARIA labels, roles, and live regions to ensure screen reader users receive meaningful information about dynamic content changes." },
  { label: "Alternative Text", desc: "All meaningful images include descriptive alt text. Decorative images are marked with empty alt attributes to be ignored by screen readers." },
  { label: "Resizable Text", desc: "Text can be resized up to 200% without loss of content or functionality. We use relative units (rem, em) for typography throughout." },
  { label: "Captions & Transcripts", desc: "Video content includes captions. Audio content includes transcripts where available." },
  { label: "Error Identification", desc: "Form errors are clearly identified and described in text, not only by colour, to assist users with colour vision deficiencies." },
];

const SECTIONS: Array<{ title: string; content?: string; list?: string[]; measures?: boolean }> = [
  {
    title: "Our Commitment",
    content: `Euroland IR is committed to ensuring that our website and platform are accessible to all users, including those with disabilities. We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard and continuously work to improve the accessibility of our digital products.`,
  },
  {
    title: "Conformance Status",
    content: `Our website is partially conformant with WCAG 2.1 Level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to address known gaps and improve overall conformance.`,
  },
  { title: "Accessibility Measures", measures: true },
  {
    title: "Known Limitations",
    content: `We are aware of the following limitations and are working to address them:`,
    list: [
      "Some older PDF documents may not be fully accessible to screen readers. We are progressively updating these documents.",
      "Some third-party embedded content (such as financial data widgets) may not fully meet our accessibility standards. We are working with our data providers to improve this.",
      "Some complex data tables may not have fully optimised headers for screen reader navigation.",
    ],
  },
  {
    title: "Technical Specifications",
    content: `Our website relies on the following technologies for conformance with WCAG 2.1:`,
    list: [
      "HTML5",
      "CSS3",
      "JavaScript (React)",
      "WAI-ARIA 1.1",
    ],
  },
  {
    title: "Feedback and Contact",
    content: `We welcome feedback on the accessibility of our website and platform. If you experience any accessibility barriers, please contact us:\n\nEmail: accessibility@euroland.com\nPhone: +46 31 700 0888\n\nWe aim to respond to accessibility feedback within 5 business days. If you are not satisfied with our response, you may contact the Swedish Agency for Digital Government (DIGG) at digg.se.`,
  },
  {
    title: "Formal Assessment",
    content: `Euroland IR assessed the accessibility of this website through self-evaluation and periodic third-party audits. This statement was prepared in April 2025 and will be reviewed annually.`,
  },
];

const SECTION_STYLE = { marginBottom: "40px" } as const;
const H3_STYLE = { fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: "rgb(13, 27, 42)", marginBottom: "12px" } as const;
const P_STYLE = { fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", whiteSpace: "pre-line" as const };
const LI_STYLE = { fontSize: "15px", lineHeight: "26px", color: "rgb(58, 74, 88)", marginBottom: "6px" } as const;

export default function Accessibility() {
  return (
    <SimplePage label="Accessibility" title="Accessibility Statement" subtitle="Our commitment to making Euroland IR accessible to everyone." showCta={false}>
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