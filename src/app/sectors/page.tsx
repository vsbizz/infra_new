import { notFound } from "next/navigation";
import Link from "next/link";
import { SECTORS_CONTENT, EXPERTISE_DATA } from "@/data/sectors";
import {
  ChevronRight,
  ChevronsRight,
  Building2,
  RefreshCw,
  Layers,
  Box,
  Globe,
} from "lucide-react";

const EXPERTISE_ICONS = [
  <Building2 key="1" className="w-6 h-6 xs:w-7 xs:h-7" strokeWidth={1.5} />,
  <RefreshCw key="2" className="w-6 h-6 xs:w-7 xs:h-7" strokeWidth={1.5} />,
  <Layers key="3" className="w-6 h-6 xs:w-7 xs:h-7" strokeWidth={1.5} />,
  <Box key="4" className="w-6 h-6 xs:w-7 xs:h-7" strokeWidth={1.5} />,
  <Globe key="5" className="w-6 h-6 xs:w-7 xs:h-7" strokeWidth={1.5} />,
];

interface PageProps {
  searchParams: Promise<{ sector?: string }>;
}

export default async function SectorsPage({ searchParams }: PageProps) {
  const sectorsList = Object.entries(SECTORS_CONTENT);
  if (!sectorsList.length) notFound();

  // Await the searchParams in Next.js 15+
  const resolvedParams = await searchParams;

  // Default to the first sector's slug if none is selected in the URL
  const activeSlug = resolvedParams.sector || sectorsList[0][0];

  // Find the active sector data, fallback to first if slug is invalid
  const activeSectorEntry =
    sectorsList.find(([slug]) => slug === activeSlug) || sectorsList[0];
  const [currentSlug, sector] = activeSectorEntry;
  const activeIndex = sectorsList.findIndex(([slug]) => slug === currentSlug);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Outer Layout Container ── */}
      <div className="max-w-7xl mx-auto sm:py-4 md:py-6 lg:py-8">
        <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] eyebrow text-brand-purple sm:mb-6 sm:gap-2 sm:text-xs md:mb-8">
          <Link href="/" className="transition-colors hover:text-teal-600">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <Link
            href="/sectors"
            className="transition-colors hover:text-teal-600"
          >
            Sectors
          </Link>
        </nav>

        {/* ── Two Column Master-Detail Layout ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Sticky Tab Navigation */}
          {/* Mobile: Horizontal scrollable strip | Desktop: Vertical link list */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 z-20 bg-white lg:bg-transparent -mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto lg:overflow-x-visible whitespace-nowrap lg:whitespace-normal border-b border-slate-100 lg:border-b-0 pb-4 lg:pb-0 scrollbar-none">
            <div className="flex lg:flex-col gap-2 md:gap-3 min-w-max lg:min-w-0">
              {sectorsList.map(([slug, s], idx) => {
                const isActive = slug === currentSlug;
                return (
                  <Link
                    key={slug}
                    href={`?sector=${slug}`}
                    scroll={false} // Prevents window snapping on click
                    className={`flex items-center justify-between px-5 py-4 transition-all duration-300 text-left rounded-sm group relative shrink-0 ${
                      isActive
                        ? "bg-slate-900 text-white font-medium"
                        : "bg-slate-50 hover:bg-slate-100/80 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-[10px] font-mono tracking-wider ${isActive ? "text-teal-400" : "text-slate-400"}`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm uppercase tracking-wider font-medium">
                        {s.title}
                      </span>
                    </div>
                    <ChevronRight
                      size={14}
                      className={`hidden lg:block transition-transform duration-300 ${
                        isActive
                          ? "text-teal-400 translate-x-0"
                          : "text-slate-400/0 -translate-x-2 group-hover:text-slate-400 group-hover:translate-x-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </aside>

          {/* Right Column: Dynamic Content Display Pane */}
          <div className="lg:col-span-8 space-y-12 animate-in fade-in duration-500">
            {/* Sector Hero Panel */}
            <div className="space-y-8">
              <div>
                <span className="text-brand-purple text-[10px] font-bold uppercase tracking-[0.3em] block mb-3">
                  Asset Portfolio Segment 0{activeIndex + 1}
                </span>
                <h1 className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] mb-6">
                  {sector.title}
                </h1>
                {/* <div className="flex items-start gap-4 xs:gap-5 md:gap-6">
                  <div className="w-[1px] bg-slate-300 self-stretch" />
                  <p className="text-base sm:text-lg text-slate-500 font-light tracking-wide leading-relaxed">
                    {sector.focus}
                  </p>
                </div> */}
              </div>

              {/* Responsive Image Aspect Container */}
              <div className="aspect-[16/10] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] bg-slate-100">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                />
              </div>
            </div>

            {/* Split Description & Sidebar Panels */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 pt-4">
              <div className="md:col-span-7 space-y-6">
                <p className="text-base md:text-lg leading-[1.65] text-slate-600">
                  {sector.intro}
                </p>
                <p className="text-base md:text-lg leading-[1.65] text-slate-600">
                  Infra.Health integrates clinical planning, institutional
                  capital, and engineering governance to transform market
                  demands into high-performance healthcare real estate.
                </p>
                <p className="text-base md:text-lg leading-[1.65] text-slate-600">
                  {sector.explanation}
                </p>
              </div>

              {/* Key Asset Sidebar */}
              <div className="md:col-span-5">
                <div className="border border-slate-900/10 p-6 sm:p-8 bg-[#FAF9F6]/50 backdrop-blur-sm">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-6">
                    Specialized Asset Classes
                  </h3>
                  <ul className="space-y-4">
                    {sector.assetClasses.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 group cursor-default"
                      >
                        <ChevronsRight
                          size={12}
                          className="text-slate-900 lg:group-hover:brand-purple -translate-x-2 lg:group-hover:translate-x-0 transition-all duration-300 shrink-0"
                        />
                        <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-900 lg:group-hover:brand-purple transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Global Common Section: Expertise & Execution Framework ── */}
      <section className="py-20 sm:py-28 lg:py-36 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center flex justify-center items-center flex-col">
          <div className="max-w-4xl mb-16 sm:mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 block mb-3">
              institutional operational standards
            </span>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl heading-display text-white">
              Execution models engineered for structural scale, long-term asset
              performance, and tier-one bankability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {EXPERTISE_DATA.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 sm:p-10 border border-white/10 bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="text-teal-400 mb-6 sm:mb-8 transition-transform duration-300 group-hover:scale-105">
                  {EXPERTISE_ICONS[idx] || (
                    <Building2
                      className="w-6 h-6 xs:w-7 xs:h-7"
                      strokeWidth={1.5}
                    />
                  )}
                </div>

                <h3 className="heading-display text-lg sm:text-xl font-medium tracking-wide text-white mb-3 sm:mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
