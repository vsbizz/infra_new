import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { GlobalHeader } from "@/components/GlobalHeader";
import { Footer } from "@/components/Footer";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infra.Health",
  description: "Global Healthcare Asset Development Company",
  icons: {
    icon: "/asset/favicon.ico",
    shortcut: "/asset/favicon.ico",
    apple: "/asset/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body className="font-sans">
        <GlobalHeader />

        {/*
          Pushes ALL page content below the fixed header.
          Height matches --header-h from globals.css:
            - Desktop (lg+):  164px  → h-[164px]
            - Mobile (<lg):   116px  → h-[116px]

          The HeroSection overrides this with a negative margin-top
          so its background image still bleeds up behind the transparent header.
          Every other page/section just sits cleanly below the header.
        */}
        <div className="h-[158px] lg:h-[190px]" aria-hidden="true" />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}