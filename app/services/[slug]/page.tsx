import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/app/components/common/PageBanner";
import ServiceDetailsHero from "@/app/components/service-details/ServiceDetailsHero";
import ServiceWhyMatters from "@/app/components/service-details/ServiceWhyMatters";
import ServiceIncluded from "@/app/components/service-details/ServiceIncluded";
import ServiceProcess from "@/app/components/service-details/ServiceProcess";
import { getServiceDetail, getServiceSlugs } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return { title: "Service | PawCare" };

  return {
    title: `${detail.hero.title} ${detail.hero.titleHighlight} | PawCare`,
    description: detail.hero.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title={detail.bannerTitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: `${detail.hero.title} ${detail.hero.titleHighlight}` },
        ]}
        hasGradient={false}
      />
      <ServiceDetailsHero detail={detail} />
      <ServiceWhyMatters detail={detail} />
      <ServiceIncluded detail={detail} />
      <ServiceProcess detail={detail} />
    </main>
  );
}
