import { site, SectionProps, PageBannerData } from "@/data/index";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
  hasGradient?: boolean;
}

export default function PageBanner({ title, breadcrumbs, bgImage = "/images/page_banner_03.webp", hasGradient = false, data, className }: PageBannerProps & SectionProps<PageBannerData>) {
  const componentData = data || site.pageBanner;
  const textColor = hasGradient ? "text-white" : "text-[#0b1324]";
  const iconColor = hasGradient ? "text-white" : "text-[#0b1324]/80";
  const iconMuted = hasGradient ? "text-white/70" : "text-[#0b1324]/50";

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 z-0 ${hasGradient ? 'bg-[#e69300]' : 'bg-[#ffb016]'}`}>
        <Image
          src={bgImage}
          alt="Banner Background"
          fill
          className={`object-cover object-center w-full h-full`}
          priority
        />
        {/* Overlay for text readability on all screen sizes */}
        {!hasGradient && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60 md:to-transparent w-full md:w-[60%] lg:w-[50%]"></div>
        )}
        
        {hasGradient && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#e69300] via-[#ffb016]/90 to-[#ffb016]/60 md:to-transparent w-full md:w-[65%]"></div>
        )}
      </div>

      <div className="site-container relative z-10">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-[2rem] leading-tight sm:text-4xl md:text-[3.25rem] font-extrabold text-[#0b1324] mb-3 sm:mb-4 font-serif break-words">
            {title}
          </h1>

          <nav className="flex flex-wrap items-center gap-y-2 gap-x-2 text-sm md:text-base font-semibold">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;

              return (
                <div key={idx} className="flex items-center">
                  {idx === 0 && (
                    <Home
                      className={`w-4 h-4 mr-1.5 ${iconColor}`}
                      strokeWidth={2.5}
                    />
                  )}
                  {idx > 0 && (
                    <ChevronRight
                      className={`w-4 h-4 mr-2 ${iconMuted}`}
                      strokeWidth={2.5}
                    />
                  )}

                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className={`${iconColor} hover:text-[#0b1324] transition-colors`}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className={isLast ? textColor : iconColor}
                    >
                      {crumb.label}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
