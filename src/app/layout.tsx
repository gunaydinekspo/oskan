import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "oskan — Kadın Giyim",
  description:
    "Modern kadının tarzını yansıtan kaliteli ve şık kadın giyim koleksiyonu.",
  keywords: ["kadın giyim", "elbise", "bluz", "pantolon", "etek", "moda"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${geist.className} antialiased bg-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
