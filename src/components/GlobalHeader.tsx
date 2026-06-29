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
      category: `Strategic Advisory & Design`,
      slug: "advisory-and-strategic-planning",
      items: [
        {
          name: "Feasibility Studies & DPR",
          slug: "feasibility-studies-and-dpr",
        },
        { name: "PPP Advisory", slug: "ppp-advisory" },
        {
          name: "ESG, Sustainability & Environmental Advisory",
          slug: "esg-and-sustainability",
        },
        {
          name: "Healthcare Digital Transformation Strategy",
          slug: "digital-transformation-strategy",
        },
        { name: "Accreditation Advisory", slug: "accreditation-advisory" },

        {
          name: "Project Management Consultancy",
          slug: "project-management-consultancy",
        },
        {
          name: "Integrated Healthcare Design Services",
          slug: "integrated-healthcare-design",
        },
      ],
    },
    {
      category: "Investment & Capital Advisory",
      slug: "investment-and-capital-advisory",
      items: [
        { name: "Investment Sales Advisory", slug: "investment-sales" },
        {
          name: "Institutional Investor Partnerships",
          slug: "institutional-partnerships",
        },
        {
          name: "Structured Financing Solutions",
          slug: "structured-financing",
        },
        { name: "Debt Advisory", slug: "debt-advisory" },
        {
          name: "Distressed Asset Strategy",
          slug: "distressed-asset-strategy",
        },
        {
          name: "Asset Valuation & Risk Underwriting",
          slug: "valuation-and-risk-underwriting",
        },
      ],
    },
    {
      category: "Project Delivery & Construction",
      slug: "design-and-project-delivery",
      items: [
        {
          name: "Integrated Development Partnership",
          slug: "integrated-development-partner-solution",
          href: "/integrated-development-partner-solution",
        },
        {
          name: "Engineering, Procurement & Construction",
          slug: "procurement-management",
        },
        {
          name: <>Design Build Solutions</>,
          slug: "design-build-solutions",
        },

        {
          name: "Specialised Healthcare Infrastructure Solutions",
          slug: "specialised-healthcare-infrastructure-solutions",
        },
      ],
    },
    {
      category: "Healthcare Transaction Advisory",
      slug: "leasing-and-operator-advisory",
      items: [
        {
          name: "Healthcare Property Listing Services",
          slug: "Healthcare-Property-Listing-Services",
        },

        { name: "Owner Representation", slug: "owner-representation" },
        {
          name: "Tenant / Operator Representation",
          slug: "tenant-operator-representation",
        },
        { name: "Site Selection & Location Strategy", slug: "site-selection" },
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
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Vendors & Partners", href: "/vendors-partners" },
    { name: "Blogs", href: "/blogs" },
  ];

  const propertiesMegaData = [
    {
      category: "Property search",
      slug: "Healthcare-property",
      items: [
        { name: "Investment healthcare properties", slug: "properties" },
        { name: "Commercial healthcare properties", slug: "properties" },
      ],
    },
    {
      category: "Advising",
      slug: "advising",
      items: [
        {
          name: "Market & Demographic analysis",
          slug: "services/advisory-and-strategic-planning/market-and-demographic-analysis",
        },
        {
          name: "Tenant representation",
          slug: "services/leasing-and-operator-advisory/tenant-operator-representation",
        },
      ],
    },
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
      {/* Top Bar Banner — now deep Vestian purple. This is the single most
          visible purple element on the site and frames the whole page. */}
      {/* <Link href="/integrated-development-partner-solution"> */}
      <div className="bg-brand-teal text-white text-center py-2.5 sm:py-2 text-sm sm:text-base font-medium sm:font-semibold flex justify-center items-center gap-1.5 sm:gap-2 px-2 xs:px-3 hover:bg-brand-teal-deep transition-colors">
        <span className="text-[11px] xs:text-[13px] sm:text-[15px] leading-tight">
          Explore Our Flagship Product - Integrated Development Partnership
          (IDP)
        </span>
        {/* <div className="bg-white/20 text-white rounded-full w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
            <ArrowRight className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" />
          </div> */}
      </div>
      {/* </Link> */}

      {/* SECTION 1: Top Bar */}
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
          {/* Desktop Contact Link — hover goes purple instead of slate-900 */}
          <Link href="/contact" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full px-8 py-3 text-sm font-bold bg-brand-teal text-white hover:bg-brand-purple transition-colors"
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
            {["Properties", "Services", "Portfolio", "Sectors"].map((item) => {
              const isDropdown =
                item === "Properties" ||
                item === "Services" ||
                item === "Sectors";
              return (
                <li key={item} className="relative">
                  {isDropdown ? (
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredItem(item)}
                      className={`py-4 text-[16px] font-normal transition-all duration-500 border-b-2 flex items-center gap-1 ${
                        isHeaderActive
                          ? hoveredItem === item
                            ? "text-slate-900 border-brand-purple"
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
                        ""
                        // item === "Development Partner"
                        //   ? "/integrated-development-partner-solution"
                        //   : `/${item
                        //       .toLowerCase()
                        //       .replace(/ & /g, "-")
                        //       .replace(/\s+/g, "-")}`
                      }
                      onMouseEnter={() => setHoveredItem(item)}
                      className={`py-4 text-[16px] font-normal transition-all duration-500 border-b-2 flex items-center gap-1 ${
                        isHeaderActive
                          ? hoveredItem === item
                            ? "text-slate-900 border-brand-purple"
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
                  // href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                  href={""}
                  onMouseEnter={() => setHoveredItem(item)}
                  className={`block py-4 text-[16px] font-normal transition-all duration-500 border-b-2 ${
                    isHeaderActive
                      ? hoveredItem === item
                        ? "text-slate-900 border-brand-purple"
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

      {/* MOBILE MENU */}
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
                                    {/* Category label → purple (was teal) */}
                                    <h4 className="text-[10px] xs:text-[11px] sm:text-xs font-black text-brand-purple uppercase tracking-widest">
                                      {{
                                        "Strategic Advisory & Design": (
                                          <>
                                            Strategic Advisory
                                            <br className="hidden md:block" />&
                                            Design
                                          </>
                                        ),
                                        "Investment & Capital Advisory": (
                                          <>
                                            Investment & Capital
                                            <br className="hidden md:block" />
                                            Advisory
                                          </>
                                        ),
                                        "Project Delivery & Construction": (
                                          <>
                                            Project Delivery
                                            <br className="hidden md:block" />&
                                            Construction
                                          </>
                                        ),
                                        "Healthcare Transaction Advisory": (
                                          <>
                                            Healthcare Transaction
                                            <br className="hidden md:block" />
                                            Advisory
                                          </>
                                        ),
                                        "Property & Facilities Management": (
                                          <>
                                            Property & Facilities
                                            <br className="hidden md:block" />
                                            Management
                                          </>
                                        ),
                                      }[cat.category] ?? cat.category}
                                    </h4>
                                    <div className="grid gap-2.5 xs:gap-3 sm:gap-4 pl-1.5 xs:pl-2 border-l border-slate-200">
                                      {cat.items.map((sub) => (
                                        <Link
                                          key={sub.slug}
                                          href={
                                            sub.href
                                              ? sub.href
                                              : `/services/${cat.slug}/${sub.slug}`
                                          }
                                          className="text-slate-600 text-[13px] xs:text-sm sm:text-base flex items-center justify-between leading-tight whitespace-nowrap"
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
                                      <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-brand-teal-deep flex-shrink-0" />
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
                  <button className="w-full py-3 xs:py-3.5 sm:py-4 bg-brand-teal text-white rounded-xl xs:rounded-2xl font-bold text-base xs:text-lg shadow-xl shadow-brand-teal/20 hover:bg-brand-purple transition-colors">
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
          (hoveredItem === "Properties" ||
            hoveredItem === "Services" ||
            hoveredItem === "Sectors") && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 w-full bg-white border-t border-slate-200 shadow-xl"
              onMouseEnter={() => setHoveredItem(hoveredItem)}
            >
              <div className="mx-auto max-w-360 px-6 py-12">
                {hoveredItem === "Properties" ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                      {propertiesMegaData.map((cat) => (
                        <div key={cat.slug} className="space-y-6">
                          <div
                            className="group flex items-center justify-between border-b border-slate-200 pb-4 pr-4"
                            onClick={() => setHoveredItem(null)}
                          >
                            <h3 className="text-[16px] font-medium text-slate-700 transition-colors leading-tight">
                              {cat.category}
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {cat.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  // href={`/${item.slug}`}
                                  href={""}
                                  className="flex items-center gap-3 text-[14px] text-slate-600 hover:text-brand-teal-deep transition-all group whitespace-nowrap"
                                  onClick={() => setHoveredItem(null)}
                                >
                                  {/* tick mark warms to purple on hover */}
                                  <span className="w-0.75 h-3 bg-slate-800 group-hover:bg-brand-purple transition-colors" />
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
                        Comprehensive Healthcare solutions.
                      </p>
                      <div className="flex gap-3">
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold uppercase text-slate-600 hover:bg-slate-50"
                        >
                          Consulting
                        </Link>
                      </div>
                    </div>
                  </>
                ) : hoveredItem === "Services" ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                      {servicesData.map((cat) => (
                        <div key={cat.slug} className="space-y-6">
                          <Link
                            // href={`/services/${cat.slug}`}
                            href={""}
                            className="group flex items-center justify-between border-b border-slate-200 pb-4 pr-4"
                            onClick={() => setHoveredItem(null)}
                          >
                            <h3 className="text-[16px] font-medium text-slate-700 group-hover:text-brand-teal-deep transition-colors leading-tight">
                              {{
                                "Strategic Advisory & Design": (
                                  <>
                                    Strategic Advisory
                                    <br className="hidden md:block" />& Design
                                  </>
                                ),
                                "Investment & Capital Advisory": (
                                  <>
                                    Investment & Capital
                                    <br className="hidden md:block" />
                                    Advisory
                                  </>
                                ),
                                "Project Delivery & Construction": (
                                  <>
                                    Project Delivery
                                    <br className="hidden md:block" />&
                                    Construction
                                  </>
                                ),
                                "Healthcare Transaction Advisory": (
                                  <>
                                    Healthcare Transaction
                                    <br className="hidden md:block" />
                                    Advisory
                                  </>
                                ),
                                "Property & Facilities Management": (
                                  <>
                                    Property & Facilities
                                    <br className="hidden md:block" />
                                    Management
                                  </>
                                ),
                              }[cat.category] ?? cat.category}
                            </h3>
                            <ChevronDown
                              size={18}
                              className="-rotate-90 text-slate-400 group-hover:text-brand-teal-deep transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                          <ul className="space-y-3">
                            {cat.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  // href={
                                  //   item.href
                                  //     ? item.href
                                  //     : `/services/${cat.slug}/${item.slug}`
                                  // }
                                  href={""}
                                  className={`flex items-center gap-3 text-[14px] transition-all group whitespace-wrap ${
                                    item.href
                                      ? "text-brand-purple hover:text-brand-teal-deep font-semibold"
                                      : "text-slate-600 hover:text-brand-teal-deep"
                                  }`}
                                  onClick={() => setHoveredItem(null)}
                                >
                                  <span className="w-0.75 h-3 bg-slate-800 group-hover:bg-brand-purple transition-colors" />
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
                        Comprehensive Healthcare solutions.
                      </p>
                      <div className="flex gap-3">
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
                          // href={`/sectors/${sector.slug}`} 
                          href={""}
                          onClick={() => setHoveredItem(null)}
                          className="flex items-center gap-3 group py-2"
                        >
                          <span className="w-0.75 h-3 bg-slate-800 group-hover:bg-brand-purple transition-colors" />
                          <span className="text-[15px] font-medium text-slate-700 group-hover:text-brand-teal-deep transition-colors">
                            {sector.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
                      <p className="text-sm font-medium text-slate-600">
                        Comprehensive Healthcare solutions.
                      </p>
                      <div className="flex gap-3">
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
