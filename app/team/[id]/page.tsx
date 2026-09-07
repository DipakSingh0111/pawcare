import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/app/components/common/PageBanner";
import TeamDetailSection from "@/app/components/TeamDetailSection";
import { site } from "@/data/index";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return Object.keys(site.teamDetail.bySlug).map((slug) => ({
    id: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const details = site.teamDetail.bySlug as Record<string, any>;
  const member = details[id];
  if (!member) return { title: "Team Member | PawCare" };

  return {
    title: `${member.name} | PawCare`,
    description: member.description,
  };
}

export default async function TeamDetailPage({ params }: PageProps) {
  const { id } = await params;
  const details = site.teamDetail.bySlug as Record<string, any>;
  const member = details[id];

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Team Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/team" },
          { label: member.name },
        ]}
      />

      <TeamDetailSection member={member} />
    </main>
  );
}
