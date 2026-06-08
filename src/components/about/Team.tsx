"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Rahul Ramesh Shelke",
    role: "CEO & Managing Director",
    image: "/asset/team/rahul-shelke.jpg",
  },
  {
    name: "Apurva Rahul Shelke",
    role: "Designated Partner",
    image: "/asset/team/apurva-shelke.jpg",
  },
  {
    name: "Hrishikesh Shashank Kale",
    role: "Project Director",
    image: "/asset/team/hrishikesh-kale.jpeg",
  },
  {
    name: "Rahul Yuvrajsingh Bayas",
    role: "Chauffeur",
    image: "/asset/team/rahul-bays.jpeg",
  },
  {
    name: "Aman Lakshmikant Nagane",
    role: "Executive",
    image: "/asset/team/aman-nagne.jpeg",
  },
  {
    name: "Bharat Sanjay Mahajan",
    role: "Architect",
    image: "/asset/team/bharat-mahajan.jpeg",
  },
  {
    name: "Sarvesh Umesh Bhale",
    role: "Lead Architect",
    image: "/asset/team/sarvesh-bhale.jpeg",
  },
  {
    name: "Varun Pandurang Chougale",
    role: "Senior Architect",
    image: "/asset/team/varun-chougule.jpeg",
  },
  {
    name: "Aishwarya Vijaykumar Chavan",
    role: "Senior Architect",
    image: "/asset/team/aishwarya-chavan.jpeg",
  },
  {
    name: "Mayuresh Jagdish Koli",
    role: "Office Assistant",
    image: "/asset/team/mayuresh-koli.jpeg",
  },
  {
    name: "Sagar Dilip Khare",
    role: "Office Assistant",
    image: "/asset/team/sagar-khare.jpeg",
  },
  {
    name: "Mirza Mujahed Baig",
    role: "Senior Manager",
    image: "/asset/team/mirza-baig.jpeg",
  },
  {
    name: "Namrata Taraman Hulawale",
    role: "Senior Manager",
    image: "/asset/team/namrata-hulawale.jpeg",
  },
  {
    name: "Shubham Dattaray Sutar",
    role: "Engineer",
    image: "/asset/team/shubham-sutar.jpg",
  },
  {
    name: "Rushikesh Ramesh Khatik",
    role: "Executive",
    image: "/asset/team/rushikesh-khatik-2.jpeg",
  },
  {
    name: "Veerendra Yedavally",
    role: "Project Director",
    image: "/asset/team/veerendra-yedavally.jpeg",
  },
  {
    name: "Niharika Choudhary",
    role: "Design Manager",
    image: "/asset/team/niharika-chodhary.jpeg",
  },
  {
    name: "Janhavi Shinde",
    role: "Architect",
    image: "/asset/team/janhavi-shinde.jpeg",
  },
  {
    name: "Monika Thenge",
    role: "Senior Architect",
    image: "/asset/team/monika-thenge.jpeg",
  },
  {
    name: "Vikram Yashwant Kokare",
    role: "Senior Executive",
    image: "/asset/team/vikram-kokare.jpeg",
  },
  {
    name: "Ojas Jyoti Bhosale",
    role: "Senior Architect",
    image: "/asset/team/ojas-bhosle.jpeg",
  },
  {
    name: "Nikhil Sunil Patil",
    role: "Executive",
    image: "/asset/team/nikhil-patil.jpeg",
  },
  {
    name: "Payal Anil Shinde",
    role: "Executive",
    image: "/asset/team/payal-shinde.jpeg",
  },
  {
    name: "Abhishek Sambhaji Thorat",
    role: "Architect",
    image: "/asset/team/abhishek-thorat.jpeg",
  },
  {
    name: "Shivaji Maruti Bangar",
    role: "Office Assistant",
    image: "/asset/team/shivaji-banger.jpeg",
  },
  {
    name: "Bhagyashree Rajendra Patait",
    role: "Senior Executive",
    image: "/asset/team/bhagyashree-patait.jpeg",
  },
  {
    name: "Aadesh Sanjay Kochar",
    role: "Engineer",
    image: "/asset/team/aadesh-kochar.jpeg",
  },
  {
    name: "Mohit Gulabrao Ghewande",
    role: "Engineer",
    image: "/asset/team/mohit-ghewande.jpeg",
  },
  {
    name: "Deepak Sham Vairat",
    role: "Associate General Manager",
    image: "/asset/team/deepak-sham-vairat.png",
  },
  {
    name: "Om Nilesh Khandelwal",
    role: "Manager",
    image: "/asset/team/om-khandelwal.jpeg",
  },
  {
    name: "Yamini Hemant Sawant",
    role: "Senior Interior Designer",
    image: "/asset/team/yamini-sawant.jpeg",
  },
  {
    name: "Ashish Sudhakar More",
    role: "Safety Manager",
    image: "/asset/team/ashish-more.png",
  },
  {
    name: "Advait Sanjay Wadagaonkar",
    role: "Architect",
    image: "/asset/team/advait-wadgonkar.jpeg",
  },
  {
    name: "Gaurav Prakash Kurnawal",
    role: "Engineer",
    image: "/asset/team/gaurav-kurnawak.jpeg",
  },
  {
    name: "Shruti Vijay Jamdar",
    role: "Junior Design Engineer",
    image: "/asset/team/shruti-jamdar.jpeg",
  },
  {
    name: "Krushanakant Vyankat Jawale",
    role: "Senior Engineer",
    image: "/asset/team/krushanakant-jawale.jpeg",
  },
  {
    name: "Shekhar Laxman Mohare",
    role: "Storekeeper",
    image: "/asset/team/shekhar-mohare.jpeg",
  },
  {
    name: "Hitesh Vijay Yewale",
    role: "Safety Manager",
    image: "/asset/team/hitesh-yewale.jpeg",
  },
  {
    name: "Sohanlal Bhaskarrao Bari",
    role: "Deputy Manager",
    image: "/asset/team/sohanlal-bari.jpeg",
  },
  {
    name: "Sayali Deepak Ohale",
    role: "Executive",
    image: "/asset/team/sayali-ohale.jpeg",
  },
  {
    name: "Venugopal T.M",
    role: "Senior Biomedical Engineer",
    image: "/asset/team/venugopal-t-m.jpg",
  },
  {
    name: "Tushar Sunil Shinde",
    role: "Assistant Project Manager",
    image: "/asset/team/tushar-shinde.jpeg",
  },
  {
    name: "Kapil Babasaheb Gajbhar",
    role: "Senior Estimation Engineer",
    image: "/asset/team/kapil-gajbhar.jpeg",
  },
  {
    name: "Shreyas Sanjay Thorat",
    role: "Senior Engineer",
    image: "/asset/team/shreyas-thorat.jpeg",
  },
  {
    name: "Vishwanath Dattatray Bansode",
    role: "Office Assistant",
    image: "/asset/team/vishwanath-bansode.jpg",
  },
  {
    name: "Tejas Suresh Gaikwad",
    role: "Senior Engineer",
    image: "/asset/team/tejas-gaikwad.jpeg",
  },
] as const;

