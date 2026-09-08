import PageBanner from "@/app/components/common/PageBanner";
import GallerySection from "@/app/components/GallerySection";

export const metadata = {
  title: "Gallery | PawCare",
  description:
    "Explore photos and videos capturing beautiful moments of love, trust, and companionship at PawCare.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Gallery"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "#" },
          { label: "Gallery" },
        ]}
      />

      <GallerySection />
    </main>
  );
}
