import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaveBackground } from "@/components/WaveBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mywork.vaibhv19.dev"),
  title: {
    default: "Vaibhav Gupta — Projects & Systems Architecture",
    template: "%s | Vaibhav Gupta",
  },
  description:
    "Deployed applications, engineering case studies, and systems architecture by Vaibhav Gupta — Software Engineer building distributed systems, AI agent platforms, and full-stack software.",
  keywords: [
    "Software Engineer",
    "Vaibhav Gupta",
    "Systems Architecture",
    "Distributed Systems",
    "Full-Stack Developer",
    "Case Studies",
    "AI Agents",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Next.js",
  ],
  authors: [{ name: "Vaibhav Gupta" }],
  creator: "Vaibhav Gupta",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mywork.vaibhv19.dev",
    siteName: "Vaibhav Gupta — MyWork",
    title: "Vaibhav Gupta — Projects & Systems Architecture",
    description:
      "Deployed applications, engineering case studies, and systems architecture by Vaibhav Gupta.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Gupta — Projects & Systems Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Gupta — Projects & Systems Architecture",
    description:
      "Deployed applications, engineering case studies, and systems architecture by Vaibhav Gupta.",
    creator: "@vaibhv_19",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.ico?v=3" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        {/* Fontshare CDN for Clash Display (Headings) and Satoshi (Numerals & Accents) */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#0B0B0B] text-[#F4EFE6] font-sans selection:bg-[#C4A482]/25 selection:text-[#F9F6EE] antialiased relative">
        {/* Fixed subtle wave texture background (Narrow Design inspired) */}
        <WaveBackground />

        {/* Content layer above the fixed background */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
