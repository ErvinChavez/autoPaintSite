import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Auto Paint & Body",
  description: "Professional auto paint and body repair services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pb-[96px]">
          {children}
        </main>
        
        {/* Sticky CTA */}
        <StickyCTA />
      
      </body>
    </html>
  );
}