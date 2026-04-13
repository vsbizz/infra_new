"use client";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";

function Team() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <h2 className="w-full max-w-none text-[1.75rem] xs:text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl md:font-extrabold leading-[1.06] tracking-tight text-slate-900">
            <span className="text-teal-600">Meet the Experts</span> driving Our
            Ownership Mindset
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-500 font-medium max-w-xl mx-auto">
            Our team integrates healthcare engineering, institutional capital,
            and clinical planning to protect capital investment and coordinate
            all stakeholders.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {[
            {
              name: "Rahul Shelke",
              role: "Director",
              image: "asset/team/rahul-shelke.jpg",
            },
            {
              name: "Apurva Shelke",
              role: "Designated Partner",
              image: "asset/team/apurva-shelke.jpg",
            },
            {
              name: "Sunil Shelke",
              role: "Director",
              image: "asset/team/sunil-shelke.jpg",
            },
            {
              name: "Hrishikesh Kale",
              role: "Director",
              image: "asset/team/hrishikesh-kale.jpg",
            },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-3 sm:mb-4 md:mb-6 aspect-[4/5] rounded-lg sm:rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-[10px] sm:text-xs md:text-sm font-bold flex items-center gap-2 tracking-[0.12em] uppercase">
                    <Linkedin size={14} />
                    VIEW PROFILE
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Name */}
              <h4 className="text-md sm:text-base md:text-xl lg:text-2xl md:font-bold text-brand-dark group-hover:text-brand-teal transition-colors leading-snug">
                {member.name}
              </h4>

              {/* Role */}
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-500">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
