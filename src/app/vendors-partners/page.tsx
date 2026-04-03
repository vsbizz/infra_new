"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  Users,
  Globe,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Zap,
  Layout,
  ArrowRight,
  Send,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const Vendors: React.FC = () => {
  useEffect(() => {
    // Load the CRM script once when component mounts
    const script = document.createElement("script");
    script.src = "https://app.visionarybizz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup to prevent duplicate script tags on navigation
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-44 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Vendors & Partners</span>
          </nav>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center"
          >
            <h2 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-slate-900 mb-8">
              Partner with Infra Health and
              <span className="text-brand-teal"> Grow your Business</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-10">
              Infra Health collaborates with trusted vendors to deliver
              high-quality healthcare infrastructure solutions across India. We
              invite vendors with proven expertise to partner with us on our
              ongoing and upcoming healthcare projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Users, label: "Vendors", value: "600+" },
              { icon: Globe, label: "Countries", value: "4+" },
              { icon: Briefcase, label: "Expertise Areas", value: "60+" },
            ].map((stat, index) => (
              <motion.div
                initial="initial"
                whileHover="hover"
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group overflow-hidden rounded-md border border-white/20 bg-brand-teal p-10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-default"
              >
                {/* Liquid Expansion Background Effect */}
                <motion.div
                  variants={{
                    initial: { scale: 0, opacity: 0 },
                    hover: { scale: 3.5, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-900 origin-center pointer-events-none"
                />

                {/* Decorative Ring */}
                <div className="absolute inset-0 z-10 rounded-md transition-all duration-500 group-hover:ring-1 group-hover:ring-white/50" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center text-center">
                  <div className="mb-6 text-white transition-transform duration-500 group-hover:scale-110 group-hover:text-teal-400">
                    <stat.icon className="w-8 h-8" />
                  </div>

                  <span className="text-4xl font-black tracking-tight text-white md:text-5xl">
                    {stat.value}
                  </span>

                  <span className="mt-4 text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column: Why Partner */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-display">
                Why partner with Us?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                We have grown by taking forward our partners with us, making
                them more competitive. Our connections help vendors increase
                their reach across diverse geographies in India and
                internationally. We maintain an on-time payment record and
                ensure product specifications align with regulatory standards
                (NABH, ISO, WHO), reducing compliance risks.
              </p>

              <div className="space-y-8">
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
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover: transition-all shrink-0">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              {/* 1. Sticky container: Keeps the form in view.
          2. Top spacing: 'top-32' matches your previous layout.
      */}
              <div className="sticky top-32">
                <div className="bg-white p-6 md:p-8 rounded-md border border-slate-200 shadow-xl shadow-slate-200/50">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">
                    Vendor Application Form
                  </h3>
                  <div
                    className="w-full h-[650px] overflow-y-auto pr-2 custom-scrollbar"
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
