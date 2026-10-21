import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });

export const metadata: Metadata = {
  title: "Jay Roman | Home Tech Help & Small Business Systems | Cashiers, Sapphire, Highlands NC",
  description:
    "Year-round, local tech help for Plateau homes — Wi-Fi, TVs, Sonos, smart devices, away-home monitoring — plus practical systems that save local businesses time and money.",
  openGraph: {
    title: "Jay Roman | Tech Help on the Plateau",
    description: "Home tech help and small business systems for Cashiers, Sapphire, and Highlands NC.",
    url: "https://jayroman.me",
    siteName: "Jay Roman",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
