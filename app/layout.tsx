import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/layout/header";
import Footer from "@/components/layout/footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Inkam App",
  description: "This is most useable wolrdwide application",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased min-h-screen flex flex-col`}
      >
        {/* Header */}
        <HeroHeader />

        {/* Main content (fills remaining height) */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </body>
    </html>
  );
}
