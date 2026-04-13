"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
export const PhilosophySection = () => {
  const points = [
    "Integrated Asset Lifecycle Methodology",
    "Single-Point Accountability for Delivery",
    "Regulatory & Compliance De-risking",
  ];

  return (
    <section className="bg-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 xs:gap-12 sm:gap-14 md:gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          {/* Left Column: Headline - Mobile Optimized Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[26px] xs:text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:font-extrabold leading-[1.2] xs:leading-[1.15] sm:leading-[1.1] tracking-tight text-slate-900">
              We Don't Just Build Hospitals.
              <span className="block text-brand-teal mt-1.5 xs:mt-2">
                We Structure Assets.
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Description & Points - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 xs:gap-7 sm:gap-8"
          >
            {/* Description Text - Responsive sizing matching JLL (14px → 15px → 16px → 18px) */}
            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg leading-relaxed xs:leading-[1.6] text-slate-600">
              Infra.Health provides an institutional-grade framework for
              healthcare asset de-risking. We bridge the gap between healthcare
              operations and capital markets through integrated strategy and
              operational excellence.
            </p>

            {/* Bullet Points - Responsive spacing and sizing */}
            <ul className="space-y-3 xs:space-y-3.5 sm:space-y-4">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 xs:gap-3 text-[15px] xs:text-base sm:text-lg md:font-bold text-slate-800 leading-tight xs:leading-normal"
                >
                  <CheckCircle2 className="h-4 w-4 xs:h-5 xs:w-5 text-brand-teal flex-shrink-0 mt-0.5 xs:mt-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - Mobile optimized sizing and padding */}
            <div className="pt-2 xs:pt-3 sm:pt-4">
              <Link href="about">
                <motion.button
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  initial="initial"
                  className="relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-6 xs:px-8 sm:px-10 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-[15px] sm:text-base font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Learn about our investment philosophy"
                >
                  <span className="relative z-10 pointer-events-none">
                    Our Investment Philosophy
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
