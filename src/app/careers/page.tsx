"use client";
import React, { useRef } from "react";
import {
  Users,
  Lightbulb,
  ShieldCheck,
  Trophy,
  Globe,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import JobBoard from "@/components/careers/JobBoard";
import Link from "next/link";

// --- Components ---

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`backdrop-blur-md bg-white/70 border border-white/20 shadow-xl rounded-md ${className}`}
  >
    {children}
  </div>
);

const BUILD_VALUES = [
  {
    icon: Lightbulb,
    letter: "B",
    title: "Brainstorming",
    desc: "Fresh ideas, creative solutions, embracing perspectives.",
  },
  {
    icon: Users,
    letter: "U",
    title: "Unity",
    desc: "Multi-disciplinary teamwork where every voice is heard.",
  },
  {
    icon: ShieldCheck,
    letter: "I",
    title: "Integrity",
    desc: "Ethics, transparency, and trust in every brick and contract.",
  },
  {
    icon: Trophy,
    letter: "L",
    title: "Leadership",
    desc: "Empowering ownership to lead the next generation.",
  },
  {
    icon: Globe,
    letter: "D",
    title: "Diversity",
    desc: "Respecting differences; knowing diverse talent drives innovation.",
  },
];

// --- Sub-Components ---

const BuildCard = ({ pillar, idx }: { pillar: any; idx: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = pillar.icon;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileHover="hover"
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay: idx * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative group overflow-hidden h-70 rounded-md border border-slate-100 bg-white p-6 xs:p-8 md:p-10 shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-default"
    >
      <motion.div
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 3.5, opacity: 1 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-900 origin-center pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <div className="mb-5 xs:mb-6 p-3 xs:p-4 rounded-md bg-teal-50 text-teal-600 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110">
          <Icon size={28} className="xs:w-8 xs:h-8" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col items-center">
          <h6 className="mt-2 text-lg xs:text-xl md:font-semibold text-slate-900 transition-colors duration-500 group-hover:text-white uppercase tracking-tight">
            {pillar.title}
          </h6>
        </div>

        <p className="mt-3 xs:mt-4 text-sm xs:text-[15px] font-normal leading-[1.6] text-slate-500 transition-colors duration-500 group-hover:text-slate-300">
          {pillar.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* --- Hero Section --- */}
      <section className="relative overflow-hidden bg-white sm:py-4 md:py-6 lg:py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            
            {/* Left Column: Headline & Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 flex flex-col justify-center pt-0"
            >
              <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-brand-purple sm:mb-6 sm:gap-2 sm:text-xs md:mb-8">
                <Link href="/" className="transition-colors hover:text-teal-600">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 shrink-0" />
                <span className="text-slate-900">Careers</span>
              </nav>

              <h1 className="heading-display w-full max-w-none text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08]">
                Empowering you to{" "}
                <span className="text-brand-teal">shape the future</span> of healthcare.
              </h1>

              <p className="my-6 max-w-none text-base md:text-lg leading-[1.65] text-slate-600 sm:mb-8 sm:max-w-xl sm:text-[15px] md:mb-10 md:leading-relaxed">
                At Infra.Health, we don't just build hospitals; we nurture the
                careers of those who build them. Join our inclusive,
                people-powered team and help us redefine global clinical
                infrastructure.
              </p>
            </motion.div>

            {/* Right Column: Visual Component Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 relative"
            >
              <div className="grid grid-cols-2 gap-5 xs:gap-6">
                <div className="space-y-5 xs:space-y-6">
                  <img
                    src="/asset/about/1.jpeg"
                    className="rounded-md shadow-2xl"
                    alt="Team"
                  />
                  <img
                    src="/asset/about/2.jpeg"
                    className="rounded-md shadow-2xl"
                    alt="Collaboration"
                  />
                </div>
                <div className="space-y-5 xs:space-y-6">
                  <img
                    src="/asset/about/3.jpg"
                    className="rounded-md shadow-2xl"
                    alt="Professional"
                  />
                  <img
                    src="/asset/about/4.jpg"
                    className="rounded-md shadow-2xl"
                    alt="Professional"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- B-U-I-L-D Section (Fixed Header & Text Scalings) --- */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 xs:mb-16 md:mb-20">
            {/* Replaced over-scaled extreme sizes with an editorial h2 layout */}
            <h2 className="heading-display text-2xl xs:text-3xl sm:text-4xl md:text-[42px] leading-[1.15] text-slate-900 mb-5">
              The <span className="text-brand-teal">B-U-I-L-D</span> Framework
            </h2>

            {/* Adjusted description to mirror paragraph scales from the Intro */}
            <p className="text-base md:text-lg leading-[1.65] text-slate-600">
              What makes us different? We live by a unique set of values that define our approach to healthcare workspace design and systemic collaboration.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 lg:grid-cols-5 gap-5 xs:gap-6">
            {BUILD_VALUES.map((pillar, idx) => (
              <div
                key={idx}
                className="w-[calc(50%-10px)] xs:w-[calc(50%-12px)] sm:w-full md:w-auto"
              >
                <BuildCard pillar={pillar} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <JobBoard />
    </div>
  );
}