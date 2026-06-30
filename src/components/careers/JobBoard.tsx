"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  GraduationCap,
} from "lucide-react";

const JOBS = [
  {
    title: "EPC Head",
    exp: "20+ Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Project Engineer",
    exp: "4+ Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "MEP Engineer",
    exp: "6+ Years",
    qual: "BE/ME Electrical",
    loc: "Pune, India",
  },
  {
    title: "Store Keeper",
    exp: "8+ Years",
    qual: "Any Graduate",
    loc: "Pune, India",
  },
  {
    title: "Safety Officer",
    exp: "6+ Years",
    qual: "Diploma HSE",
    loc: "Pune, India",
  },
  {
    title: "MEP Design Coordinator - Plumbing & FF",
    exp: "10 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Sr. Estimation Engineer",
    exp: "10 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Executive Assistant",
    exp: "5 Years",
    qual: "MBA",
    loc: "Pune, India",
  },
  {
    title: "Procurement Manager - HO",
    exp: "11+ Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Sr. Estimation Engineer (Mid-Level)",
    exp: "8 to 10 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Legal Advisor",
    exp: "5 Years",
    qual: "LLB/LLM",
    loc: "Pune, India",
  },
  {
    title: "Biomedical Engineer",
    exp: "5 to 6 Years",
    qual: "Biomedical Engineering",
    loc: "Pune, India",
  },
  {
    title: "Sr. Architect",
    exp: "6 to 8 Years",
    qual: "B. Arch / NICMAR",
    loc: "Pune, India",
  },
  {
    title: "Mid Architect",
    exp: "3 to 6 Years",
    qual: "B. Arch",
    loc: "Pune, India",
  },
  {
    title: "Jr. Architect",
    exp: "2 to 5 Years",
    qual: "B. Arch",
    loc: "Pune, India",
  },
  {
    title: "Sales & Business Development Head",
    exp: "10+ Years",
    qual: "MBA Marketing",
    loc: "Pune, India",
  },
  {
    title: "Sales Executive",
    exp: "2 to 5 Years",
    qual: "MBA Marketing",
    loc: "Pune, India",
  },
  {
    title: "Sr. Digital Marketing Executive",
    exp: "5 to 8 Years",
    qual: "MBA Marketing",
    loc: "Pune, India",
  },
  {
    title: "Events Coordinator",
    exp: "2 to 5 Years",
    qual: "MBA Marketing",
    loc: "Pune, India",
  },
  {
    title: "Driver",
    exp: "2 to 5 Years",
    qual: "12th Pass",
    loc: "Pune, India",
  },
  {
    title: "CFO",
    exp: "10+ Years",
    qual: "C.A.",
    loc: "Pune, India",
  },
  {
    title: "Sr. Accountant",
    exp: "5 to 7 Years",
    qual: "B. Com",
    loc: "Pune, India",
  },
  {
    title: "Project Engineer (Senior)",
    exp: "5 to 7 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "MEPF - Mechanical Design Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Mechanical Engineering",
    loc: "Pune, India",
  },
  {
    title: "MEPF - Electrical Design Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Electrical Engineering",
    loc: "Pune, India",
  },
  {
    title: "Plumbing Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Quantity Surveyor",
    exp: "5 to 7 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Estimation & Billing Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
];

const JOBS_PER_PAGE = 5;

export default function JobBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.visionarybizz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const filteredJobs = useMemo(() => {
    return JOBS.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.qual.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="bg-[#F8FAFC] py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Search */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:gap-6 md:mb-12 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="w-full max-w-none heading-display text-2xl xs:text-3xl sm:text-4xl md:text-[42px] leading-[1.15] text-slate-900">
              Live Opportunities
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] md:text-lg text-slate-500 leading-6 md:leading-relaxed">
              Join a team that's redefining healthcare infrastructure.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search roles..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm sm:text-[15px] text-slate-900 shadow-sm outline-none transition-all focus:ring-4 focus:ring-teal-500/10 md:py-4"
            />
          </div>
        </div>

        {/* Jobs Container */}
        <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white md:border-white/20 md:bg-white/70 shadow-sm">
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left">
              <thead className="border-b border-slate-100 bg-slate-50/50">
                <tr className="heading-display text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  <th className="px-8 py-5 lg:px-10 lg:py-6">Position</th>
                  <th className="px-8 py-5 lg:px-10 lg:py-6">Experience</th>
                  <th className="px-8 py-5 lg:px-10 lg:py-6">Qualification</th>
                  <th className="px-8 py-5 text-right lg:px-10 lg:py-6">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {currentJobs.map((job, idx) => (
                  <tr
                    key={`${job.title}-${idx}`}
                    className="group transition-colors hover:bg-teal-50/30"
                  >
                    <td className="heading-display px-8 py-7 text-lg font-bold text-slate-900 lg:px-10 lg:py-8">
                      {job.title}
                    </td>
                    <td className="px-8 py-7 font-medium text-slate-600 lg:px-10 lg:py-8">
                      {job.exp}
                    </td>
                    <td className="px-8 py-7 font-medium text-slate-600 lg:px-10 lg:py-8">
                      {job.qual}
                    </td>
                    <td className="px-8 py-7 text-right lg:px-10 lg:py-8">
                      <button
                        onClick={() => setIsPopupOpen(true)}
                        className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-teal-600"
                      >
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-slate-100 md:hidden">
            {currentJobs.length > 0 ? (
              currentJobs.map((job, idx) => (
                <div key={`${job.title}-mobile-${idx}`} className="space-y-4 p-4 sm:p-5">
                  <div>
                    <h3 className="heading-display mb-1 text-lg sm:text-xl leading-snug text-slate-900">
                      {job.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-teal-600">
                      {job.loc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2 sm:gap-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock size={16} className="shrink-0 text-slate-400" />
                      <span className="text-sm sm:text-[15px]">{job.exp}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 min-w-0">
                      <GraduationCap
                        size={16}
                        className="shrink-0 text-slate-400"
                      />
                      <span className="truncate text-sm sm:text-[15px]">
                        {job.qual}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-all active:scale-95"
                  >
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <div className="py-16 text-center text-sm sm:text-base text-slate-500">
                No roles found.
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/50 px-4 py-5 sm:px-6 md:flex-row md:gap-6 md:px-10 md:py-6">
              <p className="order-2 text-center text-xs sm:text-sm font-medium text-slate-500 md:order-1 md:text-left">
                Showing{" "}
                <span className="font-bold text-slate-900">
                  {indexOfFirstJob + 1}
                </span>{" "}
                to{" "}
                <span className="font-bold text-slate-900">
                  {Math.min(indexOfLastJob, filteredJobs.length)}
                </span>{" "}
                of {filteredJobs.length} roles
              </p>

              <div className="order-1 flex flex-wrap items-center justify-center gap-2 md:order-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg border border-slate-200 bg-white p-2 transition-colors disabled:opacity-30"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex flex-wrap items-center justify-center gap-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full text-sm font-bold transition-all ${
                        currentPage === i + 1
                          ? "bg-slate-900 text-white shadow-md"
                          : "border border-slate-200 bg-white text-slate-600"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-slate-200 bg-white p-2 transition-colors disabled:opacity-30"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Popup Overlay */}
        {isPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-10">
            <div
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              onClick={() => setIsPopupOpen(false)}
            />

            <div className="relative flex h-full w-full max-w-4xl flex-col overflow-hidden bg-white shadow-2xl sm:h-[92vh] sm:rounded-2xl md:h-[90vh]">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 sm:px-5 md:px-6">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Career Application
                </h3>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="rounded-full p-2 transition-colors hover:bg-slate-100"
                >
                  <X size={20} className="text-slate-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto bg-slate-50">
                <iframe
                  src="https://app.visionarybizz.com/widget/form/bwcvSkM7YWiF6T9nLx3R"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  id="popup-bwcvSkM7YWiF6T9nLx3R"
                  title="career"
                />
              </div>
            </div>
          </div>
        )}

        {/* CV CTA */}
        <div className="relative mt-10 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 p-5 sm:p-6 md:mt-12 md:flex-col md:items-start md:gap-8 md:p-8 lg:mt-16 lg:flex-row lg:items-center lg:p-12 text-white">
          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl sm:-right-28 sm:-top-28 sm:h-64 sm:w-64" />

          <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-5 sm:text-left md:gap-6">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-400">
              <Mail size={28} className="sm:w-8 sm:h-8" />
            </div>

            <div>
              <h3 className="heading-display text-white text-xl sm:text-2xl md:text-3xl md:font-bold">
                Didn't find your role?
              </h3>
              <p className="mt-2 max-w-lg text-base md:text-lg leading-[1.65] text-white">
                We are always looking for talented professionals. Email us
                directly.
              </p>
            </div>
          </div>

          <a
            href="mailto:hr@infra.health"
            className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-teal-500 px-6 py-4 text-sm sm:text-base font-bold text-slate-900 transition-all hover:bg-white lg:w-auto lg:px-8 lg:py-5"
          >
            Email your CV <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}