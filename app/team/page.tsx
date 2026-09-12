import PageBanner from "@/app/components/common/PageBanner";
import TeamSection from "@/app/components/TeamSection";

export const metadata = {
  title: "Our Team | PawCare",
  description: "Meet our passionate team of pet care experts dedicated to providing the best care for your furry family.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Our Team"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Our Team" },
        ]}
      />

      <TeamSection />
    </main>
  );
}
