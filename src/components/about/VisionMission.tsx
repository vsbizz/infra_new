"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";

function VisionMission() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Vision Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-start bg-white p-5 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-slate-200 shadow-md md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg md:hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)]"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-teal-600/10 text-teal-600 mb-5 sm:mb-6 md:mb-8">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>

            {/* Heading */}
            <h2 className="w-full max-w-none text-[1.7rem] sm:text-3xl md:text-5xl lg:text-6xl md:font-extrabold leading-[1.06] tracking-tight text-slate-900 mb-4 sm:mb-5 md:mb-6">
              Our Vision
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-600">
              To shape the future of healthcare infrastructure by developing
              resilient, scalable, and investable healthcare assets that
              strengthen healthcare systems and improve patient outcomes
              worldwide.
            </p>
          </motion.div>

          {/* Mission Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-start bg-white p-5 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-slate-200 shadow-md md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg md:hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)]"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-teal-600/10 text-teal-600 mb-5 sm:mb-6 md:mb-8">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>

            {/* Heading */}
            <h2 className="w-full max-w-none text-[1.7rem] sm:text-3xl md:text-5xl lg:text-6xl md:font-extrabold leading-[1.06] tracking-tight text-slate-900 mb-4 sm:mb-5 md:mb-6">
              Our Mission
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-600">
              To integrate advisory, capital structuring, design governance,
              project delivery, and portfolio management into a disciplined
              healthcare asset development framework, creating infrastructure
              that is clinically effective, financially sustainable, and
              socially impactful.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
