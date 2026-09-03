import PageBanner from "@/app/components/common/PageBanner";
import RefundPolicySection from "@/app/components/RefundPolicySection";

export const metadata = {
  title: "Cancellation & Refund Policy | PawCare",
  description: "Cancellation and Refund Policy for PawCare services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Cancellation & Refund Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cancellation & Refund Policy" }]}
        hasGradient={true}
      />
      <RefundPolicySection />
    </main>
  );
}
