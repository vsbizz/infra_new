"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";

const TEAM_DEPARTMENTS = [
  {
    id: "executive-leadership",
    name: "Executive Leadership",
    description:
      "Driving corporate vision, governance, compliance, and multi-stakeholder healthcare infrastructure strategy.",
    members: [
      {
        name: "Rahul Ramesh Shelke",
        role: "CEO & Managing Director",
        image: "/asset/team/rahul-shelke.jpg",
        linkedin: "#",
      },
      {
        name: "Apurva Rahul Shelke",
        role: "Director",
        image: "/asset/team/apurva-shelke.jpg",
        linkedin: "#",
      },
      {
        name: "Sunil Shelke",
        role: "Director",
        image: "asset/team/sunil-shelke.jpg",
        linkedin: "#",
      },
    ],
  },
  {
    id: "architecture-design",
    name: "Architecture, Interior & Design Strategy",
    description:
      "Designing advanced clinical environments, medical spacing plans, and high-performance healthcare facilities.",
    members: [
      {
        name: "Niharika Choudhary",
        role: "Design Manager",
        image: "/asset/team/niharika-chodhary.jpeg",
        linkedin: "#",
      },
      {
        name: "Sarvesh Umesh Bhale",
        role: "Lead Architect",
        image: "/asset/team/sarvesh-bhale.jpeg",
        linkedin: "#",
      },
      {
        name: "Varun Pandurang Chougale",
        role: "Senior Architect",
        image: "/asset/team/varun-chougule.jpeg",
        linkedin: "#",
      },
      {
        name: "Aishwarya Vijaykumar Chavan",
        role: "Senior Architect",
        image: "/asset/team/aishwarya-chavan.jpeg",
        linkedin: "#",
      },
      {
        name: "Monika Thenge",
        role: "Senior Architect",
        image: "/asset/team/monika-thenge.jpeg",
        linkedin: "#",
      },
      {
        name: "Ojas Jyoti Bhosale",
        role: "Senior Architect",
        image: "/asset/team/ojas-bhosle.jpeg",
        linkedin: "#",
      },
      {
        name: "Yamini Hemant Sawant",
        role: "Senior Interior Designer",
        image: "/asset/team/yamini-sawant.jpeg",
        linkedin: "#",
      },
      {
        name: "Bharat Sanjay Mahajan",
        role: "Architect",
        image: "/asset/team/bharat-mahajan.jpeg",
        linkedin: "#",
      },
      {
        name: "Janhavi Shinde",
        role: "Architect",
        image: "/asset/team/janhavi-shinde.jpeg",
        linkedin: "#",
      },
      {
        name: "Abhishek Sambhaji Thorat",
        role: "Architect",
        image: "/asset/team/abhishek-thorat.jpeg",
        linkedin: "#",
      },
      {
        name: "Advait Sanjay Wadagaonkar",
        role: "Architect",
        image: "/asset/team/advait-wadgonkar.jpeg",
        linkedin: "#",
      },
    ],
  },
  {
    id: "project-engineering",
    name: "Project Management & Infrastructure Engineering",
    description:
      "Executing on-site engineering, biomedical equipment deployment, timeline governance, and rigorous safety protocols.",
    members: [
      {
        name: "Hrishikesh Shashank Kale",
        role: "Project Director",
        image: "/asset/team/hrishikesh-kale.jpeg",
        linkedin: "#",
      },
      {
        name: "Veerendra Yedavally",
        role: "Project Director",
        image: "/asset/team/veerendra-yedavally.jpeg",
        linkedin: "#",
      },
      {
        name: "Deepak Sham Vairat",
        role: "Associate General Manager",
        image: "/asset/team/deepak-sham-vairat.png",
        linkedin: "#",
      },
      {
        name: "Tushar Sunil Shinde",
        role: "Assistant Project Manager",
        image: "/asset/team/tushar-shinde.jpeg",
        linkedin: "#",
      },
      {
        name: "Krushanakant Vyankat Jawale",
        role: "Senior Engineer",
        image: "/asset/team/krushanakant-jawale.jpeg",
        linkedin: "#",
      },
      {
        name: "Venugopal T.M",
        role: "Senior Biomedical Engineer",
        image: "/asset/team/venugopal-t-m.jpg",
        linkedin: "#",
      },
      {
        name: "Kapil Babasaheb Gajbhar",
        role: "Senior Estimation Engineer",
        image: "/asset/team/kapil-gajbhar.jpeg",
        linkedin: "#",
      },
      {
        name: "Ashish Sudhakar More",
        role: "Safety Manager",
        image: "/asset/team/ashish-more.png",
        linkedin: "#",
      },
      {
        name: "Hitesh Vijay Yewale",
        role: "Safety Manager",
        image: "/asset/team/hitesh-yewale.jpeg",
        linkedin: "#",
      },
      {
        name: "Shubham Dattaray Sutar",
        role: "Engineer",
        image: "/asset/team/shubham-sutar.jpg",
        linkedin: "#",
      },
      {
        name: "Aadesh Sanjay Kochar",
        role: "Engineer",
        image: "/asset/team/aadesh-kochar.jpeg",
        linkedin: "#",
      },
      {
        name: "Mohit Gulabrao Ghewande",
        role: "Engineer",
        image: "/asset/team/mohit-ghewande.jpeg",
        linkedin: "#",
      },
      {
        name: "Gaurav Prakash Kurnawal",
        role: "Engineer",
        image: "/asset/team/gaurav-kurnawak.jpeg",
        linkedin: "#",
      },
      {
        name: "Shruti Vijay Jamdar",
        role: "Junior Design Engineer",
        image: "/asset/team/shruti-jamdar.jpeg",
        linkedin: "#",
      },
    ],
  },
  {
    id: "operations-controls",
    name: "Corporate Operations & Project Controls",
    description:
      "Managing corporate operations, strategic project estimation, site logistics, and project coordination.",
    members: [
      {
        name: "Namrata Taraman Hulawale",
        role: "Senior Manager",
        image: "/asset/team/namrata-hulawale.jpeg",
        linkedin: "#",
      },
      {
        name: "Om Nilesh Khandelwal",
        role: "Manager",
        image: "/asset/team/om-khandelwal.jpeg",
        linkedin: "#",
      },
      {
        name: "Sohanlal Bhaskarrao Bari",
        role: "Deputy Manager",
        image: "/asset/team/sohanlal-bari.jpeg",
        linkedin: "#",
      },
      {
        name: "Vikram Yashwant Kokare",
        role: "Senior Executive",
        image: "/asset/team/vikram-kokare.jpeg",
        linkedin: "#",
      },
      {
        name: "Bhagyashree Rajendra Patait",
        role: "Senior Executive",
        image: "/asset/team/bhagyashree-patait.jpeg",
        linkedin: "#",
      },
      {
        name: "Aman Lakshmikant Nagane",
        role: "Executive",
        image: "/asset/team/aman-nagne.jpeg",
        linkedin: "#",
      },
      {
        name: "Rushikesh Ramesh Khatik",
        role: "Executive",
        image: "/asset/team/rushikesh-khatik-2.jpeg",
        linkedin: "#",
      },
      {
        name: "Nikhil Sunil Patil",
        role: "Executive",
        image: "/asset/team/nikhil-patil.jpeg",
        linkedin: "#",
      },
      {
        name: "Payal Anil Shinde",
        role: "Executive",
        image: "/asset/team/payal-shinde.jpeg",
        linkedin: "#",
      },
      {
        name: "Sayali Deepak Ohale",
        role: "Executive",
        image: "/asset/team/sayali-ohale.jpeg",
        linkedin: "#",
      },
    ],
  },
];

