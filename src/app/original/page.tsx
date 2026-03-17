import { FlowBackground } from "@/components/FlowBackground";
import { Header } from "@/components/Header";
import { Hero } from "@/components/original/Hero";
import { Features } from "@/components/original/Features";
import { AnalyticsShowcase } from "@/components/AnalyticsShowcase";
import { Privacy } from "@/components/original/Privacy";
import { Pricing } from "@/components/original/Pricing";
import { Comparison } from "@/components/original/Comparison";
import { Download } from "@/components/Download";
import { Footer } from "@/components/original/Footer";

export default function OriginalLandingPage() {
  return (
    <>
      <FlowBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <AnalyticsShowcase />
        <Privacy />
        <Pricing />
        <Comparison />
        <Download />
      </main>
      <Footer />
    </>
  );
}
