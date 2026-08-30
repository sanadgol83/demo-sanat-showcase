import { createFileRoute } from "@tanstack/react-router";
import { AboutHero } from "@/components/about/about-hero";
import { StorySection } from "@/components/about/story-section";
import { HeritageStats } from "@/components/about/heritage-stats";
import { CapabilitiesSection } from "@/components/about/capabilities-section";
import { PhilosophySection } from "@/components/about/philosophy-section";
import { ValuesSection } from "@/components/about/values-section";
import { IndustrialBanner } from "@/components/about/industrial-banner";
import { AboutCTA } from "@/components/about/about-cta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره ما | دمو صنعت" },
      {
        name: "description",
        content:
          "دمو صنعت با تکیه بر تجربه صنعتی و دانش مهندسی، راهکارهای تخصصی در زمینه ماشین‌آلات و خطوط بسته‌بندی ارائه می‌دهد.",
      },
      { property: "og:title", content: "درباره ما | دمو صنعت" },
      {
        property: "og:description",
        content: "تجربه، مهندسی و نوآوری در مسیر صنعت؛ داستان و ارزش‌های دمو صنعت.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <HeritageStats />
      <CapabilitiesSection />
      <PhilosophySection />
      <ValuesSection />
      <IndustrialBanner />
      <AboutCTA />
    </>
  );
}
