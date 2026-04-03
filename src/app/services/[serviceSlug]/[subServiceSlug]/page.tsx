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
      <section className="max-w-7xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6 uppercase tracking-widest">
          <Link href="/" className="hover:text-teal-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/" className="hover:text-teal-600 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3 h-3" />
          <a
            href={`/services/${serviceSlug}`}
            className="hover:text-teal-600 transition-colors"
          >
            {parentService.title}
          </a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900">{subService.title}</span>
        </nav>
        <h1 className="text-4xl text-brand-purple mb-6 text-center font-bold leading-relaxed">
          {subService.title}
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-xl text-teal-600 mb-6 font-medium leading-relaxed">
              {subService.headline}
            </h2>
            <div className="text-lg leading-relaxed text-slate-600 mb-8">
              {subService.description.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="aspect-16/10 rounded-md overflow-hidden shadow-2xl">
            <img
              src={subService.heroImage}
              alt={subService.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              {subService.sectionTitle}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {subService.sectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {subService.sections.map((item: any, idx: number) => (
              <div
                key={idx}
                className="bg-white p-10 border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all group rounded-md"
              >
                <div className="text-teal-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {IconMap[item.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-4/3 rounded-md overflow-hidden shadow-xl bg-slate-100">
              {/* Contextual Image Placeholder */}
            </div>
            <div>
              <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {subService.deliverableTitle}
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-12">
                {subService.deliverableDescription}
              </p>
              <div className="space-y-6">
                {subService.deliverables.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-md hover:bg-teal-50 transition-colors group"
                  >
                    <div className="text-teal-600 group-hover:scale-110 transition-transform">
                      {IconMap[item.icon]}
                    </div>
                    <span className="text-lg leading-relaxed text-slate-900">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
