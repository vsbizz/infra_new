"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export const GlobalHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(
    null,
  );

  const lastScrollY = useRef(0);
  const isHeaderActive =
    pathname !== "/" || isSticky || hoveredItem !== null || isMenuOpen;

  // Close menu automatically when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 50) {
        setIsVisible(true);
        setIsSticky(false);
      } else {
        setIsSticky(true);
        if (currentScrollY > lastScrollY.current) {
          if (!hoveredItem) setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hoveredItem]);

  const servicesData = [
    {
      category: "Investment & Capital Advisory",
      slug: "investment-and-capital-advisory",
      items: [
        { name: "Investment Sales", slug: "investment-sales" },
        {
          name: "Institutional Partnerships",
          slug: "institutional-partnerships",
        },
        { name: "Structured Financing", slug: "structured-financing" },
        { name: "Debt Advisory", slug: "debt-advisory" },
        {
          name: "Distressed Asset Strategy",
          slug: "distressed-asset-strategy",
        },
        {
          name: "Valuation & Risk Underwriting",
          slug: "valuation-and-risk-underwriting",
        },
      ],
    },
    {
      category: "Leasing & Operator Advisory",
      slug: "leasing-and-operator-advisory",
      items: [
        { name: "Owner Representation", slug: "owner-representation" },
        {
          name: "Tenant & Operator Representation",
          slug: "tenant-operator-representation",
        },
        { name: "Site Selection & Location Strategy", slug: "site-selection" },
      ],
    },
    {
      category: "Advisory & Strategic Planning",
      slug: "advisory-and-strategic-planning",
      items: [
        {
          name: "Feasibility Studies & DPR",
          slug: "feasibility-studies-and-dpr",
        },
        {
          name: "Market & Demographic Analysis",
          slug: "market-and-demographic-analysis",
        },
        {
          name: "Specialty & Capacity Planning",
          slug: "specialty-and-capacity-planning",
        },
        { name: "Financial Modeling", slug: "financial-modeling" },
        { name: "PPP Advisory", slug: "ppp-advisory" },
        { name: "ESG & Sustainability", slug: "esg-and-sustainability" },
        {
          name: "Digital Transformation",
          slug: "digital-transformation-strategy",
        },
        { name: "Accreditation Advisory", slug: "accreditation-advisory" },
      ],
    },
    {
      category: "Design & Project Delivery",
      slug: "design-and-project-delivery",
      items: [
        {
          name: "Project Management",
          slug: "project-management-consultancy",
        },
        {
          name: "Integrated Healthcare Design",
          slug: "integrated-healthcare-design",
        },
        { name: "Procurement Management", slug: "procurement-management" },
        {
          name: "Medical Equipment Planning",
          slug: "medical-equipment-planning",
        },
        { name: "Cost Consultancy", slug: "cost-consultancy" },
        { name: "Design-Build Solutions", slug: "design-build-solutions" },
        { name: "EPC Turnkey Delivery", slug: "epc-turnkey-delivery" },
      ],
    },
    {
      category: "Property & Facilities Management",
      slug: "property-and-facilities-management",
      items: [
        { name: "Property Management", slug: "property-management" },
        {
          name: "Integrated Facility Management",
          slug: "integrated-facility-management",
        },
        { name: "IFM Consultancy", slug: "ifm-consultancy" },
      ],
    },
  ];

  const sectorsData = [
    { title: "Public Healthcare Infrastructure", slug: "public-healthcare" },
    { title: "Acute & Advanced Care Hospitals", slug: "acute-care" },
    { title: "Specialty & Focused Care Facilities", slug: "specialty-care" },
    {
      title: "Academic & Medical Education Infrastructure",
      slug: "academic-education",
    },
    { title: "Diagnostic & Ambulatory Care", slug: "diagnostic-ambulatory" },
    { title: "Rehabilitation & Long-Term Care", slug: "rehab-long-term-care" },
    { title: "Elder Care & Assisted Living", slug: "elder-care" },
    { title: "Integrated Healthcare Campuses", slug: "integrated-campuses" },
  ];

  const menuItems = [
    { name: "Properties", href: "/properties" },
    { name: "Services", isExpandable: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Sectors", isExpandable: true },
    { name: "Development Partner", href: "/development-partner-solution" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Vendors & Partners", href: "/vendors-partners" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 border-b  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isHeaderActive
          ? "bg-white shadow-md border-slate-200 py-0"
          : "bg-transparent border-transparent pb-2"
      }`}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Top Bar Banner - Optimized for mobile including Galaxy Fold */}
      <Link href="/development-partner-solution">
        <div className="bg-teal-600  text-white text-center py-2.5 sm:py-2 text-sm sm:text-base font-medium sm:font-semibold flex justify-center items-center gap-1.5 sm:gap-2 px-2 xs:px-3">
          <span className="text-[11px] xs:text-[13px] sm:text-[15px] leading-tight">
            Explore Our Development Partner Solution
          </span>
          <div className="bg-gray-300/50 text-black rounded-full w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
            <ArrowRight className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        </div>
      </Link>

      {/* SECTION 1: Top Bar - Mobile Optimized */}
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 xs:px-5 sm:px-6 py-3 sm:py-2 lg:px-16">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/">
            <img
              src="/asset/logo/infra.png"
              alt="Infra.Health Logo"
              className={`h-14 xs:h-12 sm:h-14 lg:h-16 w-auto transition-all duration-500 ${
                isHeaderActive ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Contact Link */}
          <Link href="/contact" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full px-8 py-3 text-sm font-bold bg-teal-600 text-white hover:bg-slate-900 transition-colors"
            >
              Contact Us
            </motion.button>
          </Link>

          <button
            className={`lg:hidden p-1.5 xs:p-2 ${isHeaderActive ? "text-slate-900" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 xs:w-6 xs:h-6" />
          </button>
        </div>
      </div>

      {/* SECTION 2: Navigation Bar (Desktop Only) */}
      <div
        className={`hidden lg:block border-y transition-colors duration-500 ${isHeaderActive ? "border-slate-100" : "border-white/10"}`}
      >
        <nav className="mx-auto flex max-w-360 items-center justify-between px-6 lg:px-16">
          <ul className="flex items-center gap-8">
            {[
              "Properties",
              "Services",
              "Portfolio",
              "Sectors",
              "Development Partner",
            ].map((item) => {
              const isDropdown = item === "Services" || item === "Sectors";

              return (
                <li key={item} className="relative">
                  {isDropdown ? (
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredItem(item)}
                      className={`py-4 text-[16px] font-normal transition-all duration-500 border-b-2 flex items-center gap-1 ${
                        isHeaderActive
                          ? hoveredItem === item
                            ? "text-slate-900 border-slate-900"
                            : "text-slate-600 border-transparent"
                          : "text-white/90 border-transparent hover:text-white hover:border-white/40"
                      }`}
                    >
                      {item}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          hoveredItem === item ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={
                        item === "Development Partner"
                          ? "/development-partner-solution"
                          : `/${item
                              .toLowerCase()
                              .replace(/ & /g, "-")
                              .replace(/\s+/g, "-")}`
                      }
                      onMouseEnter={() => setHoveredItem(item)}
                      className={`py-4 text-[16px] font-normal transition-all duration-500 border-b-2 flex items-center gap-1 ${
                        isHeaderActive
                          ? hoveredItem === item
                            ? "text-slate-900 border-slate-900"
                            : "text-slate-600 border-transparent"
                          : "text-white/90 border-transparent hover:text-white hover:border-white/40"
                      }`}
                    >
                      {item}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-8">
            {["About", "Careers", "Vendors & Partners", "Blogs"].map((item) => (
              <li key={item} className="relative">
                <Link
                  href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                  onMouseEnter={() => setHoveredItem(item)}
                  className={`block py-4 text-[16px] font-normal transition-all duration-500 border-b-2 ${
                    isHeaderActive
                      ? hoveredItem === item
                        ? "text-slate-900 border-slate-900"
                        : "text-slate-600 border-transparent"
                      : "text-white/90 border-transparent hover:text-white hover:border-white/50"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* MOBILE MENU - Optimized for all mobile screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-white z-[110] lg:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header with Close Button */}
            <div className="flex items-center justify-between px-4 xs:px-5 sm:px-6 py-3 sm:py-4 border-b border-slate-100 sticky top-0 bg-white z-10">
              <img
                src="/asset/logo/infra.png"
                alt="Logo"
                className="h-14 xs:h-12 sm:h-14 lg:h-16 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 xs:p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 xs:w-7 xs:h-7" />
              </button>
            </div>

            <div className="flex flex-col pt-2 xs:pt-3 sm:pt-4 pb-8 xs:pb-10 sm:pb-12 px-4 xs:px-5 sm:px-6">
              {menuItems.map((link) => (
                <div key={link.name} className="border-b border-slate-100">
                  {link.isExpandable ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveMobileSection(
                            activeMobileSection === link.name
                              ? null
                              : link.name,
                          )
                        }
                        className="flex items-center justify-between w-full py-3.5 xs:py-4 sm:py-5 text-base xs:text-lg sm:text-xl font-semibold text-slate-800"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 xs:w-5 xs:h-5 transition-transform duration-300 ${activeMobileSection === link.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeMobileSection === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50 rounded-xl xs:rounded-2xl mb-3 xs:mb-4"
                          >
                            <div className="p-3 xs:p-4 sm:p-5 space-y-4 xs:space-y-5 sm:space-y-6">
                              {link.name === "Services" ? (
                                servicesData.map((cat) => (
                                  <div
                                    key={cat.slug}
                                    className="space-y-2 xs:space-y-2.5 sm:space-y-3"
                                  >
                                    <h4 className="text-[10px] xs:text-[11px] sm:text-xs font-black text-teal-600 uppercase tracking-widest">
                                      {cat.category}
                                    </h4>
                                    <div className="grid gap-2.5 xs:gap-3 sm:gap-4 pl-1.5 xs:pl-2 border-l border-slate-200">
                                      {cat.items.map((sub) => (
                                        <Link
                                          key={sub.slug}
                                          href={`/services/${cat.slug}/${sub.slug}`}
                                          className="text-slate-600 text-[13px] xs:text-sm sm:text-base flex items-center justify-between leading-tight"
                                        >
                                          <span className="pr-2">
                                            {sub.name}
                                          </span>
                                          <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-slate-300 flex-shrink-0" />
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="space-y-2.5 xs:space-y-3 sm:space-y-4">
                                  {sectorsData.map((sector) => (
                                    <Link
                                      key={sector.slug}
                                      href={`/sectors/${sector.slug}`}
                                      className="text-slate-800 font-medium text-[13px] xs:text-sm sm:text-base flex items-center justify-between leading-tight"
                                    >
                                      <span className="pr-2">
                                        {sector.title}
                                      </span>
                                      <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-teal-600 flex-shrink-0" />
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-3.5 xs:py-4 sm:py-5 text-base xs:text-lg sm:text-xl font-semibold text-slate-800"
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 text-slate-300" />
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-8 xs:mt-10 sm:mt-12">
                <Link href="/contact" className="block w-full">
                  <button className="w-full py-3 xs:py-3.5 sm:py-4 bg-teal-600 text-white rounded-xl xs:rounded-2xl font-bold text-base xs:text-lg shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MEGA MENUS (Desktop Only) */}
      <AnimatePresence>
        {hoveredItem &&
          (hoveredItem === "Services" || hoveredItem === "Sectors") && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 w-full bg-white border-t border-slate-200 shadow-xl"
              onMouseEnter={() => setHoveredItem(hoveredItem)}
            >
              <div className="mx-auto max-w-360 px-6 py-12">
                {hoveredItem === "Services" ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                      {servicesData.map((cat) => (
                        <div key={cat.slug} className="space-y-6">
                          <Link
                            href={`/services/${cat.slug}`}
                            className="group flex items-center justify-between border-b border-slate-200 pb-4 pr-4"
                            onClick={() => setHoveredItem(null)}
                          >
                            <h3 className="text-[16px] font-medium text-slate-700 group-hover:text-teal-600 transition-colors leading-tight">
                              {cat.category}
                            </h3>
                            <ChevronDown
                              size={18}
                              className="-rotate-90 text-slate-400 group-hover:text-teal-600 transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                          <ul className="space-y-3">
                            {cat.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/services/${cat.slug}/${item.slug}`}
                                  className="flex items-center gap-3 text-[14px] text-slate-600 hover:text-teal-600 transition-all group"
                                  onClick={() => setHoveredItem(null)}
                                >
                                  <span className="w-0.75 h-3 bg-slate-800 group-hover:bg-teal-600 transition-colors" />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
                      <p className="text-sm font-medium text-slate-600">
                        Comprehensive real estate solutions.
                      </p>
                      <div className="flex gap-3">
                        <Link
                          href="/services"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase text-slate-600 hover:bg-slate-50"
                        >
                          All Services
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase text-slate-600 hover:bg-slate-50"
                        >
                          Consulting
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                      {sectorsData.map((sector) => (
                        <Link
                          key={sector.slug}
                          href={`/sectors/${sector.slug}`}
                          onClick={() => setHoveredItem(null)}
                          className="flex items-center gap-3 group py-2"
                        >
                          <span className="w-0.75 h-3 bg-slate-800 group-hover:bg-teal-600 transition-colors" />
                          <span className="text-[15px] font-medium text-slate-700 group-hover:text-teal-600 transition-colors">
                            {sector.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
                      <p className="text-sm font-medium text-slate-600">
                        Comprehensive real estate solutions.
                      </p>
                      <div className="flex gap-3">
                        <Link
                          href="/services"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase text-slate-600 hover:bg-slate-50"
                        >
                          All Services
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase text-slate-600 hover:bg-slate-50"
                        >
                          Consulting
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </header>
  );
};
