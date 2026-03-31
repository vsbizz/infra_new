"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export const PhilosophySection = () => {
  const points = [
    "Integrated Asset Lifecycle Methodology",
    "Single-Point Accountability for Delivery",
    "Regulatory & Compliance De-risking",
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          {/* Left Column: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              We Don't Just Build Hospitals.
              <span className="block text-brand-teal mt-2">
                We Structure Assets.
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Description & Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg leading-relaxed text-slate-600">
              Infra.Health provides an institutional-grade framework for
              healthcare asset de-risking. We bridge the gap between healthcare
              operations and capital markets through integrated strategy and
              operational excellence.
            </p>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-lg font-bold text-slate-800"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand-teal" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="initial"
                className="relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-10 py-4 text-sm font-bold text-white shadow-lg"
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
                    // 1.2s gives it a very calm, liquid-like expansion
                    duration: 1.2,
                    // Using a simpler ease makes the speed consistent so it's not "jumpy"
                    ease: "easeOut",
                  }}
                  // aspect-square w-full ensures it starts as wide as the button
                  className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
