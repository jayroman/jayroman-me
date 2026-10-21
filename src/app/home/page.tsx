import type { Metadata } from "next";
import HomePage, { homeMetadata } from "@/components/HomePage";

export const metadata: Metadata = homeMetadata;

export default function Page() {
  return <HomePage />;
}
