import { notFound } from "next/navigation";
import { companyPages, companyPageSlugs } from "@/lib/company-pages-data";
import { CompanyPageClient } from "@/components/layout/company-page-client";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return companyPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = companyPages[slug];
  if (!data) return {};
  return {
    title: `${data.fullName} — ${data.tagline}`,
    description: data.heroSubtitle
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const data = companyPages[slug];
  if (!data) notFound();
  return <CompanyPageClient data={data} />;
}
