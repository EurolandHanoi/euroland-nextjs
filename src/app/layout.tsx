import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Euroland IR – Best Practice IR Solutions & Purpose-Built AI for IR",
  description:
    "Best Practice IR Solutions, Purpose-Built AI for IR. Trusted by 1,400+ publicly listed companies worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
