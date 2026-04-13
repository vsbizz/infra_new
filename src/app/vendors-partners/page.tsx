"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  Users,
  Globe,
  Briefcase,
  ShieldCheck,
  CreditCard,
  Zap,
  Layout,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const Vendors: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.visionarybizz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-34 sm:pt-20 md:pt-40 lg:pt-54">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:mb-6 sm:gap-2 sm:text-xs md:mb-8">
            <Link href="/" className="transition-colors hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-slate-900">Vendors & Partners</span>
          </nav>
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-left sm:text-center"
          >
            <h2 className="mb-5 w-full max-w-none text-[1.85rem] xs:text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl md:font-extrabold leading-[1.06] tracking-tight text-slate-900 sm:mb-6 md:mb-8">
              Partner with Infra Health and
              <span className="text-brand-teal"> Grow your Business</span>
            </h2>

            <p className="mb-8 text-sm leading-6 text-slate-600 sm:mb-9 sm:text-[15px] md:mb-10 md:text-lg md:leading-relaxed">
              Infra Health collaborates with trusted vendors to deliver
              high-quality healthcare infrastructure solutions across India. We
              invite vendors with proven expertise to partner with us on our
              ongoing and upcoming healthcare projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-100 bg-slate-50 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-8 lg:gap-10">
            {[
              { icon: Users, label: "Vendors", value: "600+" },
              { icon: Globe, label: "Countries", value: "4+" },
              { icon: Briefcase, label: "Expertise Areas", value: "60+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hover"
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative cursor-default overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 bg-brand-teal p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl md:shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]"
              >
                <motion.div
                  variants={{
                    initial: { scale: 0, opacity: 0 },
                    hover: { scale: 3.5, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-xl sm:rounded-2xl bg-slate-900 origin-center"
                />

                <div className="absolute inset-0 z-10 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:ring-1 group-hover:ring-white/50" />

                <div className="relative z-20 flex flex-col items-center text-center">
                  <div className="mb-4 text-white transition-transform duration-500 group-hover:scale-110 group-hover:text-teal-400 sm:mb-5 md:mb-6">
                    <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                  </div>

                  <span className="text-[30px] sm:text-4xl md:text-5xl font-normal md:font-bold font-black tracking-tight text-white leading-none">
                    {stat.value}
                  </span>

                  <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 sm:mt-4">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Left Column: Why Partner */}
            <div>
              <h2 className="mb-5 w-full max-w-none text-[1.75rem] xs:text-[1.9rem] sm:text-3xl md:text-4xl md:font-bold leading-[1.06] tracking-tight text-slate-900 font-display sm:mb-6 md:mb-8">
                Why partner with Us?
              </h2>

              <p className="mb-8 text-sm leading-6 text-slate-600 sm:mb-10 sm:text-[15px] md:mb-12 md:text-lg md:leading-relaxed">
                We have grown by taking forward our partners with us, making
                them more competitive. Our connections help vendors increase
                their reach across diverse geographies in India and
                internationally. We maintain an on-time payment record and
                ensure product specifications align with regulatory standards
                (NABH, ISO, WHO), reducing compliance risks.
              </p>

              <div className="space-y-5 sm:space-y-6 md:space-y-8">
                {[
                  {
                    icon: Zap,
                    title: "Regular flow of high-quality projects",
                    desc: "Consistent opportunities to work on leading healthcare infrastructure projects.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "360-degree Support",
                    desc: "Dedicated Vendor Managers to guide you through every step of the process.",
                  },
                  {
                    icon: CreditCard,
                    title: "Assured Payment Terms",
                    desc: "Standard rate cards and on-time payment records for financial stability.",
                  },
                  {
                    icon: Layout,
                    title: "Zero Design Overheads",
                    desc: "We provide the designs and specifications, you focus on execution.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex gap-3 sm:gap-4 md:gap-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11 md:h-12 md:w-12 md:rounded-md bg-blue-50 text-brand-teal transition-all group-hover:bg-brand-teal">
                      <benefit.icon className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:text-white" />
                    </div>

                    <div>
                      <h3 className="mb-1.5 text-base md:font-bold text-slate-900 sm:text-lg md:mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-6 text-slate-500 sm:text-[15px] md:leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              <div className="lg:sticky lg:top-24 xl:top-32">
                <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 sm:p-5 md:p-6 lg:p-8 lg:rounded-md lg:shadow-xl lg:shadow-slate-200/50">
                  <h3 className="mb-4 text-center text-xl md:font-bold text-slate-900 font-display sm:mb-5 sm:text-2xl md:mb-6">
                    Vendor Application Form
                  </h3>

                  <div
                    className="custom-scrollbar relative w-full overflow-y-auto rounded-lg sm:rounded-xl lg:rounded-none pr-0 sm:pr-1 md:pr-2 h-[700px] sm:h-[820px] md:h-[950px] lg:h-[650px]"
                    style={{ position: "relative" }}
                  >
                    <iframe
                      src="https://app.visionarybizz.com/widget/form/ugl4sfPScfBLVFoSymFI"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "3px",
                      }}
                      id="inline-ugl4sfPScfBLVFoSymFI"
                      data-layout='{"id":"INLINE"}'
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Vendor Registration Form - website"
                      data-height="3661"
                      data-layout-iframe-id="inline-ugl4sfPScfBLVFoSymFI"
                      data-form-id="ugl4sfPScfBLVFoSymFI"
                      title="Vendor Registration Form - website"
                    ></iframe>
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

export default Vendors;
