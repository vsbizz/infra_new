import React from "react";
import { notFound } from "next/navigation";
import { SERVICES_CONTENT } from "@/data/services";
import {
  ArrowRight,
  ChevronRight,
  Layout,
  Target,
  FileText,
  TrendingUp,
  MapPin,
  Users,
  ClipboardCheck,
  BarChart,
  Shield,
} from "lucide-react";
import { Metadata } from "next";
import metaData from "@/data/meta.json";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const IconMap: any = {
  Layout: <Layout className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5" />,
  BarChart: <BarChart className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
};

type Props = {
  params: Promise<{ serviceSlug: string; subServiceSlug: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug, subServiceSlug } = await params;

  const slugToKey: Record<string, string> = {
    "leasing-and-operator-advisory": "leasingAndOperatorAdvisory",
    "investment-and-capital-advisory": "investmentAndCapitalAdvisory",
    "advisory-and-strategic-planning": "advisoryAndStrategicPlanning",
    "design-and-project-delivery": "designAndProjectDelivery",
    "property-and-facilities-management": "propertyAndFacilitiesManagement",
  };

  const parentKey = slugToKey[serviceSlug];
  const parentMeta = (metaData.services as any)?.[parentKey];

  const subMeta = parentMeta?.subServices?.find((s: any) =>
    s.slug.endsWith(`/${subServiceSlug}`),
  );

  console.log("Searching for:", subServiceSlug, "Found:", subMeta?.metaTitle);

  if (!subMeta) {
    return { title: "Service | Infra.Health" };
  }

  return {
    title: subMeta.metaTitle,
    description: subMeta.metaDescription,
    alternates: {
      canonical: `${metaData.global.baseUrl}${subMeta.slug}`,
    },
    openGraph: {
      title: subMeta.ogTitle || subMeta.metaTitle,
      description: subMeta.ogDescription || subMeta.metaDescription,
      url: `${metaData.global.baseUrl}${subMeta.slug}`,
      type: "website",
      images: [{ url: metaData.global.logo }],
    },
  };
}
export default async function SubServicePage({ params }: Props) {
  const { serviceSlug, subServiceSlug } = await params;

  const parentService = SERVICES_CONTENT[serviceSlug];
  const subService = parentService?.subServices?.[subServiceSlug];

  if (!subService) notFound();

  return (
    <div className="pt-30 bg-white">
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Refined Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10">
            <Link
              href="/"
              className="text-sm font-medium text-slate-400 hover:text-teal-600 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link
              href="/services"
              className="text-sm font-medium text-slate-400 hover:text-teal-600 transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link
              href={`/services/${serviceSlug}`}
              className="text-sm font-medium text-slate-400 hover:text-teal-600 transition-colors"
            >
              {parentService.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-sm font-semibold text-slate-900">
              {subService.title}
            </span>
          </nav>

          {/* SEO-Optimized H1 & Intro Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-purple tracking-tight leading-[0.95] mb-8">
                {subService.title}
              </h1>
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-medium text-teal-600/90 leading-relaxed border-l-4 border-teal-500 pl-6">
                  {subService.headline}
                </h2>
                <div className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {subService.description.map((p: string, i: number) => (
                    <p key={i} className={i !== 0 ? "mt-4" : ""}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image with Floating Effect */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-teal-50 rounded-3xl -z-10 rotate-3 transition-transform group-hover:rotate-0 duration-500" />
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img
                  src={subService.heroImage}
                  alt={subService.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Grid Section */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              {subService.sectionTitle}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {subService.sectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subService.sections.map((item: any, idx: number) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                  <div className="scale-110">{IconMap[item.icon]}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
              {subService.deliverableTitle}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              {subService.deliverableDescription}
            </p>
          </div>

          {/* Modern Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {subService.deliverables.map((item: any, idx: number) => (
              <div
                key={idx}
                className="relative group p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    {IconMap[item.icon]}
                  </div>
                  <span className="text-xl font-semibold text-slate-900 tracking-tight">
                    {item.title}
                  </span>
                  {/* Optional: if you have item descriptions */}
                  {item.description && (
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Heading and Main Action */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-4">
                  Explore similar offerings
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed max-w-xs">
                  Combine specialized healthcare advisory with institutional
                  knowledge to drive better clinical and capital outcomes.
                </p>
              </div>

              <a
                href={`/services/${serviceSlug}`}
                className="inline-flex items-center gap-3 bg-slate-50 text-slate-900 px-6 py-4 rounded-md font-bold text-sm hover:bg-slate-100 transition-colors border border-slate-100"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Explore all {parentService.title}
              </a>
            </div>

            {/* Right 2 Columns: Sub-Services Grid */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-16">
              {Object.entries(parentService.subServices)
                .filter(([slug]) => slug !== subServiceSlug)
                .slice(0, 4) // Showing up to 4 related services like the image
                .map(([slug, data]: any) => (
                  <a
                    key={slug}
                    href={`/services/${serviceSlug}/${slug}`}
                    className="group block border-t border-slate-100 pt-8 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors font-display">
                        {data.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-teal-600 transition-all group-hover:translate-x-1" />
                    </div>
                    <p className="text-slate-500 text-base leading-relaxed ">
                      {data.headline ||
                        (data.description && data.description[0])}
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
