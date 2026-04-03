"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" },
  ];

  const services = [
    "Investment & Capital Advisory",
    "Leasing & Operator Advisory",
    "Advisory & Strategic Planning",
    "Design & Project Delivery",
    "Property & Facilities Management",
  ];

  const sectors = [
    "Public Healthcare Infrastructure",
    "Advanced Acute Care Hospitals",
    "Specialty & Focused Care Facilities",
    "Academic & Medical Education",
    "Diagnostic & Ambulatory Care",
    "Rehabilitation & Long-Term Care",
    "Elder Care & Assisted Living",
    "Integrated Healthcare Campuses",
  ];

  const company = ["About Us", "Careers", "Portfolio", "Properties", "Contact Us"];

  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-teal-600 py-8">
        <div className="mx-auto max-w-8xl px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Ready to discuss your healthcare asset strategy?
          </h2>
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            initial="initial"
            className="relative overflow-hidden rounded-full border border-slate-900 bg-slate-900 px-10 py-4 text-sm font-bold text-white shadow-lg"
          >
            <motion.span
              variants={{
                initial: { color: "#ffffff" },
                hover: { color: "#0D9488" },
              }}
              transition={{ duration: 0.5 }}
              className="relative z-10 pointer-events-none"
            >
              Contact Us
            </motion.span>
            <motion.div
              variants={{
                initial: { scale: 0, opacity: 0 },
                hover: { scale: 2, opacity: 1 },
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white origin-center"
            />
          </motion.button>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="bg-[#0F172A] pt-24 pb-12 text-slate-300">
        <div className="mx-auto max-w-8xl px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="text-2xl font-bold text-white">
                <img
                  src="/asset/logo/infrawhite.png"
                  alt="Infra.Health Logo"
                  className="w-auto transition-all duration-500 h-14"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                The Global Healthcare Asset Platform. Institutional-grade
                de-risking and management across the lifecycle.
              </p>
              <div className="flex items-center gap-5">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="text-slate-500 hover:text-teal-500 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Services
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {services.map((item) => (
                  <li key={item} className="group flex items-center">
                    <span className="inline-block w-0.75 h-3 bg-slate-500 group-hover:bg-teal-500 transition-colors mr-3" />
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors Column */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Sectors
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                {sectors.map((item) => (
                  <li key={item} className="group flex items-center">
                    <span className="inline-block w-0.75 h-3 bg-slate-500 group-hover:bg-teal-500 transition-colors mr-3" />
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Company
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {company.map((item) => (
                  <li key={item} className="group flex items-center">
                    <span className="inline-block w-0.75 h-3 bg-slate-500 group-hover:bg-teal-500 transition-colors mr-3" />
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <div>© {currentYear} Infra.Health Global. All Rights Reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Compliance Disclosure
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};