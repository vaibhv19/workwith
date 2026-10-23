import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StarryNightBackground } from "@/components/StarryNightBackground";
import { PageTransition } from "@/components/PageTransition";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

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
    <html lang="en" className={`${syne.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#0a0d14] text-slate-100 selection:bg-copper/20 selection:text-copper relative">
        <StarryNightBackground />
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
