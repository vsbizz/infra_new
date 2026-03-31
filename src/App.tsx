import { useState, useEffect } from "react";
import { GlobalHeader } from "./components/GlobalHeader";
import { HeroSection } from "./components/HeroSection";
import { CounterSection } from "./components/CounterSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { UnifiedPlatformList } from "./components/UnifiedPlatformGrid";
import { Stakeholders } from "./components/StakeHolders";
import { ExpertiseContinuum } from "./components/ExpertiseContinum";
import { SustainabilitySection } from "./components/SustainabilitySection";
import { Footer } from "./components/Footer";
import { GlobalPresence } from "./components/GlobalPresence";
import { MarketIntelligence } from "./components/MarketIntelligence";

const SLIDES = [
  {
    id: "01",
    title: "The Global Platform",
    headline: "De-Risk Your Healthcare Infrastructure.",
    subHeader: "Operating across 4 global regions with rigorous international compliance. We transform clinical demand into secure, bankable institutional assets.",
    cta: "Explore Our Footprint",
    image: "/asset/hero/1jpg.jpg", 
  },
  {
    id: "02",
    title: "Strategic Investment",
    headline: "Turn Clinical Demand into Secure Assets.",
    subHeader: "We bridge the gap between healthcare systems and institutional capital, structuring investment-grade assets that remain financially resilient.",
    cta: "Discover Opportunities",
    image: "/asset/hero/2.jpg",
  },
  {
    id: "03",
    title: "Turnkey Execution",
    headline: "Accelerate Speed-to-Market Delivery.",
    subHeader: "Eliminate coordination delays and cost overruns. Our Turnkey Design-Build model guarantees clinical compliance and engineering precision.",
    cta: "View Delivery Models",
    image: "/asset/hero/3.jpg",
  },
  {
    id: "04",
    title: "Lifecycle Management",
    headline: "Maximize Asset Yield and Uptime.",
    subHeader: "Protect your capital and patient safety with integrated facility management that ensures 24/7 operational reliability.",
    cta: "View Asset Management",
    image: "/asset/hero/4.jpg",
  },
];

const STATS = [
  { label: "Projects Delivered", value: "70+" },
  { label: "Beds Managed", value: "13,500+" },
  { label: "ICU beds", value: "2,450+" },
  { label: "Modular OTs", value: "280+" },
  { label: "Sq. Ft. Delivered", value: "18M+" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic for the Hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-teal/30">
      <GlobalHeader />
      <main>
        <HeroSection
          slides={SLIDES}
        />
        <CounterSection stats={STATS} />
        <PhilosophySection />
        <UnifiedPlatformList />
        <Stakeholders />
        <ExpertiseContinuum />
        {/* <SustainabilitySection /> */}
        <GlobalPresence />
        <MarketIntelligence />
      </main>
      <Footer />
    </div>
  );
}
