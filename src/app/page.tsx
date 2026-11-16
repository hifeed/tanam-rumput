import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Approach from "@/components/home/Approach";
import Metrics from "@/components/home/Metrics";
import TheoryPreview from "@/components/home/TheoryPreview";
import CTAStrip from "@/components/home/CTAStrip";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Carbon Bank — Restoring Land, Livelihoods and Supply Chains",
  description:
    "Carbon Bank transforms degraded and underutilised land in Lampung into productive regenerative agricultural infrastructure. We restore soil health, grow commercial biomass, and create recurring rural income — especially for women.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Approach />
      <Metrics />
      <TheoryPreview />
      <CTAStrip />
    </>
  );
}
