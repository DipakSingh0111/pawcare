import Image from "next/image";
import { MapPin, PawPrint, Star } from "lucide-react";
import data from "@/data/data.json";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-5 gap-1.5 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#0b1324]/10" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { testimonials } = data;

  return (
    <section className="site-section relative w-full overflow-hidden bg-white">
      <DotGrid className="absolute top-10 left-4 sm:left-8 lg:left-12" />
      <DotGrid className="absolute right-4 bottom-10 sm:right-8 lg:right-12" />
      <PawPrint
        className="pointer-events-none absolute top-16 right-[4%] h-40 w-40 text-[#ffb016]/10 sm:h-52 sm:w-52"
        strokeWidth={1}
        aria-hidden
      />

      <div className="site-container relative z-10">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#ffb016] sm:w-10" />
            <PawPrint
              className="h-4 w-4 text-[#ffb016]"
              strokeWidth={2.5}
              fill="#ffb016"
            />
            <p className="text-sm font-bold tracking-[0.16em] text-[#ffb016] uppercase">
              {testimonials.eyebrow}
            </p>
            <PawPrint
              className="h-4 w-4 text-[#ffb016]"
              strokeWidth={2.5}
              fill="#ffb016"
            />
            <span className="h-[2px] w-8 bg-[#ffb016] sm:w-10" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.5rem]">
            {testimonials.title.trim()}{" "}
            <span className="text-[#ffb016]">{testimonials.titleHighlight}</span>
          </h2>

          <PawPrint
            className="mx-auto mt-3 h-4 w-4 text-[#ffb016]"
            strokeWidth={2.5}
            fill="#ffb016"
          />

          <p className="mx-auto mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {testimonials.reviews.map((review) => (
            <article
              key={`${review.name}-${review.location}`}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-[#eee8df] bg-white p-6 shadow-[0_8px_28px_rgba(11,19,36,0.04)] sm:p-7"
            >
              <PawPrint
                className="pointer-events-none absolute right-3 bottom-3 h-20 w-20 text-[#7cb342]/10"
                strokeWidth={1}
                fill="currentColor"
                aria-hidden
              />

              <span
                className="mb-3 font-serif text-5xl leading-none text-[#8bc34a]/70"
                aria-hidden
              >
                “
              </span>

              <p className="relative z-10 mb-5 flex-1 text-center text-[0.95rem] leading-relaxed text-[#5a6577]">
                {review.text}
              </p>

              <div className="relative z-10 mb-5 flex items-center justify-center gap-1">
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
                    <MapPin
                      className="h-3.5 w-3.5 text-[#8bc34a]"
                      strokeWidth={2.25}
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
