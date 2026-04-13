"use client";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export const CommitmentSection = () => {
  const points = [
    "Clinically advanced",
    "Financially structured",
    "Technically resilient",
    "Environmentally responsible",
    "Governed for enduring performance",
  ];

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left Column: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="w-full max-w-none text-[1.75rem] xs:text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl md:font-extrabold leading-[1.06] tracking-tight text-slate-900 mb-4 sm:mb-5 md:mb-6">
              <span className="block text-brand-teal mt-0 sm:mt-1">Our</span>
              Commitment
            </h2>

            <p className="text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-600 max-w-none sm:max-w-xl">
              We approach healthcare infrastructure with institutional
              responsibility, delivering assets that are clinically advanced,
              financially structured, and governed for enduring performance.
            </p>
          </motion.div>

          {/* Right Column: Description & Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 sm:gap-6 md:gap-8"
          >
            <ul className="space-y-0">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  className="group flex items-center justify-between py-4 sm:py-5 md:py-6 border-b border-slate-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-brand-teal shrink-0 transition-all group-hover:translate-x-1" />
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl md:font-bold text-slate-900 tracking-tight leading-snug transition-colors group-hover:text-brand-teal">
                      {point}
                    </h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
