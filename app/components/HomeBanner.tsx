import Image from "next/image";
import Link from "next/link";
import { CalendarDays, PawPrint } from "lucide-react";
import { site, SectionProps, BannerData } from "@/data";

function FeatureIcon({ type }: { type: string }) {
  const common = "h-7 w-7";

  // Premium Quality — award ribbon badge with paw
  if (type === "quality") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        {/* Badge circle */}
        <circle cx="12" cy="9" r="5.4" stroke="#ffb016" strokeWidth="1.55" />
        <circle cx="12" cy="9" r="3.55" stroke="#ffb016" strokeWidth="1.35" />
        {/* Ribbon tails */}
        <path
          d="M9.1 13.6L7.4 21l4.6-2.55L16.6 21l-1.7-7.4"
          stroke="#ffb016"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
        {/* Paw inside badge */}
        <circle cx="12" cy="9.2" r="0.85" fill="#ffb016" />
        <circle cx="10.55" cy="8.1" r="0.55" fill="#ffb016" />
        <circle cx="13.45" cy="8.1" r="0.55" fill="#ffb016" />
        <circle cx="10.85" cy="10.25" r="0.55" fill="#ffb016" />
        <circle cx="13.15" cy="10.25" r="0.55" fill="#ffb016" />
      </svg>
    );
  }

  // Expert Care — person silhouette with medical +
  if (type === "care") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <circle cx="12" cy="6.1" r="2.6" stroke="#ffb016" strokeWidth="1.55" />
        <path
          d="M6.8 20.3v-2.4c0-2.75 2.25-5 5.2-5s5.2 2.25 5.2 5v2.4"
          stroke="#ffb016"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M12 11.35v4.1M10.1 13.4h3.8"
          stroke="#ffb016"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Fast Delivery — truck with paw on cargo
  if (type === "delivery") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <path
          d="M2.8 15.4V7.6c0-.75.6-1.35 1.35-1.35h8.4c.75 0 1.35.6 1.35 1.35v7.8"
          stroke="#ffb016"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
        <path
          d="M13.9 9.2h3.35L20.5 12.5v2.9h-6.6"
          stroke="#ffb016"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="17.35" r="1.75" stroke="#ffb016" strokeWidth="1.55" />
        <circle cx="16.85" cy="17.35" r="1.75" stroke="#ffb016" strokeWidth="1.55" />
        <path d="M8.75 17.35h6.35" stroke="#ffb016" strokeWidth="1.55" />
        <circle cx="8.35" cy="10.55" r="0.7" fill="#ffb016" />
        <circle cx="7.15" cy="9.55" r="0.45" fill="#ffb016" />
        <circle cx="9.55" cy="9.55" r="0.45" fill="#ffb016" />
        <circle cx="7.4" cy="11.45" r="0.45" fill="#ffb016" />
        <circle cx="9.3" cy="11.45" r="0.45" fill="#ffb016" />
      </svg>
    );
  }

  // Pet Happiness — heart with paw inside
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
      <path
        d="M12 20.4s-7-4.2-7-9.15A3.7 3.7 0 0112 8.2a3.7 3.7 0 017 3.05c0 4.95-7 9.15-7 9.15z"
        stroke="#ffb016"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.35" r="1" fill="#ffb016" />
      <circle cx="10.45" cy="11.15" r="0.58" fill="#ffb016" />
      <circle cx="13.55" cy="11.15" r="0.58" fill="#ffb016" />
      <circle cx="10.75" cy="13.45" r="0.58" fill="#ffb016" />
      <circle cx="13.25" cy="13.45" r="0.58" fill="#ffb016" />
    </svg>
  );
}

export default function HomeBanner({ data, className }: SectionProps<BannerData> = {}) {
  const componentData = data || site.banner;
  const {
    badge,
    title,
    titleHighlight,
    description,
    ctaPrimary: primaryCta,
    ctaSecondary: secondaryCta,
    features,
    image,
  } = componentData;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="site-container relative min-h-[560px] lg:min-h-[640px]">
        {/* Hero image — baked-in left curve blends into white content area */}
        <div className="relative -mx-4 h-[300px] w-[calc(100%+2rem)] sm:-mx-6 sm:h-[360px] sm:w-[calc(100%+3rem)] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-[58%]">
          <Image
            src={image}
            alt="Happy golden retriever and tabby cat on a sofa"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="animate-image-in object-cover object-[72%_center] lg:object-left lg:object-center"
          />
        </div>

        {/* Left content — aligns with logo */}
        <div className="relative z-10 flex w-full flex-col justify-center py-10 lg:min-h-[640px] lg:w-[48%] lg:py-16">
          <p className="animate-fade-up mb-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0b1324] sm:text-[0.95rem]">
            <PawPrint className="h-4 w-4 shrink-0 text-[#0b1324]" strokeWidth={2.25} />
            <span>{badge}</span>
            <PawPrint
              className="h-4 w-4 shrink-0 text-[#ffb016]"
              strokeWidth={2.25}
              fill="#ffb016"
            />
          </p>

          <h1 className="animate-fade-up animation-delay-100 max-w-[34rem] text-[2.25rem] font-extrabold leading-[1.12] tracking-tight text-[#0b1324] sm:text-[2.75rem] lg:text-[3.15rem]">
            {title}{" "}
            <span className="text-[#ffb016]">{titleHighlight}</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-5 max-w-[28rem] text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {description}
          </p>

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 max-w-[320px] sm:max-w-none">
            <Link
              href={primaryCta.href}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#ffb016] px-6 py-3.5 text-sm font-bold text-[#0b1324] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e09a0f] hover:shadow-md sm:w-auto sm:text-base"
            >
              <PawPrint className="h-4 w-4" strokeWidth={2.5} />
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="flex w-full items-center justify-center gap-2 rounded-md border-[1.5px] border-[#0b1324] bg-white px-6 py-3.5 text-sm font-bold text-[#0b1324] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b1324] hover:text-white sm:w-auto sm:text-base"
            >
              <CalendarDays className="h-4 w-4" strokeWidth={2.25} />
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Feature bar */}
      <div className="site-container relative z-20 pb-0 lg:-mt-6">
        <div className="animate-fade-up animation-delay-400 grid grid-cols-1 overflow-hidden rounded-2xl bg-[#FDF8F3] sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const borders = [
              "border-b border-[#e8ddd0] sm:border-r lg:border-b-0",
              "border-b border-[#e8ddd0] lg:border-b-0 lg:border-r",
              "border-b border-[#e8ddd0] sm:border-b-0 sm:border-r lg:border-r",
              "",
            ];

            return (
              <div
                key={feature.title}
                className={`flex items-start gap-4 px-6 py-7 sm:px-7 ${borders[index]}`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0b1324]">
                  <FeatureIcon type={feature.icon} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0b1324]">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-[#4a5568]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

