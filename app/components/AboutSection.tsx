import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import { site, SectionProps, AboutData } from "@/data/index";

function AboutIcon({ type }: { type: string }) {
  const strokeOrange = "#f3a628";
  const common = "h-[22px] w-[22px]";

  if (type === "trusted") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          stroke={strokeOrange}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "pet-first") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        {/* Shield */}
        <path
          d="M12 3.2L18.5 5.4v5.3c0 4.1-2.8 7.9-6.5 9.1-3.7-1.2-6.5-5-6.5-9.1V5.4L12 3.2z"
          stroke={strokeOrange}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tiny Upright Paw inside shield */}
        <circle cx="10.2" cy="10.8" r="0.75" fill={strokeOrange} />
        <circle cx="13.8" cy="10.8" r="0.75" fill={strokeOrange} />
        <circle cx="8.6" cy="12.2" r="0.65" fill={strokeOrange} />
        <circle cx="15.4" cy="12.2" r="0.65" fill={strokeOrange} />
        <path
          d="M12 13.2c-1.3 0-2.2.8-2.2 1.7 0 .9.9 1.6 2.2 1.6s2.2-.7 2.2-1.6c0-.9-.9-1.7-2.2-1.7z"
          fill={strokeOrange}
        />
      </svg>
    );
  }

  if (type === "team") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        {/* Person head circle */}
        <circle cx="12" cy="8" r="3.2" stroke={strokeOrange} strokeWidth="1.8" />
        {/* Shoulders */}
        <path
          d="M6 18.5v-.8c0-2.6 2.7-4.7 6-4.7s6 2.1 6 4.7v.8"
          stroke={strokeOrange}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Quality Assured: Rosette/Ribbon with Star inside
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      {/* Rosette medallion */}
      <circle cx="12" cy="8.5" r="5.5" stroke={strokeOrange} strokeWidth="1.8" />
      {/* 5-pointed star in center */}
      <polygon
        points="12,5.2 13.2,7.7 15.8,7.9 13.8,9.6 14.4,12.2 12,10.8 9.6,12.2 10.2,9.6 8.2,7.9 10.8,7.7"
        stroke={strokeOrange}
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ribbon tails hanging down */}
      <path
        d="M9 13.5l-2.2 7 5.2-2.5 5.2 2.5-2.2-7"
        stroke={strokeOrange}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotGrid({
  cols = 4,
  rows = 4,
  className,
}: {
  cols?: number;
  rows?: number;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-[7px] ${className ?? ""}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span
          key={i}
          className="h-[4.5px] w-[4.5px] rounded-full bg-[#0b1324]/50"
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
    <div className="relative mx-auto h-[500px] w-full max-w-[500px] sm:h-[560px] sm:max-w-[550px] lg:h-[600px] lg:max-w-[580px]">
      {/* ── Top-right Dot Grid (4 cols x 3 rows) ── */}
      <DotGrid
        cols={4}
        rows={3}
        className="absolute right-[4%] top-[12%] z-0"
      />

      {/* ── Navy rounded square accent behind top-left of main image ── */}
      <div className="absolute left-[44%] top-[10%] z-0 h-[68px] w-[68px] sm:h-[82px] sm:w-[82px] rounded-[1.25rem] bg-[#0b1324]" />

      {/* ── Yellow rounded square accent overlapping top of main image ── */}
      <div className="absolute left-[49%] top-[23%] z-20 h-[52px] w-[52px] sm:h-[62px] sm:w-[62px] rounded-[1.1rem] bg-[#f3a628] shadow-sm" />

      {/* ── Bottom-left Dot Grid (4 cols x 4 rows) ── */}
      <DotGrid
        cols={4}
        rows={4}
        className="absolute bottom-[9%] left-[6%] z-0"
      />

      {/* ── Yellow rounded L-accent bottom-left corner of main image ── */}
      <div className="absolute bottom-[4%] left-[22%] z-0 h-[72px] w-[72px] sm:h-[86px] sm:w-[86px] rounded-bl-[1.75rem] rounded-tl-[1rem] rounded-br-[1rem] bg-[#f3a628]" />

      {/* ── Navy rounded accent at bottom right of main image ── */}
      <div className="absolute bottom-[1%] right-[3%] z-0 h-[50px] w-[78px] sm:h-[56px] sm:w-[90px] rounded-[1.1rem] bg-[#0b1324]" />

      {/* 1 — Top-left: Golden Retriever in Mustard Yellow frame ── */}
      <div className="absolute left-[2%] top-[3%] z-10 h-[47%] w-[42%] overflow-hidden rounded-[2.5rem] bg-[#f3a628] shadow-sm">
        <Image
          src={one}
          alt="Happy golden retriever"
          fill
          className="object-cover object-center"
          sizes="260px"
          priority
        />
      </div>

      {/* 2 — Bottom-left: Cat portrait in Dark Navy frame ── */}
      <div className="absolute bottom-[13%] left-[2%] z-10 h-[36%] w-[42%] overflow-hidden rounded-[2.25rem] bg-[#0b1324] shadow-sm">
        <Image
          src={two}
          alt="Cat portrait"
          fill
          className="object-cover object-center"
          sizes="240px"
        />
      </div>

      {/* 3 — Main Right Image: Dachshund / Pet image (wide rounded card with white border & shadow) ── */}
      <div className="absolute bottom-[4%] left-[32%] top-[15%] z-10 w-[65%] overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border-[10px] sm:border-[12px] border-white bg-[#f7f5f0] shadow-[0_18px_48px_rgba(11,19,36,0.14)]">
        <Image
          src={three}
          alt="Pet in home setting"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 460px"
          priority
        />
      </div>
    </div>
  );
}

