import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ServicesSection from "./components/ServicesSection";
import LocationsSection from "./components/LocationsSection";
import HomeTestimonialsSection from "./components/HomeTestimonialsSection";
import BlogsSection from "./components/BlogsSection";
import FadeIn from "./components/common/FadeIn";

export default function Home() {
  return (
    <main className="w-full flex-1 bg-white">
      <FadeIn delay={100}>
        <HomeBanner />
      </FadeIn>
      <FadeIn delay={100}>
        <AboutSection />
      </FadeIn>
      <FadeIn delay={100}>
        <LocationsSection />
      </FadeIn>
      <FadeIn delay={100}>
        <ServicesSection />
      </FadeIn>
      <FadeIn delay={100}>
        <WhyChooseUsSection />
      </FadeIn>
      <FadeIn delay={100}>
        <HomeTestimonialsSection />
      </FadeIn>
      <FadeIn delay={100}>
        <BlogsSection  />
      </FadeIn>
    </main>
  );
}
