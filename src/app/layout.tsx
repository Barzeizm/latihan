import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Latihan 1",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme="corporate">
      {/* <head><link rel='icon' href='./favicon.ico' /></head> */}
      <body className={inter.className}>
        <Navbar />
        {children}
      
      </body>
    </html>
  );
}