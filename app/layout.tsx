import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proposal — Symbioza Group Website | Joshua Enaholo",
  description: "Website development proposal for Symbioza Group by Joshua Enaholo, Elite Traffic Media",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0f0f0f" }}>{children}</body>
    </html>
  );
}
