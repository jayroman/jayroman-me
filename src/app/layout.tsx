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
  title: "Jay Roman | Local Tech Support for Homes & Businesses | Cashiers, Sapphire, Highlands NC",
  description:
    "Local tech support for homes and businesses: networks, computers, smart devices, and software. Quick fixes, monthly support plans, and projects. Serving Cashiers, Sapphire, Highlands, and surrounding areas.",
  openGraph: {
    title: "Jay Roman | Local Tech Support on the Plateau",
    description: "Tech support for homes and businesses in Cashiers, Sapphire, Highlands, and surrounding areas in Western NC.",
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
