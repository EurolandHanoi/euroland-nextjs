export type EventHighlight = {
  slug: string;
  tag: string;
  date: string;
  sortDate: string;
  location: string;
  type: string;
  title: string;
  desc: string;
  body: string[];
  photoCredit?: string;
  photoCount: number;
  featured?: boolean;
  showOnHomepage?: boolean;
  mainImage?: string;
  galleryImages?: string[];
};

export const EVENT_HIGHLIGHTS: EventHighlight[] = [
  {
    slug: "plc-awards-2025",
    tag: "AWARDS",
    date: "2025",
    sortDate: "2025-01-01",
    location: "London, UK",
    type: "Awards Ceremony",
    title: "PLC Awards 2025",
    desc: "Euroland IR at the PLC Awards 2025 — celebrating excellence across the UK main market with clients and partners.",
    body: [
      "Euroland IR was delighted to attend the PLC Awards 2025, celebrating excellence across the UK main market. The evening brought together leading listed companies, advisers, and capital market professionals to recognise outstanding achievement in Investor Relations, corporate communications, and governance.",
      "We were especially proud to see our clients and partners recognised among this year's winners, including the Best Investor Communication, Fund Manager, and Company of the Year categories. The PLC Awards, held in association with the London Stock Exchange and sponsored by BDO, are one of the most prestigious recognitions on the UK main market.",
      "The evening was a valuable opportunity to connect with IR teams, advisers, and partners who share a commitment to best-practice Investor Relations. Euroland IR congratulates all the winners and nominees, and thanks our hosts for the invitations.",
      "We look forward to continuing to support our clients in delivering the transparency, communication quality, and digital IR capabilities that underpin recognition at events like these.",
    ],
    photoCredit: "Photography: Euroland IR Events Team",
    photoCount: 2,
    featured: true,
    showOnHomepage: true,
    mainImage: "/images/events/plc-awards-2025/ceremony.png",
    galleryImages: [
      "/images/events/plc-awards-2025/ceremony.png",
      "/images/events/plc-awards-2025/team.png",
    ],
  },
  {
    slug: "jira-ir-conference-2025-tokyo",
    tag: "CONFERENCE",
    date: "2025",
    sortDate: "2025-01-01",
    location: "Tokyo, Japan",
    type: "Conference",
    title: "JIRA IR Conference 2025 — Tokyo",
    desc: "Euroland IR at the Japan Investor Relations Association conference, exploring the evolving role of IR in Japan's capital markets.",
    body: [
      "Team Euroland IR attended the Japan Investor Relations Association (JIRA) IR Conference 2025 in Tokyo, held at the Tokyo Stock Exchange. The conference brought together IR professionals, listed companies, and capital market leaders to discuss the evolving role of Investor Relations in Japan's rapidly transforming market environment.",
      "The keynote by Hiromi Yamaji, CEO of the Tokyo Stock Exchange, set the tone with a compelling Vision 2030 — outlining how Japan's capital market is evolving and how the role of Investor Relations is expanding. Three priorities stood out: attracting international capital, enhancing transparency and disclosure, and strengthening trust between companies and investors.",
      "Euroland IR's Managing Director joined discussions on how AI-enabled IR tools can help IR teams meet these priorities. Key themes included global readiness in IR communication, digital and AI-enabled IR workflows, and the shift from reporting efficiency to strategic investor engagement.",
      "AI-driven IR tools are redefining how Investor Relations teams support stakeholders in a rapidly evolving digital capital-markets environment. It was a privilege to meet our clients and connections in Tokyo, and Euroland IR looks forward to continuing the conversation and supporting IR teams with practical AI solutions for investor communications.",
    ],
    photoCredit: "Photography: Euroland IR Events Team",
    photoCount: 3,
    featured: false,
    showOnHomepage: true,
    mainImage: "/images/events/jira-tokyo-2025/presentation.png",
    galleryImages: [
      "/images/events/jira-tokyo-2025/conference-hall.png",
      "/images/events/jira-tokyo-2025/presentation.png",
      "/images/events/jira-tokyo-2025/team-photo.png",
    ],
  },
  {
    slug: "ubhar-capital-partnership-2025",
    tag: "PARTNERSHIP",
    date: "2025",
    sortDate: "2025-01-01",
    location: "Muscat, Oman",
    type: "Partnership Signing",
    title: "Euroland IR & Ubhar Capital Partnership",
    desc: "Euroland IR and Ubhar Capital announce a strategic partnership to strengthen digital IR communication and investor engagement across Oman's capital market.",
    body: [
      "We are proud to announce a partnership between Euroland IR and Ubhar Capital, underscoring a strategic commitment to strengthening digital IR communication and investor engagement across Oman.",
      "The agreement was signed in the presence of Muscat Stock Exchange S.A.O.C's CEO, Haitham Al Salmi, and signed by Ubhar Capital's CEO, Abdulaziz Al-Saadi, and Euroland IR CEO and Founder, Lisa Marklund. The signing ceremony was attended by Team Euroland IR, as well as CFOs and Investor Relations Officers from leading listed Omani companies.",
      "By combining Ubhar Capital's deep local market expertise with Euroland IR's award-winning IR Solutions and purpose-built AI for IR, the partnership will elevate investor outreach for Omani issuers, enhance transparency and accessibility in capital markets communication, strengthen investor trust through interactive financial storytelling, and expand regional and international visibility.",
      "Aligned with Oman Vision 2040, this partnership reinforces Oman's strategic ambition to enhance global visibility and deepen international investor engagement within its capital markets. Euroland IR looks forward to partnering with issuers and driving long-term value creation for issuers and investors alike.",
    ],
    photoCredit: "",
    photoCount: 0,
    featured: false,
    showOnHomepage: true,
  },
];

