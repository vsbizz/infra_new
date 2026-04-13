import { getPageMetadata } from "@/utils/seo";
import { JsonLd } from "@/components/JsonLd";
import metaData from "@/data/meta.json";
import { HeroSection } from "../components/HeroSection";
import { CounterSection } from "../components/CounterSection";
import { PhilosophySection } from "../components/PhilosophySection";
import { UnifiedPlatformList } from "../components/UnifiedPlatformGrid";
import { Stakeholders } from "../components/StakeHolders";
import { ExpertiseContinuum } from "../components/ExpertiseContinum";
import { GlobalPresence } from "../components/GlobalPresence";
import { MarketIntelligence } from "../components/MarketIntelligence";
import { link } from "fs";

export const metadata = getPageMetadata("home");

const SLIDES = [
  {
    id: "01",
    title: "Global Healthcare Asset Development",
    headline:
      "The Global Platform for Structured Healthcare Asset Development.",
    subHeader:
      "Operating at the convergence of healthcare systems, engineering, and institutional capital to transform clinical demand into resilient, investment-grade assets.",
    cta: "Contact Us",
    image: "/asset/hero/1jpg.jpg",
    link: "/contact",
  },
  {
    id: "02",
    title: "Investment and Capital Advisory",
    headline: "Positioning Healthcare as a Structured Asset Class.",
    subHeader:
      "We align healthcare development with disciplined capital frameworks, ensuring projects are bankable, scalable, and resilient across economic cycles.",
    cta: "View Capital Advisory",
    image: "/asset/hero/2.jpg",
    link: "services/investment-and-capital-advisory",
  },
  {
    id: "03",
    title: "Leasing and Operator Advisory",
    headline: "Strengthening Commercial Resilience & Income Stability.",
    subHeader:
      "Bridging the gap between asset ownership and healthcare operations through structured leasing frameworks and data-driven location intelligence.",
    cta: "Discover Operator Strategies",
    image: "/asset/hero/3.jpg",
    link: "services/leasing-and-operator-advisory",
  },
  {
    id: "04",
    title: "Advisory and Strategic Planning",
    headline: "Demand-Validated Development Frameworks.",
    subHeader:
      "Transforming healthcare demand into investment-ready frameworks through rigorous feasibility, clinical planning, and financial modeling.",
    cta: "Explore Advisory Services",
    image: "/asset/hero/4.jpg",
    link: "services/advisory-and-strategic-planning",
  },
  {
    id: "05",
    title: "Design and Project Delivery",
    headline: "Turnkey Execution with Single-Point Accountability.",
    subHeader:
      "Converting strategy into operational infrastructure through engineering precision, procurement control, and clinical compliance.",
    cta: "View Delivery Models",
    image: "/asset/hero/5.jpg",
    link: "services/design-and-project-delivery",
  },
  {
    id: "06",
    title: "Property and Facilities Management",
    headline: "Guaranteeing 24/7 Operational Reliability & Asset Yield.",
    subHeader:
      "Sustaining long-term performance and regulatory compliance through specialized healthcare asset governance and lifecycle oversight.",
    cta: "View Asset Management",
    image: "/asset/hero/6.jpg",
    link: "services/property-and-facilities-management",
  },
];

export default function HomePage() {
  const { home, global } = metaData;

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${global.baseUrl}/#website`,
        url: global.baseUrl,
        name: global.siteName,
        description:
          "The Global Platform for Structured Healthcare Asset Development.",
        publisher: { "@id": `${global.baseUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${global.baseUrl}/#organization`,
        name: global.siteName,
        url: global.baseUrl,
        logo: global.logo,
        foundingDate: "2013",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Healthcare Asset Lifecycle Services",
          itemListElement: home.services.map((s: string) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s },
          })),
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <HeroSection slides={SLIDES} />
      <PhilosophySection />
      <CounterSection />
      <UnifiedPlatformList />
      <Stakeholders />
      <ExpertiseContinuum />
      <GlobalPresence />
      <MarketIntelligence />
    </>
  );
}
