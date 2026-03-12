import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://jeffrey-didnt-kill-himself.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Jeffrey Epstein's Death – Unanswered Questions | Epstein Investigation",
  description:
    "Jeffrey didn't kill himself—unanswered questions remain. Explore the Epstein investigation, key facts, timeline, and the upcoming evidence archive.",
  keywords: [
    "jeffrey didn't kill himself",
    "epstein investigation",
    "epstein timeline",
    "Jeffrey Epstein",
    "MCC",
    "evidence archive",
  ],
  openGraph: {
    title: "Jeffrey Epstein's Death – Unanswered Questions | Epstein Investigation",
    description:
      "Jeffrey didn't kill himself—unanswered questions remain. Explore the Epstein investigation, timeline, and the upcoming evidence archive.",
    url: BASE_URL,
    siteName: "jeffrey-didnt-kill-himself.com",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
