import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Elite Psychology Practice | Dr. Maya Reynolds",
  description: "Executive-level clinical psychology and executive coaching in Santa Monica. A premium therapeutic experience focused on resilience and excellence.",
  keywords: ["Executive Coaching", "Clinical Psychology", "Santa Monica Psychologist", "Dr. Maya Reynolds", "High-Performance Therapy"],
  authors: [{ name: "Dr. Maya Reynolds" }],
  openGraph: {
    title: "Elite Psychology Practice | Dr. Maya Reynolds",
    description: "Executive-level clinical psychology and coaching for high-performers.",
    url: "https://drmaya.com",
    siteName: "Dr. Maya Reynolds Architecture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Psychology Practice | Dr. Maya Reynolds",
    description: "Executive-level clinical psychology and coaching for high-performers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
