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
    <section className="bg-white py-16 xs:py-20 sm:py-24 md:py-28 lg:py-40">
      <div className="container mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 xs:gap-14 sm:gap-16 md:gap-20 lg:grid-cols-2 lg:items-start lg:gap-28">
          {/* Left Column: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow text-brand-purple mb-4 xs:mb-5">
              Our Philosophy
            </p>

            {/* Fraunces serif, normal weight, tight leading */}
            <h2 className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] xl:text-6xl leading-[1.08]">
              We don't just build hospitals.
              <span className="block text-brand-teal mt-2 xs:mt-3 italic">
                We structure assets.
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Description & Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-7 xs:gap-8 sm:gap-10"
          >
            <p className="text-base sm:text-lg leading-[1.65] text-slate-600">
              Infra.Health provides an institutional-grade framework for
              healthcare asset de-risking. We bridge the gap between healthcare
              operations and capital markets through integrated strategy and
              operational excellence.
            </p>

            {/* Points — hairline-separated rows instead of icon-bullet pills */}
            <ul className="divide-y divide-brand-line border-y border-brand-line">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 xs:gap-4 py-4 xs:py-5 text-base sm:text-lg font-medium text-brand-ink"
                >
                  <CheckCircle2 className="h-4 w-4 xs:h-5 xs:w-5 text-brand-teal flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 xs:pt-3">
              <Link href="about">
                <motion.button
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  initial="initial"
                  className="relative overflow-hidden rounded-full bg-brand-teal px-7 xs:px-9 sm:px-10 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-[15px] sm:text-base font-semibold text-white transition-colors"
                  aria-label="Learn about our investment philosophy"
                >
                  <span className="relative z-10 pointer-events-none">
                    Our Investment Philosophy
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};