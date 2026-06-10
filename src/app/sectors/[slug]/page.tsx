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
  <Building2 key="1" size={24} />,
  <RefreshCw key="2" size={24} />,
  <Layers key="3" size={24} />,
  <Box key="4" size={24} />,
  <Globe key="5" size={24} />,
];

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = SECTORS_CONTENT[slug];

  if (!sector) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative pt-5 sm:pt-3 md:pt-5 lg:pt-10  border-b border-slate-100">
        {/* 
          JLL Page Padding Mobile: 64-80px, Tablet: 80-96px, Desktop: 128-160px
        */}
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
          {/* 
            JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
          */}
          <div className="flex flex-col lg:flex-row items-center gap-10 xs:gap-12 md:gap-16">
            <div className="lg:w-1/2">
              <nav className="flex items-center gap-1.5 md:gap-2 text-[10px] xs:text-[11px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-6 xs:mb-7 md:mb-8">
                <Link
                  href="/"
                  className="hover:text-slate-900 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight size={10} />
                <span className="text-slate-400">Sectors</span>
              </nav>

              {/* 
                JLL H1 Mobile: 32-36px, font-weight: 600 (semibold)
                Desktop: font-extrabold
              */}
              <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  md:font-extrabold text-brand-purple leading-[1.1] mb-6 xs:mb-7 md:mb-8 tracking-tighter">
                {sector.title}
              </h1>

              <div className="flex items-start gap-4 xs:gap-5 md:gap-6">
                <div className="w-1 bg-teal-500 self-stretch rounded-full" />
                <p className="text-base xs:text-lg md:text-xl text-slate-500 font-normal leading-[1.6]">
                  {sector.focus}
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full">
              <div className="aspect-16/10 overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] md:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview Section ── */}
      <section className="py-12 xs:py-16 md:py-24 lg:py-32">
        {/* 
          JLL Section Padding Mobile: 48-64px, Tablet: 64-80px, Desktop: 96-128px
        */}
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 xs:gap-12 md:gap-16 lg:gap-20">
            <div className="lg:col-span-7 space-y-8 xs:space-y-10 md:space-y-12">
              <div>
                {/* 
                  JLL Large Text Mobile: 20-24px, font-weight: 600 (semibold)
                  Desktop: font-extrabold
                */}
                <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl  md:font-extrabold text-slate-900 leading-snug tracking-tight mb-6 xs:mb-7 md:mb-8">
                  {sector.intro}
                </p>
                <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600">
                  Infra.Health integrates clinical planning, institutional
                  capital, and engineering governance to transform demand into
                  resilient healthcare assets.
                </p>
                <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600 pt-6 xs:pt-7 md:pt-8">
                  {sector.explanation}
                </p>
              </div>
            </div>

            {/* ── Key Asset Classes Sidebar ── */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-6 xs:p-8 md:p-10 lg:p-12 border-t-4 border-teal-500 lg:sticky lg:top-40">
                {/* 
                  JLL Card Padding Mobile: 20-24px, Tablet: 24-32px, Desktop: 32-48px
                */}
                <h3 className="text-[10px] xs:text-[11px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-8 xs:mb-10 md:mb-12">
                  Specialized Asset Classes
                </h3>
                <ul className="space-y-5 xs:space-y-6 md:space-y-8">
                  {sector.assetClasses.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 xs:gap-4 group cursor-default"
                    >
                      <ChevronsRight
                        size={14}
                        className="xs:w-4 xs:h-4 text-teal-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                      <span className="text-xs xs:text-sm md:font-bold text-slate-900 uppercase tracking-tight group-hover:text-teal-600 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise Section ── */}
      <section className="py-12 xs:py-16 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 xs:w-80 xs:h-80 md:w-96 md:h-96 bg-teal-500/10 blur-[80px] md:blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
          <div className="max-w-3xl mb-12 xs:mb-16 md:mb-20">
            {/* 
              JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
              Desktop: font-extrabold
            */}
            <p className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl  md:font-extrabold leading-[1.3] md:leading-tight">
              Execution models designed for long-term performance and
              bankability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 md:gap-8">
            {/* 
              JLL Grid Gap Mobile: 20-24px, Tablet: 24-28px, Desktop: 32px
            */}
            {EXPERTISE_DATA.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 xs:p-8 md:p-10 rounded-2xl xs:rounded-3xl md:rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/8 transition-all"
              >
                {/* 
                  JLL Card Padding Mobile: 20-24px, Tablet: 24-32px, Desktop: 40px
                */}
                <div className="text-teal-400 mb-6 xs:mb-7 md:mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  <Building2 size={20} className="xs:w-6 xs:h-6" />
                </div>

                <h3 className="text-lg xs:text-xl md:text-2xl  md:font-extrabold mb-3 xs:mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm xs:text-[15px] font-normal leading-[1.6]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Sectors Navigation ── */}
      <section className="py-12 xs:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
          <h3 className="text-[10px] xs:text-[11px] font-bold text-teal-600 uppercase tracking-[0.3em] mb-8 xs:mb-10 md:mb-12">
            Explore Other Sectors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 md:gap-6">
            {/* 
              JLL Grid Gap Mobile: 20-24px, Tablet: 24-28px, Desktop: 32px
            */}
            {Object.entries(SECTORS_CONTENT)
              .filter(([sSlug]) => sSlug !== slug)
              .map(([sSlug, s]) => (
                <Link
                  key={sSlug}
                  href={`/sectors/${sSlug}`}
                  className="group py-6 xs:py-7 md:py-8 border-b flex items-center justify-between border-teal-500 transition-all"
                >
                  <span className="text-xs xs:text-sm font-bold text-slate-900 uppercase tracking-widest group-hover:text-teal-600">
                    {s.title}
                  </span>
                  <ChevronRight
                    size={14}
                    className="xs:w-4 xs:h-4 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
