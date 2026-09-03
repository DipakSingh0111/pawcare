import PageBanner from "@/app/components/common/PageBanner";
import ContactSection from "@/app/components/ContactSection";

export const metadata = {
  title: "Contact Us | PawCare",
  description: "Get in touch with PawCare for any questions or assistance.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <ContactSection />
    </main>
  );
}
