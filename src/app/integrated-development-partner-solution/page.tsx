"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Building2,
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
              <nav className="flex items-center gap-1.5 md:gap-2 mb-6 xs:mb-8 md:mb-10 flex-wrap">
                <Link
                  href="/"
                  className="text-[10px] xs:text-[11px] md:text-sm font-semibold text-slate-400 hover:text-teal-600 transition-colors whitespace-nowrap"
                >
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
                <Link
                  href="/integrated-development-partner-solution"
                  className="text-[10px] xs:text-[11px] md:text-sm font-semibold text-slate-400 hover:text-teal-600 transition-colors whitespace-nowrap"
                >
                  Integrated Development Partnership (IDP)
                </Link>
              </nav>

              <h1
                className="w-full mb-5 max-w-none text-[1.75rem] xs:text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl md:font-extrabold leading-[1.06] tracking-tight"
                style={{ color: "#45003e" }}
              >
                Healthcare Integrated Development Partnership (IDP)
              </h1>

              <h2 className="text-base xs:text-lg md:text-xl lg:text-2xl font-medium text-teal-600/90 leading-relaxed mb-4 xs:mb-5 md:mb-6">
                One Partner. One Price. From Concept to Commissioning.
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-600 text-base xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] max-w-xl mb-8 xs:mb-10 space-y-4"
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

      {/* SECTION: THE IDP DIFFERENCE – COMPARISON TABLE */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 xs:mb-14 sm:mb-16"
          >
            <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-6xl md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6">
              One mandate.
              <br />
              <span style={{ color: "#45003e" }}>Zero integration risk.</span>
            </h2>
            <p className="text-base xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6] max-w-3xl">
              IDP collapses five separate vendor negotiations into a single,
              accountable development partnership. Every risk that traditionally
              sits with the hospital owner now sits with Infra.Health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
          >
            <table className="w-full text-base border-collapse">
              <thead>
                <tr>
                  <th className="w-[18%] bg-white px-5 py-4 text-left text-base font-semibold uppercase tracking-widest text-slate-400 border-b border-slate-200" />
                  <th className="w-[41%] bg-slate-100 px-6 py-4 text-left text-base font-semibold uppercase tracking-widest text-slate-500 border-b border-slate-200">
                    Traditional Fragmented Model
                  </th>
                  <th
                    className="w-[41%] px-6 py-4 text-left text-base font-semibold uppercase tracking-widest text-teal-400 border-b border-slate-700"
                    style={{ background: "#45003e" }}
                  >
                    Infra.Health IDP Model
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Vendor Selection",
                    traditional:
                      "Five separate vendor procurements and contract negotiations, each with independent timelines, legal reviews, and escalation clauses.",
                    idpStrong: "One Development Partnership",
                    idpSub:
                      "Single mandate from day zero to operational handover.",
                  },
                  {
                    feature: "Accountability",
                    traditional:
                      "High hand-off risk across five firms. Gaps between phases generate blame-shifting — the owner absorbs the cost.",
                    idpStrong: "Single-Point Accountability",
                    idpSub:
                      "One escalation path, one signatory, one P&L responsible for every deliverable.",
                  },
                  {
                    feature: "Design Fees",
                    traditional:
                      "Design acts as a heavy upfront cost layer — fees paid in full before a single structural element is approved or a contractor is engaged.",
                    idpStrong: "Complimentary by Design ★",
                    idpSub:
                      "Full integrated design package — architecture, MEPF, medical planning, GFC — bundled free with the mandate.",
                  },
                  {
                    feature: "Pricing Risk",
                    traditional:
                      "Five separate contracts with five independent escalation mechanisms. Cost certainty is structurally impossible.",
                    idpStrong: "Single All-In Price",
                    idpSub:
                      "Expressed per sq. ft. of BUA and per bed. Transparent, locked, and auditable from day one.",
                  },
                  {
                    feature: "Integration Risk",
                    traditional:
                      "Carried entirely by the hospital owner across every vendor transition and project phase.",
                    idpStrong: "Infra.Health Carries All Risk",
                    idpSub:
                      "We absorb every integration risk. Your team focuses entirely on clinical readiness and operational strategy.",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                  >
                    <td className="px-5 py-5 font-semibold text-slate-700 text-base align-top border-b border-slate-100 whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="px-6 py-5 text-slate-500 leading-[1.7] align-top border-b border-slate-100 bg-slate-50">
                      {row.traditional}
                    </td>
                    <td
                      className="px-6 py-5 align-top border-b border-white/10"
                      style={{ background: "#45003e" }}
                    >
                      <span className="block font-semibold text-white leading-snug mb-1">
                        {row.idpStrong}
                      </span>
                      <span className="block text-white/50 leading-[1.7] text-base">
                        {row.idpSub}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* SECTION: STRATEGIC 8-PHASE EXECUTION METHODOLOGY */}
      <section className="pt-12 xs:pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 xs:mb-14 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-6xl md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6">
              Strategic <span style={{ color: "#45003e" }}>8-Phase</span>{" "}
              Execution Methodology
            </h2>
            <p className="text-base xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6] max-w-3xl">
              Our 8-phase methodology ensures unified accountability across the
              entire asset lifecycle, compressing elapsed time and eliminating
              inter-vendor friction:
            </p>
          </motion.div>
        </div>
        <ProcessTimelineSection />
      </section>

      {/* SECTION: WHAT'S INCLUDED */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 xs:mb-20 md:mb-24"
          >
            <div>
              <p className="text-[10px] xs:text-base font-semibold text-slate-400 uppercase tracking-widest mb-3">
                What's Included
              </p>
              <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-6xl md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6">
                Transparent, turnkey
                <br />
                <span className="text-teal-600">deliverables.</span>
              </h2>
              <p className="text-base xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6] max-w-xl">
                One bundled commercial structure replaces five separate vendor
                negotiations. Every IDP mandate covers the full development
                lifecycle — from site validation to operational handover — under
                a single, consolidated price.
              </p>
            </div>

            <div className="flex items-center">
              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { num: "5", sup: "→1", label: "Mandates consolidated" },
                  { num: "₹", sup: "0", label: "Design fees payable" },
                  { num: "1", sup: "×", label: "Consolidated price" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center"
                  >
                    <div
                      className="text-3xl md:text-4xl font-extrabold leading-none mb-1"
                      style={{ color: "#45003e" }}
                    >
                      {stat.num}
                      <span className="text-teal-600 text-xl md:text-2xl">
                        {stat.sup}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-slate-500 uppercase tracking-wide mt-2 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12 xs:mb-16">
            {[
              {
                number: "01",
                title: "Transaction Advisory",
                tags: [
                  "Site Validation",
                  "Technical Due Diligence",
                  "Acquisition Advisory",
                ],
                desc: "Comprehensive site validation, technical due diligence, and land and premises acquisition advisory. We confirm regulatory, geographic, and financial viability before any capital is committed — eliminating feasibility risk at the earliest possible stage.",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect width="6" height="4" x="9" y="3" rx="1" ry="1" />
                    <path d="m9 14 2 2 4-4" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Capital Arrangement",
                tags: [
                  "Capital Strategy",
                  "Debt / Equity Structuring",
                  "Financial Closure",
                ],
                desc: "End-to-end capital strategy covering equity and debt structuring alongside active lender and investor engagement — managed through to full financial closure. We bring capital to the table, not just advice about it. Runs in parallel with the design phase to compress your timeline to mobilisation.",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Construction / EPC",
                tags: [
                  "Turnkey Construction",
                  "Procurement",
                  "Medical Systems",
                ],
                desc: "Full turnkey building construction, procurement management, and specialised medical systems delivery under a single EPC contract. ICU builds, modular OTs, advanced imaging suites, medical gas infrastructure — all under one mandate, with one accountable party.",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                  </svg>
                ),
              },
              {
                number: "04",
                title: "Commissioning & Handover",
                tags: [
                  "System Testing",
                  "Regulatory Approvals",
                  "FM Transition",
                ],
                desc: "System-by-system testing and validation, regulatory approval management, operational readiness tracking, and a structured facility management transition. The asset is genuinely ready on opening day — not just structurally complete.",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 xs:p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg border text-teal-600 flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(69,0,62,0.06)",
                      borderColor: "rgba(69,0,62,0.12)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                    Deliverable {item.number}
                  </div>
                </div>
                <div className="text-base xs:text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </div>
                <p className="text-base xs:text-base text-slate-500 leading-[1.75] flex-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Complimentary Design Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl xs:rounded-3xl overflow-hidden"
            style={{
              background: "#45003e",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Pitch */}
              <div
                className="p-8 xs:p-10 md:p-12 border-b lg:border-b-0 lg:border-r"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                  style={{
                    background: "rgba(201,168,80,0.15)",
                    border: "1px solid rgba(201,168,80,0.3)",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="#C9A850"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span
                    className="text-base font-bold uppercase tracking-widest"
                    style={{ color: "#C9A850" }}
                  >
                    Complimentary — Bundled Free
                  </span>
                </div>

                <h3 className="text-2xl xs:text-3xl md:text-4xl font-extrabold text-white leading-[1.15] tracking-tight mb-5">
                  Integrated Healthcare
                  <br />
                  Design Package
                </h3>

                <p
                  className="text-base xs:text-[15px] leading-[1.75] mb-8"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  The most significant cost compression in the IDP model. The
                  complete integrated design package — from master planning
                  through to Good-for-Construction documentation — is delivered
                  at zero additional cost when you engage the full mandate.
                </p>

                <div
                  className="inline-flex items-center gap-3 rounded-full px-4 py-2.5"
                  style={{
                    background: "rgba(20,184,166,0.12)",
                    border: "1px solid rgba(20,184,166,0.25)",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(20,184,166,0.2)",
                      border: "1px solid rgba(20,184,166,0.4)",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4ECDB4"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-teal-400">
                    No additional charge with the full IDP mandate
                  </span>
                </div>
              </div>

              {/* Right: Scope List */}
              <div className="p-8 xs:p-10 md:p-12">
                <div
                  className="text-[10px] font-semibold uppercase tracking-widest mb-6"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Full design package scope
                </div>
                <ul className="space-y-5">
                  {[
                    {
                      name: "Master Planning",
                      sub: "Campus layout, land use optimisation, phasing strategy",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="7" height="9" x="3" y="3" rx="1" />
                          <rect width="7" height="5" x="14" y="3" rx="1" />
                          <rect width="7" height="9" x="14" y="12" rx="1" />
                          <rect width="7" height="5" x="3" y="16" rx="1" />
                        </svg>
                      ),
                    },
                    {
                      name: "Architecture",
                      sub: "Concept design through to detailed architectural drawings",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                        </svg>
                      ),
                    },
                    {
                      name: "Structural Engineering",
                      sub: "Structural analysis, seismic design, and engineering documentation",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      ),
                    },
                    {
                      name: "MEPF Engineering",
                      sub: "Mechanical, electrical, plumbing, and fire systems design",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      ),
                    },
                    {
                      name: "Medical Planning",
                      sub: "Clinical workflow design, department adjacencies, bed planning",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                          <path d="M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4" />
                          <circle cx="20" cy="10" r="2" />
                        </svg>
                      ),
                    },
                    {
                      name: "GFC Documentation",
                      sub: "Complete Good-for-Construction drawing packages, ready for site",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                          <path d="M10 9H8" />
                          <path d="M16 13H8" />
                          <path d="M16 17H8" />
                        </svg>
                      ),
                    },
                  ].map((scope) => (
                    <li key={scope.name} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-teal-400"
                        style={{
                          background: "rgba(20,184,166,0.1)",
                          border: "1px solid rgba(20,184,166,0.2)",
                        }}
                      >
                        {scope.icon}
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-white leading-snug">
                          {scope.name}
                        </div>
                        <div
                          className="text-base leading-snug mt-0.5"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          {scope.sub}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: COMMERCIAL STRUCTURE & VALUE DRIVERS */}
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
              <p className="text-base xs:text-[15px] sm:text-base md:text-lg text-white font-normal leading-[1.6] mb-6">
                The IDP mandate is structured with a single, intuitive headline
                price, expressed simultaneously as ₹ per sq ft of built-up area
                and ₹ per bed.
              </p>
              <p className="text-base xs:text-[15px] sm:text-base md:text-lg text-white/60 font-normal leading-[1.6]">
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
                  className={`bg-white border border-slate-100 rounded-lg xs:rounded-xl p-5 xs:p-6 sm:p-7 flex items-start gap-3 shadow-sm ${
                    index === valueDrivers.length - 1
                      ? "sm:col-span-2 sm:max-w-sm sm:mx-auto"
                      : ""
                  }`}
                >
                  <div
                    className="mt-1 h-8 w-8 rounded-lg text-white flex items-center justify-center shrink-0"
                    style={{ background: "#661749" }}
                  >
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

      {/* SECTION: WHY IDP WINS */}
      <section className="bg-white pb-16 px-4 xs:px-5 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xs:gap-14 sm:gap-16 md:gap-20 lg:gap-28">
            {/* Left Side */}
            <div className="lg:col-span-4 space-y-7 xs:space-y-8 flex justify-center flex-col">
              <div>
                <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-6xl md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6 hidden lg:block">
                  Why
                  <span className="text-teal-600"> IDP</span> Wins.
                </h2>
              </div>
              <p className="text-lg font-normal leading-[1.65] text-slate-600">
                IDP wins mandates on four structural advantages — each one
                eliminating a category of risk that fragmented models leave with
                the hospital owner.
              </p>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-8">
              <div className="mb-14 xs:mb-16 sm:mb-20">
                <h2 className="heading-display text-[28px] xs:text-[30px] sm:text-[34px] md:text-4xl leading-[1.12] block lg:hidden">
                  Why
                  <span className="text-teal-600"> IDP </span> Wins.
                </h2>
              </div>

              <div className="border-t border-brand-line">
                {[
                  {
                    number: "01",
                    title: "Single Price Certainty",
                    desc: "One bundled commercial structure replaces five separate vendor negotiations. Hand-off risk and integration cost are eliminated by design.",
                  },
                  {
                    number: "02",
                    title: "Free Design Upfront",
                    desc: "The integrated design package is delivered at no separate charge with the full mandate — eliminating the single most contested upfront cost line item.",
                  },
                  {
                    number: "03",
                    title: "Speed to Mobilisation",
                    desc: "Unified accountability across all phases compresses elapsed time from concept to operational handover by removing inter-vendor dead-time.",
                  },
                  {
                    number: "04",
                    title: "Capital Arrangement Built In",
                    desc: "Financing structure design and lender/investor engagement are part of the mandate — not outsourced to a separate advisor with separate fees.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="group flex items-start justify-between py-6 xs:py-7 sm:py-8 md:py-9 border-b border-brand-line cursor-default"
                  >
                    <div className="flex items-start gap-5 xs:gap-6 sm:gap-8 pr-6">
                      <span className=" text-base font-semibold tracking-widest pt-1 shrink-0 transition-colors text-slate-300 group-hover:text-teal-500">
                        {item.number}
                      </span>
                      <div className="space-y-2 xs:space-y-3">
                        <h3
                          className="text-xl xs:text-2xl sm:text-[26px] md:text-3xl lg:text-[34px] !font-normal transition-colors"
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#45003e")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "inherit")
                          }
                        >
                          {item.title}
                        </h3>
                        <p className="text-base text-slate-500 leading-[1.7] max-w-xl">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-slate-300 group-hover:translate-x-2 flex-shrink-0 mt-1 transition-all"
                      style={{ color: undefined }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#661749")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: DELIVERABLES FOR OPERATORS & INVESTORS */}
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
              <span className="text-teal-600">Operators & Investors</span>
            </h2>
            <p className="text-base xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6] max-w-3xl">
              Engaging the IDP flagship provides top-tier hospital operators and
              sovereign funds with complete execution certainty:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm h-full">
                <div className="space-y-4">
                  {deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl bg-white border border-slate-100 p-5 transition-all hover:shadow-md"
                    >
                      <div
                        className="mt-0.5 h-10 w-10 rounded-xl text-white flex items-center justify-center shrink-0"
                        style={{ background: "#661749" }}
                      >
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
