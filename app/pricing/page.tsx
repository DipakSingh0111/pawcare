import PageBanner from "@/app/components/common/PageBanner";
import PricingSection from "@/app/components/PricingSection";

export const metadata = {
  title: "Pricing | PawCare",
  description: "Simple & transparent pricing for the best care of your pets.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Pricing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "#" },
          { label: "Pricing" },
        ]}
      />

      <PricingSection />
    </main>
  );
}
