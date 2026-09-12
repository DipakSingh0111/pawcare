import Image from "next/image";
import { Star } from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import { LocationPin } from "@/app/components/common/LocationPin";
import { site, SectionProps, TestimonialData } from "@/data/index";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-5 gap-1.5 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#0b1324]/10" />
      ))}
    </div>
  );
}

export default function TestimonialsSection({ data, className }: SectionProps<TestimonialData> = {}) {
  const componentData = data || site.testimonial;
  const testimonials = componentData;

  return (
    <section className="site-section !pb-4 lg:!pb-6 relative w-full overflow-hidden bg-white">
      <DotGrid className="absolute top-10 left-4 sm:left-8 lg:left-12" />
      <DotGrid className="absolute right-4 bottom-10 sm:right-8 lg:right-12" />
      <PawPrint
        className="pointer-events-none absolute top-16 right-[4%] h-40 w-40 text-[#ffb016]/10 sm:h-52 sm:w-52"
        strokeWidth={1}
        aria-hidden
      />

      <div className="site-container relative z-10">
        <div className="mx-auto mb-10 max-w-4xl px-4 text-center sm:mb-12 sm:px-0">
          <div className="mb-4 flex items-center justify-center">
            <span className="h-[1.5px] w-10 shrink-0 bg-[#ffb016] sm:w-12" aria-hidden />
            <div className="mx-3 flex items-center gap-2">
              <PawPrint
                className="h-4 w-4 shrink-0 text-[#ffb016]"
                strokeWidth={2.5}
                fill="#ffb016"
              />
              <p className="text-sm font-bold tracking-[0.16em] text-[#ffb016] uppercase">
                {testimonials.tagline}
              </p>
            </div>
            <span className="h-[1.5px] w-10 shrink-0 bg-[#ffb016] sm:w-12" aria-hidden />
          </div>

          <h2 className="font-serif text-[1.35rem] font-extrabold tracking-tight text-[#0b1324] sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            {testimonials.title.trim()}{" "}
            <span className="text-[#ffb016]">{testimonials.titleHighlight}</span>
          </h2>

          <div className="mt-4 flex w-full items-center justify-center">
            <span className="h-[1.5px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
            <PawPrint
              className="mx-2.5 h-4 w-4 shrink-0 text-[#ffb016]"
              strokeWidth={2.5}
              fill="#ffb016"
            />
            <span className="h-[1.5px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
          </div>

          <p className="mx-auto mt-4 text-sm leading-relaxed text-[#5a6577] sm:text-base">
            {testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {testimonials.items.slice(0, 6).map((review) => (
            <article
              key={`${review.name}-${review.location}`}
              className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(11,19,36,0.06)] sm:p-7"
            >
              {/* Bottom-right green quarter + dots */}
              <div
                className="pointer-events-none absolute -right-1 -bottom-1 h-24 w-24 rounded-tl-[100%] bg-[#c8e6c9]/70"
                aria-hidden
              >
                <div className="absolute right-4 bottom-4 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/90" />
                  ))}
                </div>
              </div>

              <span
                className="mb-2 font-serif text-[3.25rem] leading-none text-[#a5d6a7]"
                aria-hidden
              >
                “
              </span>

              <p className="relative z-10 mb-5 flex-1 text-center text-[0.95rem] leading-[1.7] text-[#3d4656]">
                {review.quote}
              </p>

              <div className="relative z-10 mb-4 flex flex-col items-center">
                <div className="flex items-center justify-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#ffb016] text-[#ffb016]"
                    />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star
                      key={`empty-${i}`}
                      className="h-4 w-4 fill-gray-200 text-gray-200"
                    />
                  ))}
                </div>
                <span className="mt-4 h-px w-full bg-[#e8eaee]" aria-hidden />
              </div>

              <div className="relative z-10 flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0b1324]">
                    {review.name}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-[#5a6577]">
                    <LocationPin
                      className="h-3.5 w-3.5 text-[#8bc34a]"
                    />
                    {review.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
