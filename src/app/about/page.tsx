import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";
import { JsonLd } from "@/components/JsonLd";
import metaData from "@/data/meta.json";

// Your Component Imports
import AboutIntro from "@/components/about/AboutIntro";
import Approach from "@/components/about/Approach";
import { CommitmentSection } from "@/components/about/Commitment";
import { FlatGlobalMap } from "@/components/about/Global";
import Team from "@/components/about/Team";
import VisionMission from "@/components/about/VisionMission";
import WhatWeDo from "@/components/about/WhatWeDo";
import { CounterSection } from "@/components/CounterSection";

export const metadata: Metadata = getPageMetadata("about");

function About() {
  const { global } = metaData;

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${global.baseUrl}/about/#webpage`,
        "url": `${global.baseUrl}/about`,
        "name": "About Us | Infra.Health",
        "isPartOf": { "@id": `${global.baseUrl}/#website` },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": global.baseUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": `${global.baseUrl}/about`
            }
          ]
        },
        "about": { "@id": `${global.baseUrl}/#organization` }
      }
    ]
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutIntro />
      <CounterSection />
      <VisionMission />
      <Approach />
      <CommitmentSection />
      <WhatWeDo />
      <FlatGlobalMap />
      <Team />
    </>
  );
}

export default About;