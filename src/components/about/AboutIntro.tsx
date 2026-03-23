"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutIntro = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Left Column: Headline & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center pt-20"
          >
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-12">
              Shaping the future of{" "}
              <span className="text-brand-teal">Healthcare Infrastructure</span>
              .
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-10">
              Infra.Health is a specialized asset development company dedicated
              to the structured creation of healthcare environments. We operate
              at the convergence of clinical systems, engineering, and
              institutional capital.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="initial"
                className="group relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-10 py-4 text-sm font-bold text-white shadow-lg transition-colors"
              >
                <span className="relative z-10 flex items-center gap-3 pointer-events-none">
                  OUR CAPABILITIES
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>

                {/* Liquid Background Animation */}
                <motion.div
                  variants={{
                    initial: { scale: 0, opacity: 0 },
                    hover: { scale: 2.5, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center"
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                alt="Healthcare Infrastructure"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>

            {/* Decorative Element - Matches the "Structured" theme */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-64 w-64 rounded-2xl bg-teal-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
