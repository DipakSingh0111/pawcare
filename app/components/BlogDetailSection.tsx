import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Bookmark,
  ChevronRight,
  PawPrint,
  ArrowRight,
  Heart,
  Utensils,
  Stethoscope,
  Scissors,
  Activity
} from "lucide-react";

export default function BlogDetailSection({ 
  blog, 
  recentPosts, 
  allCategories 
}: { 
  blog: any, 
  recentPosts: any[], 
  allCategories: { name: string, href: string }[] 
}) {
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
                  <span className="text-sm font-medium">{blog?.month} {blog?.day}, {blog?.year}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  <span className="text-sm font-medium">6 min read</span>
                </div>
                <div className="flex items-center gap-2 text-[#ffb016] cursor-pointer hover:text-[#e09a0f] transition-colors">
                  <Bookmark className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  <span className="text-sm font-medium">Save for later</span>
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
                Our pets depend on us for their well-being, happiness, and everything in between. 
                Providing daily care not only keeps them healthy but also strengthens the beautiful bond 
                you share. Here are some simple yet effective ways to ensure your pet lives a long, happy, 
                and fulfilling life.
              </p>

              <div className="flex flex-col">
                
                <div className="flex gap-5 items-start py-6 border-b border-gray-100">
                  <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-[#fff8eb] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 14C3 17 7 19.5 12 19.5C17 19.5 21 17 21 14" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 14L6 10C6 10 8 8.5 12 8.5C16 8.5 18 10 18 10L21 14" stroke="#FFB016" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 14H21" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="10" cy="11.5" r="1" fill="#FFB016"/>
                      <circle cx="12" cy="11.5" r="1.5" fill="#FFB016"/>
                      <circle cx="14" cy="11.5" r="1" fill="#FFB016"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3 className="text-[17px] font-bold text-[#0b1324]">1. Nutritious Food for a Strong Start</h3>
                    <p className="text-[#5a6577] leading-relaxed text-[14.5px]">
                      A balanced diet is the foundation of your pet's good health. Choose high-quality pet food that meets their age, breed, size, and activity level. Always provide fresh water and avoid feeding them harmful human foods.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start py-6 border-b border-gray-100">
                  <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-[#fff8eb] flex items-center justify-center">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 10L19 12L21 10" stroke="#FFB016" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 12L17.5 9.5L19 7" stroke="#FFB016" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 16.5L4 14.5L5.5 12L8 13.5L11 13.5L13 11L15 11.5L16.5 13L16.5 15.5L14 16.5" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 13.5L7 17.5" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M11 13.5L11 17.5" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="17.5" cy="8.5" r="1" fill="#0B1324"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3 className="text-[17px] font-bold text-[#0b1324]">2. Daily Exercise Keeps Them Active</h3>
                    <p className="text-[#5a6577] leading-relaxed text-[14.5px]">
                      Regular exercise helps maintain a healthy weight, builds strong muscles, and keeps them mentally stimulated. Take your dog for walks, play fetch, or engage your cat with interactive toys.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start py-6 border-b border-gray-100">
                  <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-[#fff8eb] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#FFB016"/>
                      <circle cx="9.5" cy="8.5" r="1.2" fill="#fff"/>
                      <circle cx="14.5" cy="8.5" r="1.2" fill="#fff"/>
                      <circle cx="12" cy="6.5" r="1.4" fill="#fff"/>
                      <path d="M12 14.5C10.5 14.5 9 12.5 9 11C9 10 10 9 12 9C14 9 15 10 15 11C15 12.5 13.5 14.5 12 14.5Z" fill="#fff"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3 className="text-[17px] font-bold text-[#0b1324]">3. Regular Health Check-Ups</h3>
                    <p className="text-[#5a6577] leading-relaxed text-[14.5px]">
                      Routine vet visits help detect potential health issues early. Keep up with vaccinations, deworming, flea & tick prevention, and dental care to ensure your pet stays in top shape.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start py-6 border-b border-gray-100">
                  <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-[#fff8eb] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 9L20 3" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M12 11L18 5" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M10 13L16 7" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8 15L14 9" stroke="#0B1324" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M10 13L5 18C4 19 4 20 5 21C6 22 7 22 8 21L13 16" stroke="#FFB016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="7.5" y="7.5" width="9" height="9" transform="rotate(45 12 12)" stroke="#FFB016" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3 className="text-[17px] font-bold text-[#0b1324]">4. Grooming and Hygiene</h3>
                    <p className="text-[#5a6577] leading-relaxed text-[14.5px]">
                      Brushing your pet's coat, trimming nails, cleaning ears, and maintaining oral hygiene are essential parts of their care routine. It keeps them comfortable and prevents infections.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start py-6">
                  <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-[#fff8eb] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="#0B1324" strokeWidth="1.5"/>
                      <path d="M12 16.5L11 15.5C8 12.5 6 10.5 6 8.5C6 7 7 6 8.5 6C9.5 6 10.5 6.5 11 7.5H13C13.5 6.5 14.5 6 15.5 6C17 6 18 7 18 8.5C18 10.5 16 12.5 13 15.5L12 16.5Z" fill="#FFB016"/>
                      <path d="M14 9C14 9 15 8.5 15.5 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3 className="text-[17px] font-bold text-[#0b1324]">5. Love, Attention & Mental Stimulation</h3>
                    <p className="text-[#5a6577] leading-relaxed text-[14.5px]">
                      Pets thrive on love and companionship. Spend quality time with them, train them positively, and provide toys or activities that challenge their minds.
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer highlight box */}
              <div className="mt-4 bg-[#fff7e8] rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-[#ffb016]/10">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#0b1324] flex items-center justify-center mt-1">
                  <PawPrint className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[15.5px] font-bold text-[#0b1324] mb-1">
                    Remember: A happy pet makes a happy home!
                  </h4>
                  <p className="text-[#5a6577] text-[14px] leading-relaxed">
                    Little acts of care every day can make a big difference in your pet's life.
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
                <h3 className="text-[17px] font-bold text-[#0b1324]">About PawCare</h3>
              </div>
              <p className="text-[#5a6577] text-[14px] leading-relaxed">
                At PawCare, we're dedicated to providing compassionate care and expert advice to help pets live healthier, happier lives.
              </p>
              <Link href="/about" className="text-[#ffb016] text-[14px] font-bold flex items-center gap-1.5 hover:text-[#e09a0f] transition-colors mt-2">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Categories Widget */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-7 flex flex-col">
              <h3 className="text-[17px] font-bold text-[#0b1324] mb-4">Categories</h3>
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
              <h3 className="text-[17px] font-bold text-[#0b1324] mb-5">Recent Posts</h3>
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
