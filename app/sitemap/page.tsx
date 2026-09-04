import PageBanner from "@/app/components/common/PageBanner";
import SitemapSection from "@/app/components/SitemapSection";

export const metadata = {
  title: "Sitemap | PawCare",
  description: "Navigate easily through PawCare with our sitemap.",
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Sitemap"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sitemap" }
        ]}
      />
      <SitemapSection />
    </main>
  );
}
