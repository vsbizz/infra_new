"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  CircleDollarSign,
  Layers3,
  BadgeCheck,
  ShieldCheck,
  Building2,
  MapPinned,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { ProcessTimelineSection } from "@/components/ProcessTimeline";

const valueDrivers = [
  "Care level (primary to quaternary)",
  "Clinical intensity (ICU/OT density)",
  "Specification grade",
  "Location / seismic zone",
  "Overall project scale",
];

const deliverables = [
  "Signed Development Partnership Agreement (₹/sq ft + ₹/bed)",
  "Complimentary integrated design package (GFC documentation)",
  "Bankable DPR, financial models, and capital structuring plans",
  "Full turnkey construction / EPC delivery",
  "Commissioning certificates, operational readiness, and final asset handover package",
];

const PartnerSolution: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-screen">
          <div className="relative w-full md:w-1/2 bg-slate-50 flex items-center">
            <div className="relative z-10 px-4 xs:px-5 sm:px-6 md:px-4 lg:px-10 py-16 xs:py-20 md:pb- mb:pt-24">
              <nav className="flex items-center gap-2 text-[10px] xs:text-[11px] font-semibold text-slate-400 mb-4 xs:mb-5 sm:mb-6 md:mb-8 uppercase tracking-widest">
                <Link
                  href="/"
                  className="hover:text-teal-600 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-3 h-3" />
                <Link
                  href="/development-partner-solution"
                  className="hover:text-teal-600 transition-colors"
                >
                  Integrated Development Partnership (IDP)
                </Link>
              </nav>

              <h1 className="w-full mb-5 max-w-none text-[1.75rem] xs:text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl md:font-extrabold leading-[1.06] tracking-tight text-brand-purple">
                Healthcare Integrated Development Partnership (IDP)
              </h1>

              <h2 className="text-base xs:text-lg md:text-xl lg:text-2xl font-medium text-teal-600/90 leading-relaxed mb-4 xs:mb-5 md:mb-6">
                One Partner. One Price. From Concept to Commissioning.
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-600 text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] max-w-xl mb-8 xs:mb-10 space-y-4"
              >
                <p>
                  The Integrated Development Partnership (IDP) is Infra.Health's
                  flagship commercial vehicle. It is a single, bundled
                  healthcare development mandate that takes medical assets from
                  concept to commissioning under one partner and one
                  consolidated price.
                </p>
                <p>
                  Traditional healthcare infrastructure projects often
                  underperform because they are managed as five separate
                  mandates, creating hand-off risks, feasibility disconnects,
                  capital mismatches, and compliance gaps. IDP eliminates these
                  risks entirely by collapsing transaction advisory, capital
                  arrangement, and full turnkey execution into a single,
                  accountable partnership. Crucially, the complete integrated
                  healthcare design package is complimentary and bundled free
                  with the full mandate.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen">
            <img
              src="asset/services/1.jpg"
              alt="Healthcare facility construction"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/10" />
            <motion.div
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: STRATEGIC 8-PHASE EXECUTION METHODOLOGY */}
      <section className="pt-12 xs:pt-16 sm:pt-20 md:pt-24  lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 xs:mb-14 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-6xl md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6">
              Strategic <span className="text-brand-purple">8-Phase</span>{" "}
              Execution Methodology
            </h2>

            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6] max-w-3xl">
              Our 8-phase methodology ensures unified accountability across the
              entire asset lifecycle, compressing elapsed time and eliminating
              inter-vendor friction:
            </p>
          </motion.div>
        </div>

        <ProcessTimelineSection />
      </section>

      {/* SECTION 3: COMMERCIAL STRUCTURE & VALUE DRIVERS */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-6xl md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-white mb-4 xs:mb-5 sm:mb-6">
                Commercial Structure & Value Drivers
              </h2>
              <p className="text-sm xs:text-[15px] sm:text-base md:text-lg text-white font-normal leading-[1.6] mb-6">
                The IDP mandate is structured with a single, intuitive headline
                price, expressed simultaneously as ₹ per sq ft of built-up area
                and ₹ per bed.
              </p>
              <p className="text-sm xs:text-[15px] sm:text-base md:text-lg text-white/60 font-normal leading-[1.6]">
                This all-in development price is customized per project based on
                five key drivers: care level (primary to quaternary), clinical
                intensity (ICU/OT density), specification grade, location /
                seismic zone, and overall project scale.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
              {valueDrivers.map((driver, index) => (
                <div
                  key={driver}
                  className={`bg-white border border-slate-100 rounded-lg xs:rounded-xl p-5 xs:p-6 sm:p-7 flex items-start gap-3 shadow-sm
        ${
          index === valueDrivers.length - 1
            ? "sm:col-span-2 sm:max-w-sm sm:mx-auto"
            : ""
        }`}
                >
                  <div className="mt-1 h-8 w-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <ArrowRight size={16} />
                  </div>

                  <p className="text-slate-700 font-medium leading-[1.6]">
                    {driver}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: DELIVERABLES */}
      <section className="py-12 xs:py-16 md:py-20 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 xs:mb-14 sm:mb-16"
          >
            <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-6xl md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6">
              Deliverables for{" "}
              <span className="text-teal-600">Operators & Investors </span>
            </h2>

            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6] max-w-3xl">
              Engaging the IDP flagship provides top-tier hospital operators and
              sovereign funds with complete execution certainty:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Deliverables List */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm h-full">
                <div className="space-y-4">
                  {deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl bg-white border border-slate-100 p-5 transition-all hover:shadow-md"
                    >
                      <div className="mt-0.5 h-10 w-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                        <BadgeCheck size={18} />
                      </div>

                      <p className="text-slate-700 font-medium leading-[1.7]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-5">
              <div className="h-full rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="relative h-72">
                  <img
                    src="asset/services/audit-handover.jpg"
                    alt="Healthcare Development"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-white uppercase tracking-widest mb-4">
                      <ShieldCheck size={14} />
                      IDP Flagship Mandate
                    </span>

                    <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                      One Partner.
                      <br />
                      <span className="text-teal-400">One Price.</span>
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-slate-600 leading-[1.8] mb-8">
                    The Integrated Development Partnership (IDP) is a single,
                    bundled healthcare development mandate that takes medical
                    assets from concept to commissioning under one partner and
                    one consolidated price.
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-slate-50 p-4 text-center">
                      <FileText
                        size={20}
                        className="mx-auto mb-2 text-teal-600"
                      />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        DPR
                      </span>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4 text-center">
                      <Building2
                        size={20}
                        className="mx-auto mb-2 text-teal-600"
                      />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Design
                      </span>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4 text-center">
                      <ShieldCheck
                        size={20}
                        className="mx-auto mb-2 text-teal-600"
                      />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Handover
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerSolution;
