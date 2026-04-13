"use client";

import {
  ArrowRight,
  BarChart3,
  Building2,
  Compass,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const PillarItem = ({ title, icon: Icon, slug }) => (
  <Link href={slug}>
    <motion.div
      whileHover={{ x: 10 }}
      className="group flex items-center justify-between py-5 xs:py-6 sm:py-7 md:py-8 border-b border-slate-200 cursor-pointer"
    >
      <div className="flex items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6">
        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl md:font-semibold text-slate-900 tracking-tight transition-colors group-hover:text-brand-teal">
          {title}
        </h3>
      </div>
      {/* 
        JLL Arrow Icon Mobile: 20-24px, Tablet: 24-28px
      */}
      <ArrowRight className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-slate-300 group-hover:text-brand-teal transition-all group-hover:translate-x-2 flex-shrink-0" />
    </motion.div>
  </Link>
);

export const UnifiedPlatformList = () => {
  const pillars = [
    {
      title: "Investment & Capital Advisory",
      icon: ShieldCheck,
      slug: "services/investment-and-capital-advisory",
    },
    {
      title: "Leasing & Operator Advisory",
      icon: Building2,
      slug: "services/leasing-and-operator-advisory",
    },
    {
      title: "Advisory & Strategic Planning",
      icon: BarChart3,
      slug: "services/advisory-and-strategic-planning",
    },
    {
      title: "Design & Project Delivery",
      icon: Compass,
      slug: "services/design-and-project-delivery",
    },
    {
      title: "Property & Facilities Management",
      icon: Settings,
      slug: "services/property-and-facilities-management",
    },
  ];

  return (
    <section className="bg-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-32 xl:py-40">
      {/* 
        JLL Section Padding Mobile: 48-64px, Tablet: 64-80px
      */}
      <div className="container mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8">
        {/* 
          JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
        */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xs:gap-12 sm:gap-14 md:gap-16 lg:gap-24">
          {/* 
            JLL Grid Gap Mobile: 40-48px, Tablet: 48-64px
          */}

          {/* Left Side: Context */}
          <div className="lg:col-span-4 space-y-6 xs:space-y-7 sm:space-y-8 flex justify-center flex-col">
            {/* 
              Mobile H2: Show on mobile only
              JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
            */}
            <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-3xl md:font-extrabold leading-[1.3] tracking-tight text-slate-900 block lg:hidden">
              A <span className="text-teal-600">Unified Platform</span> for
              Healthcare Excellence
            </h2>

            {/* 
              JLL Body Text Mobile: 14-15px, font-weight: 400 (normal)
            */}
            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600">
              We eliminate the fragmentation typical of healthcare development.
              By managing the lifecycle, from financial modeling to clinical
              operations, we ensure no value is lost between phases.
            </p>

            {/* 
              JLL Button Mobile: 14px, font-weight: 500 (medium)
              Padding: 24-28px horizontal, 12-14px vertical
            */}
            <div className="pt-4 xs:pt-5 sm:pt-6">
              <Link href={"development-partner-solution"}>
                <motion.button
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  initial="initial"
                  className="relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-6 xs:px-7 sm:px-8 md:px-10 py-3 xs:py-3.5 sm:py-4 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Explore our methodology"
                >
                  <span className="relative z-10 pointer-events-none">
                    Explore Our Methodology
                  </span>

                  <motion.div
                    variants={{
                      initial: {
                        scale: 0,
                        opacity: 0,
                      },
                      hover: {
                        scale: 2,
                        opacity: 1,
                      },
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center"
                  />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Side: Vertical Pillars */}
          <div className="lg:col-span-8">
            {/* 
              Desktop H2: Show on desktop only
              Desktop keeps original design
            */}
            <div className="mb-12 xs:mb-14 sm:mb-16 md:mb-20">
              <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-3xl lg:text-5xl xl:text-6xl md:font-extrabold leading-[1.3] lg:leading-[1.1] tracking-tight text-slate-900 hidden lg:block">
                A <span className="text-brand-teal">Unified Platform</span> for
                Healthcare Excellence
              </h2>
            </div>

            {pillars.map((pillar, index) => (
              <PillarItem key={index} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
