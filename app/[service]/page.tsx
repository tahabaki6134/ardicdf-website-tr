import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServicePage, servicePages } from "@/lib/service-pages";

type PageProps = { params: { service: string } };

export function generateStaticParams() {
  return servicePages.map((service) => ({ service: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServicePage(params.service);
  if (!service) return {};
  const path = `/${service.slug}`;
  return {
    title: { absolute: service.metaTitle },
    description: service.description,
    alternates: { canonical: path },
    openGraph: { title: service.metaTitle, description: service.description, url: path, locale: "tr_TR", type: "website" },
    twitter: { card: "summary_large_image", title: service.metaTitle, description: service.description, images: ["/og-image.png"] }
  };
}

export default function ServicePageRoute({ params }: PageProps) {
  const service = getServicePage(params.service);
  if (!service) notFound();
  return <ServiceLandingPage service={service} />;
}
