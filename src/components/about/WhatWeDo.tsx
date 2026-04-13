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
    <section className="overflow-hidden bg-slate-950 py-10 sm:py-12 md:py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content Column */}
          <div className="flex flex-col justify-center py-0 sm:py-2 md:py-4 order-1">
            <h2 className="w-full max-w-none mb-5 sm:mb-6 md:mb-10 lg:mb-12 text-[1.75rem] xs:text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl md:font-extrabold leading-[1.06] tracking-tight text-white">
              What We Do
            </h2>

            <p className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-300 max-w-none sm:max-w-xl">
              Infra.Health provides a comprehensive healthcare asset development
              platform. Our lifecycle-driven architecture integrates investment
              advisory, strategic planning, and turnkey project delivery.
            </p>

            <div className="grid gap-2.5 sm:gap-3 md:gap-4">
              {services.map((title, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3 sm:gap-4 md:gap-6 rounded-sm border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all hover:border-teal-500/50 hover:bg-white/10"
                >
                  <div className="h-2 w-2 shrink-0 bg-teal-500 transition-transform group-hover:scale-150" />
                  <span className="text-sm sm:text-[15px] md:text-base md:font-medium leading-6 text-white">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative order-2 min-h-[240px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-full">
            <div className="w-full h-full lg:absolute lg:inset-0">
              <img
                src="/asset/hero/3.jpg"
                alt="Project Delivery"
                className="h-full w-full rounded-xl sm:rounded-sm object-cover grayscale transition-all duration-700 hover:grayscale-0 shadow-xl md:shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:-bottom-6 md:-left-6 z-10 bg-teal-600 p-3.5 sm:p-4 md:p-8 lg:p-10 shadow-xl max-w-[220px] sm:max-w-[260px] md:max-w-none">
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl md:font-bold leading-tight text-white">
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
