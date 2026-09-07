import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, PawPrint } from "lucide-react";
import { site, SectionProps, AboutData } from "@/data";

function AboutIcon({ type }: { type: string }) {
  const common = "h-5 w-5";

  if (type === "trusted") {
    return (
      <Heart
        className={common}
        stroke="#ffb016"
        strokeWidth={1.75}
        fill="none"
      />
    );
  }

  if (type === "pet-first") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <path
          d="M12 3.2l6.5 2.2v5.3c0 4.1-2.8 7.9-6.5 9.1-3.7-1.2-6.5-5-6.5-9.1V5.4L12 3.2z"
          stroke="#ffb016"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="1.15" fill="#ffb016" />
        <circle cx="10.4" cy="9.7" r="0.7" fill="#ffb016" />
        <circle cx="13.6" cy="9.7" r="0.7" fill="#ffb016" />
        <circle cx="10.7" cy="12.2" r="0.7" fill="#ffb016" />
        <circle cx="13.3" cy="12.2" r="0.7" fill="#ffb016" />
      </svg>
    );
  }

  if (type === "team") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <circle cx="12" cy="8" r="2.6" stroke="#ffb016" strokeWidth="1.6" />
        <path
          d="M6.5 19v-1.4c0-2.5 2.3-4.5 5.5-4.5s5.5 2 5.5 4.5V19"
          stroke="#ffb016"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
      <path
        d="M12 3l1.4 3.1 3.4.4-2.6 2.4.8 3.3L12 10.6 9 12.2l.8-3.3-2.6-2.4 3.4-.4L12 3z"
        stroke="#ffb016"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.2l-1.2 6.5L12 17.5l4.2 2.2-1.2-6.5"
        stroke="#ffb016"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotGrid({ className }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-4 gap-[5px] ${className ?? ""}`}
      aria-hidden
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className="h-[5px] w-[5px] rounded-full bg-[#0b1324]/35"
        />
      ))}
    </div>
  );
}

function AboutCollage({
  one,
  two,
  three,
}: {
  one: string;
  two: string;
  three: string;
}) {
  return (
    <div className="relative mx-auto h-[480px] w-full max-w-[480px] sm:h-[560px] lg:mx-0 lg:h-[580px] lg:max-w-[520px]">

      {/* ── Gold rectangle behind top-left photo ── */}
      <div className="absolute left-[0%] top-[2%] z-[1] h-[47%] w-[43%] rounded-[2.25rem] bg-[#ffb016]" />

      {/* ── Gold rounded bar bottom-center ── */}
      <div className="absolute bottom-[3%] left-[24%] z-[1] h-[16%] w-[48%] rounded-[1.5rem] bg-[#ffb016]" />

      {/* ── Navy square accent top-right of left column ── */}
      <div className="absolute left-[30%] top-[7%] z-[2] h-[12%] w-[13%] rounded-[1rem] bg-[#0b1324]" />

      {/* ── Small gold square accent ── */}
      <div className="absolute left-[35%] top-[18%] z-[6] h-[7%] w-[8%] rounded-[0.75rem] bg-[#ffb016]" />

      {/* ── Dot grids ── */}
      <DotGrid className="absolute right-[2%] top-[2%] z-[2]" />
      <DotGrid className="absolute bottom-[2%] left-[1%] z-[2]" />

      {/* 1 — Top-left: Dog photo (gold border) */}
      <div className="absolute left-[3%] top-[4%] z-10 h-[43%] w-[39%] overflow-hidden rounded-[2rem] border-[10px] border-[#ffb016] bg-[#ffb016] shadow-md sm:border-[12px]">
        <Image
          src={one}
          alt="Happy dog"
          fill
          className="object-cover object-top"
          sizes="210px"
          priority
        />
      </div>

      {/* 2 — Bottom-left: Cat photo (navy border, smaller) */}
      <div className="absolute bottom-[10%] left-[3%] z-30 h-[35%] w-[36%] overflow-hidden rounded-[1.75rem] border-[10px] border-[#0b1324] bg-[#0b1324] shadow-lg sm:border-[12px]">
        <Image
          src={two}
          alt="Cat portrait"
          fill
          className="object-cover object-center"
          sizes="190px"
        />
      </div>

      {/* 3 — Big tall centre-right: Woman with puppy */}
      <div className="absolute bottom-[6%] left-[37%] top-[8%] z-20 w-[60%] overflow-hidden rounded-[2rem] border-[8px] border-white bg-white shadow-[0_16px_48px_rgba(11,19,36,0.16)] sm:border-[10px]">
        <Image
          src={three}
          alt="Woman with puppy"
          fill
          className="object-cover object-top"
          sizes="320px"
        />
      </div>
    </div>
  );
}

export default function AboutSection({ data, className }: SectionProps<AboutData> = {}) {
  const componentData = data || site.about;
  const { tagline: eyebrow, title, description, images, features, cta } = componentData;

  return (
    <section className="site-section relative overflow-hidden bg-white !pb-4 sm:!pb-5 lg:!pb-6">
      <PawPrint
        className="pointer-events-none absolute -bottom-6 right-[6%] h-40 w-40 text-[#f3ebe1] sm:h-56 sm:w-56"
        strokeWidth={1}
        aria-hidden
      />
      <PawPrint
        className="pointer-events-none absolute bottom-20 right-[20%] h-24 w-24 rotate-[18deg] text-[#f6f0e8] sm:h-36 sm:w-36"
        strokeWidth={1}
        aria-hidden
      />

      <div className="site-container relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* Left — Collage */}
        <div className="animate-fade-up">
          <AboutCollage
            one={images.one}
            two={images.two}
            three={images.three}
          />
        </div>

        {/* Right — Content */}
        <div className="animate-fade-up animation-delay-100">
          {/* Eyebrow */}
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#ffb016]">
            <PawPrint
              className="h-4 w-4 text-[#0b1324]"
              strokeWidth={2.5}
              fill="#0b1324"
            />
            {eyebrow}
          </p>

          {/* Title */}
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0b1324] sm:text-5xl lg:text-[3rem]">
            {title}
          </h2>

          {/* Gold divider + heart */}
          <div className="mt-4 flex items-center gap-3">
            <span className="h-[3px] w-12 rounded-full bg-[#ffb016]" />
            <Heart className="h-4 w-4 text-[#ffb016]" strokeWidth={1.75} fill="none" />
          </div>

          {/* Description */}
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {description}
          </p>

          {/* 2×2 Feature grid */}
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0b1324]">
                  <AboutIcon type={feature.icon} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold leading-snug text-[#0b1324] sm:text-[15px]">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] leading-snug text-[#5a6577]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={cta.href}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ffb016] px-6 py-3.5 text-sm font-bold text-[#0b1324] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e09a0f] hover:shadow-md sm:text-[15px]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b1324]">
              <PawPrint
                className="h-3.5 w-3.5 text-white"
                strokeWidth={2.5}
                fill="white"
              />
            </span>
            <span>{cta.label}</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
