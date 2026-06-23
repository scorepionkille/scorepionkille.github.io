import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adisorn Smith | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer ประสบการณ์กว่า 5 ปี เชี่ยวชาญ React, Next.js, Node.js, TypeScript พัฒนา Web Application ที่มีประสิทธิภาพ",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer Thailand",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Adisorn Wongtip" }],
  creator: "Adisorn Wongtip",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://adisornwongtip.github.io",
    title: "Adisorn Wongtip | Full Stack Developer",
    description:
      "Full Stack Developer ประสบการณ์กว่า 3 ปี เชี่ยวชาญ React, Next.js, Node.js, TypeScript",
    siteName: "Adisorn Wongtip Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adisorn Wongtip | Full Stack Developer",
    description:
      "Full Stack Developer ประสบการณ์กว่า 3 ปี เชี่ยวชาญ React, Next.js, Node.js, TypeScript",
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
    <html lang="th" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily: "var(--font-body)",
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
