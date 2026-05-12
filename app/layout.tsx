import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}