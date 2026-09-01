import Link from "next/link";
import { ArrowRight, Heart, PawPrint } from "lucide-react";
import data from "../../data.json";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-5 gap-1.5 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#ffb016]/55" />
      ))}
    </div>
  );
}

export default function ServicesSection() {
  const { eyebrow, title, titleHighlight, description, items } = data.services;

  return (
    <section className="relative overflow-hidden bg-[#F4F5F7] py-16 sm:py-20 lg:py-24">
      <DotGrid className="absolute left-4 top-6 sm:left-8 sm:top-10" />
      <DotGrid className="absolute bottom-6 right-4 sm:bottom-10 sm:right-8" />
      <PawPrint
        className="pointer-events-none absolute right-[8%] top-10 h-40 w-40 text-[#0b1324]/[0.04] sm:h-52 sm:w-52"
        strokeWidth={1}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex flex-col items-center">
            <PawPrint
              className="mb-1 h-5 w-5 text-[#ffb016]"
              strokeWidth={2.25}
              fill="#ffb016"
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

          <p className="mt-5 text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {description}
          </p>
        </div>

        {/* Cards — no photos */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-6 xl:gap-7">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(11,19,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(11,19,36,0.1)]"
            >
              {/* Soft top panel with concave cutout (no image) */}
              <div className="relative h-36 bg-gradient-to-br from-[#FFF6E5] via-[#F7F8FA] to-[#E8EDF5] sm:h-40">
                <svg
                  className="absolute inset-x-0 bottom-0 h-10 w-full text-white"
                  viewBox="0 0 320 40"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M0 0v40h320V0c-40 0-70 28-160 28S40 0 0 0z"
                    fill="currentColor"
                  />
                </svg>

                <div className="absolute bottom-0 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[#0b1324] shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-105">
                  <PawPrint
                    className="h-6 w-6 text-[#ffb016]"
                    strokeWidth={2.25}
                    fill="#ffb016"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-10 text-center">
                <h3 className="text-lg font-bold text-[#0b1324]">{item.title}</h3>
                <span className="mt-2 h-[2px] w-8 rounded-full bg-[#ffb016]" />
                <p className="mt-3 text-sm leading-relaxed text-[#5a6577]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#ffb016] transition-colors hover:text-[#e09a0f]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
