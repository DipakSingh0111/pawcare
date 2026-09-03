import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/app/components/common/PageBanner";
import TeamDetailSection from "@/app/components/TeamDetailSection";
import data from "@/data/data.json";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return data.team.members.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const member = data.team.members.find((m) => m.id === id);
  if (!member) return { title: "Team Member | PawCare" };

  return {
    title: `${member.name} | PawCare`,
    description: member.description,
  };
}

export default async function TeamDetailPage({ params }: PageProps) {
  const { id } = await params;
  const member = data.team.members.find((m) => m.id === id);

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
