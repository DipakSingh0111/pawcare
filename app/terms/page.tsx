import PageBanner from "@/app/components/common/PageBanner";
import TermsSection from "@/app/components/TermsSection";

export const metadata = {
  title: "Terms and Conditions | PawCare",
  description: "Terms and Conditions for using PawCare services and website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Terms and Conditions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]}

      />
      <TermsSection />
    </main>
  );
}
