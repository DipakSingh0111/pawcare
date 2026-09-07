import PageBanner from "@/app/components/common/PageBanner";
import BlogDetailSection from "@/app/components/BlogDetailSection";
import { site } from "@/data/index";

import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = site.blog.posts.find((p) => p.slug === slug);
  return {
    title: blog?.title || "Blog Detail | PawCare",
    description: "Read our full blog article.",
  };
}

export function generateStaticParams() {
  return site.blog.posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  const posts = site.blog.posts;
  const activeBlog = posts.find((p) => p.slug === slug);
  const blogTitle = activeBlog?.title || "Blog Detail";

  const recentPosts = posts.filter((p) => p.slug !== slug).slice(0, 3).map((b) => {
    const dateObj = new Date(b.date || new Date());
    return {
      title: b.title,
      date: `${dateObj.toLocaleString('default', { month: 'short' })} ${dateObj.getDate()}, ${dateObj.getFullYear()}`,
      image: b.image,
      href: `/blogs/${b.slug}`,
    };
  });

  const allCategories = [
    "Pet Care Tips", 
    "Health & Wellness", 
    "Nutrition", 
    "Training & Behavior", 
    "Adoption Stories", 
    "Pet Parents Corner"
  ].map(catName => {
    const blogForCat = posts.find((b: any) => b.category === catName);
    return {
      name: catName,
      href: blogForCat ? `/blogs/${blogForCat.slug}` : "/blogs"
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
