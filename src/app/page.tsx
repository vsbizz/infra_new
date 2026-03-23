"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { CounterSection } from "../components/CounterSection";
import { PhilosophySection } from "../components/PhilosophySection";
import { UnifiedPlatformList } from "../components/UnifiedPlatformGrid";
import { Stakeholders } from "../components/StakeHolders";
import { ExpertiseContinuum } from "../components/ExpertiseContinum";
import { GlobalPresence } from "../components/GlobalPresence";
import { MarketIntelligence } from "../components/MarketIntelligence";
import {
  Building2,
  Bed,
  Activity,
  Microscope,
  RulerDimensionLine,
} from "lucide-react";

const SLIDES = [
  {
    id: "01",
    title: "Global Healthcare Asset Development",
    headline:
      "The Global Platform for Structured Healthcare Asset Development.",
    subHeader:
      "Operating at the convergence of healthcare systems, engineering, and institutional capital to transform clinical demand into resilient, investment-grade assets.",
    cta: "Explore Our Global Footprint",
    image: "/asset/hero/1jpg.jpg",
  },
  {
    id: "02",
    title: "Investment and Capital Advisory",
    headline: "Positioning Healthcare as a Structured Asset Class.",
    subHeader:
      "We align healthcare development with disciplined capital frameworks, ensuring projects are bankable, scalable, and resilient across economic cycles.",
    cta: "View Capital Advisory",
    image: "/asset/hero/2.jpg",
  },
  {
    id: "03",
    title: "Leasing and Operator Advisory",
    headline: "Strengthening Commercial Resilience & Income Stability.",
    subHeader:
      "Bridging the gap between asset ownership and healthcare operations through structured leasing frameworks and data-driven location intelligence.",
    cta: "Discover Operator Strategies",
    image: "/asset/hero/3.jpg",
  },
  {
    id: "04",
    title: "Advisory and Strategic Planning",
    headline: "Demand-Validated Development Frameworks.",
    subHeader:
      "Transforming healthcare demand into investment-ready frameworks through rigorous feasibility, clinical planning, and financial modeling.",
    cta: "Explore Advisory Services",
    image: "/asset/hero/4.jpg",
  },
  {
    id: "05",
    title: "Design and Project Delivery",
    headline: "Turnkey Execution with Single-Point Accountability.",
    subHeader:
      "Converting strategy into operational infrastructure through engineering precision, procurement control, and clinical compliance.",
    cta: "View Delivery Models",
    image: "/asset/hero/5.jpg",
  },
  {
    id: "06",
    title: "Property and Facilities Management",
    headline: "Guaranteeing 24/7 Operational Reliability & Asset Yield.",
    subHeader:
      "Sustaining long-term performance and regulatory compliance through specialized healthcare asset governance and lifecycle oversight.",
    cta: "View Asset Management",
    image: "/asset/hero/6.jpg",
  },
];

const STATS = [
  { label: "Projects", value: "70+", icon: Building2 },
  { label: "Beds", value: "13,500+", icon: Bed },
  { label: "ICU beds", value: "2,450+", icon: Activity },
  { label: "Modular OTs", value: "280+", icon: Microscope },
  { label: "Sq. Ft. Built", value: "18M+", icon: RulerDimensionLine },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <HeroSection
        slides={SLIDES}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <PhilosophySection />
      <CounterSection stats={STATS} />
      <UnifiedPlatformList />
      <Stakeholders />
      <ExpertiseContinuum />
      <GlobalPresence />
      <MarketIntelligence />
    </>
  );
}
