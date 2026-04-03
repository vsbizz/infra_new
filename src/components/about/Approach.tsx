"use client";

import { motion } from "framer-motion";

function Approach() {
  const steps = [
    {
      num: "01",
      title: "Rigorous Feasibility",
      desc: "Demand and demographic validation to ensure long-term viability and clinical relevance.",
      image: "/asset/services/construct/fitout.jpg",
    },
    {
      num: "02",
      title: "Financial Rigor",
      desc: "Institutional-grade capital structuring and risk management to protect stakeholder interests.",
      image: "/asset/services/3.jpg",
    },
    {
      num: "03",
      title: "Engineering Governance",
      desc: "Clinical planning integrated with operational functionality for seamless healthcare delivery.",
      image: "/asset/services/construction.jpg",
    },
    {
      num: "04",
      title: "Performance Alignment",
      desc: "Ensuring long-term clinical and financial sustainability through lifecycle management.",
      image: "/asset/services/about.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Header Content */}
          {/* On mobile, this is static. On LG, it sticks as you scroll through the phases. */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6 md:mb-12">
              Our Approach: <br className="hidden md:block" />
              <span className="text-teal-600">The Ownership Mindset</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-8 md:mb-10 max-w-xl">
              We view healthcare infrastructure as long-duration institutional
              assets, not isolated construction mandates. Every engagement is
              governed by rigorous standards that protect capital and ensure
              clinical excellence.
            </p>
          </div>

          {/* Right Side: Grid of Phases */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative bg-slate-50 overflow-hidden rounded-xl md:rounded-none"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] md:aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 border-b-4 border-transparent group-hover:border-teal-600 transition-all duration-500">
                  <div className="text-teal-600 font-bold text-xs md:text-sm tracking-widest mb-3 md:mb-4">
                    PHASE {item.num}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Approach;