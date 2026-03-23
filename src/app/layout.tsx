import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { GlobalHeader } from '@/components/GlobalHeader';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Infra.Health",
  description: "Global Healthcare Asset Development Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GlobalHeader/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}