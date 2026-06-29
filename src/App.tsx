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
const HERO = {
  title: "Global Healthcare Asset Development",
  headline: "The Global Platform for Structured Healthcare Asset Development.",
  subHeader:
    "Operating at the convergence of healthcare systems, engineering, and institutional capital to transform clinical demand into resilient, investment-grade assets.",
  cta: "Contact Us",
  image: "/asset/hero/1jpg.jpg",
  link: "/contact",
};

const SERVICES = [
  {
    id: "02",
    title: "Strategic Advisory & Design",
    image: "/asset/hero/2.jpg",
    link: "/",
  },
  {
    id: "03",
    title: "Investment & Capital Advisory",
    image: "/asset/hero/3.jpg",
    link: "/",
  },
  {
    id: "04",
    title: "Project Delivery & Construction",
    image: "/asset/hero/4.jpg",
    link: "/",
  },
  {
    id: "05",
    title: "Healthcare Transaction Advisory",
    image: "/asset/hero/5.jpg",
    link: "/",
  },
  {
    id: "06",
    title: "Property & Facility Management",
    image: "/asset/hero/6.jpg",
    link: "/",
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
  // const [currentSlide, setCurrentSlide] = useState(0);

  // // Auto-play logic for the Hero slider
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-teal/30">
      <GlobalHeader />
      <main>
      <HeroSection hero={HERO} services={SERVICES} />
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
