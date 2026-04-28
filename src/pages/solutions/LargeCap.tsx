"use client";

// Euroland IR — Large Cap Companies page

import CapPageLayout from "@/components/layout/CapPageLayout";

export default function LargeCap() {
  return (
    <CapPageLayout
      breadcrumbLabel="For Listed Companies"
      heroLabel="Large Cap Companies"
      heroTitle="Enterprise IR infrastructure, at scale"
      heroSubtitle="The governance controls, reliability, and enterprise-grade integrations that large cap IR programmes demand. Trusted by some of the world's most complex listed companies."
      challengesLabel="The Challenges"
      challengesTitle="What large cap companies face"
      challenges={[
        { icon: "", title: "Governance & compliance", description: "" },
        { icon: "", title: "System integration", description: "" },
        { icon: "", title: "Global complexity", description: "" },
        { icon: "", title: "Reliability at scale", description: "" },
      ]}
      howWeHelpLabel="How We Help"
      howWeHelpTitle="Enterprise-grade IR, without compromise"
      howWeHelpIntro="Euroland IR's enterprise offering is built for the demands of large cap IR programmes. From custom integrations to dedicated SLAs, we provide the infrastructure and support that complex IR operations require."
      howWeHelpBullets={[
        "Enterprise SLA with 99.9% uptime guarantee",
        "Custom integrations with ERP, CRM, and data systems",
        "Dedicated account management and technical support",
        "Multi-market, multi-language IR platform management",
        "Advanced analytics and investor intelligence",
        "Full CSRD, ESG, and sustainability reporting suite",
      ]}
      capabilitiesLabel="What You Can Do"
      capabilitiesTitle="Run a world-class IR programme"
      capabilities={[
        {
          icon: "",
          title: "Maintain governance across every market",
          description: "Enforce role-based controls, maintain full audit trails, and meet compliance requirements across every jurisdiction you operate in.",
        },
        {
          icon: "",
          title: "Connect IR to your existing systems",
          description: "Integrate with your ERP, CRM, and data infrastructure so your IR team works from a single source of truth — not a silo.",
        },
        {
          icon: "",
          title: "Coordinate IR globally",
          description: "Manage multi-market, multi-language IR platforms from a single centralised hub, with local teams having the access they need.",
        },
        {
          icon: "",
          title: "Handle high-stakes events with confidence",
          description: "Run results days, AGMs, and capital markets days on infrastructure built for peak traffic — with dedicated support on standby.",
        },
        {
          icon: "",
          title: "Leverage AI across your IR workflow",
          description: "Use AI-powered drafting, analysis, and automation to reduce manual effort and improve the quality of every investor communication.",
        },
        {
          icon: "",
          title: "Lead on ESG and sustainability",
          description: "Publish comprehensive CSRD and ESG reports that meet the expectations of institutional investors, proxy advisors, and regulators.",
        },
      ]}
      processLabel="Implementation"
      processTitle="A managed implementation programme"
      process={[
        { step: "01", title: "Discovery & scoping", description: "" },
        { step: "02", title: "Technical setup", description: "" },
        { step: "03", title: "Parallel running", description: "" },
        { step: "04", title: "Dedicated support", description: "" },
        { step: "05", title: "", description: "" },
        { step: "06", title: "", description: "" },
      ]}
      testimonialQuote="Euroland IR gives us the enterprise-grade reliability we need, with the flexibility to adapt to our complex, multi-market IR programme. The platform has become central to how we manage our investor relationships."
      testimonialAuthor="Global Head of Investor Relations"
      testimonialRole="Large cap company, FTSE 100"
    />
  );
}
