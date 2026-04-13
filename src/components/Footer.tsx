"use client";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  XIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link"; // Import Link

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      href: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61579937188150",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://www.instagram.com/infra.health/",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/company/infra-health-india/",
    },
    {
      icon: <TwitterIcon size={18} />,
      href: "https://x.com/infra_health_",
    },
    {
      icon: <Youtube size={18} />,
      href: "https://www.youtube.com/@Infra.Health",
    },
  ];
  const services = [
    {
      name: "Investment & Capital Advisory",
      href: "/services/investment-and-capital-advisory",
    },
    {
      name: "Leasing & Operator Advisory",
      href: "/services/leasing-and-operator-advisory",
    },
    {
      name: "Advisory & Strategic Planning",
      href: "/services/advisory-and-strategic-planning",
    },
    {
      name: "Design & Project Delivery",
      href: "/services/design-and-project-delivery",
    },
    {
      name: "Property & Facilities Management",
      href: "/services/property-and-facilities-management",
    },
  ];

  const sectors = [
    {
      name: "Public Healthcare Infrastructure",
      href: "/sectors/public-healthcare",
    },
    { name: "Advanced Acute Care Hospitals", href: "/sectors/acute-care" },
    {
      name: "Specialty & Focused Care Facilities",
      href: "/sectors/specialty-care",
    },
    {
      name: "Academic & Medical Education",
      href: "/sectors/academic-education",
    },
    {
      name: "Diagnostic & Ambulatory Care",
      href: "/sectors/diagnostic-ambulatory",
    },
    {
      name: "Rehabilitation & Long-Term Care",
      href: "/sectors/rehab-long-term-care",
    },
    { name: "Elder Care & Assisted Living", href: "/sectors/elder-care" },
    {
      name: "Integrated Healthcare Campuses",
      href: "/sectors/integrated-campuses",
    },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Properties", href: "/properties" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-teal-600 py-8">
        <div className="mx-auto max-w-8xl px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="md:text-3xl text-2xl md:font-extrabold text-white tracking-tight">
            Ready to discuss your healthcare asset strategy?
          </h2>
          {/* Linked CTA Button */}
          <Link href="/contact">
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
          </Link>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="bg-[#0F172A] pt-24 pb-12 text-slate-300">
        <div className="mx-auto max-w-8xl px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <img
                  src="/asset/logo/infrawhite.png"
                  alt="Infra.Health Logo"
                  className="w-auto transition-all duration-500 h-14 xs:h-12 sm:h-14 lg:h-18 "
                />
              </Link>
              <div className="ms-3">
                <p className="text-sm leading-relaxed text-slate-400 hidden md:block mb-8">
                  The Global Healthcare Asset Platform. Institutional-grade
                  de-risking and management across the lifecycle.
                </p>
                <div className="flex items-center gap-5">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-teal-500 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Services
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {services.map((item) => (
                  <li key={item.name} className="group flex items-center">
                    <span className="inline-block w-0.75 h-3 bg-slate-500 group-hover:bg-teal-500 transition-colors mr-3" />
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
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
                  <li key={item.name} className="group flex items-center">
                    <span className="inline-block w-0.75 h-3 bg-slate-500 group-hover:bg-teal-500 transition-colors mr-3" />
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
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
                  <li key={item.name} className="group flex items-center">
                    <span className="inline-block w-0.75 h-3 bg-slate-500 group-hover:bg-teal-500 transition-colors mr-3" />
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-slate-800 flex justify-center items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <div>
              © {currentYear} Infra.health™ | Emerway Healthtech Private Limited
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
