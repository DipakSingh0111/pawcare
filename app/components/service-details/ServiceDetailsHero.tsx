import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import type { ServiceDetail } from "@/lib/services";

export function HeartPawIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      {/* Left half of heart (Dark Charcoal) */}
      <path
        d="M16 26.5C10.5 21.2 5.5 17 5.5 11.5 5.5 7.6 8.6 5 12.2 5c1.6 0 3 .6 3.8 2"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Right half of heart (Bright Orange) */}
      <path
        d="M16 7c.8-1.4 2.2-2 3.8-2 3.6 0 6.7 2.6 6.7 6.5 0 5.5-5 9.7-10.5 15"
        stroke={strokeOrange}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Paw inside: 4 toes in orange */}
      <circle cx="12.2" cy="13.2" r="1.1" fill={strokeOrange} />
      <circle cx="14.6" cy="11.6" r="1.1" fill={strokeOrange} />
      <circle cx="17.4" cy="11.6" r="1.1" fill={strokeOrange} />
      <circle cx="19.8" cy="13.2" r="1.1" fill={strokeOrange} />
      {/* Paw inside: main pad in orange */}
      <path
        d="M16 19.5c-1.8 0-2.9-1-2.9-2.1 0-1 1.1-1.6 2.9-1.6s2.9.6 2.9 1.6c0 1.1-1.1 2.1-2.9 2.1z"
        fill={strokeOrange}
      />
    </svg>
  );
}

export function LeafIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      {/* Stem */}
      <path
        d="M8.5 25.5L10.5 23"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Left contour of leaf */}
      <path
        d="M10.5 23C6.8 16.5 9.2 9 23 7"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center vein */}
      <path
        d="M10.5 23C13.8 17.5 17 13 21 9"
        stroke={strokeDark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Right contour top portion */}
      <path
        d="M23 7C25 11 25 14.5 23.5 18"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Right contour orange accent */}
      <path
        d="M23.5 18C21.5 21.5 16.5 23 10.5 23"
        stroke={strokeOrange}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      {/* Shield boundary */}
      <path
        d="M16 6.5C11.5 6.5 8 8 8 8v7.5c0 6.5 4.8 10.3 8 11.5 3.2-1.2 8-5 8-11.5V8s-3.5-1.5-8-1.5z"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Checkmark inside */}
      <path
        d="M12.5 15.5l2.5 2.5 5-5"
        stroke={strokeOrange}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HappyPetIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      {/* Left ear (Orange) */}
      <path
        d="M9.8 11.8L7.5 7.5c0 0 2-.8 4.2 1.8"
        stroke={strokeOrange}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right ear (Orange) */}
      <path
        d="M22.2 11.8L24.5 7.5c0 0-2-.8-4.2 1.8"
        stroke={strokeOrange}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Head circle (Dark Charcoal) */}
      <circle
        cx="16"
        cy="17"
        r="8.5"
        stroke={strokeDark}
        strokeWidth="1.75"
      />
      {/* Eyes (Dark Charcoal dots) */}
      <circle cx="13" cy="15.5" r="1.1" fill={strokeDark} />
      <circle cx="19" cy="15.5" r="1.1" fill={strokeDark} />
      {/* Smile (Orange) */}
      <path
        d="M13.5 18.5c.8 1.8 4.2 1.8 5 0"
        stroke={strokeOrange}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroIcon({ type, index }: { type: string; index?: number }) {
  switch (type) {
    case "heart_paw":
    case "heart":
    case "groomers":
    case "expert":
      return <HeartPawIcon />;
    case "leaf":
    case "products":
    case "gentle":
      return <LeafIcon />;
    case "shield_check":
    case "shield":
    case "check_shield":
    case "hygienic":
      return <ShieldCheckIcon />;
    case "happy_pet":
    case "pet":
    case "star":
    case "stress_free":
      return <HappyPetIcon />;
    default:
      if (index === 0) return <HeartPawIcon />;
      if (index === 1) return <LeafIcon />;
      if (index === 2) return <ShieldCheckIcon />;
      if (index === 3) return <HappyPetIcon />;
      return <HeartPawIcon />;
  }
}

export default function ServiceDetailsHero({ detail }: { detail: ServiceDetail }) {
  const { hero } = detail;

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
      <PawPrint
        className="pointer-events-none absolute right-[4%] top-6 h-40 w-40 text-[#ffb016]/10 sm:h-52 sm:w-52"
        strokeWidth={1}
        aria-hidden
      />

      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-[#ffb016]" strokeWidth={2.5} fill="#ffb016" />
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ffb016]">
                {hero.eyebrow}
              </p>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight text-[#0b1324] sm:text-4xl lg:text-[2.75rem]">
              {hero.title}{" "}
              <span className="text-[#ffb016]">
                {hero.titleHighlight}
                <span className="mt-1 block h-[3px] w-16 rounded-full bg-[#ffb016]" />
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
              {hero.description}
            </p>

            {/* 4 Feature Icons Row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 lg:gap-4 max-w-xl">
              {hero.features.map((feature, idx) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  <div className="mb-2.5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#ffeedb]/70 shadow-[0_2px_8px_rgba(255,176,22,0.1)] transition-transform duration-300 hover:scale-105">
                    <HeroIcon type={feature.icon} index={idx} />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0b1324] leading-tight whitespace-pre-line max-w-[110px]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={hero.primaryBtn.href}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ffb016] px-6 py-3.5 text-sm font-bold text-[#0b1324] transition-colors hover:bg-[#e09a0f]"
              >
                <CalendarDays className="h-4 w-4" strokeWidth={2.25} />
                {hero.primaryBtn.text}
              </Link>
              <Link
                href={hero.secondaryBtn.href}
                className="inline-flex items-center justify-center gap-2 rounded-md border-[1.5px] border-[#0b1324] bg-white px-6 py-3.5 text-sm font-bold text-[#0b1324] transition-colors hover:bg-[#0b1324] hover:text-white"
              >
                {hero.secondaryBtn.text}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex h-[350px] w-full max-w-[350px] items-center justify-center sm:h-[450px] sm:max-w-[450px] lg:h-full lg:max-w-none lg:min-h-[550px]">
            <div className="lg:absolute lg:right-[2%] lg:top-1/2 lg:h-[500px] lg:w-[500px] lg:-translate-y-1/2 xl:right-[5%] xl:h-[550px] xl:w-[550px]">
              <PawPrint
                className="absolute right-[12%] top-[8%] z-10 h-10 w-10 text-[#ffb016]/30 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                fill="#ffb016"
                strokeWidth={0}
                aria-hidden
              />
              {/* Offset orange border */}
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-full border-[1.5px] border-[#ffb016] lg:-translate-x-8 lg:-translate-y-6" />
              
              {/* Main image container */}
              <div className="absolute inset-0 overflow-hidden rounded-full bg-white shadow-lg">
                <Image
                  src={hero.image}
                  alt={`${hero.title} ${hero.titleHighlight}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 450px, 800px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
