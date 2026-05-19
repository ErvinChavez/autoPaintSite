import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Auto Paint & Body",
  description: 
    "Professional auto paint and body repair in Buford, GA. Collision repair, paint matching, dent repair, bumper repair, and restorations."
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
        <main>
          {children}
        </main>
        
        {/* Sticky CTA */}
        <StickyCTA />
      
      </body>
    </html>
  );
}