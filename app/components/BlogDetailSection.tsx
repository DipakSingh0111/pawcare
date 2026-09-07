import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Bookmark,
  ChevronRight,
  PawPrint,
  ArrowRight,
} from "lucide-react";
import { site } from "@/data/index";

export default function BlogDetailSection({ 
  blog, 
  recentPosts, 
  allCategories 
}: { 
  blog: any, 
  recentPosts: any[], 
  allCategories: { name: string, href: string }[] 
}) {
  const blogDetailData = site.blogDetail;
  const { defaultReadTime, defaultIntro, tips, highlightBox, sidebar } = blogDetailData;

  const categories = allCategories.map(cat => ({
    ...cat,
    active: cat.name === blog?.category
  }));

  return (
    <section className="site-section bg-white pb-10 lg:pb-16">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Main Content */}
          <div className="lg:w-[68%] flex flex-col gap-6">
            
            {/* Header Info */}
            <div className="flex flex-col gap-4">
              <span className="text-[13px] font-bold text-[#ffb016] uppercase tracking-wider">
                {blog?.category || "Blog"}
              </span>
              <h1 className="text-3xl md:text-[2.6rem] leading-[1.2] font-extrabold text-[#0b1324] font-serif">
                {blog?.title || "Blog Title"}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mt-2 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  <span className="text-sm font-medium">{blog?.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  <span className="text-sm font-medium">{blog?.readTime || defaultReadTime}</span>
                </div>
                <div className="flex items-center gap-2 text-[#ffb016] cursor-pointer hover:text-[#e09a0f] transition-colors">
                  <Bookmark className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  <span className="text-sm font-medium">{sidebar.saveLabel}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden shadow-sm mt-2 bg-gray-100">
              <Image
                src={blog?.image || "/images/gallery/gallery_07.jpg"}
                alt={blog?.title || "Blog Image"}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8 mt-4">
              <p className="text-[#5a6577] leading-relaxed text-[15.5px]">
                {blog?.intro || defaultIntro}
              </p>

              <div className="flex flex-col">
                {(blog?.tips || tips).map((tip: any, i: number) => (
                  <div key={i} className={`flex gap-5 items-start py-6 ${i < (blog?.tips || tips).length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-[#fff8eb] flex items-center justify-center">
                      <PawPrint className="w-6 h-6 text-[#ffb016]" fill="#ffb016" />
                    </div>
                    <div className="flex flex-col gap-1.5 pt-0.5">
                      <h3 className="text-[17px] font-bold text-[#0b1324]">{tip.title}</h3>
                      <p className="text-[#5a6577] leading-relaxed text-[14.5px]">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight box */}
              <div className="mt-4 bg-[#fff7e8] rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-[#ffb016]/10">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#0b1324] flex items-center justify-center mt-1">
                  <PawPrint className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[15.5px] font-bold text-[#0b1324] mb-1">
                    {blog?.highlightBox?.title || highlightBox.title}
                  </h4>
                  <p className="text-[#5a6577] text-[14px] leading-relaxed">
                    {blog?.highlightBox?.description || highlightBox.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-[32%] flex flex-col gap-8">
            
            {/* About PawCare Widget */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <PawPrint className="w-[18px] h-[18px] text-[#ffb016]" fill="#ffb016" />
                <h3 className="text-[17px] font-bold text-[#0b1324]">{sidebar.aboutWidget.title}</h3>
              </div>
              <p className="text-[#5a6577] text-[14px] leading-relaxed">
                {sidebar.aboutWidget.description}
              </p>
              <Link href={sidebar.aboutWidget.linkHref} className="text-[#ffb016] text-[14px] font-bold flex items-center gap-1.5 hover:text-[#e09a0f] transition-colors mt-2">
                {sidebar.aboutWidget.linkLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Categories Widget */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-7 flex flex-col">
              <h3 className="text-[17px] font-bold text-[#0b1324] mb-4">{sidebar.categoriesTitle}</h3>
              <div className="flex flex-col">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={cat.href}
                    className={`flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0 transition-colors group ${
                      cat.active ? "text-[#ffb016]" : "text-[#5a6577] hover:text-[#ffb016]"
                    }`}
                  >
                    <span className={`text-[14.5px] ${cat.active ? "font-bold" : "font-medium"}`}>
                      {cat.name}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${cat.active ? "text-[#ffb016]" : "text-gray-300 group-hover:text-[#ffb016]"}`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-7 flex flex-col">
              <h3 className="text-[17px] font-bold text-[#0b1324] mb-5">{sidebar.recentPostsTitle}</h3>
              <div className="flex flex-col gap-5">
                {recentPosts.map((post, idx) => (
                  <Link href={post.href} key={idx} className="flex gap-4 group">
                    <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden relative bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <h4 className="text-[14px] font-bold text-[#0b1324] leading-snug group-hover:text-[#ffb016] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-[12px] text-gray-500 font-medium">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
