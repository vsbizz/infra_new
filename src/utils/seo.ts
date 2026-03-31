import { Metadata } from "next";
import metaData from "@/data/meta.json";

type PageKeys = keyof typeof metaData;

export function getPageMetadata(pageKey: PageKeys): Metadata {
  const page = metaData[pageKey] as any;
  const global = metaData.global;

  const canonicalPath = pageKey === 'home' ? '' : pageKey;
  const fullUrl = `${global.baseUrl}/${canonicalPath}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    metadataBase: new URL(global.baseUrl),
    
    alternates: {
      canonical: fullUrl,
    },

    openGraph: {
      title: page.ogTitle || page.metaTitle,
      description: page.ogDescription || page.metaDescription,
      url: fullUrl,
      siteName: global.siteName,
      images: [
        {
          url: global.logo, 
          width: 1200,
          height: 630,
          alt: global.siteName,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle || page.metaTitle,
      description: page.ogDescription || page.metaDescription,
      images: [global.logo],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function getServiceMetadata(serviceSlug: string): Metadata {
  const global = metaData.global;
  
  const serviceKey = serviceSlug.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  const service = (metaData.services as any)[serviceKey];

  const fullUrl = `${global.baseUrl}${service.url}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: service.ogTitle,
      description: service.ogDescription,
      url: fullUrl,
      type: service.ogType || "website",
      images: [{ url: global.logo }],
    }
  };
}