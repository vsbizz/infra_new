import React from 'react';
import { 
  MapPin, Heart, Share2, ChevronLeft, 
  Building2, Ruler, CheckCircle2, 
  ArrowRight, Bed, Microscope, Layout
} from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";

// Next.js App Router Page Component
export default async function PropertyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = portfolioData.find((p) => p.slug === slug);

  // Trigger Next.js 404 if slug doesn't exist
  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        
        <div className="absolute top-32 left-0 right-0 p-6 md:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <Link 
              href="/properties" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <ChevronLeft size={16} /> Back to Properties
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-brand-teal text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                {property.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-white/30">
                {property.subcategory}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {property.title}
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 text-slate-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-teal" />
                <span className="text-lg font-medium">India</span> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-3 space-y-12">
            
            {/* Summary Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={<Bed />} label="Bed Capacity" value={`${property.projectBrief.noOfBeds} Beds`} />
              <StatCard icon={<Ruler />} label="Built-up Area" value={property.projectBrief.builtUpArea} />
              <StatCard icon={<Layout />} label="Campus Type" value={property.projectBrief.buildingConfiguration} />
              <StatCard icon={<Microscope />} label="Asset Class" value="Clinical Infrastructure" />
            </div>

            <div className="grid lg:grid-cols-3 gap-12 pt-8">
              <div className="lg:col-span-2 space-y-16">
                {/* Description */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-1 bg-brand-teal rounded-full" /> Project Brief
                  </h2>
                  <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed">
                    <p>{property.projectBrief.shortDescription}</p>
                  </div>
                </section>

                {/* Services Delivered */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-1 bg-brand-teal rounded-full" /> Scope of Services
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-md border border-slate-100 shadow-sm hover:border-brand-teal/30 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-brand-teal mt-0.5 shrink-0" />
                        <span className="text-slate-700 font-semibold leading-snug">{service}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Gallery */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-1 bg-brand-teal rounded-full" /> Asset Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {property.images.map((img, i) => (
                      <div key={i} className={`overflow-hidden rounded-md group shadow-md ${i === 0 ? 'md:col-span-2 aspect-21/9' : 'aspect-16/10'}`}>
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

              {/* Sidebar: Related Projects */}
              <aside className="space-y-8">
                <div className="bg-white p-8 rounded-md border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
                  <h3 className="text-xl font-bold text-slate-900 mb-8">Related Projects</h3>
                  <div className="space-y-6">
                    {portfolioData
                      .filter(p => p.slug !== property.slug)
                      .slice(0, 3)
                      .map(p => (
                      <Link 
                        href={`/portfolio/${p.slug}`} 
                        key={p.slug}
                        className="flex gap-4 group"
                      >
                        <div className="w-20 h-20 rounded-md overflow-hidden shrink-0 border border-slate-100">
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
                    className="mt-10 w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-full font-bold hover:bg-brand-teal transition-all"
                  >
                    All Projects <ArrowRight size={18} />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for Stats
function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="bg-white p-6 rounded-md border border-slate-200 shadow-lg shadow-slate-200/40 flex items-center gap-5">
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-teal border border-slate-100">
        {React.cloneElement(icon as React.ReactElement)}
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-lg font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}