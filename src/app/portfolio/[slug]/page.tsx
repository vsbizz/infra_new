import type React from "react";
import {
  MapPin,
  ChevronLeft,
  Ruler,
  CheckCircle2,
  ArrowRight,
  Bed,
  Microscope,
  Layout,
} from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = portfolioData.find((p) => p.slug === slug);

  if (!property) notFound();

  return (
    <div className="min-h-screen bg-slate-50 pb-16 md:pb-24">
      {/* ── Hero ── */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

        {/* Anchored to bottom so it's always visible regardless of screen height */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-5 md:mb-8 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ChevronLeft size={14} /> Back to Portfolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              <span className="bg-brand-teal text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                {property.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-white/30">
                {property.subcategory}
              </span>
            </div>

            <h1 className="heading-display text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-4xl">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-slate-200">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-teal shrink-0" />
              <span className="text-base md:text-lg font-medium">India</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-10 md:-mt-12 relative z-20">
        {/* Quick Stats - 2×2 on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-16">
          <StatCard
            icon={Bed}
            label="Bed Capacity"
            value={`${property.projectBrief.noOfBeds} Beds`}
          />
          <StatCard
            icon={Ruler}
            label="Built-up Area"
            value={property.projectBrief.builtUpArea}
          />
          <StatCard
            icon={Layout}
            label="Campus Type"
            value={property.projectBrief.buildingConfiguration}
          />
          <StatCard
            icon={Microscope}
            label="Asset Class"
            value="Clinical Infrastructure"
          />
        </div>

        {/* ── Body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            {/* Project Brief */}
            <section>
              <SectionHeading>Project Brief</SectionHeading>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {property.projectBrief.shortDescription}
              </p>
            </section>

            {/* Scope of Services */}
            <section>
              <SectionHeading>Scope of Services</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {property.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-md border border-slate-100 shadow-sm hover:border-brand-teal/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-teal mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-semibold leading-snug text-sm md:text-base">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <SectionHeading>Asset Gallery</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {property.images.map((img, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-md group shadow-md ${
                      i === 0
                        ? "sm:col-span-2 aspect-video sm:aspect-21/9"
                        : "aspect-video sm:aspect-16/10"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${property.title} view ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - flows below on mobile, sticky on lg+ */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-md border border-slate-200 shadow-xl shadow-slate-200/50 lg:sticky lg:top-24">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 md:mb-8">
                Related Projects
              </h3>
              <div className="space-y-5 md:space-y-6">
                {portfolioData
                  .filter((p) => p.slug !== property.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      href={`/portfolio/${p.slug}`}
                      key={p.slug}
                      className="flex gap-4 group"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden shrink-0 border border-slate-100">
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-slate-900 text-sm line-clamp-2 mb-1 group-hover:text-brand-teal transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {p.projectBrief.noOfBeds} Beds
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link
                href="/portfolio"
                className="mt-8 md:mt-10 w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 md:py-4 rounded-full font-bold hover:bg-brand-teal transition-all text-sm md:text-base"
              >
                All Projects <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ── Shared sub-components ── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-3">
      <div className="w-6 md:w-8 h-1 bg-brand-teal rounded-full shrink-0" />
      {children}
    </h2>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-md border border-slate-200 shadow-lg shadow-slate-200/40 flex items-center gap-3 md:gap-5">
      <div className="w-9 h-9 md:w-12 md:h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-teal border border-slate-100 shrink-0">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 truncate">
          {label}
        </p>
        <p className="heading-display text-sm md:text-lg font-bold text-slate-900 leading-tight">
          {value}
        </p>
      </div>
    </div>
  );
}