const roleOrder = [
  "CEO & Managing Director",
  "Designated Partner",
  "Project Director",
  "Chauffeur",
  "Executive",
  "Architect",
  "Lead Architect",
  "Senior Architect",
  "Office Assistant",
  "Senior Manager",
  "Engineer",
  "Design Manager",
  "Senior Executive",
  "Associate General Manager",
  "Manager",
  "Senior Interior Designer",
  "Safety Manager",
  "Junior Design Engineer",
  "Senior Engineer",
  "Storekeeper",
  "Deputy Manager",
  "Senior Biomedical Engineer",
  "Assistant Project Manager",
  "Senior Estimation Engineer",
] as const;

const GROUPS_PER_PAGE = 4;

function Team() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const groupedMembers = useMemo(
    () =>
      roleOrder
        .map((role) => ({
          role,
          members: teamMembers.filter((member) => member.role === role),
        }))
        .filter((group) => group.members.length > 0),
    [],
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const totalPages = Math.ceil(groupedMembers.length / GROUPS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const pagedGroups = groupedMembers.slice(
    (currentPage - 1) * GROUPS_PER_PAGE,
    currentPage * GROUPS_PER_PAGE,
  );

  return (
    <section
      className="bg-slate-50 py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
          {pagedGroups.map((group) => (
            <div
              key={group.role}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.16em] text-teal-600">
                {group.role}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {group.members.map((member) => (
                  <motion.div
                    key={member.name}
                    whileHover={{ y: -6 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden mb-3 sm:mb-4 md:mb-6 aspect-[4/5] rounded-lg sm:rounded-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-[10px] sm:text-xs md:text-sm font-bold flex items-center gap-2 tracking-[0.12em] uppercase">
                          <Linkedin size={14} />
                          VIEW PROFILE
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>

                    <h4 className="text-md sm:text-base md:text-xl lg:text-2xl md:font-bold text-brand-dark group-hover:text-brand-teal transition-colors leading-snug">
                      {member.name}
                    </h4>

                    <p className="text-[11px] sm:text-xs md:text-sm text-teal-600 font-semibold">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 sm:mt-12 md:mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center hover:border-teal-600 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full border text-sm font-semibold transition-colors ${
                    currentPage === page
                      ? "bg-slate-900 text-white border-teal-600"
                      : "bg-white text-slate-600 border-slate-200 hover:border-teal-600"
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center hover:border-teal-600 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Team;
