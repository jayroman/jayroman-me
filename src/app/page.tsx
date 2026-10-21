import type { Metadata } from "next";
import SplitLanding from "@/components/SplitLanding";

export const metadata: Metadata = {
  title: "Jay Roman | Tech Help for Homes and Businesses | Cashiers, Sapphire, Highlands NC",
  description:
    "Local tech help for mountain homes and practical systems for small businesses. Serving Cashiers, Sapphire, Highlands, and surrounding areas.",
};

export default function Page() {
  return <SplitLanding />;
}
