"use client";

/**
 * FINANCIAL GLOSSARY PAGE — Euroland IR
 * Source: euroland-ir-...-max-export(9).json
 * URL:    /resources/glossary
 * Viewport: 2004px → container 1536px → inner 1440px
 *
 * Layout:
 *  - Hero section: dark navy, 544px tall (y:0–544)
 *    - eyebrow "RESOURCES" (u-label-dark)
 *    - H2 "Financial Glossary" (48px/300/56px/-0.48px)
 *    - subtitle (16px/400/24px, 520px wide)
 *  - Search + alphabet bar: white bg, 86px tall (y:544–630)
 *    - Search input (560px wide) + "Search" btn (87px wide, btn-primary)
 *    - Alphabet row: 26 letter buttons, each 32×32px, active = dark navy fill
 *  - Glossary section: white bg (y:630–1423)
 *    - Two-column rows: term (200px, 14px/600) | definition (540px, 12px/400)
 *    - Row container: 764px wide at x=620, each row has 16px top/bottom padding
 *    - Rows separated by 1px border-bottom rgb(221,224,230)
 */
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

// ── GLOSSARY DATA ─────────────────────────────────────────────────────────────

const GLOSSARY_TERMS: { term: string; definition: string }[] = [
  // A — from JSON nodes [71]–[95]
  { term: "Acquisition", definition: "A purchase of all or part of a company so as to obtain ownership of its operating resources and/or to control its business." },
  { term: "Amortisation", definition: "See depreciation." },
  { term: "Analyst", definition: "Analysts (financial analysts) assess financial market information in order to develop forecasts of future stock market developments." },
  { term: "Annual financial statements", definition: "The annual financial statements document a company's financial results for the past fiscal year. In addition to a balance sheet and an income statement, a company must also release information about changes in equity and a cash flow statement." },
  { term: "Articles of incorporation", definition: "Contractual basis of a stock corporation stating the company name, headquarters, business purpose, amount of capital stock and further basic rules and regulations." },
  { term: "Asset deal", definition: "Acquisition of a company by transferring individual assets (and occasionally debts) – rather than shares/equity securities – to the purchaser." },
  { term: "Authorised capital", definition: "An amount designated to be converted into shares so as to increase the capital stock of a stock corporation. Authorised capital must be approved at a stockholders' meeting by voters representing a majority of the capital stock." },
  // B
  { term: "Balance sheet", definition: "A financial statement that summarises a company's assets, liabilities, and shareholders' equity at a specific point in time." },
  { term: "Bearer share", definition: "A share for which the issuing company does not register the owner's name in its books. The bearer of the share certificate is presumed to be the owner." },
  { term: "Benchmark", definition: "A standard against which the performance of a security, mutual fund, or investment manager can be measured." },
  { term: "Blue chip", definition: "A nationally recognised, well-established, and financially sound company. Blue chips generally sell high-quality, widely accepted products and services." },
  { term: "Board of directors", definition: "A group of individuals that are elected as, or elected to act as, representatives of the stockholders to establish corporate management related policies and to make decisions on major company issues." },
  { term: "Bond", definition: "A fixed income instrument that represents a loan made by an investor to a borrower. Bonds are used by companies, municipalities, states, and sovereign governments to finance projects and operations." },
  { term: "Book value", definition: "The net asset value of a company, calculated as total assets minus intangible assets (patents, goodwill) and liabilities." },
  // C
  { term: "Capital increase", definition: "An increase in the equity capital of a company through the issuance of new shares or the conversion of reserves into share capital." },
  { term: "Capital market", definition: "A financial market in which long-term debt or equity-backed securities are bought and sold." },
  { term: "Cash flow", definition: "The net amount of cash and cash equivalents being transferred into and out of a business. Positive cash flow indicates that a company's liquid assets are increasing." },
  { term: "Corporate governance", definition: "The system of rules, practices, and processes by which a company is directed and controlled. Corporate governance essentially involves balancing the interests of a company's many stakeholders." },
  { term: "CSRD", definition: "Corporate Sustainability Reporting Directive. An EU directive requiring large companies and listed SMEs to report on their environmental, social, and governance (ESG) performance." },
  // D
  { term: "Depreciation", definition: "An accounting method of allocating the cost of a tangible or physical asset over its useful life or life expectancy." },
  { term: "Dilution", definition: "A reduction in the ownership percentage of a share of stock caused by the issuance of new equity shares by the company." },
  { term: "Disclosure", definition: "The release of all material information about a company that may influence an investor's decision. Timely and accurate disclosure is a key obligation for listed companies." },
  { term: "Dividend", definition: "A distribution of a portion of a company's earnings, decided by the board of directors, to a class of its shareholders." },
  { term: "Dual listing", definition: "The listing of a company's shares on two or more different stock exchanges." },
  // E
  { term: "EBIT", definition: "Earnings Before Interest and Taxes. A measure of a firm's profit that includes all expenses except interest and income tax expenses." },
  { term: "EBITDA", definition: "Earnings Before Interest, Taxes, Depreciation, and Amortisation. A measure of a company's overall financial performance used as an alternative to net income." },
  { term: "EPS", definition: "Earnings Per Share. The portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability." },
  { term: "Equity", definition: "The value of an ownership interest in property, including shareholders' equity in a business." },
  { term: "ESG", definition: "Environmental, Social, and Governance. A set of standards for a company's operations that socially conscious investors use to screen potential investments." },
  // F
  { term: "Fair value", definition: "The sale price agreed on by a willing buyer and seller, assuming both parties enter the transaction freely and knowledgeably." },
  { term: "Financial calendar", definition: "A schedule of key financial events and reporting dates for a listed company, including results announcements, AGMs, and dividend payment dates." },
  { term: "Float", definition: "The number of shares available for trading by the general public. The float is calculated by subtracting closely-held shares and restricted stock from a firm's total outstanding shares." },
  { term: "Free float", definition: "The proportion of shares in a listed company that are freely available for trading by the public, excluding shares held by insiders, controlling shareholders, and governments." },
  // G
  { term: "General meeting", definition: "A meeting of the shareholders of a company. An Annual General Meeting (AGM) is held once a year; Extraordinary General Meetings (EGMs) are held as required." },
  { term: "Goodwill", definition: "An intangible asset that arises when a buyer acquires an existing business. Goodwill represents assets that are not separately identifiable, such as brand reputation, customer relationships, and employee relations." },
  { term: "GRI", definition: "Global Reporting Initiative. An international independent standards organisation that helps businesses, governments and other organisations understand and communicate their impacts on issues such as climate change, human rights and corruption." },
  // H
  { term: "Hedge fund", definition: "An alternative investment fund that pools capital from accredited investors and employs a wide range of strategies to earn active returns for its investors." },
  // I
  { term: "Initial Public Offering (IPO)", definition: "The process by which a private company offers shares to the public for the first time in order to raise equity capital from public investors." },
  { term: "Insider trading", definition: "The buying or selling of a publicly traded company's stock by someone who has non-public, material information about that stock." },
  { term: "Institutional investor", definition: "A non-bank person or organisation that trades securities in large enough share quantities or dollar amounts that they qualify for preferential treatment and lower commissions." },
  { term: "Investor relations (IR)", definition: "A strategic management responsibility that integrates finance, communication, marketing and securities law compliance to enable the most effective two-way communication between a company, the financial community, and other constituencies." },
  // L
  { term: "Liquidity", definition: "The degree to which an asset or security can be quickly bought or sold in the market without affecting the asset's price." },
  { term: "Listed company", definition: "A company whose shares are traded on a regulated stock exchange. Listed companies are subject to ongoing disclosure and governance obligations." },
  // M
  { term: "MAR", definition: "Market Abuse Regulation. An EU regulation that aims to increase market integrity and investor protection by establishing a common regulatory framework on insider dealing, unlawful disclosure of inside information, and market manipulation." },
  { term: "Market capitalisation", definition: "The total market value of a company's outstanding shares. Calculated by multiplying the current share price by the total number of outstanding shares." },
  { term: "Material information", definition: "Information that would be likely to have a significant effect on the price of a company's securities if it were made public." },
  // N
  { term: "Net asset value (NAV)", definition: "The value per share of a mutual fund or an ETF on a specific date or time. NAV is calculated by dividing the total value of all the cash and securities in a fund's portfolio, minus any liabilities, by the number of outstanding shares." },
  { term: "Nominal value", definition: "The stated value of an issued security. Also known as par value or face value." },
  // O
  { term: "Outstanding shares", definition: "Shares of a corporation's stock that have been issued and are in the hands of investors. Outstanding shares are shown on a company's balance sheet under the heading 'Capital Stock'." },
  // P
  { term: "P/E ratio", definition: "Price-to-Earnings ratio. A valuation ratio of a company's current share price compared to its per-share earnings. A high P/E ratio could mean that a company's stock is overvalued, or that investors are expecting high growth rates in the future." },
  { term: "Proxy statement", definition: "A document that the Securities and Exchange Commission requires companies to provide to shareholders before a shareholder vote. It contains information about the matters to be voted upon at the meeting." },
  // R
  { term: "Regulatory news service (RNS)", definition: "A service used by listed companies to distribute regulatory announcements and other material information to the market." },
  { term: "Retail investor", definition: "An individual investor who purchases securities for their own personal account, rather than for an organisation." },
  { term: "Return on equity (ROE)", definition: "A measure of financial performance calculated by dividing net income by shareholders' equity. ROE is considered a measure of how effectively management is using a company's assets to create profit." },
  // S
  { term: "Share buyback", definition: "A company's repurchase of its own outstanding shares from the marketplace. A buyback reduces the number of shares outstanding, which increases both the demand for the shares and the price." },
  { term: "Shareholder", definition: "Any person, company, or institution that owns at least one share of a company's stock, also known as equity." },
  { term: "Stock exchange", definition: "A marketplace in which securities, commodities, derivatives and other financial instruments are traded." },
  { term: "Sustainability report", definition: "A report published by a company about the economic, environmental, and social impacts caused by its everyday activities. A sustainability report also presents the organisation's values and governance model." },
  // T
  { term: "TCFD", definition: "Task Force on Climate-related Financial Disclosures. A framework for companies to disclose climate-related financial risks and opportunities." },
  { term: "Total return", definition: "The actual rate of return of an investment or a pool of investments over a given evaluation period. Total return includes interest, capital gains, dividends, and distributions realised over a given period of time." },
  { term: "Treasury shares", definition: "Shares that were issued and subsequently reacquired by the issuing company. Treasury shares are not included in the calculation of earnings per share or dividends." },
  // V
  { term: "Volatility", definition: "A statistical measure of the dispersion of returns for a given security or market index. Volatility is often measured as either the standard deviation or variance between returns from that same security or market index." },
  { term: "Volume", definition: "The number of shares or contracts traded in a security or an entire market during a given period of time." },
  // W
  { term: "Warrant", definition: "A derivative that confers the right, but not the obligation, to buy or sell a security at a certain price before expiration." },
  { term: "Working capital", definition: "A measure of a company's operational efficiency and short-term financial health. Working capital is calculated as current assets minus current liabilities." },
  // Y
  { term: "Yield", definition: "The earnings generated and realised on an investment over a particular period of time. Yield is expressed as a percentage based on the invested amount, current market value, or face value of the security." },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function getFirstLetter(term: string) {
  return term[0].toUpperCase();
}

export default function Glossary() {
  const [activeLetter, setActiveLetter] = useState("A");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const availableLetters = useMemo(() => {
    return new Set(GLOSSARY_TERMS.map(t => getFirstLetter(t.term)));
  }, []);

  const filteredTerms = useMemo(() => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return GLOSSARY_TERMS.filter(
        t =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      );
    }
    return GLOSSARY_TERMS.filter(t => getFirstLetter(t.term) === activeLetter);
  }, [activeLetter, searchQuery]);

  function handleSearch() {
    setSearchQuery(searchInput);
    if (!searchInput) setActiveLetter("A");
  }

  function handleLetterClick(letter: string) {
    setActiveLetter(letter);
    setSearchQuery("");
    setSearchInput("");
  }

  return (
    <PageWrapper>

            <BannerHero
        variant="resources"
        label="Resources"
        title="Financial Glossary"
        subtitle="A comprehensive reference of financial and investor relations terms used by listed companies and capital markets professionals."
        minHeight="440px"
        titleMaxWidth="640px"
        subtitleMaxWidth="560px"
      />

{/* ── SEARCH + ALPHABET BAR (y:544–630, h:86) ─────────────────────── */}
      <div
        style={{
          background: "rgb(255, 255, 255)",
          borderBottom: "1px solid rgb(221, 224, 230)",
          padding: "12px 0 0",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
          {/* Search row — node[40] geo:282,544 560x42 + node[44] geo:755,544 87x42 */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "560px",
                height: "42px",
                border: "1px solid rgb(221, 224, 230)",
                borderRadius: "4px",
                padding: "0 12px",
                background: "rgb(255, 255, 255)",
              }}
            >
              <Search size={14} color="rgb(90, 106, 122)" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgb(13, 27, 42)",
                  background: "transparent",
                }}
              />
            </div>
            <button
              onClick={handleSearch}
              className="btn-primary"
              style={{ height: "42px", padding: "0 20px", fontSize: "13px" }}
            >
              Search
            </button>
          </div>

          {/* Alphabet row — node[45] geo:282,598 1440x32, each letter 32x32 */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {ALPHABET.map(letter => {
              const isActive = !searchQuery && activeLetter === letter;
              const hasTerms = availableLetters.has(letter);
              return (
                <button
                  key={letter}
                  onClick={() => hasTerms && handleLetterClick(letter)}
                  style={{
                    width: "32px",
                    height: "32px",
                    border: "none",
                    borderRadius: "4px",
                    background: isActive ? "rgb(8, 43, 69)" : "transparent",
                    color: isActive
                      ? "rgb(255, 255, 255)"
                      : hasTerms
                      ? "rgb(13, 27, 42)"
                      : "rgb(180, 190, 200)",
                    fontSize: "13px",
                    fontWeight: isActive ? 600 : 400,
                    lineHeight: "32px",
                    cursor: hasTerms ? "pointer" : "default",
                    transition: "background 150ms ease, color 150ms ease",
                    flexShrink: 0,
                  }}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── GLOSSARY TERMS (y:630–1423) ───────────────────────────────────── */}
      <section style={{ background: "rgb(255, 255, 255)", padding: "48px 0 80px" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Inner: 764px wide, offset 338px from left — node[72] geo:620,702 764x... */}
          <div style={{ marginLeft: "338px", width: "764px" }}>
            {filteredTerms.length === 0 ? (
              <div style={{ padding: "64px 0", fontSize: "16px", color: "rgb(90, 106, 122)" }}>
                No terms found{searchQuery ? ` for "${searchQuery}"` : ""}.
              </div>
            ) : (
              filteredTerms.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    padding: "16px 0",
                    borderBottom: "1px solid rgb(221, 224, 230)",
                  }}
                >
                  {/* Term: 14px/600/24px/rgb(13,27,42) — node[73] geo:620,718 200x24 */}
                  <div
                    style={{
                      width: "200px",
                      flexShrink: 0,
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "24px",
                      color: "rgb(13, 27, 42)",
                      paddingRight: "24px",
                    }}
                  >
                    {item.term}
                  </div>
                  {/* Definition: 12px/400/24px/rgb(58,74,88) — node[74] geo:844,718 540x... */}
                  <div
                    style={{
                      width: "540px",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "rgb(58, 74, 88)",
                    }}
                  >
                    {item.definition}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
