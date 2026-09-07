import PageBanner from "@/app/components/common/PageBanner";
import CookiePolicySection from "@/app/components/CookiePolicySection";

export const metadata = {
  title: "Cookie Policy | PawCare",
  description: "Cookie Policy for using PawCare services and website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Cookie Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}

      />
      <CookiePolicySection />
    </main>
  );
}
