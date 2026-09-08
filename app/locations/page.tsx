import PageBanner from "@/app/components/common/PageBanner";
import LocationsSection from "@/app/components/LocationsSection";

export const metadata = {
  title: "Locations | PawCare",
  description: "Find a PawCare center near you.",
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Locations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "#" },
          { label: "Locations" },
        ]}
      />
      <LocationsSection />
    </main>
  );
}
