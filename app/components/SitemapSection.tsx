import Link from "next/link";
import { site, SectionProps, SitemapData } from "@/data/index";

export default function SitemapSection({ data, className }: SectionProps<SitemapData> = {}) {
  const componentData = data || site.sitemap;
  const groups = componentData.categories;

  return (
    <section className="site-section bg-white pt-16 pb-24">
      <div className="site-container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {/* First Row */}
          {groups.slice(0, 3).map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0b1324]">{group.title}</h2>
              <ul className="flex flex-col gap-3.5">
                {group.links.map((link) => (
                  <li key={link.href} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b1324] mt-0.5"></span>
                    <Link href={link.href} className="text-[#0b1324] hover:text-[#ffb016] transition-colors text-[14.5px] font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1 md:col-span-3">
            <hr className="border-gray-200 my-2" />
          </div>

          {/* Second Row */}
          {groups.slice(3).map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0b1324]">{group.title}</h2>
              <ul className="flex flex-col gap-3.5">
                {group.links.map((link) => (
                  <li key={link.href} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b1324] mt-0.5"></span>
                    <Link href={link.href} className="text-[#0b1324] hover:text-[#ffb016] transition-colors text-[14.5px] font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
