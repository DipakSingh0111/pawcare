import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Home } from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import { site, SectionProps, BlogData } from "@/data/index";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-1.5 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 15 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#ffb016]/50" />
      ))}
    </div>
  );
}

function BlogIcon({ type }: { type: string }) {
  const common = "h-4 w-4 text-[#ffb016]";

  if (type === "home") {
    return <Home className={common} strokeWidth={2} />;
  }

  if (type === "bowl") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <path
          d="M4 11h16c0 4.5-3.5 8-8 8s-8-3.5-8-8z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M7 11V9.5C7 8 8.5 7 12 7s5 1 5 2.5V11"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return <PawPrint className={common} strokeWidth={2} fill="currentColor" />;
}

export default function BlogsSection({ data, className }: SectionProps<BlogData> = {}) {
  const componentData = data || site.blog;
  const { tagline: eyebrow, title, titleHighlight, description, posts: items } = componentData;
  
  const displayItems = items.slice(0, 3);

  return (
    <section className="site-section !pt-4 lg:!pt-6 relative overflow-hidden bg-[#F7F8FA]">
      <DotGrid className="absolute left-4 top-8 sm:left-8" />
      <PawPrint
        className="pointer-events-none absolute right-[6%] top-8 h-40 w-40 text-[#0b1324]/[0.04] sm:h-52 sm:w-52"
        strokeWidth={1}
        aria-hidden
      />

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex flex-col items-center">
            <PawPrint
              className="mb-1 h-6 w-6 text-[#0b1324]"
              strokeWidth={2.25}
            />
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ffb016] sm:w-10" />
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffb016]">
                {eyebrow}
              </p>
              <span className="h-[2px] w-8 bg-[#ffb016] sm:w-10" />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.6rem]">
            {title}{" "}
            <span className="text-[#ffb016]">{titleHighlight}</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 bg-[#ffb016]" />
            <Heart className="h-4 w-4 fill-[#ffb016] text-[#ffb016]" />
            <span className="h-[2px] w-10 bg-[#ffb016]" />
          </div>

          <p className="mt-4 text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {displayItems.map((item: any) => {
            const dateObj = new Date(item.date || new Date());
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString('default', { month: 'short' });
            const year = dateObj.getFullYear();
            const href = `/blogs/${item.slug}`;

            return (
              <article
                key={href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(11,19,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(11,19,36,0.1)]"
              >
                {/* Image panel */}
                <div className="relative h-44 sm:h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 z-10 rounded-lg bg-[#0b1324] px-3 py-2 text-center shadow-md">
                    <p className="text-lg font-extrabold leading-none text-white">
                      {day}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold leading-none text-[#ffb016]">
                      {month}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-none text-white/80">
                      {year}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ffb016]/40 bg-[#fff8eb]">
                      <BlogIcon type={item.icon} />
                    </span>
                    <h3 className="text-[15px] font-bold leading-snug text-[#0b1324] sm:text-base">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#5a6577]">
                    {item.description}
                  </p>

                  <Link
                    href={href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#ffb016] transition-colors hover:text-[#e09a0f]"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
