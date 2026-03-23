"use client";

import AboutIntro from "@/components/about/AboutIntro";
import Approach from "@/components/about/Approach";
import { CommitmentSection } from "@/components/about/Commitment";
import { FlatGlobalMap } from "@/components/about/Global";
import Team from "@/components/about/Team";
import VisionMission from "@/components/about/VisionMission";
import WhatWeDo from "@/components/about/WhatWeDo";
import { CounterSection } from "@/components/CounterSection";
import {
  Building2,
  Bed,
  Activity,
  Microscope,
  RulerDimensionLine,
} from "lucide-react";

const STATS = [
  { label: "Projects", value: "70+", icon: Building2 },
  { label: "Beds", value: "13,500+", icon: Bed },
  { label: "ICU beds", value: "2,450+", icon: Activity },
  { label: "Modular OTs", value: "280+", icon: Microscope },
  { label: "Sq. Ft. Built", value: "18M+", icon: RulerDimensionLine },
];

function About() {
  return (
    <>
      <AboutIntro />
      <CounterSection stats={STATS} />
      <VisionMission/>
      <Approach/>
      <CommitmentSection/>
      <WhatWeDo/>
      <FlatGlobalMap/>
      <Team/>
    </>
  );
}

export default About;
