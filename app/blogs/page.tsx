import PageBanner from "@/app/components/common/PageBanner";
import BlogsSection from "@/app/components/BlogsSection";

export const metadata = {
  title: "Blogs | PawCare",
  description: "Read our latest blogs and pet care tips.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Blogs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />
      <BlogsSection />
    </main>
  );
}
