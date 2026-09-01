import Image from "next/image";
import Link from "next/link";
import { CalendarDays, PawPrint } from "lucide-react";
import data from "../../data.json";

function FeatureIcon({ type }: { type: string }) {
  const common = "h-7 w-7";

  if (type === "quality") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <path
          d="M12 2.2l1.55 3.35 3.7.4-2.8 2.55.85 3.55L12 10.4 8.7 12.05l.85-3.55-2.8-2.55 3.7-.4L12 2.2z"
          stroke="#ffb016"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8.8 13l-1.35 7.2L12 17.8l4.55 2.4L15.2 13"
          stroke="#ffb016"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.55 7.1c.2-.55.7-.9 1.45-.9s1.25.35 1.45.9c.12.35-.05.7-.4.9l-.7.4.25.75c.1.3-.05.6-.35.7-.55.2-1.15.2-1.7 0-.3-.1-.45-.4-.35-.7l.25-.75-.7-.4c-.35-.2-.52-.55-.4-.9z"
          fill="#ffb016"
        />
      </svg>
    );
  }

  if (type === "care") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <circle cx="12" cy="6.2" r="2.35" stroke="#ffb016" strokeWidth="1.5" />
        <path
          d="M7.2 20.2v-3c0-2.4 2-4.35 4.8-4.35s4.8 1.95 4.8 4.35v3"
          stroke="#ffb016"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 10.8v3.4M10.3 12.5h3.4"
          stroke="#ffb016"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "delivery") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <path
          d="M3 15.2V8.5c0-.7.55-1.25 1.25-1.25h8.2c.7 0 1.25.55 1.25 1.25v6.7"
          stroke="#ffb016"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13.7 10h3.15L19.7 13v2.2h-6"
          stroke="#ffb016"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="7.1" cy="17" r="1.65" stroke="#ffb016" strokeWidth="1.5" />
        <circle cx="16.9" cy="17" r="1.65" stroke="#ffb016" strokeWidth="1.5" />
        <path d="M8.75 17h6.5" stroke="#ffb016" strokeWidth="1.5" />
        <circle cx="9" cy="11" r="1.05" fill="#ffb016" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
      <path
        d="M12 20s-6.6-4.05-6.6-8.85A3.55 3.55 0 0112 8.05a3.55 3.55 0 016.6 3.1C18.6 15.95 12 20 12 20z"
        stroke="#ffb016"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.15" r="1.15" fill="#ffb016" />
      <circle cx="10.55" cy="10.9" r="0.65" fill="#ffb016" />
      <circle cx="13.45" cy="10.9" r="0.65" fill="#ffb016" />
      <circle cx="10.85" cy="13.3" r="0.65" fill="#ffb016" />
      <circle cx="13.15" cy="13.3" r="0.65" fill="#ffb016" />
    </svg>
  );
}

export default function HomeBanner() {
  const {
    badge,
    title,
    titleHighlight,
    description,
    primaryCta,
    secondaryCta,
    features,
    image,
  } = data.banner;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative mx-auto min-h-[560px] max-w-[1440px] lg:min-h-[640px]">
        {/* Hero image — baked-in left curve blends into white content area */}
        <div className="relative h-[300px] w-full sm:h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]">
          <Image
            src={image}
            alt="Happy golden retriever and tabby cat on a sofa"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="animate-image-in object-cover object-[72%_center] lg:object-left lg:object-center"
          />
        </div>

        {/* Left content */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-10 sm:px-10 md:px-14 lg:min-h-[640px] lg:w-[48%] lg:py-16 xl:px-20">
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

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 rounded-md bg-[#ffb016] px-6 py-3.5 text-sm font-bold text-[#0b1324] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e09a0f] hover:shadow-md sm:text-base"
            >
              <PawPrint className="h-4 w-4" strokeWidth={2.5} />
              {primaryCta.text}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-md border-[1.5px] border-[#0b1324] bg-white px-6 py-3.5 text-sm font-bold text-[#0b1324] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b1324] hover:text-white sm:text-base"
            >
              <CalendarDays className="h-4 w-4" strokeWidth={2.25} />
              {secondaryCta.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Feature bar */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:-mt-6 lg:px-10">
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
