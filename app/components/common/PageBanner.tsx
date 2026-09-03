import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
  hasGradient?: boolean;
}

export default function PageBanner({ title, breadcrumbs, bgImage = "/images/page_banner_01.png", hasGradient = false }: PageBannerProps) {
  const textColor = hasGradient ? "text-white" : "text-[#0b1324]";
  const iconColor = hasGradient ? "text-white" : "text-[#0b1324]/80";
  const iconMuted = hasGradient ? "text-white/70" : "text-[#0b1324]/50";

  return (
    <section className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 z-0 ${hasGradient ? 'bg-[#e69300]' : 'bg-[#ffb016]'}`}>
        <Image
          src={bgImage}
          alt="Banner Background"
          fill
          className={`object-cover ${hasGradient ? 'object-[75%_center] lg:object-[80%_30%]' : 'object-[75%_center] md:object-[right_center]'}`}
          priority
        />
        {/* Overlay for non-gradient banners on mobile and tablet for text readability */}
        {!hasGradient && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffb016]/95 via-[#ffb016]/70 to-transparent lg:hidden w-full md:w-[75%]"></div>
        )}
        
        {hasGradient && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#e69300] via-[#ffb016]/90 to-transparent w-full md:w-[65%]"></div>
        )}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-10 w-full relative z-10">
        <h1 className="text-[2rem] leading-tight sm:text-4xl md:text-[3.25rem] font-extrabold text-[#0b1324] mb-3 sm:mb-4 font-serif">
          {title}
        </h1>

        <nav className="flex items-center space-x-2 text-sm md:text-base font-semibold">
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
                    className={`w-4 h-4 mx-2 ${iconMuted}`}
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
    </section>
  );
}
