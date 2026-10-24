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
  themeColor: "#FFFFFF",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        url: "/favicon-48x48.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Fontshare CDN for Clash Display (Headings) and Satoshi (Numerals & Accents) */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/20 selection:text-foreground antialiased relative">
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
