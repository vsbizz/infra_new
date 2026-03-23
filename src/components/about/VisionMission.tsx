"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";

function VisionMission() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Vision Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }} // Subtle lift on hover
            className="flex flex-col items-start bg-white p-8 lg:p-12 rounded-2xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 mb-8">
              <Target size={28} />
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
              Our Vision
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
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
            whileHover={{ y: -5 }} // Subtle lift on hover
            className="flex flex-col items-start bg-white p-8 lg:p-12 rounded-2xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)]"
          >
            {/* Icon Container */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 mb-8">
              <Rocket size={28} />
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
              Our Mission
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
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