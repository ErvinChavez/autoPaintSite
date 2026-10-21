import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import StickyCTA from "@/components/StickyCTA";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Park Auto Paint | Auto Body & Paint Repair in Gwinnett County, GA",
  description: 
    "Veteran-owned auto body and paint repair serving Gwinnett County and the surrounding Atlanta area. Collision repair, paint matching, dent repair, bumper repair, and restorations."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="bg-black text-white">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>
          {children}
        </main>
        
        {/* Sticky CTA */}
        <StickyCTA />
      
      </body>
    </html>
  );
}