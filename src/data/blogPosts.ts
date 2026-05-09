export type BlogCategory = "All" | "Best Practice" | "AI & Technology" | "Regulation" | "ESG" | "IPO";

export interface BlogPost {
  category: Exclude<BlogCategory, "All">;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  featured?: boolean;
  slug: string;
  tags: string[];
  body: string[];
}

export const BLOG_CATEGORIES: BlogCategory[] = ["All", "Best Practice", "AI & Technology", "Regulation", "ESG", "IPO"];

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "Best Practice",
    title: "How to build an IR platform that investors actually use",
    desc: "The most effective IR platforms share five structural qualities. Here's what separates best-practice IR from the average.",
    date: "12 Mar 2026",
    readTime: "6 min read",
    featured: true,
    slug: "how-to-build-an-ir-website",
    tags: ["Best Practice", "IR Strategy", "IR Platform"],
    body: [
      "Investor Relations websites are often treated as a compliance checkbox - a place to park annual reports and stock charts. But the best IR teams understand that a well-structured IR platform is one of the most powerful tools in their communications arsenal.",
      "After analysing hundreds of IR platforms across Europe and North America, we've identified five structural qualities that consistently separate best-practice IR from the average.",
      "1. A clear investor journey from the homepage. Investors arriving at your IR site should immediately understand where to go. The most effective sites present a logical hierarchy: stock performance, financials, governance, and contact. Avoid burying key data behind multiple clicks.",
      "2. Real-time data that loads instantly. Slow-loading stock charts or delayed financial data erode trust. Investors expect the same responsiveness from your IR site as they get from market data terminals. If your data provider introduces latency, it shows.",
      "3. Mobile-first design. More than 40% of IR platform visits now come from mobile devices. Yet many IR sites are still designed desktop-first. A responsive, touch-optimised layout is no longer optional.",
      "4. Structured financial data. Presenting financials in a structured, comparable format - not just as PDF attachments - dramatically improves usability. Interactive income statements, balance sheets, and cash flow tables allow investors to analyse your performance without leaving your site.",
      "5. A consistent narrative thread. The best IR platforms tell a coherent equity story across every section. The homepage headline, the CEO message, the financial highlights, and the ESG summary should all reinforce the same core investment thesis.",
      "Implementing these qualities does not require a complete redesign. In many cases, structural improvements to navigation, data presentation, and mobile responsiveness can be achieved incrementally, and the impact on investor engagement is measurable.",
    ],
  },
  {
    category: "AI & Technology",
    title: "Purpose-built AI vs generic LLMs: what IR teams need to know",
    desc: "Not all AI is created equal. We explain why IR-specific training data and compliance guardrails matter for investor communications.",
    date: "5 Mar 2026",
    readTime: "8 min read",
    slug: "purpose-built-ai-vs-generic-llms",
    tags: ["AI", "Investor Communications", "Governance"],
    body: [
      "Generic AI tools can be useful for first drafts, but Investor Relations needs a higher standard. IR teams work with regulated information, market-sensitive language, and audiences that expect accuracy, consistency, and clear disclosure discipline.",
      "Purpose-built AI for IR starts with the context of listed-company communication. It should understand earnings releases, financial terminology, disclosure constraints, shareholder questions, ESG frameworks, and the tone expected by analysts and institutional investors.",
      "The most important difference is control. IR teams need workflows that keep source material visible, support review and approval, and reduce the risk of unsupported claims. A generic model may produce fluent output, but fluency is not the same as governance.",
      "Good IR AI should help teams summarise investor questions, draft FAQ responses, prepare earnings communication, and turn dense disclosure into clearer investor-facing language. It should not replace professional judgement or formal disclosure controls.",
      "For listed companies, the winning approach is not to use AI everywhere. It is to use AI where it can speed up repetitive communication work while preserving accuracy, auditability, and accountability.",
    ],
  },
  {
    category: "Regulation",
    title: "MAR compliance in 2026: key changes and what they mean for IR teams",
    desc: "A practical overview of the latest Market Abuse Regulation updates and how to adapt your disclosure workflows.",
    date: "28 Feb 2026",
    readTime: "7 min read",
    slug: "mar-compliance-2026",
    tags: ["Regulation", "Disclosure", "Governance"],
    body: [
      "Market Abuse Regulation continues to shape how listed companies handle inside information, disclosure timing, insider lists, and investor communication. For IR teams, the practical challenge is turning regulatory obligations into repeatable workflows.",
      "The first priority is clarity around ownership. Disclosure processes should define who drafts, who reviews, who approves, and who publishes. Ambiguity creates risk, especially when announcements need to move quickly.",
      "Second, IR teams should maintain clean records. Version history, approval trails, timestamped publication records, and archived communications make it easier to demonstrate that the company followed a controlled process.",
      "Third, companies should review how market-sensitive updates are distributed across websites, email alerts, press channels, and social media. Investors should receive accurate information at the same time, from controlled sources.",
      "A strong compliance workflow is not just defensive. It also improves speed and confidence. When teams know the process, they can communicate faster without sacrificing control.",
    ],
  },
  {
    category: "ESG",
    title: "ESG reporting: from obligation to competitive advantage",
    desc: "Companies that treat ESG as a communication opportunity - not just a compliance burden - are winning investor trust.",
    date: "20 Feb 2026",
    readTime: "5 min read",
    slug: "esg-reporting-competitive-advantage",
    tags: ["ESG", "Sustainability", "Reporting"],
    body: [
      "ESG reporting has become more structured, more demanding, and more visible to investors. The companies that stand out are not simply publishing more information. They are making complex sustainability data understandable.",
      "Investors need to see priorities, progress, risks, and evidence. A long PDF may satisfy a reporting obligation, but it rarely helps stakeholders understand what matters most or how ESG performance connects to the company strategy.",
      "A better ESG experience presents material topics clearly, explains year-on-year movement, and gives users interactive ways to explore metrics. It also connects sustainability content with financial performance, governance, and long-term value creation.",
      "The opportunity is trust. When ESG communication is clear, structured, and accessible, investors can evaluate the company with more confidence. That confidence is a competitive advantage.",
    ],
  },
  {
    category: "IPO",
    title: "The IR checklist every company should complete before listing",
    desc: "From website infrastructure to investor CRM, here are the twelve IR foundations every company should have in place before IPO.",
    date: "14 Feb 2026",
    readTime: "9 min read",
    slug: "ir-checklist-before-listing",
    tags: ["IPO", "Readiness", "Investor Relations"],
    body: [
      "The months before listing are the right time to build Investor Relations infrastructure. Once the company is public, every earnings date, announcement, investor question, and website update happens under greater scrutiny.",
      "An IPO-ready IR setup starts with a clear website structure, reliable market data, financial reporting sections, governance content, contact details, and a process for publishing regulated information quickly.",
      "Companies should also prepare investor communication tools: email alerts, CRM workflows, presentation libraries, financial calendars, analyst contact processes, and analytics that show how investors engage with content.",
      "The goal is not to launch with unnecessary complexity. The goal is to make sure the foundations are in place before the first public reporting cycle begins.",
      "A strong IR foundation helps the company look organised from day one and gives investors confidence that communication will be consistent after listing.",
    ],
  },
  {
    category: "Best Practice",
    title: "Earnings season preparation: a week-by-week IR calendar",
    desc: "A structured timeline for preparing, distributing, and following up on quarterly earnings communications.",
    date: "7 Feb 2026",
    readTime: "6 min read",
    slug: "earnings-season-preparation",
    tags: ["Earnings", "Planning", "IR Workflow"],
    body: [
      "Earnings season runs more smoothly when the IR calendar is planned backwards from publication day. The best teams define milestones early, keep responsibilities clear, and reduce last-minute uncertainty.",
      "Four weeks out, teams should confirm timelines, draft key messages, collect data inputs, and align with finance, legal, and communications stakeholders. This is also the right time to review Q&A themes from investors and analysts.",
      "Two weeks out, draft materials should move into review. Presentations, web pages, email alerts, press releases, and supporting documents need enough time for comments, legal review, and final approval.",
      "In the final week, teams should focus on execution: publishing checks, webcast readiness, distribution lists, website updates, and contingency planning. Small operational details matter when the market is watching.",
      "After results day, the work continues. Track investor engagement, collect analyst feedback, update FAQ content, and document lessons for the next reporting cycle.",
    ],
  },
];

export function getBlogPostBySlug(slug?: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
