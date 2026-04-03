"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronRight,
  MapPin,
  LayoutGrid,
  List,
  ArrowRight,
  Stethoscope,
  University,
  ChartLine,
  Globe,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

const solutionsData = {
  value: {
    title: "Why Infra.Health?",
    points: [
      {
        icon: Stethoscope,
        title: "Healthcare-Centric",
        text: "Unlike traditional real estate firms, Infra.Health operates at the intersection of healthcare, finance, and infrastructure.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      },
      {
        icon: ChartLine,
        title: "Financial Structuring",
        text: "Our team provides financial structuring expertise to optimize healthcare investments for sustainability and returns.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      },
      {
        icon: University,
        title: "Deep Sectoral Knowledge",
        text: "We bring unmatched expertise in healthcare infrastructure, clinical workflows, and sector-specific regulations.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      },
      {
        icon: Globe,
        title: "Global Investor Networks",
        text: "With access to international investors, we position healthcare assets not just as buildings, but as future-ready investment vehicles.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
};

const Properties: React.FC = () => {
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
  const currentItems = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative pt-28 md:pt-44 pb-16 md:pb-20 overflow-hidden bg-slate-50">
        {/* Background image — hidden on small screens so it doesn't clash with text */}
        <div className="hidden md:block absolute top-[25%] right-0 w-1/2 h-full pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-l from-brand-teal/20 to-transparent" />
          <img
            src="/asset/hero/construction.jpg"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6 md:mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/properties"
                className="hover:text-teal-600 transition-colors"
              >
                Properties
              </Link>
            </nav>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-5 md:mb-8 leading-[1.1] tracking-tight">
              Unlocking Value Across
              <span className="text-brand-teal"> Global </span>
              <br className="hidden sm:block" />
              Healthcare Assets
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-8 md:mb-10 max-w-xl">
              Infra.Health provides a comprehensive international platform for
              healthcare operators and investors to transact, invest, and expand
              their healthcare asset base.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-4xl bg-white shadow-2xl shadow-slate-200/50 rounded-2xl md:rounded-full p-3 md:p-2 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2 border border-slate-100">
              {/* Text input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by hospital name or clinical facility..."
                  className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-xl focus:outline-none text-slate-900 font-medium placeholder:text-slate-400 text-sm md:text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="h-px w-full md:h-8 md:w-px bg-slate-200" />

              {/* Asset type select */}
              <select
                className="px-4 md:px-6 py-3.5 md:py-4 bg-transparent text-slate-600 font-bold text-sm focus:outline-none cursor-pointer border border-slate-200 md:border-0 rounded-xl md:rounded-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {assetTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "Asset type" : type}
                  </option>
                ))}
              </select>

              {/* Search button */}
              <button className="w-full md:w-auto bg-slate-900 text-white px-8 py-3.5 md:py-4 rounded-xl md:rounded-full font-bold hover:bg-brand-teal transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                Search <ArrowRight size={18} />
              </button>
            </div>

            <p className="mt-4 text-slate-400 text-sm font-medium">
              {filteredProperties.length} clinical assets found
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Why Infra.Health ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Header — sticky only on large screens */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6 md:mb-10">
                {solutionsData.value.title}
              </h2>
              <p className="text-base md:text-xl leading-relaxed text-slate-600 mb-6 md:mb-10 max-w-md">
                We go beyond traditional brokerage. Our platform bridges the gap
                between clinical operations and institutional capital to de-risk
                healthcare infrastructure.
              </p>
              <div className="w-24 h-1 bg-teal-600" />
            </div>

            {/* Cards grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 md:gap-8">
              {solutionsData.value.points.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative bg-slate-50 overflow-hidden border border-slate-100 rounded-md"
                >
                  {/* Image */}
                  <div className="aspect-4/3 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-lg text-teal-600 shadow-sm transition-colors group-hover:bg-teal-600 group-hover:text-white">
                      <item.icon size={22} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-8 border-b-4 border-transparent group-hover:border-teal-600 transition-all duration-500 min-h-44 md:min-h-55 flex flex-col">
                    <div className="text-slate-400 font-bold text-xs tracking-widest mb-3 md:mb-4">
                      STRATEGIC PILLAR 0{idx + 1}
                    </div>
                    <h4 className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Property Grid ── */}
      <section ref={resultsRef} className="py-16 md:py-24 bg-slate-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 md:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
                Explore Our Properties
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium">
                Institutional-grade healthcare infrastructure curated for
                strategic investors.
              </p>
            </div>
            {/* View toggle */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-md border border-slate-200 self-end md:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 rounded-full transition-all ${viewMode === "grid" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-900"}`}
                aria-label="Grid view"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 rounded-full transition-all ${viewMode === "list" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-900"}`}
                aria-label="List view"
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            className={`grid gap-6 md:gap-10 ${
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
                  href={`/properties/${property.slug}`}
                  className={`group bg-white rounded-md overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex h-full ${
                    viewMode === "grid"
                      ? "flex-col"
                      : "flex-col sm:flex-row"
                  }`}
                >
                  {/* Image */}
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

                  {/* Content */}
                  <div className="p-5 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-base md:text-xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-brand-teal transition-colors line-clamp-2 leading-snug">
                      {property.title}
                    </h3>
                    <div className="flex items-start gap-2 text-slate-500 text-sm mb-4 md:mb-6 font-medium">
                      <MapPin
                        size={15}
                        className="shrink-0 mt-0.5 text-brand-teal"
                      />
                      <span className="line-clamp-2">
                        {property.projectBrief.shortDescription}
                      </span>
                    </div>

                    <div className="mt-auto pt-4 md:pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Built-up Area
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {property.projectBrief.builtUpArea}
                        </span>
                      </div>
                      <div className="text-brand-teal font-bold flex items-center gap-1.5 text-sm group-hover:gap-2.5 transition-all">
                        View Asset <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 md:mt-16 flex justify-center items-center">
              <div className="flex gap-2 flex-wrap justify-center">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
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
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;