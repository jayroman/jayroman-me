import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay Roman | Home Tech Help & Small Business Systems | Cashiers, Sapphire, Highlands NC",
  description:
    "Year-round, local tech help for Plateau homes: Wi-Fi, TVs, speakers, smart devices, and away-home alerts. Plus practical systems that save local businesses time and money.",
  openGraph: {
    title: "Jay Roman | Tech Help on the Plateau",
    description: "Home tech help and small business systems for Cashiers, Sapphire, Highlands, and surrounding areas in Western NC.",
    url: "https://jayroman.me",
    siteName: "Jay Roman",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="antialiased font-sans bg-mist text-ink">{children}</body>
    </html>
  );
}
