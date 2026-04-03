"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export const GlobalHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const isHeaderActive =
    pathname !== "/" || isSticky || hoveredItem !== null || isMenuOpen;

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
        { name: "Valuation & Risk Underwriting", slug: "valuation-and-risk-underwriting" },
      ],
    },
    {
      category: "Leasing & Operator Advisory",
      slug: "leasing-and-operator-advisory",
      items: [
        { name: "Owner Representation", slug: "owner-representation" },
        { name: "Tenant & Operator Representation", slug: "tenant-operator-representation" },
        {
          name: "Site Selection & Location Strategy",
          slug: "site-selection",
        },
      ],
    },
    {
      category: "Advisory & Strategic Planning",
      slug: "advisory-and-strategic-planning",
      items: [
        { name: "Feasibility Studies & DPR", slug: "feasibility-studies-and-dpr" },
        { name: "Market & Demographic Analysis", slug: "market-and-demographic-analysis" },
        { name: "Specialty & Capacity Planning", slug: "specialty-and-capacity-planning" },
        { name: "Financial Modeling", slug: "financial-modeling" },
        { name: "PPP Advisory", slug: "ppp-advisory" },
        { name: "ESG & Sustainability", slug: "esg-and-sustainability" },
        { name: "Digital Transformation", slug: "digital-transformation-strategy" },
        { name: "Accreditation Advisory", slug: "accreditation-advisory" },
      ],
    },
    {
      category: "Design & Project Delivery",
      slug: "design-and-project-delivery",
      items: [
        { name: "Project Management (PMC)", slug: "project-management-consultancy" },
        { name: "Integrated Healthcare Design", slug: "integrated-healthcare-design" },
        { name: "Procurement Management", slug: "procurement-management" },
        { name: "Medical Equipment Planning", slug: "medical-equipment-planning" },
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
        { name: "Integrated Facility Management", slug: "integrated-facility-management" },
        { name: "IFM Consultancy", slug: "ifm-consultancy" },
      ],
    },
  ];

  const sectorsData = [
    {
      title: "Public Healthcare Infrastructure",
      slug: "public-healthcare",
    },
    {
      title: "Acute & Advanced Care Hospitals",
      slug: "acute-care",
    },
    {
      title: "Specialty & Focused Care Facilities",
      slug: "specialty-care",
    },
    {
      title: "Academic & Medical Education Infrastructure",
      slug: "academic-education",
    },
    {
      title: "Diagnostic & Ambulatory Care",
      slug: "diagnostic-ambulatory",
    },
    {
      title: "Rehabilitation & Long-Term Care",
      slug: "rehab-long-term-care",
    },
    {
      title: "Elder Care & Assisted Living",
      slug: "elder-care",
    },
    {
      title: "Integrated Healthcare Campuses",
      slug: "integrated-campuses",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 border-b ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isHeaderActive
          ? "bg-white shadow-md border-slate-200 py-0"
          : "bg-transparent border-transparent py-2"
      }`}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* SECTION 1: Top Bar */}
      <div className="mx-auto flex max-w-360 items-center justify-between px-6 py-4 lg:px-16">
        <div className="flex items-center gap-4">
          <a href="/">
            <img
              src="/asset/logo/infra.png"
              alt="Infra.Health Logo"
              className={`h-10 lg:h-16 w-auto transition-all duration-500 ${
                isHeaderActive ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full px-8 py-3 text-sm font-bold transition-all duration-500 bg-teal-600 text-white hover:bg-slate-900"
          >
            Contact Us
          </motion.button>
          <button
            className={`lg:hidden ${isHeaderActive ? "text-slate-900" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* SECTION 2: Navigation Bar */}
      <div
        className={`hidden lg:block border-y transition-colors duration-500 ${isHeaderActive ? "border-slate-100" : "border-white/10"}`}
      >
        <nav className="mx-auto flex max-w-360 items-center justify-between px-6 lg:px-16">
          <ul className="flex items-center gap-8">
            {["Properties", "Services", "Portfolio", "Sectors"].map((item) => (
              <li key={item} className="relative">
                <Link
                  href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
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
                  {(item === "Services" || item === "Sectors") && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${hoveredItem === item ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>
              </li>
            ))}
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

      {/* MEGA MENUS */}
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

                          {/* Sub-items with the JLL-style accent bars */}
                          <ul className="space-y-3">
                            {cat.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/services/${cat.slug}/${item.slug}`}
                                  className="flex items-center gap-3 text-[14px] text-slate-600 hover:text-teal-600 transition-all group"
                                  onClick={() => {
                                    setHoveredItem(null);
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  <span className="w-0.75 h-3 bg-slate-800 group-hover:bg-brand-teal transition-colors" />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600">
                          Comprehensive real estate solutions, from investment
                          and leasing to facilities and construction.
                        </p>
                      </div>
                      <div className="gap-3">
                        <Link
                          href="/services"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          All Services
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          Consulting
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Sectors Mega Menu */
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                      {sectorsData.map((sector) => (
                        <Link
                          key={sector.slug}
                          href={`/sectors/${sector.slug}`}
                          onClick={() => {
                            setHoveredItem(null);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center gap-3 group py-2"
                        >
                          <span className="w-0.75 h-3 bg-slate-800 group-hover:bg-brand-teal transition-colors" />
                          <span className="text-[15px] font-medium text-slate-700 group-hover:text-teal-600 transition-colors">
                            {sector.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600">
                          Comprehensive real estate solutions, from investment
                          and leasing to facilities and construction.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="/services"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          All Services
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors"
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
