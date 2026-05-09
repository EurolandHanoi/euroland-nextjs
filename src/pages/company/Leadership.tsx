/**
 * LEADERSHIP PAGE — Euroland IR
 * URL: /company/leadership
 * Sections:
 *  1. Hero: dark navy banner
 *  2. Team Grid: white, 4-col × 2-row tall photo cards (336×529 each)
 *  3. Stats Bar: dark navy, 3 stats
 */
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";

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
          padding: "16px 20px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "var(--fs-base)",
              fontWeight: 600,
              lineHeight: "var(--lh-sm)",
              color: "rgb(8, 43, 69)",
              marginBottom: "16px",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "var(--fs-sm)",
              fontWeight: 400,
              lineHeight: "var(--lh-sm)",
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
          <span style={{ fontSize: "var(--fs-sm)", fontWeight: 700, lineHeight: 1 }}>in</span>
        </a>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <PageWrapper>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <BannerHero
        variant="resources"
        label="Company"
        title="Our Leadership Team"
        subtitle="A leadership team combining deep capital-markets expertise with a passion for building best-in-class Investor Relations technology for publicly listed companies worldwide."
      />

      {/* ── 2. TEAM GRID ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "rgb(255, 255, 255)",
          padding: "48px 0",
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
              marginBottom: "32px",
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
          padding: "48px 0",
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
              { value: "25+", label: "Years in Investor Relations" },
            ].map(({ value, label }) => (
              <div key={value} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "var(--fs-2xl)",
                    fontWeight: 300,
                    lineHeight: "var(--lh-2xl)",
                    letterSpacing: "-0.01em",
                    color: "rgb(255, 255, 255)",
                    marginBottom: "16px",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-sm)",
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

