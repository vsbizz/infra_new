import { ArrowRight, CheckCircle2 } from "lucide-react";

function WhatWeDo() {
  const services = [
    "Investment & Capital Advisory",
    "Leasing & Operator Advisory",
    "Advisory & Strategic Planning",
    "Design & Project Delivery",
    "Property & Facilities Management",
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Content Column */}
          <div className="flex flex-col justify-center py-4">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl mb-8 md:mb-12">
              What We Do
            </h2>
            <p className="text-lg leading-relaxed mb-10 text-slate-300">
              Infra.Health provides a comprehensive healthcare asset development
              platform. Our lifecycle-driven architecture integrates investment
              advisory, strategic planning, and turnkey project delivery.
            </p>
            
            <div className="grid gap-3 md:gap-4">
              {services.map((title, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-4 border border-white/10 bg-white/5 hover:border-teal-500/50 hover:bg-white/10 transition-all group rounded-sm"
                >
                  <div className="w-2 h-2 bg-teal-500 group-hover:scale-150 transition-transform" />
                  <span className="text-sm md:text-base font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column - Matches content height */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <div className="lg:absolute lg:inset-0 w-full h-full">
              <img
                src="/asset/hero/3.jpg"
                alt="Project Delivery"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-teal-600 p-8 md:p-12 hidden md:block shadow-xl z-10">
                <p className="text-xl md:text-2xl font-bold leading-tight text-white">
                  Demand-validated & <br /> operationally resilient.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;