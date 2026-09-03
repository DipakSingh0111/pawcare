import PageBanner from "@/app/components/common/PageBanner";
import TestimonialsSection from "@/app/components/TestimonialsSection";

export const metadata = {
  title: "Testimonials | PawCare",
  description:
    "Hear from happy pet parents who trust PawCare for their furry family members.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Testimonials"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />

      <TestimonialsSection />
    </main>
  );
}
