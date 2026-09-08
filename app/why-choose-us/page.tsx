import PageBanner from "@/app/components/common/PageBanner";
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";
import FaqSection from "../components/FaqSection";

export const metadata = {
  title: "Why Choose Us | PawCare",
  description: "Discover why PawCare is the trusted choice for pet parents.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Why Choose Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "#" },
          { label: "Why Choose Us" },
        ]}
      />
      <div className="py-10">
        <WhyChooseUsSection />
        <FaqSection />
      </div>
    </main>
  );
}
