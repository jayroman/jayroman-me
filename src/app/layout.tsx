import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });

export const metadata: Metadata = {
  title: "Jay Roman Consulting | Small Business Efficiency",
  description:
    "Jay Roman Consulting finds where your business is losing time and money — and fixes it. Serving local and small businesses.",
  openGraph: {
    title: "Jay Roman Consulting | Small Business Efficiency",
    description: "Find where your business is losing time and money. Fix it.",
    url: "https://jayroman.me",
    siteName: "Jay Roman Consulting",
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
