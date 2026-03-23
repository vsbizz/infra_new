import { ArrowRight, CheckCircle2 } from "lucide-react";

function WhatWeDo() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl mb-12">
              What We Do
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              Infra.Health provides a comprehensive healthcare asset development
              platform. Our lifecycle-driven architecture integrates investment
              advisory, strategic planning, and turnkey project delivery.
            </p>
            <div className="grid gap-4">
              {[
                "Investment & Capital Advisory",
                "Leasing & Operator Advisory",
                "Advisory & Strategic Planning",
                "Design & Project Delivery",
                "Property & Facilities Management",
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-4 border border-white/5 hover:border-brand-teal/30 transition-all group"
                >
                  <div className="w-2 h-2 bg-brand-teal group-hover:scale-150 transition-transform" />
                  <span className="text-sm tracking-widest">{title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/delivery/800/1000"
              alt="Project Delivery"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-brand-teal p-12 hidden md:block">
              <p className="text-2xl font-bold leading-tight">
                Demand-validated & <br /> operationally resilient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
