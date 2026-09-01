import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import LocationsSection from "./components/LocationsSection";

export default function Home() {
  return (
    <main className="w-full flex-1 bg-white">
      <HomeBanner />
      <AboutSection />
      <LocationsSection />
      <ServicesSection />
    </main>
  );
}
