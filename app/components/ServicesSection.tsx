import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, PawPrint } from "lucide-react";
import { site, SectionProps, ServicesData } from "@/data";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-2 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#ffb016]/60" />
      ))}
    </div>
  );
}

export default function ServicesSection({
  data,
  className,
}: SectionProps<ServicesData> = {}) {
  const componentData = data || site.services;
  const {
    tagline: eyebrow,
    title,
    titleHighlight,
    description,
    items,
  } = componentData;

  return (
    <section
      className={`site-section relative overflow-hidden bg-[#F4F5F7] ${className ?? ""}`}
    >
      <DotGrid className="absolute top-8 left-4 sm:top-10 sm:left-8" />
      <PawPrint
        className="pointer-events-none absolute top-8 right-[4%] h-44 w-44 text-[#0b1324]/[0.04] sm:h-56 sm:w-56"
        strokeWidth={1}
        aria-hidden
      />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex flex-col items-center">
            <PawPrint
              className="mb-1.5 h-5 w-5 text-[#ffb016]"
              strokeWidth={2.25}
              fill="#ffb016"
            />
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ffb016] sm:w-10" />
              <p className="text-sm font-bold tracking-[0.16em] text-[#ffb016] uppercase">
                {eyebrow}
              </p>
              <span className="h-[2px] w-8 bg-[#ffb016] sm:w-10" />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.6rem]">
            {title}{" "}
            <span className="text-[#ffb016]">{titleHighlight}</span>
          </h2>

          <div className="mt-4 flex w-full items-center justify-center">
            <span className="h-[2px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
            <Heart
              className="mx-2.5 h-4 w-4 shrink-0 text-[#ffb016]"
              strokeWidth={2.25}
            />
            <span className="h-[2px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {description}
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-6 xl:gap-7">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="group flex flex-col overflow-hidden rounded-[1.35rem] bg-white shadow-[0_8px_28px_rgba(11,19,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(11,19,36,0.1)]"
            >
              {/* Image + wave cutout */}
              <div className="relative h-44 overflow-visible bg-gray-100 sm:h-48">
                <div className="absolute inset-0 overflow-hidden rounded-t-[1.35rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <svg
                  className="absolute inset-x-0 bottom-0 z-10 h-11 w-full text-white"
                  viewBox="0 0 320 44"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M0 0v44h320V0c-45 0-75 30-160 30S45 0 0 0z"
                    fill="currentColor"
                  />
                </svg>

                {/* Navy paw badge on wave */}
                <div className="absolute bottom-0 left-1/2 z-20 flex h-[58px] w-[58px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[#0b1324] shadow-md ring-[3px] ring-white outline outline-2 outline-offset-0 outline-[#ffb016] transition-transform duration-300 group-hover:-translate-y-[42%]">
                  <PawPrint
                    className="h-6 w-6 text-[#ffb016]"
                    strokeWidth={2.25}
                    fill="#ffb016"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center px-5 pt-11 pb-7 text-center">
                <h3 className="text-[1.05rem] font-bold text-[#0b1324] sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6577]">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#ffb016] transition-colors group-hover:text-[#e09a0f]">
                  Learn More
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