export const EVENT_HIGHLIGHT_TAG_COLORS: Record<string, string> = {
  CONFERENCE: "rgb(0, 116, 217)",
  AWARDS: "rgb(139, 92, 246)",
  PARTNERSHIP: "rgb(0, 116, 217)",
  "PRODUCT SHOWCASE": "rgb(0, 163, 107)",
  WORKSHOP: "rgb(234, 88, 12)",
  "INVESTOR EVENT": "rgb(0, 116, 217)",
  FORUM: "rgb(0, 116, 217)",
  RECEPTION: "rgb(220, 38, 38)",
};

export const EVENT_HIGHLIGHT_FILTER_TABS = ["All", "Conference", "Awards", "Partnership"];

function eventSortValue(event: EventHighlight): number {
  const value = Date.parse(event.sortDate || event.date);
  return Number.isNaN(value) ? 0 : value;
}

export function getSortedEventHighlights(events: EventHighlight[] = EVENT_HIGHLIGHTS): EventHighlight[] {
  return events
    .map((event, index) => ({ event, index }))
    .sort((a, b) => eventSortValue(b.event) - eventSortValue(a.event) || a.index - b.index)
    .map(({ event }) => event);
}

export function getFilteredEventHighlights(filter: string): EventHighlight[] {
  const sorted = getSortedEventHighlights();
  if (filter === "All") return sorted;
  const normalized = filter.toLowerCase();
  return sorted.filter((event) => event.tag.toLowerCase() === normalized);
}

export function getEventHighlightBySlug(slug?: string): EventHighlight | undefined {
  return EVENT_HIGHLIGHTS.find((event) => event.slug === slug);
}

export function getOtherEventHighlights(currentSlug: string, limit = 3): EventHighlight[] {
  return getSortedEventHighlights(EVENT_HIGHLIGHTS.filter((event) => event.slug !== currentSlug)).slice(0, limit);
}

export function getHomepageEventHighlights(limit = 3): EventHighlight[] {
  return getSortedEventHighlights(EVENT_HIGHLIGHTS.filter((event) => event.showOnHomepage !== false)).slice(0, limit);
}

export function getEventHighlightImage(event: EventHighlight): string | undefined {
  return event.mainImage || event.galleryImages?.[0];
}
