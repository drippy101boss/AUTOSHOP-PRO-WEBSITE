import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AutoShop Pro - AI-Powered Automation for Auto Shops",
  description: "Never miss another lead. AI-powered automation systems built specifically for auto repair and body shops. Answer every call, book appointments 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans">
        <ClientBody>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
