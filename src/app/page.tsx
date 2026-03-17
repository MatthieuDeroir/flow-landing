import { FlowBackground } from "@/components/FlowBackground";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
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
        {/* 1. DÉSIR — "Je veux me comprendre" */}
        <Hero />
        {/* 2. PROBLÈME — "Mais une seule métrique ne suffit pas" */}
        <Problem />
        {/* 3. SOLUTION — "Flow relie les points" */}
        <Features />
        {/* 4. PREUVE — "Voici ce que tu découvriras" */}
        <AnalyticsShowcase />
        {/* 5. CONFIANCE — "Track sans peur du jugement" */}
        <Privacy />
        {/* 6. VALIDATION — "Comment Flow se compare" */}
        <Comparison />
        {/* 7. CONVERSION — Pricing + Download */}
        <Pricing />
        <Download />
      </main>
      <Footer />
    </>
  );
}
