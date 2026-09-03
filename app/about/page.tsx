import PageBanner from "@/app/components/common/PageBanner";
import AboutSection from "@/app/components/AboutSection";
import MissionVisionSection from "@/app/components/MissionVisionSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

export const metadata = {
  title: "About Us | PawCare",
  description: "Learn more about PawCare and our commitment to your pets.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
    </main>
  );
}
