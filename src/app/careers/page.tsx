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
    desc: "Fresh ideas, creative solutions, and embracing new perspectives.",
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
      className="relative group overflow-hidden rounded-md border border-slate-100 bg-white p-10 shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-default"
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
        <div className="mb-6 p-4 rounded-md bg-teal-50 text-teal-600 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col items-center">
          <h6 className="mt-2 text-xl text-slate-900 transition-colors duration-500 group-hover:text-white uppercase tracking-tight">
            {pillar.title}
          </h6>
        </div>

        <p className="mt-4 text-base leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-slate-300">
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
      <section className="relative pt-24 md:pt-44 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
                  <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                    <Link href="/" className="hover:text-teal-600 transition-colors">
                      Home
                    </Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-slate-900">Careers</span>
                  </nav>
                </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-teal-400/10 blur-[120px] rounded-md" />
          <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-blue-400/10 blur-[120px] rounded-md" />
        </div>

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-slate-900 mb-8">
              Empowering You to
              <span className="text-brand-teal"> Shape the Future </span>
              of Healthcare
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
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
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
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
              <div className="space-y-6">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-7xl mb-6">
              The <span className="text-teal-600"> B-U-I-L-D </span> Framework
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              What makes us different? <br />
              We live by a unique set of values that define our approach to work
              and collaboration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BUILD_VALUES.map((pillar, idx) => (
              <BuildCard key={idx} pillar={pillar} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <JobBoard />
    </div>
  );
}