export default function AboutSection({ data, className }: SectionProps<AboutData> = {}) {
  const componentData = data || site.about;
  const { tagline: eyebrow, title, description, images, features } = componentData;

  return (
    <section className="site-section relative overflow-hidden bg-white !pt-6 !pb-10 sm:!pt-8 sm:!pb-14 lg:!pt-10 lg:!pb-16">
      {/* Background Watermark Paw Prints in bottom-right corner */}
      <div
        className="pointer-events-none absolute -bottom-10 right-[2%] flex items-end gap-2 opacity-[0.06] select-none z-0"
        aria-hidden="true"
      >
        <PawPrint className="h-44 w-44 sm:h-60 sm:w-60 text-[#f3a628]" fill="#f3a628" strokeWidth={0} />
        <PawPrint className="h-32 w-32 sm:h-44 sm:w-44 -mb-4 text-[#f3a628]" fill="#f3a628" strokeWidth={0} />
      </div>

      <div className="site-container relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        {/* Left — Image Collage */}
        <div className="animate-fade-up">
          <AboutCollage
            one={images.one}
            two={images.two}
            three={images.three}
          />
        </div>

        {/* Right — Content */}
        <div className="animate-fade-up animation-delay-100 flex flex-col justify-center">
          {/* Eyebrow: Navy Paw Print + Mustard Yellow WHO WE ARE */}
          <div className="mb-2.5 flex items-center gap-2">
            <PawPrint
              className="h-[18px] w-[18px] text-[#0b1324]"
              strokeWidth={0}
              fill="#0b1324"
            />
            <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#f3a628]">
              {eyebrow}
            </span>
          </div>

          {/* Main Title: About PawCare */}
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.75rem] leading-tight">
            {title}
          </h2>

          {/* Divider: Mustard Yellow line ending with small outline heart */}
          <div className="mt-3.5 mb-5 flex items-center gap-2">
            <span className="h-[2.5px] w-14 rounded-full bg-[#f3a628]" />
            <Heart className="h-4 w-4 text-[#f3a628]" strokeWidth={2} fill="none" />
          </div>

          {/* Description Paragraph */}
          <p className="max-w-xl text-[14.5px] sm:text-[15px] leading-relaxed text-[#5a6577] mb-8">
            {description}
          </p>

          {/* 2×2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 max-w-xl">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3.5">
                {/* Circular navy icon button with gold outline icon */}
                <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-[#0b1324] shadow-sm">
                  <AboutIcon type={feature.icon} />
                </div>
                {/* Title and description */}
                <div className="flex flex-col">
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#0b1324] leading-snug">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-[12.5px] text-[#5a6577] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
