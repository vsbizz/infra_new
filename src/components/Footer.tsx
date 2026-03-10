"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" }, // Twitter/X icon
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" },
  ];

  return (
    <footer>
      {/* CTA Section - Image */}
      <section className="bg-brand-teal py-16">
        <div className="mx-auto max-w-8xl px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-3xl font-extrabold text-white tracking-tight">
            Ready to discuss your healthcare asset strategy?
          </h2>
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            initial="initial"
            className="relative overflow-hidden rounded-full border border-slate-900 bg-slate-900 px-10 py-4 text-sm font-bold text-white shadow-lg"
          >
            <span className="relative z-10 pointer-events-none">
              Contact Investment Team
            </span>

            <motion.div
              variants={{
                initial: {
                  scale: 0,
                  opacity: 0,
                },
                hover: {
                  scale: 2,
                  opacity: 1,
                },
              }}
              transition={{
                // 1.2s gives it a very calm, liquid-like expansion
                duration: 1.2,
                // Using a simpler ease makes the speed consistent so it's not "jumpy"
                ease: "easeOut",
              }}
              // aspect-square w-full ensures it starts as wide as the button
              className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-teal-600 bg-teal-600 origin-center"
            />
          </motion.button>
        </div>
      </section>

      {/* Main Footer Section - Image */}
      <section className="bg-[#0F172A] pt-24 pb-12 text-slate-300">
        <div className="mx-auto max-w-8xl px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="text-2xl font-bold text-white">
                <img
                  src="/asset/logo/infra.webp"
                  alt="Infra.Health Logo"
                  className="w-auto transition-all duration-500 h-14 brightness-0 invert"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                The Global Healthcare Asset Platform. Institutional-grade
                de-risking and management across the lifecycle.
              </p>
              {/* Social Icons requested by user */}
              <div className="flex items-center gap-5">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="text-slate-500 hover:text-[#319795] transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Platform
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Pillars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Asset Classes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Global Footprint
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>

            {/* Insights Links */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Insights
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Market Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ESG Framework
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Strategic Advisory
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Company
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
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
