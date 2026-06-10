"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

export function ProcessTimelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Concept, Site &\nFeasibility",
      position: "0%",
      labelPosition: "top",
    },
    {
      id: 2,
      title: "Complimentary\nIntegrated Design",
      position: "33.33%",
      labelPosition: "bottom",
    },
    {
      id: 3,
      title: "Capital Arrangement &\nEPC Execution",
      position: "66.66%",
      labelPosition: "top",
    },
    {
      id: 4,
      title: "Commissioning & Lifecycle Handover",
      position: "100%",
      labelPosition: "bottom",
    },
  ];

  // const processSlides = [
  //   {
  //     id: 1,
  //     title: "Positioning for Institutional Bankability",
  //     description:
  //       "We begin at the convergence of capital and care. By integrating debt advisory and risk underwriting early, we ensure your healthcare project is structured as a resilient, investment-grade asset. Every financial model is built to survive market cycles and secure long-term funding.",
  //     image:
  //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop&q=80",
  //     alt: "Financial analysis and investment advisory",
  //   },
  //   {
  //     id: 2,
  //     title: "Evidence-Based Development Frameworks",
  //     description:
  //       "We mitigate demand risk before a single brick is laid. Through rigorous market analytics, demographic mapping, and specialty capacity planning, we validate the clinical need and financial viability of the facility for its specific geography.",
  //     image:
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop&q=80",
  //     alt: "Strategic planning and data analytics",
  //   },
  //   {
  //     id: 3,
  //     title: "Engineering for Clinical Outcomes",
  //     description:
  //       "Healthcare design is a technical science. Our in-house medical planners and engineers synchronize clinical workflows with complex MEPF systems, ensuring that sterile environments, patient safety, and medical equipment adjacencies are baked into the architectural DNA.",
  //     image:
  //       "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=600&fit=crop&q=80",
  //     alt: "Healthcare facility engineering and design",
  //   },
  //   {
  //     id: 4,
  //     title: "Synchronizing Infrastructure with Operations",
  //     description:
  //       "An empty hospital is a liability. We bridge the gap between asset ownership and clinical operations by identifying the right operator mix and structuring lease frameworks that protect asset value while ensuring high-quality patient reach.",
  //     image:
  //       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=600&fit=crop&q=80",
  //     alt: "Hospital operations and leasing",
  //   },
  //   {
  //     id: 5,
  //     title: "Single-Point Accountability in Execution",
  //     description:
  //       "We eliminate the friction of fragmented contracting. Through our EPC and Design-Build models, we provide unified control over cost, quality, and clinical compliance. When the team that designed the hospital is the team building it, project speed is guaranteed.",
  //     image:
  //       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=600&fit=crop&q=80",
  //     alt: "Construction project delivery",
  //   },
  //   {
  //     id: 6,
  //     title: "Safeguarding Global Clinical Standards",
  //     description:
  //       "Our dedicated compliance team ensures that every square meter meets JCI, NABH, and ISO standards. From air pressure testing in OTs to medical gas certification, we verify that the facility is clinically ready for patients from the moment of handover.",
  //     image:
  //       "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&h=600&fit=crop&q=80",
  //     alt: "Medical equipment and compliance testing",
  //   },
  //   {
  //     id: 7,
  //     title: "Guaranteeing 24/7 Resilience & Uptime",
  //     description:
  //       "Completion is just the beginning. We provide specialized management for the hard and soft services that keep critical medical systems running. Our lifecycle governance ensures the facility remains safe, efficient, and institutionally valuable for decades.",
  //     image:
  //       "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&h=600&fit=crop&q=80",
  //     alt: "Facility management and operations",
  //   },
  // ];

  const processSlides = [
    {
      id: 1,
      title: "Concept, Site &\nFeasibility",
      description:
        "Executing healthcare concept definition, site validation, and developing bankable Detailed Project Reports (DPR) with 10-20 year financial projections.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop&q=80",
      alt: "Healthcare planning and feasibility review",
    },
    {
      id: 2,
      title: "Complimentary\nIntegrated Design",
      description:
        "Delivering complete master planning, architecture, structural engineering, MEPF, and Good for Construction (GFC) documentation at no separate charge.",
      image: "asset/services/construct/design.jpg",
      alt: "Architectural healthcare design planning",
    },
    {
      id: 3,
      title: "Capital Arrangement &\nEPC Execution",
      description:
        "Managing equity/debt structuring (if applicable) and executing full turnkey EPC construction, including procurement and specialised systems.",
      image: "asset/services/operate/property-management.jpg",
      alt: "Healthcare construction execution",
    },
    {
      id: 4,
      title: "Commissioning &\nLifecycle Handover",
      description:
        "Providing system-by-system testing, regulatory approvals, operator onboarding, and transitioning the completed asset to facility management.",
      image: "asset/services/operate/hr-support.jpg",
      alt: "Hospital commissioning and handover",
    },
  ];
  const activeSlide = activeStep;

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative lg:min-h-screen  min-h-[50vh] mb-16 xs:mb-20 sm:mb-24 py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-700 overflow-hidden px-4 xs:px-5 sm:px-6 md:px-8">
      {/* Background Image - Dynamic based on active slide */}
      <div className="absolute inset-0 opacity-20">
        {processSlides.map((slide, index) => (
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            initial={false}
            animate={{
              opacity: index === activeSlide ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 w-full h-full object-cover ${
              index === activeSlide ? "z-10" : "z-0"
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70 z-20"></div>

      <div className="relative z-30 max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 xs:gap-2.5 mb-8 xs:mb-10 sm:mb-12"
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="text-[10px] xs:text-[11px] font-semibold text-slate-300 uppercase tracking-widest">
            Our Process
          </span>
        </motion.div>

        {/* Timeline Container */}
        <div className="mb-12 xs:mb-14 sm:mb-16">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative px-4">
              {/* Labels Above */}
              <div className="relative h-14 sm:h-16 mb-6 sm:mb-8">
                {processSteps
                  .filter((step) => step.labelPosition === "top")
                  .map((step) => (
                    <div
                      key={step.id}
                      className="absolute"
                      style={{
                        left: step.position,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <motion.div
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-center cursor-pointer"
                        onClick={() =>
                          setActiveStep(processSteps.indexOf(step))
                        }
                      >
                        <p className="text-[13px] sm:text-sm font-semibold text-white leading-tight whitespace-pre-line">
                          {step.title}
                        </p>
                      </motion.div>
                    </div>
                  ))}
              </div>

              {/* Timeline Bar */}
              <div className="relative h-[2px] bg-slate-400/30 rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white/30"
                  initial={{ width: "0%" }}
                  animate={{ width: processSteps[activeStep].position }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                <div className="absolute top-1/2 -translate-y-1/2 w-full">
                  {processSteps.map((step, index) => (
                    <motion.button
                      key={step.id}
                      animate={{
                        width: index === activeStep ? 24 : 20,
                        height: index === activeStep ? 24 : 20,
                        backgroundColor:
                          index === activeStep ? "#ffffff" : "#94a3b8",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-lg hover:scale-110 transition-all border-[3px] border-slate-700/50"
                      style={{ left: step.position, top: "50%" }}
                      onClick={() => setActiveStep(index)}
                      aria-label={`Go to ${step.title.replace("\n", " ")}`}
                    />
                  ))}
                </div>
              </div>

              {/* Labels Below */}
              <div className="relative h-14 sm:h-16 mt-6 sm:mt-8">
                {processSteps
                  .filter((step) => step.labelPosition === "bottom")
                  .map((step) => (
                    <div
                      key={step.id}
                      className="absolute"
                      style={{
                        left: step.position,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <motion.div
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-center cursor-pointer"
                        onClick={() =>
                          setActiveStep(processSteps.indexOf(step))
                        }
                      >
                        <p className="text-[13px] sm:text-sm font-semibold text-white leading-tight whitespace-pre-line">
                          {step.title}
                        </p>
                      </motion.div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Only show active step title */}
          <div className="md:hidden">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-3 justify-start"
            >
              <p className="text-sm xs:text-[15px] font-semibold text-white leading-tight text-center">
                {processSteps[activeStep].title.replace("\n", " ")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Process Slides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 items-center mb-6 xs:mb-7 sm:mb-8">
          <div className="relative min-h-[240px] xs:min-h-[260px] sm:min-h-[280px] md:min-h-[220px]">
            {processSlides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={false}
                animate={{
                  opacity: index === activeSlide ? 1 : 0,
                  y: index === activeSlide ? 0 : 20,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${
                  index === activeSlide
                    ? "relative"
                    : "absolute inset-0 pointer-events-none"
                }`}
              >
                <h2 className="my-4 xs:my-5 sm:my-6 text-[24px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-6xl  md:font-extrabold leading-[1.2] xs:leading-[1.15] tracking-tight text-white">
                  {slide.title}
                </h2>
                <p className="text-slate-300 text-sm xs:text-[15px] sm:text-base font-normal leading-[1.6]">
                  {slide.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-start md:justify-end gap-3 xs:gap-3.5 sm:gap-4"
          >
            <motion.button
              onClick={prevStep}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 xs:p-3 border border-slate-600 hover:border-white text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5 xs:w-6 xs:h-6" />
            </motion.button>
            <motion.button
              onClick={nextStep}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 xs:p-3 border border-slate-600 hover:border-white text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5 xs:w-6 xs:h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
