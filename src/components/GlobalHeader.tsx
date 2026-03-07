"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Menu, X, ArrowRight, 
  ShieldCheck, Building2, Zap, Activity, 
  Landmark, Microscope, HeartPulse, BarChart3 
} from "lucide-react";

export const GlobalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);

  const isHeaderActive = isSticky || hoveredItem !== null || isMenuOpen;

  const navItems = [
    { name: "Our Pillars", hasMega: true },
    { name: "Infrastructure Sectors", hasMega: true },
    { name: "Portfolio", hasMega: false },
    { name: "Careers", hasMega: false },
    { name: "News", hasMega: false }
  ];

  const pillars = [
    { title: "Investment & Capital", desc: "Institutional capital structuring.", icon: <ShieldCheck size={16} /> },
    { title: "Leasing & Occupancy", desc: "Optimizing tenant mix and revenue.", icon: <Building2 size={16} /> },
    { title: "Strategic Advisory", desc: "Clinical demand and feasibility.", icon: <BarChart3 size={16} /> },
    { title: "Design & Delivery", desc: "Turnkey solutions with certainty.", icon: <Zap size={16} /> },
    { title: "Asset Management", desc: "Specialized medical IFM.", icon: <Activity size={16} /> },
  ];

  const sectors = [
    { title: "Public Infrastructure", desc: "National health systems.", icon: <Landmark size={16} /> },
    { title: "Advanced Acute Care", desc: "Surgical centers.", icon: <Activity size={16} /> },
    { title: "Specialty Networks", desc: "Oncology & Cardiac.", icon: <Microscope size={16} /> },
    { title: "Senior & Rehab", desc: "Geriatric care assets.", icon: <HeartPulse size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <header 
      onMouseLeave={() => setHoveredItem(null)}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        isHeaderActive ? "bg-white py-4 shadow-xl" : "bg-transparent py-8"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="z-[110]">
            <img
              src="/asset/logo/infra.webp"
              alt="Infra.Health Logo"
              className={`w-auto transition-all duration-500 ${
                isHeaderActive ? "h-10 lg:h-12 brightness-100" : "h-10 lg:h-12"
              }`}
            />
          </a>
        </div>

        {/* Desktop Nav (Hidden on Mobile/Tab) */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div key={item.name} className="static">
              <button
                onMouseEnter={() => setHoveredItem(item.name)}
                className={`flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-500 py-4 ${
                  isHeaderActive ? "text-slate-900" : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
                {item.hasMega && <ChevronDown size={12} className={`transition-transform ${hoveredItem === item.name ? "rotate-180" : ""}`} />}
              </button>
            </div>
          ))}
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4 z-[110]">
          <button className="hidden rounded-md bg-brand-teal px-7 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-brand-teal/90 lg:block">
            Talk to Us
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 lg:hidden ${isHeaderActive ? "text-slate-900" : "text-white"}`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* DESKTOP MEGA MENU */}
      <AnimatePresence>
        {hoveredItem && (hoveredItem === "Our Pillars" || hoveredItem === "Infrastructure Sectors") && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="hidden lg:block overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="mx-auto max-w-[1440px] px-16 py-12">
              <div className={hoveredItem === "Our Pillars" ? "grid grid-cols-3 gap-y-12 gap-x-12" : "grid grid-cols-4 gap-8"}>
                {(hoveredItem === "Our Pillars" ? pillars : sectors).map((item) => (
                  <MenuCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE & TABLET MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 h-screen w-full bg-white z-[100] lg:hidden overflow-y-auto px-6 pt-24 pb-10"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-slate-50">
                  <button 
                    onClick={() => setActiveMobileSection(activeMobileSection === item.name ? null : item.name)}
                    className="flex w-full items-center justify-between py-5 text-lg font-extrabold text-slate-900"
                  >
                    {item.name}
                    {item.hasMega && <ChevronDown size={20} className={activeMobileSection === item.name ? "rotate-180" : ""} />}
                  </button>
                  
                  {/* Mobile Sub-items Accordion */}
                  <AnimatePresence>
                    {item.hasMega && activeMobileSection === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50/50 rounded-xl mb-4"
                      >
                        <div className="grid grid-cols-1 gap-6 p-6">
                          {(item.name === "Our Pillars" ? pillars : sectors).map((sub) => (
                            <div key={sub.title} className="flex gap-4">
                              <div className="text-brand-teal mt-1">{sub.icon}</div>
                              <div>
                                <h5 className="text-[14px] font-bold text-slate-900">{sub.title}</h5>
                                <p className="text-[12px] text-slate-500">{sub.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <button className="mt-8 w-full rounded-md bg-brand-teal py-4 font-bold text-white uppercase tracking-widest text-[14px]">
                Talk to Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const MenuCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <a href="#" className="group flex items-start gap-4">
    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-brand-teal transition-colors">{title}</h4>
      <p className="text-[11px] leading-relaxed text-slate-500">{desc}</p>
    </div>
  </a>
);