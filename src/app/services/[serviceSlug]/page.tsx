import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_CONTENT } from "@/data/services";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  Globe,
  TrendingUp,
  Handshake,
  MapPin,
  BarChart3,
} from "lucide-react";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";
import { JsonLd } from "@/components/JsonLd";
import metaData from "@/data/meta.json";
import ContactForm from "@/components/ContactForm";

type Props = {
  params: Promise<{ serviceSlug: string }>;
};

const getServiceKey = (slug: string) => {
  return slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

const ServiceCard = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => (
  <Link
    href={href}
    className="bg-slate-50 p-8 flex flex-col justify-between min-h-70 hover:bg-slate-900 transition-all duration-500 group cursor-pointer border border-slate-100 rounded-md"
  >
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 font-display group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-lg leading-relaxed text-slate-600 group-hover:text-slate-400 transition-colors">
        {description}
      </p>
    </div>
    <div className="flex items-center justify-end gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest mt-8 group-hover:text-teal-400 transition-colors">
      Learn more
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;

  const slugToKey: Record<string, string> = {
    "leasing-and-operator-advisory": "leasingAndOperatorAdvisory",
    "investment-and-capital-advisory": "investmentAndCapitalAdvisory",
    "advisory-and-strategic-planning": "advisoryAndStrategicPlanning",
    "design-and-project-delivery": "designAndProjectDelivery",
    "property-and-facilities-management": "propertyAndFacilitiesManagement",
  };

  const key = slugToKey[serviceSlug];

  const serviceMeta = (metaData as any).services?.[key];

  if (!serviceMeta) {
    console.error(`Server SEO Metadata not found for serviceKey: ${key}`);
    return getPageMetadata("home" as any);
  }

  const global = metaData.global;

  return {
    title: serviceMeta.metaTitle,
    description: serviceMeta.metaDescription,
    alternates: {
      canonical: `${global.baseUrl}${serviceMeta.url}`,
    },
    openGraph: {
      title: serviceMeta.ogTitle || serviceMeta.metaTitle,
      description: serviceMeta.ogDescription || serviceMeta.metaDescription,
      url: `${global.baseUrl}${serviceMeta.url}`,
      type: "website",
      images: [{ url: global.logo }],
    },
  };
}
export default async function ServicePage({ params }: Props) {
  const { serviceSlug } = await params;
  const service = SERVICES_CONTENT[serviceSlug];

  if (!service) notFound();

  const serviceKey = getServiceKey(serviceSlug);
  const serviceMeta = (metaData.services as any)[serviceKey];

  const finalSchema = serviceMeta?.schema || {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${metaData.global.baseUrl}/services/${serviceSlug}/#webpage`,
        url: `${metaData.global.baseUrl}/services/${serviceSlug}`,
        name: `${service.title} | Infra.Health Advisory`,
        isPartOf: { "@id": `${metaData.global.baseUrl}/#website` },
        description: service.headline,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: metaData.global.baseUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: `${metaData.global.baseUrl}/services`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: service.title,
              item: `${metaData.global.baseUrl}/services/${serviceSlug}`,
            },
          ],
        },
      },
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Infra.Health",
          url: metaData.global.baseUrl,
        },
        areaServed: "Global",
      },
    ],
  };

  const gridCols =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
    }[service.strategicValue.length] || "lg:grid-cols-4";

  return (
    <>
      <JsonLd data={finalSchema} />
      <div className="pt-30 bg-white">
        {/* --- Hero Section --- */}
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
                {service.title}
              </Link>
            </nav>

            {/* SEO-Optimized H1 & Intro Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-purple tracking-tight leading-[0.95] mb-8">
                  {service.title}
                </h1>
                <div className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-medium text-teal-600/90 leading-relaxed border-l-4 border-teal-500 pl-6">
                    {service.headline}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                    {service.longDescription}
                  </p>
                </div>
              </div>

              {/* Hero Image with Floating Effect */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 bg-teal-50 rounded-3xl -z-10 rotate-3 transition-transform group-hover:rotate-0 duration-500" />
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            {service.sectionIntro && (
              <div className="max-w-3xl mb-20">
                <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
                  {service.sectionIntro.title}
                </h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  {service.sectionIntro.description}
                </p>
              </div>
            )}

            {service.sections.map((section: any, idx: number) => (
              <div key={idx} className="mb-24 last:mb-0">
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className="text-lg leading-relaxed text-slate-600">
                      {section.description}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {section.cards.map((card: any, i: number) => {
                    const targetId = card.id || section.id;

                    return (
                      <ServiceCard
                        key={card.id || i} // Using card.id as a key is better for performance than index 'i'
                        title={card.title}
                        description={card.description}
                        href={`/services/${serviceSlug}/${targetId}`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-teal md:text-5xl lg:text-6xl mb-6">
                {service.strategicTitle}
              </h2>
              <p className="text-lg leading-relaxed text-slate-200">
                {service.strategicDesc}
              </p>
            </div>

            <div
              className={`grid md:grid-cols-2 ${gridCols} gap-px bg-white/10 border border-white/10 rounded-md`}
            >
              {service.strategicValue.map((value: string, idx: number) => {
                const title = value.split(" ").slice(0, 2).join(" ");
                return (
                  <div
                    key={idx}
                    className="bg-slate-900 p-10 hover:bg-slate-800 transition-colors group rounded-md"
                  >
                    <p className="text-lg leading-relaxed text-slate-200">
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <ContactForm />
      </div>
    </>
  );
}
