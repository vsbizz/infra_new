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
      <HeroSection hero={HERO} services={SERVICES} />
      <CounterSection />
      <GlobalPresence />
      <PhilosophySection />
      <UnifiedPlatformList />
      <Stakeholders />
      <ExpertiseContinuum />
      <MarketIntelligence />
    </>
  );
}
