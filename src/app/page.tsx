import { FlowBackground } from "@/components/FlowBackground";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AnalyticsShowcase } from "@/components/AnalyticsShowcase";
import { Privacy } from "@/components/Privacy";
import { Pricing } from "@/components/Pricing";
import { Comparison } from "@/components/Comparison";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
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
