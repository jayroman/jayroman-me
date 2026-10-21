import type { Metadata } from "next";
import BusinessPage, { businessMetadata } from "@/components/BusinessPage";

export const metadata: Metadata = businessMetadata;

export default function Page() {
  return <BusinessPage />;
}
