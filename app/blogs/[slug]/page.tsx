import PageBanner from "@/app/components/common/PageBanner";
import BlogDetailSection from "@/app/components/BlogDetailSection";
import data from "@/data/data.json";

export const metadata = {
  title: "Blog Detail | PawCare",
  description: "Read our full blog article.",
};

export function generateStaticParams() {
  const blogs = data.blogs.items;
  return blogs.map((blog) => ({
    slug: blog.href.replace("/blogs/", ""),
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const blogs = data.blogs.items;
  const activeBlog = blogs.find((b) => b.href.includes(slug)) || blogs[0];
  const blogTitle = activeBlog.title || "Blog Detail";

  const recentPosts = blogs.slice(0, 3).map(b => ({
    title: b.title,
    date: `${b.month} ${b.day}, ${b.year}`,
    image: b.image,
    href: b.href
  }));

  const allCategories = [
    "Pet Care Tips", 
    "Health & Wellness", 
    "Nutrition", 
    "Training & Behavior", 
    "Adoption Stories", 
    "Pet Parents Corner"
  ].map(catName => {
    const blogForCat = blogs.find(b => b.category === catName);
    return {
      name: catName,
      href: blogForCat ? blogForCat.href : "/blogs"
    };
  });

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Blogs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: blogTitle }
        ]}
      />
      <div className="pt-2 pb-0">
        <BlogDetailSection 
          blog={activeBlog} 
          recentPosts={recentPosts} 
          allCategories={allCategories} 
        />
      </div>
    </main>
  );
}
