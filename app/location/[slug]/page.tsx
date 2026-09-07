import { site } from "@/data/index";
import PageBanner from "@/app/components/common/PageBanner";
import LocationDetailSection from "@/app/components/LocationDetailSection";

export const metadata = {
  title: "Location Details | PawCare",
  description: "Find out more about our PawCare center.",
};

const locations = [
  { name: "Mumbai - Andheri", slug: "mumbai-andheri" },
  { name: "Mumbai - Bandra", slug: "mumbai-bandra" },
  { name: "Delhi - South Extension", slug: "delhi-south-extension" },
  { name: "Bengaluru - Koramangala", slug: "bengaluru-koramangala" },
  { name: "Hyderabad - Banjara Hills", slug: "hyderabad-banjara-hills" },
  { name: "Pune - Kalyani Nagar", slug: "pune-kalyani-nagar" },
  { name: "Ahmedabad - Prahlad Nagar", slug: "ahmedabad-prahlad-nagar" },
];

export function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export default async function LocationDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the location name for the breadcrumb
  const locationName = locations.find((l) => l.slug === slug)?.name || "Location Details";

  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <PageBanner
        title={locationName}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/location/mumbai-andheri" },
          { label: locationName }
        ]}
      />
      <LocationDetailSection activeSlug={slug} />
    </main>
  );
}
