"use client";
import React, { useRef } from "react";
import {
  Users,
  Search,
  Lightbulb,
  ShieldCheck,
  Trophy,
  Globe,
  MapPin,
  Quote,
  ArrowRight,
  Mail,
  ChevronRight,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
      className="relative group overflow-hidden rounded-md border border-slate-100 bg-white p-6 xs:p-8 md:p-10 shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-default"
    >
      {/* 
        JLL Card Padding Mobile: 20-24px, Tablet: 24-32px, Desktop: 40px
      */}
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
          {/* 
            JLL H3/H4 Mobile: 18-20px, font-weight: 600 (semibold)
            Desktop: font-extrabold
          */}
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
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* --- Hero Section --- */}
      <section className="relative pt-34 xs:pt-24 sm:pt-28 md:pt-36 lg:pt-54 pb-12 xs:pb-16 md:pb-24 overflow-hidden">
        {/*
          JLL Page Padding Mobile: 64-80px, Tablet: 80-96px, Desktop: 128-160px
        */}

        {/* Background Blurs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 xs:w-[500px] xs:h-[500px] md:w-[600px] md:h-[600px] bg-teal-400/10 blur-[80px] md:blur-[120px] rounded-md" />
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 xs:w-[500px] xs:h-[500px] md:w-[600px] md:h-[600px] bg-blue-400/10 blur-[80px] md:blur-[120px] rounded-md" />
        </div>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
          {/* 
            JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
          */}
          <nav className="flex items-center gap-1.5 md:gap-2 text-[10px] xs:text-[11px] md:text-xs font-semibold text-slate-400 mb-6 xs:mb-7 md:mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Careers</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 grid lg:grid-cols-2 gap-10 xs:gap-12 md:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* 
              JLL H1 Mobile: 32-36px, font-weight: 600 (semibold)
              Desktop: font-extrabold
            */}
            <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  md:font-extrabold leading-[1.1] tracking-tighter text-slate-900 mb-6 xs:mb-7 md:mb-8">
              Empowering You to
              <span className="text-brand-teal"> Shape the Future </span>
              of Healthcare
            </h1>
            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600">
              At Infra.Health, we don't just build hospitals; we nurture the
              careers of those who build them. Join our inclusive,
              people-powered team and help us redefine global clinical
              infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
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
      </section>

      {/* --- B-U-I-L-D Section --- */}
      <section className="py-12 xs:py-16 md:py-24 bg-white">
        {/* 
          JLL Section Padding Mobile: 48-64px, Tablet: 64-80px, Desktop: 96px
        */}
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 xs:mb-16 md:mb-20">
            {/* 
              JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
              Desktop: font-extrabold
            */}
            <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-5 xs:mb-6">
              The <span className="text-teal-600"> B-U-I-L-D </span> Framework
            </h2>

            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600">
              What makes us different? <br />
              We live by a unique set of values that define our approach to work
              and collaboration.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 lg:grid-cols-5 gap-5 xs:gap-6">
            {/* JLL Grid Gap Mobile: 20-24px, Tablet: 24-28px, Desktop: 32px
             */}
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
