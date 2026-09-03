import PageBanner from "@/app/components/common/PageBanner";
import PrivacyPolicySection from "@/app/components/PrivacyPolicySection";

export const metadata = {
  title: "Privacy Policy | PawCare",
  description: "Privacy Policy for using PawCare services and website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        hasGradient={true}
      />
      <PrivacyPolicySection />
    </main>
  );
}
