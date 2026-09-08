import PageBanner from "@/app/components/common/PageBanner";
import MissionVisionSection from "@/app/components/MissionVisionSection";
import FaqSection from "@/app/components/FaqSection";

export const metadata = {
  title: "Vision & Mission | PawCare",
  description: "Learn about PawCare's vision and mission.",
};

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Vision & Mission"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "#" },
          { label: "Vision & Mission" },
        ]}
      />

      <MissionVisionSection />
      
      <FaqSection />
    </main>
  );
}
