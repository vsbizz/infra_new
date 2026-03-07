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
      <section className="bg-[#C86D2D] py-16">
        <div className="mx-auto max-w-8xl px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-3xl font-extrabold text-white tracking-tight">
            Ready to discuss your healthcare asset strategy?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-lg font-bold transition-all hover:bg-slate-800"
          >
            Contact Investment Team <Mail size={20} />
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
                  className="w-auto transition-all duration-500 h-14"
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
