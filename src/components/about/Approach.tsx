"use client";

import { motion } from "framer-motion";
function Approach() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-12">
              Our Approach: 
              <span className="text-brand-teal">The Ownership Mindset</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-10">
              We view healthcare infrastructure as long-duration institutional
              assets, not isolated construction mandates. Every engagement is
              governed by rigorous standards that protect capital and ensure
              clinical excellence.
            </p>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Rigorous Feasibility",
                desc: "Demand and demographic validation to ensure long-term viability and clinical relevance.",
                image: "https://picsum.photos/seed/feasibility/600/400",
              },
              {
                num: "02",
                title: "Financial Rigor",
                desc: "Institutional-grade capital structuring and risk management to protect stakeholder interests.",
                image: "https://picsum.photos/seed/finance/600/400",
              },
              {
                num: "03",
                title: "Engineering Governance",
                desc: "Clinical planning integrated with operational functionality for seamless healthcare delivery.",
                image: "https://picsum.photos/seed/engineering/600/400",
              },
              {
                num: "04",
                title: "Performance Alignment",
                desc: "Ensuring long-term clinical and financial sustainability through lifecycle management.",
                image: "https://picsum.photos/seed/performance/600/400",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-slate-50 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 border-b-4 border-transparent group-hover:border-brand-teal transition-all duration-500">
                  <div className="text-brand-teal font-bold text-sm tracking-widest mb-4">
                    PHASE {item.num}
                  </div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-teal transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
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
