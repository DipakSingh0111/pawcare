import PageBanner from "@/app/components/common/PageBanner";
import FaqSection from "@/app/components/FaqSection";

export const metadata = {
  title: "FAQs - PawCare",
  description: "Frequently Asked Questions about our pet care services.",
};

export default function FaqsPage() {
  return (
    <main>
      <PageBanner
        title="FAQS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "#" },
          { label: "FAQS" },
        ]}
      />
      <FaqSection />
    </main>
  );
}
