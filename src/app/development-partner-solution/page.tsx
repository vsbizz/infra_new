"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ProcessTimelineSection } from "@/components/ProcessTimeline";

const PartnerSolution: React.FC = () => {
  const teamServices = [
    {
      id: 1,
      title: "Clinical & Medical Planners",
      description:
        "They define clinical adjacencies, patient flow, and infection control zoning (OT, ICU, CSSD) to ensure the facility supports high-intensity care delivery without operational bottlenecks.",
    },
    {
      id: 2,
      title: "Healthcare Financial Strategists & Underwriters",
      description:
        "Experts in healthcare-specific debt advisory, capital stack optimization, and risk underwriting. They structure projects to be 'investment-grade,' ensuring capital alignment and financial resilience across economic cycles.",
    },
    {
      id: 3,
      title: "Medical Equipment & Technology Integrators",
      description:
        "They manage the heavy-duty technical requirements-from radiation shielding to power redundancy-ensuring that the building 'engine' perfectly supports specialized medical tools like MRI, Cath Labs, and Modular OTs.",
    },
    {
      id: 4,
      title: "Critical Systems & MEPF Engineers",
      description:
        "Specialists in high-intensity hospital utilities, including Medical Gas Piping Systems (MGPS), specialized HVAC for sterile zones, and N+1 electrical redundancy.",
    },
    {
      id: 5,
      title: "Compliance & Accreditation Specialists",
      description:
        "Experts in JCI, NABH, and ISO standards who bake clinical safety, patient safety checklists, and infection control protocols into the very design and operational DNA of the asset.",
    },
    {
      id: 6,
      title: "Turnkey Project Governors (PMC & EPC)",
      description:
        "They manage the transition from detailed engineering to operational handover, providing unified control over cost, quality, and clinical compliance to prevent the coordination risks found in traditional models.",
    },
    {
      id: 7,
      title: "Sustainability & ESG Advisors",
      description:
        "They integrate energy efficiency modeling and sustainable materials to reduce lifecycle costs and qualify projects for green financing under LEED, EDGE, or IGBC benchmarks.",
    },
    {
      id: 8,
      title: "Healthcare Asset & Facility Governors",
      description:
        "Specialized facility managers focused on Lifecycle Asset Governance. They manage the technical operations (Hard Services) and infection-control housekeeping (Soft Services) that keep critical systems running 24/7.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16 xs:pt-20 sm:pt-24 md:pt-28">
      {/* 
        JLL Page Padding Mobile: 64-80px, Tablet: 80-96px
      */}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left: Content on light bg */}
          <div className="relative w-full md:w-1/2 bg-slate-50 flex items-center">
            <div className="relative z-10 px-4 xs:px-5 sm:px-6 md:px-4 lg:px-10 py-16 xs:py-20 md:py-32">
              {/* 
                JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
              */}
              <nav className="flex items-center gap-2 text-[10px] xs:text-[11px] font-semibold text-slate-400 mb-4 xs:mb-5 sm:mb-6 md:mb-8 uppercase tracking-widest">
                <Link
                  href="/"
                  className="hover:text-teal-600 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-3 h-3" />
                <Link
                  href="/services"
                  className="hover:text-teal-600 transition-colors"
                >
                  Partner Solutions
                </Link>
              </nav>

              {/* 
                JLL H1 Mobile: 32-36px, font-weight: 600 (semibold)
                Desktop: font-extrabold
              */}
              <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl  md:font-extrabold text-slate-900 mb-4 xs:mb-5 md:mb-8 leading-[1.1] tracking-tight">
                Delivery Partner Solutions{" "}
                <span className="text-brand-teal">
                  Built for Clinical Excellence
                </span>
              </h1>

              {/* Sub-headline */}
              <h2 className="text-base xs:text-lg md:text-xl lg:text-2xl font-medium text-teal-600/90 leading-relaxed mb-4 xs:mb-5 md:mb-6">
                Single-Point Accountability for the World's Most Complex
                Infrastructure.
              </h2>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-600 text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] max-w-xl mb-8 xs:mb-10 space-y-4"
              >
                <p>
                  At Infra.Health, we don't just build facilities; we develop
                  long-duration institutional assets. Our Delivery Partner
                  Solutions provide a unified, healthcare-focused framework that
                  integrates strategic advisory, capital discipline, and
                  engineering precision into a single, seamless delivery model.
                </p>
                <p>
                  By aligning clinical workflows with technical execution, we
                  de-risk project delivery and ensure your facility is
                  operationally ready from day one.
                </p>
              </motion.div>

              {/* CTA Button */}
              <Link href="/contact" className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full px-8 py-3 text-sm font-semibold bg-teal-600 text-white hover:bg-slate-900 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&h=800&fit=crop&q=80"
              alt="Healthcare facility construction"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/10"></div>
            <motion.div
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: TEAM SERVICES CARDS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-8">
        {/* 
          JLL Section Padding Mobile: 48-64px, Tablet: 64-80px
        */}
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 xs:mb-14 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-6xl   md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6">
              In-house expertise driving{" "}
              <span className="text-brand-teal">clinical precision</span> and
              project speed.
            </h2>
            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6] max-w-3xl">
              By removing the friction of external consultants, we ensure that
              clinical standards are never compromised.
            </p>
          </motion.div>

          {/* Team Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-6 sm:gap-7 md:gap-8"
          >
            {/* 
              JLL Grid Gap Mobile: 20-24px, Tablet: 24-28px
            */}
            {teamServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="group bg-slate-50 rounded-lg xs:rounded-xl p-6 xs:p-7 sm:p-8 hover:shadow-lg transition-shadow border border-slate-100 flex flex-col"
              >
                {/* Icon Indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="h-6 xs:h-7 sm:h-8 bg-teal-600 rounded-sm mb-4 xs:mb-5 sm:mb-6"
                ></motion.div>

                {/* Title */}
                {/* 
                  JLL H3 Mobile: 18-20px, font-weight: 600 (semibold)
                  Desktop: font-extrabold
                */}
                <h3 className="text-lg xs:text-xl sm:text-2xl  md:font-extrabold text-slate-900 mb-3 xs:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm xs:text-[15px] font-normal leading-[1.6]">
                  {service.description}
                </p>

                {/* Hover-revealed divider + Learn More */}
                <div className="mt-auto pt-4 xs:pt-5 sm:pt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="h-px bg-slate-200 mb-3 xs:mb-4"></div>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: PROCESS TIMELINE */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <ProcessTimelineSection />
    </div>
  );
};

export default PartnerSolution;