function Team() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredDepartments =
    activeTab === "all"
      ? TEAM_DEPARTMENTS
      : TEAM_DEPARTMENTS.filter((dept) => dept.id === activeTab);

  return (
    <section className="bg-slate-50 py-24 lg:py-32 overflow-hidden">
      {/* JLL Style Section Header Block */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08]"
          >
            <span className="text-teal-600">Meet the Experts</span> driving Our
            Ownership Mindset
          </motion.h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-base md:text-lg leading-[1.65] text-slate-600 max-w-xl mx-auto">
            Our team integrates healthcare engineering, institutional capital,
            and clinical planning to protect capital investment and coordinate
            all stakeholders.
          </p>
        </div>

        {/* Chronological / Department Block Render */}
        <div className="space-y-24">
          <AnimatePresence mode="wait">
            {filteredDepartments.map((dept) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-4 gap-12 pt-12 border-t border-slate-200 first:border-t-0 first:pt-0"
              >
                {/* Left side Metadata */}
                <div className="lg:col-span-1">
                  <h3 className="heading-display text-xl font-bold text-slate-900 tracking-tight lg:sticky lg:top-24">
                    {dept.name}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-600 lg:sticky lg:top-36">
                    {dept.description}
                  </p>
                </div>

                {/* Right side Dynamic Grid Grid */}
                <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                  {dept.members.map((member) => (
                    <motion.div
                      key={member.name}
                      whileHover={{ y: -8 }}
                      transition={{
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.3,
                      }}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden mb-5 aspect-[4/5] bg-slate-200">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                          <a
                            href={member.linkedin}
                            className="text-white text-xs font-bold tracking-wider flex items-center gap-2 hover:text-teal-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin size={14} className="fill-current" /> VIEW
                            PROFILE <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>

                      <h4 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300 text-sm sm:text-[15px] md:text-xl leading-6 md:leading-relaxed text-slate-600t">
                        {member.name}
                      </h4>
                      <p className="text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-600 mt-1">
                        {member.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Team;
