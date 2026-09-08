import PageBanner from "@/app/components/common/PageBanner";
import PartnersSection from "@/app/components/PartnersSection";

export const metadata = {
  title: "Partners | PawCare",
  description:
    "We collaborate with like-minded organizations and experts who share our mission of providing the best care and support for pets and pet parents.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Partners"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "#" },
          { label: "Partners" },
        ]}
      />

      <PartnersSection />
    </main>
  );
}
