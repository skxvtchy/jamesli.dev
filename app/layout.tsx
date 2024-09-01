import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navigation/Navbar";
import Search from "@/components/navigation/Search";
import Dock from "@/components/navigation/Dock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Built by Li",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16" />
        {children}
        <Dock />
        <Toaster />
      </body>
    </html>
  );
}
