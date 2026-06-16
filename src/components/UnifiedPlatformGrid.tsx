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

/* Editorial index row: serif title over a hairline. Pillar order reflects
   the asset lifecycle, so the row sequence itself carries meaning. */
const PillarItem = ({ title, icon: Icon, slug }) => (
  <Link href={slug}>
    <motion.div
      whileHover={{ x: 10 }}
      className="group flex items-center justify-between py-6 xs:py-7 sm:py-8 md:py-9 border-b border-brand-line cursor-pointer"
    >
      <h3 className="heading-display text-xl xs:text-2xl sm:text-[26px] md:text-3xl lg:text-[34px] !font-normal transition-colors group-hover:text-brand-teal">
        {title}
      </h3>
      <ArrowRight className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-slate-300 group-hover:text-brand-purple transition-all group-hover:translate-x-2 flex-shrink-0" />
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
    <section className="bg-white py-16 xs:py-20 sm:py-24 md:py-28 lg:py-40 xl:py-44">
      <div className="container mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xs:gap-14 sm:gap-16 md:gap-20 lg:gap-28">
          {/* Left Side: Context */}
          <div className="lg:col-span-4 space-y-7 xs:space-y-8 flex justify-center flex-col">
            <div>
              <p className="eyebrow text-brand-purple mb-4 xs:mb-5">
                The Platform
              </p>

              {/* Mobile H2 */}
              <h2 className="heading-display text-[28px] xs:text-[30px] sm:text-[34px] md:text-4xl leading-[1.12] block lg:hidden">
                A unified platform for healthcare excellence
              </h2>
            </div>

            <p className="text-base sm:text-base md:text-lg font-normal leading-[1.65] text-slate-600">
              We eliminate the fragmentation typical of healthcare development.
              By managing the lifecycle, from financial modeling to clinical
              operations, we ensure no value is lost between phases.
            </p>

            <div className="pt-4 xs:pt-5">
              <Link href={"integrated-development-partner-solution"}>
                <motion.button
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  initial="initial"
                  className="relative overflow-hidden rounded-full bg-brand-teal px-7 xs:px-8 sm:px-9 md:px-10 py-3 xs:py-3.5 sm:py-4 text-sm font-semibold text-white transition-colors"
                  aria-label="Explore our methodology"
                >
                  <span className="relative z-10 pointer-events-none">
                    Explore Our Methodology
                  </span>

                  <motion.div
                    variants={{
                      initial: { scale: 0, opacity: 0 },
                      hover: { scale: 2, opacity: 1 },
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple origin-center"
                  />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Side: Vertical Pillars */}
          <div className="lg:col-span-8">
            {/* Desktop H2 */}
            <div className="mb-14 xs:mb-16 sm:mb-20">
              <h2 className="heading-display text-5xl xl:text-[56px] leading-[1.08] hidden lg:block">
                A <span className="text-brand-teal">unified platform</span> for
                healthcare excellence
              </h2>
            </div>

            <div className="border-t border-brand-line">
              {pillars.map((pillar, index) => (
                <PillarItem key={index} {...pillar} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};