/**
 * LEADERSHIP PAGE — Euroland IR
 * URL: /company/leadership
 * Sections:
 *  1. Hero: dark navy banner
 *  2. Team Grid: white, 4-col × 2-row tall photo cards (336×529 each)
 *  3. Stats Bar: dark navy, 3 stats
 */
import { PageWrapper } from "@/components/Layout";
import { Linkedin } from "lucide-react";

const ROW1 = [
  {
    name: "Lisa Marklund",
    title: "Group CEO",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/ceo_d3df1106.jpg",
    linkedin: "#",
  },
  {
    name: "Natalie Kahn",
    title: "Vice CEO",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/vp-sales_5e9bd62a.jpg",
    linkedin: "#",
  },
  {
    name: "Akshay Coppa",
    title: "CPO & CTO",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/cto_716bac62.jpg",
    linkedin: "#",
  },
  {
    name: "Roland Kekula",
    title: "CFO",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/cfo_b4d91152.jpg",
    linkedin: "#",
  },
];

const ROW2 = [
  {
    name: "Jenny Jie Huang",
    title: "Director APAC",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/vp-client_9dce3ea9.jpg",
    linkedin: "#",
  },
  {
    name: "Nina Kahn",
    title: "Global Strategy Director",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/head-esg_63772c83.jpg",
    linkedin: "#",
  },
  {
    name: "Mait Viljamäe",
    title: "IT Director",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/coo_260eeaf2.jpg",
    linkedin: "#",
  },
  {
    name: "Sangeetha Venkatesan",
    title: "Director of Operations",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/vp-product_a3e96b5a.jpg",
    linkedin: "#",
  },
];

function TeamCard({ name, title, linkedin }: { name: string; title: string; linkedin: string }) {
  return (
    <div
      style={{
        width: "336px",
        flexShrink: 0,
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(221, 224, 230)",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      {/* Photo placeholder — 336×448 */}
      <div
        style={{
          width: "336px",
          height: "448px",
          background: "rgb(220, 226, 232)",
          overflow: "hidden",
        }}
      />
      {/* Info row */}
      <div
        style={{
          padding: "20px 20px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "20px",
              color: "rgb(8, 43, 69)",
              marginBottom: "2px",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(58, 74, 88)",
            }}
          >
            {title}
          </div>
        </div>
        <a
          href={linkedin}
          style={{
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgb(58, 74, 88)",
            flexShrink: 0,
          }}
          aria-label={`${name} on LinkedIn`}
        >
          <Linkedin size={13} />
        </a>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <PageWrapper>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="hero-navy banner-hero-section"
        style={{ minHeight: "440px", overflow: "hidden", display: "flex", alignItems: "flex-start" }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "120px 48px 80px" }}
        >
          <div style={{ maxWidth: "640px" }}>
            <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>
              Company
            </div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 300,
                lineHeight: "64px",
                letterSpacing: "-0.01em",
                color: "rgb(255, 255, 255)",
                margin: "0 0 24px",
                maxWidth: "640px",
              }}
            >
              Our Leadership Team
            </h2>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.70)",
                margin: 0,
                maxWidth: "520px",
              }}
            >
              A leadership team combining deep capital-markets expertise with a passion for building best-in-class investor relations technology for publicly listed companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. TEAM GRID ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "rgb(255, 255, 255)",
          padding: "60px 0",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
          {/* Row 1 */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginBottom: "24px",
              flexWrap: "wrap",
            }}
          >
            {ROW1.map((p, i) => (
              <TeamCard key={i} name={p.name} title={p.title} linkedin={p.linkedin} />
            ))}
          </div>
          {/* Row 2 */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {ROW2.map((p, i) => (
              <TeamCard key={i} name={p.name} title={p.title} linkedin={p.linkedin} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STATS BAR ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "rgb(8, 43, 69)",
          padding: "60px 0",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
            }}
          >
            {[
              { value: "1,400+", label: "Listed companies worldwide" },
              { value: "60+", label: "Markets covered" },
              { value: "20+", label: "Years in investor relations" },
            ].map(({ value, label }) => (
              <div key={value} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: 300,
                    lineHeight: "52px",
                    letterSpacing: "-0.01em",
                    color: "rgb(255, 255, 255)",
                    marginBottom: "8px",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.60)",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
