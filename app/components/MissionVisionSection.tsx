import Image from "next/image";
import { Heart, Shield, Check } from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import { site, SectionProps, MissionVisionData } from "@/data/index";

/**
 * Stylized Eye icon with eyelashes/rays matching the design
 */
function StylizedEye({ className = "h-6 w-6 text-[#ffb016]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 12s3.8-6 10-6 10 6 10 6-3.8 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="3.8" />
      <line x1="7" y1="3.8" x2="8" y2="5.2" />
      <line x1="17" y1="3.8" x2="16" y2="5.2" />
    </svg>
  );
}

/**
 * Stylized Target / Bullseye icon with arrow matching the design
 */
function StylizedTarget({ className = "h-6 w-6 text-[#ffb016]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="m19 5-6 6" strokeWidth="2.2" />
      <path d="m15 5h4v4" />
    </svg>
  );
}

export default function MissionVisionSection({
  data,
  className,
}: SectionProps<MissionVisionData> = {}) {
  const componentData = data || site.missionVision;
  const { eyebrow, title, description, vision, mission } = componentData as any;

  return (
    <section
      className={`relative overflow-hidden bg-white py-8 sm:py-12 lg:py-14 ${className || ""}`}
    >
      {/* ── Soft Blurred Peach Background Circles ── */}
      <div
        className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#fef5e8] opacity-75 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#fef5e8] opacity-80 blur-3xl"
        aria-hidden="true"
      />
      {/* Subtle visible peach circle contour on bottom-right (as in design) */}
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#fdeed6]/40 hidden lg:block"
        aria-hidden="true"
      />

      {/* ── Background Curved Dashed Tracks ── */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block text-[#ffb016]"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Top-left track */}
        <path
          d="M 10 200 Q 80 190 130 160 T 260 140"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.35"
        />
        {/* Right middle track */}
        <path
          d="M 1120 440 Q 1240 420 1320 380 T 1440 360"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.35"
        />
      </svg>

      {/* ── Walking Paw Prints in Background ── */}
      {/* Top Left Paws */}
      <PawPrint
        className="pointer-events-none absolute left-[6%] top-[17%] h-7 w-7 text-[#ffb016]/30"
        fill="#ffb016"
        strokeWidth={0}
      />
      <PawPrint
        className="pointer-events-none absolute left-[10%] top-[13%] h-6 w-6 text-[#ffb016]/25"
        fill="#ffb016"
        strokeWidth={0}
      />
      <PawPrint
        className="pointer-events-none absolute left-[13%] top-[10%] h-5 w-5 text-[#ffb016]/20"
        fill="#ffb016"
        strokeWidth={0}
      />

      {/* Top Right Paws */}
      <PawPrint
        className="pointer-events-none absolute right-[10%] top-[13%] h-8 w-8 text-[#ffb016]/25"
        fill="#ffb016"
        strokeWidth={0}
      />
      <PawPrint
        className="pointer-events-none absolute right-[6%] top-[17%] h-6 w-6 text-[#ffb016]/30"
        fill="#ffb016"
        strokeWidth={0}
      />

      {/* Far Right Middle Paw */}
      <PawPrint
        className="pointer-events-none absolute right-[7%] top-[45%] h-5 w-5 text-[#ffb016]/40"
        fill="#ffb016"
        strokeWidth={0}
      />

      <div className="site-container relative z-10">
        {/* ── Header Section ── */}
        <div className="mx-auto mb-8 sm:mb-10 lg:mb-12 max-w-2xl text-center">
          {/* Eyebrow flanked by thin orange lines */}
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-12 sm:w-16 bg-[#ffb016]" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#ffb016] uppercase">
              {eyebrow || "OUR PURPOSE"}
            </span>
            <span className="h-[1.5px] w-12 sm:w-16 bg-[#ffb016]" />
          </div>

          {/* Small paw centered directly below the label */}
          <div className="mb-2.5 flex justify-center">
            <PawPrint className="h-3 w-3 text-[#ffb016]" fill="#ffb016" strokeWidth={0} />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl font-extrabold text-[#0b1324] sm:text-4xl lg:text-[2.75rem] tracking-tight leading-tight">
            {title || "Our Mission & Vision"}
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#6b7280]">
            {description ||
              "Guided by love, driven by purpose – our mission and vision inspire everything we do for pets and the people who love them."}
          </p>
        </div>

        {/* ── ROW 1: Our Vision ── */}
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left: Circular Image with Offset Orange Ring & Eye Badge */}
          <div className="flex justify-center">
            <div className="relative h-[270px] w-[270px] sm:h-[310px] sm:w-[310px] lg:h-[340px] lg:w-[340px] xl:h-[360px] xl:w-[360px]">
              {/* Outer thin orange ring offset slightly towards top-left */}
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 sm:-translate-x-3 sm:-translate-y-3 rounded-full border-[1.5px] border-[#ffb016]" />

              {/* Main Image in clean circular frame with white border */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] sm:border-[8px] border-white shadow-[0_10px_32px_rgba(11,19,36,0.08)] bg-[#fffbf2]">
                <Image
                  src={vision?.image || "/images/pets.png"}
                  alt="Happy dog and cat"
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 640px) 270px, (max-width: 1024px) 310px, 360px"
                  priority
                />
              </div>

              {/* Overlapping badge at bottom-right */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10 flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.12)] border border-gray-100 p-2.5">
                <StylizedEye className="h-6 w-6 sm:h-7 sm:w-7 text-[#ffb016]" />
              </div>
            </div>
          </div>

          {/* Right: Vision Text Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-[#fff5e5] border border-[#ffb016]/30">
                <StylizedEye className="h-5 w-5 sm:h-6 sm:w-6 text-[#ffb016]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#0b1324] tracking-tight">
                  {vision?.label || "Our"}{" "}
                  <span className="text-[#ffb016]">{vision?.titleHighlight || "Vision"}</span>
                </h3>
              </div>
            </div>

            {/* Short horizontal orange line */}
            <div className="h-[2.5px] w-12 rounded-full bg-[#ffb016] mt-1 mb-4" />

            {/* Paragraph */}
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#4a5568]">
              {vision?.description ||
                "A world where every pet is healthy, happy, and loved. We envision a compassionate community where pets receive the best care, respect, and a nurturing environment to thrive."}
            </p>
          </div>
        </div>

        {/* ── Center Dividing Paw (Tight dynamic spacing) ── */}
        <div className="my-3 sm:my-4 lg:my-5 flex items-center justify-center">
          <PawPrint className="h-4 w-4 text-[#ffb016]" fill="#ffb016" strokeWidth={0} />
        </div>

        {/* ── ROW 2: Our Mission ── */}
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left: Mission Text Content & 4 Value Icons */}
          <div className="order-2 lg:order-1 max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-[#fff5e5] border border-[#ffb016]/30">
                <StylizedTarget className="h-5 w-5 sm:h-6 sm:w-6 text-[#ffb016]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#0b1324] tracking-tight">
                  {mission?.label || "Our"}{" "}
                  <span className="text-[#ffb016]">{mission?.titleHighlight || "Mission"}</span>
                </h3>
              </div>
            </div>

            {/* Short horizontal orange line */}
            <div className="h-[2.5px] w-12 rounded-full bg-[#ffb016] mt-1 mb-4" />

            {/* Paragraph */}
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#4a5568]">
              {mission?.description ||
                "To provide exceptional pet care services with compassion, integrity, and expertise. We are committed to enhancing the well-being of pets and building lasting relationships with pet parents through trust and dedication."}
            </p>

            {/* ── 4 Core Pillar Items Row ── */}
            <div className="mt-6 pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0 sm:divide-x sm:divide-gray-200">
              {/* 1. Compassionate Care */}
              <div className="flex flex-col items-center text-center px-1 sm:px-2">
                <div className="relative mb-2 flex h-9 w-9 items-center justify-center">
                  <Heart className="h-7 w-7 text-[#0b1324]" strokeWidth={1.65} fill="none" />
                  <PawPrint
                    className="absolute h-3 w-3 text-[#ffb016]"
                    fill="#ffb016"
                    strokeWidth={0}
                  />
                </div>
                <span className="text-[11.5px] sm:text-[12px] font-bold text-[#0b1324] leading-tight">
                  Compassionate<br />Care
                </span>
              </div>

              {/* 2. Trusted & Reliable */}
              <div className="flex flex-col items-center text-center px-1 sm:px-2">
                <div className="relative mb-2 flex h-9 w-9 items-center justify-center">
                  <Shield className="h-7 w-7 text-[#0b1324]" strokeWidth={1.65} fill="none" />
                  <Check className="absolute h-3.5 w-3.5 text-[#ffb016]" strokeWidth={3} />
                </div>
                <span className="text-[11.5px] sm:text-[12px] font-bold text-[#0b1324] leading-tight">
                  Trusted &<br />Reliable
                </span>
              </div>

              {/* 3. Pet Well-being First */}
              <div className="flex flex-col items-center text-center px-1 sm:px-2">
                <div className="mb-2 flex h-9 w-9 items-center justify-center">
                  <PawPrint className="h-7 w-7 text-[#0b1324]" strokeWidth={1.65} fill="none" />
                </div>
                <span className="text-[11.5px] sm:text-[12px] font-bold text-[#0b1324] leading-tight">
                  Pet Well-being<br />First
                </span>
              </div>

              {/* 4. Stronger Together Every Day */}
              <div className="flex flex-col items-center text-center px-1 sm:px-2">
                <div className="relative mb-2 flex h-9 w-9 items-center justify-center">
                  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="3.5" stroke="#0b1324" strokeWidth="1.65" />
                    <path
                      d="M5 23c0-3.3 2.7-6 6-6s6 2.7 6 6"
                      stroke="#0b1324"
                      strokeWidth="1.65"
                      strokeLinecap="round"
                    />
                    <circle cx="21" cy="11" r="3.5" stroke="#0b1324" strokeWidth="1.65" />
                    <path
                      d="M15 23c0-3.3 2.7-6 6-6s6 2.7 6 6"
                      stroke="#0b1324"
                      strokeWidth="1.65"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 19.5 C15.2 18.5 14 18.8 14 19.8 C14 20.8 16 22 16 22 C16 22 18 20.8 18 19.8 C18 18.8 16.8 18.5 16 19.5 Z"
                      fill="#ffb016"
                    />
                  </svg>
                </div>
                <span className="text-[11.5px] sm:text-[12px] font-bold text-[#0b1324] leading-tight">
                  Stronger Together<br />Every Day
                </span>
              </div>
            </div>
          </div>

          {/* Right: Circular Image with Offset Orange Ring & Target Badge */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative h-[270px] w-[270px] sm:h-[310px] sm:w-[310px] lg:h-[340px] lg:w-[340px] xl:h-[360px] xl:w-[360px]">
              {/* Outer thin orange ring offset slightly towards top-left */}
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 sm:-translate-x-3 sm:-translate-y-3 rounded-full border-[1.5px] border-[#ffb016]" />

              {/* Main Image in clean circular frame with white border */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] sm:border-[8px] border-white shadow-[0_10px_32px_rgba(11,19,36,0.08)] bg-[#fffbf2]">
                <Image
                  src={mission?.image || "/images/pets.png"}
                  alt="Happy dog and cat"
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 640px) 270px, (max-width: 1024px) 310px, 360px"
                  priority
                />
              </div>

              {/* Overlapping badge at bottom-left */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10 flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.12)] border border-gray-100 p-2.5">
                <StylizedTarget className="h-6 w-6 sm:h-7 sm:w-7 text-[#ffb016]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
