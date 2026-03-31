"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Linkedin } from "lucide-react";

function Team() {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-teal-600">Meet the Experts</span> driving Our
            Ownership Mindset
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-500 font-medium">
            Our team integrates healthcare engineering, institutional capital,
            and clinical planning to protect capital investment and coordinate
            all stakeholders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-4/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Linkedin size={16}/> VIEW PROFILE <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                {member.name}
              </h4>
              <p className="text-slate-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
