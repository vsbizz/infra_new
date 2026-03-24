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
      <section className="relative pt-44 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-8">
                <Link
                  href="/"
                  className="hover:text-slate-900 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight size={10} />
                <span className="text-slate-400">Sectors</span>
              </nav>

              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                {sector.title}
              </h1>

              <div className="flex items-start gap-6">
                <div className="w-1 bg-teal-500 self-stretch rounded-full" />
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  {sector.focus}
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="aspect-16/10 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
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
      

      {/* 2. DYNAMIC OVERVIEW */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 space-y-12">
              <div>
                <p className="text-3xl font-bold text-slate-900 leading-snug tracking-tight mb-8">
                  {sector.intro}
                </p>
                <p className="text-lg leading-relaxed text-slate-600 font-light">
                  Infra.Health integrates clinical planning, institutional
                  capital, and engineering governance to transform demand into
                  resilient healthcare assets.
                </p>
                <p className="text-lg leading-relaxed text-slate-600 font-light pt-8">
                  {sector.explanation}
                </p>
              </div>
            </div>

            {/* 3. KEY ASSET CLASSES (JLL SIDEBOARD) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-12 border-t-4 border-teal-500 sticky top-40">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">
                  Specialized Asset Classes
                </h3>
                <ul className="space-y-8">
                  {sector.assetClasses.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <ChevronsRight
                        size={16}
                        className="text-teal-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                      <span className="text-sm font-bold text-slate-900 uppercase tracking-tight group-hover:text-teal-600 transition-colors">
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

      {/* 4. EXPERTISE SECTION (Static but Styled JLL) */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <p className="text-4xl lg:text-5xl font-bold leading-tight">
              Execution models designed for long-term performance and
              bankability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERTISE_DATA.map((item, idx) => (
              <div
                key={idx}
                className="group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/8 transition-all"
              >
                <div className="text-teal-400 mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  {EXPERTISE_ICONS[idx]}
                </div>

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. OTHER SECTORS (Footer Navigation) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-[11px] font-bold text-teal-600 uppercase tracking-[0.3em] mb-12">
            Explore Other Sectors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SECTORS_CONTENT)
              .filter(([sSlug]) => sSlug !== slug)
              .map(([sSlug, s]) => (
                <Link
                  key={sSlug}
                  href={`/sectors/${sSlug}`}
                  className="group py-8 border-b flex items-center justify-between border-teal-500 transition-all"
                >
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest group-hover:text-teal-600">
                    {s.title}
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-slate-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
