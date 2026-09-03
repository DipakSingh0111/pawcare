import PageBanner from "@/app/components/common/PageBanner";
import ServicesSection from "@/app/components/ServicesSection";

export const metadata = {
  title: "Services | PawCare",
  description: "Explore the wide range of pet care services we offer.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <div className="py-10">
        <ServicesSection />
      </div>
    </main>
  );
}
