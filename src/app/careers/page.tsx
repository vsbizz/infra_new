"use client";
import React, { useRef } from "react";
import {
  Users,
  Search,
  Lightbulb,
  ShieldCheck,
  Trophy,
  Globe,
  MapPin,
  Quote,
  ArrowRight,
  Mail,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// --- Components ---

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`backdrop-blur-md bg-white/70 border border-white/20 shadow-xl rounded-[2rem] ${className}`}>
    {children}
  </div>
);

// --- Data ---

const JOBS = [
  { title: "EPC Head", exp: "20+ Years", qual: "BE/ME Civil", loc: "Pune, India" },
  { title: "Cost & Estimation Manager", exp: "8-12 Years", qual: "BE Civil / NICMAR", loc: "Pune, India" },
  { title: "Biomedical Engineer", exp: "7+ Years", qual: "BE Biomedical", loc: "Pune (Baner)" },
  { title: "Project Engineer (Civil)", exp: "4+ Years", qual: "BE Civil", loc: "Pune (Warje)" },
  { title: "MEP Engineer", exp: "6+ Years", qual: "BE Electrical", loc: "Pune, India" },
];

const BUILD_VALUES = [
  { icon: Lightbulb, letter: "B", title: "Brainstorming", desc: "Fresh ideas, creative solutions, and embracing new perspectives." },
  { icon: Users, letter: "U", title: "Unity", desc: "Multi-disciplinary teamwork where every voice is heard." },
  { icon: ShieldCheck, letter: "I", title: "Integrity", desc: "Ethics, transparency, and trust in every brick and contract." },
  { icon: Trophy, letter: "L", title: "Leadership", desc: "Empowering ownership to lead the next generation." },
  { icon: Globe, letter: "D", title: "Diversity", desc: "Respecting differences; knowing diverse talent drives innovation." },
];

// --- Sub-Components ---

const BuildCard = ({ pillar, idx }: { pillar: any; idx: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = pillar.icon;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileHover="hover"
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay: idx * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative group overflow-hidden rounded-2xl border border-slate-100 bg-white p-10 shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-default"
    >
      {/* Liquid Expansion Background Effect */}
      <motion.div
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 3.5, opacity: 1 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <div className="mb-6 p-4 rounded-2xl bg-teal-50 text-teal-600 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col items-center">
          {/* <span className="text-5xl font-black tracking-tighter text-slate-100 transition-colors duration-500 group-hover:text-teal-400">
            {pillar.letter}
          </span> */}
          <h4 className="mt-2 text-lg font-bold text-slate-900 transition-colors duration-500 group-hover:text-white uppercase tracking-tight">
            {pillar.title}
          </h4>
        </div>

        <p className="mt-4 text-xs font-medium leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-slate-300">
          {pillar.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* --- Hero Section --- */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-400/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-slate-900 mb-8">
              Empowering You to
              <span className="text-teal-600 block"> Shape the Future </span>
              of Healthcare
            </h1>
            <p className="text-xl leading-relaxed text-slate-600 font-light max-w-xl">
              At Infra.Health, we don't just build hospitals; we nurture the
              careers of those who build them. Join our inclusive,
              people-powered team and help us redefine global clinical infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="rounded-[2rem] shadow-2xl mt-12" alt="Team" />
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" className="rounded-[2rem] shadow-2xl" alt="Collaboration" />
              </div>
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" className="rounded-[2rem] shadow-2xl" alt="Professional" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- B-U-I-L-D Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.4em] mb-4">Our Core Values</h2>
            <p className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">The B-U-I-L-D Framework</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BUILD_VALUES.map((pillar, idx) => (
              <BuildCard key={idx} pillar={pillar} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Jobs Section --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">Live Opportunities</h2>
              <p className="text-lg text-slate-500 mt-4">Join a team that's redefining healthcare infrastructure.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search roles..."
                className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-full focus:ring-4 focus:ring-teal-500/10 transition-all outline-none"
              />
            </div>
          </div>

          <GlassCard className="overflow-hidden border-none shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50 border-b border-slate-100">
                  <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <th className="py-6 px-10">Position</th>
                    <th className="py-6 px-10">Experience</th>
                    <th className="py-6 px-10">Qualification</th>
                    <th className="py-6 px-10">Location</th>
                    <th className="py-6 px-10 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {JOBS.map((job, idx) => (
                    <tr key={idx} className="hover:bg-teal-50/30 transition-colors group">
                      <td className="py-8 px-10 font-bold text-slate-900 text-lg">{job.title}</td>
                      <td className="py-8 px-10 text-slate-600 font-medium">{job.exp}</td>
                      <td className="py-8 px-10 text-slate-600 font-medium">{job.qual}</td>
                      <td className="py-8 px-10 text-slate-600 font-medium">
                        <div className="flex items-center gap-2"><MapPin size={16} className="text-teal-500" />{job.loc}</div>
                      </td>
                      <td className="py-8 px-10 text-right">
                        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-teal-600 transition-all text-sm">
                          Apply Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* CV CTA */}
          <div className="mt-16 p-10 bg-slate-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-teal-400">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Didn't find your role?</h3>
                <p className="text-slate-400">We are always looking for talented professionals.</p>
              </div>
            </div>
            <a href="mailto:hr@infra.health" className="bg-teal-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-all flex items-center gap-2">
              Email your CV to hr@infra.health <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-teal-400 uppercase tracking-[0.4em] mb-4">Employee Spotlight</h2>
            <p className="text-5xl font-bold tracking-tight">The Brighter Way</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "The exposure to cutting-edge technology in healthcare has been incredible. Infra.Health invests in its people, making us feel like true partners.", author: "Arjun Patel", role: "Software Engineer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
              { text: "Managers here genuinely care about our growth. I have the freedom to take ownership of projects while feeling fully supported.", author: "Sneha Iyer", role: "HR Specialist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" }
            ].map((t, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 p-12 rounded-[3rem] relative">
                <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5" />
                <p className="text-xl italic leading-relaxed mb-10 text-slate-300">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} className="w-16 h-16 rounded-2xl object-cover" alt={t.author} />
                  <div>
                    <div className="font-bold text-xl">{t.author}</div>
                    <div className="text-teal-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}