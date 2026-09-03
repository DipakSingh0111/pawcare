import PageBanner from "@/app/components/common/PageBanner";
import AppointmentSection from "@/app/components/AppointmentSection";

export const metadata = {
  title: "Book an Appointment | PawCare",
  description: "Book an appointment for your pet's care at PawCare.",
};

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Book an Appointment"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Book an Appointment" }]}
      />
      <AppointmentSection />
    </main>
  );
}
