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
        { name: "Valuation & Risk Underwriting", slug: "valuation-risk" },
      ],
    },
    {
      category: "Leasing & Operator Advisory",
      slug: "leasing-and-operator-advisory",
      items: [
        { name: "Owner Representation", slug: "owner-representation" },
        { name: "Tenant & Operator Representation", slug: "tenant-operator" },
        {
          name: "Site Selection & Location Strategy",
          slug: "location-strategy",
        },
      ],
    },
    {
      category: "Advisory & Strategic Planning",
      slug: "advisory-and-strategic-planning",
      items: [
        { name: "Feasibility Studies & DPR", slug: "feasibility-dpr" },
        { name: "Market & Demographic Analysis", slug: "market-analysis" },
        { name: "Specialty & Capacity Planning", slug: "capacity-planning" },
        { name: "Financial Modeling", slug: "financial-modeling" },
        { name: "PPP Advisory", slug: "ppp-advisory" },
        { name: "ESG & Sustainability", slug: "esg-sustainability" },
        { name: "Digital Transformation", slug: "digital-strategy" },
        { name: "Accreditation Advisory", slug: "accreditation" },
      ],
    },
    {
      category: "Design & Project Delivery",
      slug: "design-and-project-delivery",
      items: [
        { name: "Project Management (PMC)", slug: "pmc" },
        { name: "Integrated Healthcare Design", slug: "healthcare-design" },
        { name: "Procurement Management", slug: "procurement" },
        { name: "Equipment Planning", slug: "equipment-planning" },
        { name: "Cost Consultancy", slug: "cost-consultancy" },
        { name: "Design-Build Solutions", slug: "design-build" },
        { name: "EPC Turnkey Delivery", slug: "epc-turnkey" },
      ],
    },
    {
      category: "Property & Facilities Management",
      slug: "property-and-facilities-management",
      items: [
        { name: "Property Management", slug: "property-management" },
        { name: "Integrated Facility Management", slug: "ifm" },
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
              className={`h-10 lg:h-14 w-auto transition-all duration-500 ${
                isHeaderActive ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </a>
        </div>

        <span
          className={`hidden sm:block text-[11px] lg:text-[13px] font-medium uppercase tracking-[0.2em] pl-4 duration-500 ${isHeaderActive ? "text-slate-500" : "text-white/70"}`}
        >
          Global Healthcare Infrastructure & Asset Development Company
        </span>

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
                <button
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
                </button>
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
              className="absolute left-0 w-full bg-white border-t border-slate-200 shadow-2xl"
              onMouseEnter={() => setHoveredItem(hoveredItem)}
            >
              <div className="mx-auto max-w-360 px-16 py-10">
                {hoveredItem === "Services" ? (
                  /* Services Mega Menu */
                  <div className="grid grid-cols-5 gap-10">
                    {servicesData.map((cat) => (
                      <div
                        key={cat.slug}
                        className="space-y-4 border-r border-slate-100 last:border-0 pr-6"
                      >
                        {/* Parent Category Link */}
                        <Link
                          href={`/services/${cat.slug}`}
                          className="block text-[16px] font-bold text-slate-800 hover:text-teal-600 transition-colors"
                          onClick={() => setHoveredItem(null)}
                        >
                          {cat.category}
                        </Link>

                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`/services/${cat.slug}/${item.slug}`}
                                className="text-[14px] text-slate-600 hover:text-teal-600 transition-colors block py-1"
                                onClick={() => {
                                  setHoveredItem(null);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Sectors Mega Menu */
                  <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                    {sectorsData.map((sector) => (
                      <div key={sector.slug}>
                        <Link
                          href={`/sectors/${sector.slug}`}
                          onClick={() => {
                            setHoveredItem(null);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center justify-between w-full group py-2 border-b border-transparent hover:border-teal-100 transition-all"
                        >
                          <h3 className="text-[16px] font-normal text-slate-800 group-hover:text-teal-600 transition-colors">
                            {sector.title}
                          </h3>
                          <ArrowRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 text-teal-600 transition-all -translate-x-2 group-hover:translate-x-0"
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </header>
  );
};
