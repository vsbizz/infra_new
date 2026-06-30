"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronRight,
  MapPin,
  LayoutGrid,
  List,
  ArrowRight,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { CounterSection } from "@/components/CounterSection";

const Portfolio: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const resultsRef = useRef<HTMLDivElement>(null);

  const assetTypes = [
    "All",
    ...Array.from(new Set(portfolioData.map((p) => p.category))),
  ];

  const filteredProperties = portfolioData.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.projectBrief.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || p.category === selectedType;
    return matchesSearch && matchesType;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProperties.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearch = () => {
    resultsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-50 pt-5 pb-12 xs:pb-16 sm:pt-3 md:pt-5 md:pb-20 lg:pt-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Using a 12-column grid to precisely manage the 40% / 60% split on desktop */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-16">
            {/* Left Column: Typography Content (Takes 5 out of 12 columns ~ 41.6%) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start justify-start relative z-10 lg:col-span-5"
            >
              {/* Breadcrumb Navigation */}
              <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-brand-purple sm:mb-6 sm:gap-2 sm:text-xs md:mb-8">
                <Link
                  href="/"
                  className="transition-colors hover:text-teal-600"
                >
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 shrink-0 text-slate-400" />
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-teal-600"
                >
                  Portfolio
                </Link>
              </nav>

              <h1 className="heading-display w-full max-w-none text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] text-slate-900">
                Our <span className="text-brand-teal">Portfolio</span>
              </h1>

              <p className="my-6 max-w-none text-base md:text-lg leading-[1.65] text-slate-600">
                Infra.Health's global track record spans multiple international
                regions, including the Middle East, Africa, South Asia,
                Southeast Asia, Europe, Central Asia, and Central America. Our
                institutional portfolio encompasses sovereign health frameworks,
                advanced acute care hospitals, academic medical centers,
                diagnostic networks, and integrated healthcare campuses,
                engineered to the highest international standards of clinical
                compliance and bankability.
              </p>
            </motion.div>

            {/* Right Column: Framed Architecture Visual Assets (Takes 7 out of 12 columns ~ 58.3%) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:col-span-7"
            >
              {/* Aspect ratio container balances beautifully against the 60% wide layout */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                <img
                  src="/asset/portfolio/portfolio.jpg"
                  alt="Modern Architecture"
                  className="w-full h-full transition-transform duration-700 hover:scale-102"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <CounterSection />

      {/* ── Portfolio Grid ── */}
      <section
        ref={resultsRef}
        id="portfolio-grid"
        className="py-12 xs:py-16 md:py-24 bg-slate-50 px-4 xs:px-5 sm:px-6"
      >
        {/* 
          JLL Section Padding Mobile: 48-64px, Tablet: 64-80px, Desktop: 96px
        */}
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 xs:gap-6 mb-10 xs:mb-12 md:mb-16">
            <div>
              {/* 
                JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
                Desktop: font-extrabold
              */}
              <h2 className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08]">
                Explore Our Portfolio
              </h2>
              <p className="text-base md:text-lg leading-[1.65] text-slate-600 my-6">
                Institutional-grade healthcare infrastructure curated for
                strategic investors.
              </p>
            </div>
            <div className="hidden lg:flex flex items-center gap-2 bg-white p-1.5 rounded-md border border-slate-200 self-end md:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 xs:p-2.5 rounded-full transition-all ${viewMode === "grid" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-900"}`}
                aria-label="Grid view"
              >
                <LayoutGrid size={16} className="xs:w-[18px] xs:h-[18px]" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 xs:p-2.5 rounded-full transition-all ${viewMode === "list" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-900"}`}
                aria-label="List view"
              >
                <List size={16} className="xs:w-[18px] xs:h-[18px]" />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            className={`grid gap-5 xs:gap-6 md:gap-10 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {currentItems.map((property, index) => (
              <motion.div
                key={property.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={`/portfolio/${property.slug}`}
                  className={`group bg-white rounded-md overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex h-full ${
                    viewMode === "grid" ? "flex-col" : "flex-col sm:flex-row"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${
                      viewMode === "grid"
                        ? "aspect-16/10"
                        : "aspect-16/10 sm:w-1/3 sm:aspect-auto"
                    }`}
                  >
                    <img
                      src={
                        property.images[0] ||
                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                      }
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                      <span className="bg-brand-teal/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md">
                        {property.subcategory || "Clinical Asset"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 xs:p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="heading-display text-base xs:text-lg md:text-xl md:font-bold text-slate-900 mb-3 xs:mb-4 group-hover:text-brand-teal transition-colors line-clamp-2 leading-snug">
                      {property.title}
                    </h3>
                    <div className="flex items-start gap-2 text-slate-500 text-sm xs:text-[15px] mb-4 xs:mb-5 md:mb-6 font-normal">
                      <MapPin
                        size={14}
                        className="xs:w-[15px] xs:h-[15px] shrink-0 mt-0.5 text-brand-teal"
                      />
                      <span className="text-base md:text-lg leading-[1.65] text-slate-600">
                        {property.projectBrief.shortDescription}
                      </span>
                    </div>

                    <div className="mt-auto pt-4 xs:pt-5 md:pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] xs:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Built-up Area
                        </span>
                        <span className="heading-display text-sm xs:text-[15px] md:font-bold text-slate-900">
                          {property.projectBrief.builtUpArea}
                        </span>
                      </div>
                      <div className="text-brand-teal font-bold flex items-center gap-1.5 text-sm xs:text-[15px] group-hover:gap-2.5 transition-all">
                        View Asset{" "}
                        <ChevronRight size={14} className="xs:w-4 xs:h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 xs:mt-12 md:mt-16 flex justify-center items-center">
              <div className="flex gap-2 flex-wrap justify-center">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 xs:p-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} className="xs:w-[18px] xs:h-[18px]" />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-9 h-9 xs:w-10 xs:h-10 rounded-full text-xs xs:text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-slate-900 text-white shadow-lg scale-110"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-brand-teal hover:text-brand-teal"
                    }`}
                    aria-label={`Page ${i + 1}`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 xs:p-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight size={16} className="xs:w-[18px] xs:h-[18px]" />
                </button>
              </div>
            </div>
          )}

          {/* Results count */}
          <div className="mt-6 xs:mt-8 md:mt-12 text-center">
            <p className="text-slate-500 text-sm xs:text-base md:text-lg font-normal leading-[1.6]">
              Showing {currentItems.length} of {filteredProperties.length}{" "}
              portfolio assets
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
