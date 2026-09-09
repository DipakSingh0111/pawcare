import Image from "next/image";
import type { ReactNode } from "react";
import { Eye, Target, Heart, Shield, Check, PawPrint, Users } from "lucide-react";
import { site, SectionProps, MissionVisionData } from "@/data/index";

function FeatureIcon({ type }: { type: string }) {
  if (type === "shield") {
    return (
      <div className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14">
        <Shield className="absolute inset-0 h-full w-full text-[#0b1324]" strokeWidth={1.5} />
        <Check className="absolute h-6 w-6 sm:h-7 sm:w-7 text-[#ffab00]" strokeWidth={3} />
      </div>
    );
  }
  if (type === "paw") {
    return (
      <div className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14">
        <PawPrint className="absolute inset-0 h-full w-full text-[#0b1324]" strokeWidth={1.5} />
      </div>
    );
  }
  if (type === "community") {
    return (
      <div className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14">
        <Users className="absolute inset-0 h-full w-full text-[#0b1324]" strokeWidth={1.5} />
        <Heart className="absolute bottom-2 h-4 w-4 sm:h-5 sm:w-5 text-[#ffab00] fill-[#ffab00]" strokeWidth={0} />
      </div>
    );
  }
  // default (heart with paw)
  return (
    <div className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14">
      <Heart className="absolute inset-0 h-full w-full text-[#0b1324]" strokeWidth={1.5} />
      <PawPrint className="absolute h-5 w-5 sm:h-6 sm:w-6 text-[#ffab00] fill-[#ffab00]" strokeWidth={0} />
    </div>
  );
}

function CircleImage({
  src,
  alt,
  badge,
  badgeSide = "right",
}: {
  src: string;
  alt: string;
  badge: ReactNode;
  badgeSide?: "left" | "right";
}) {
  return (
    <div className="relative mx-auto flex items-center justify-center h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
      {/* Golden ring border */}
      <div className="absolute inset-0 rounded-full border-[2.5px] border-[#ffab00]" />

      {/* Main Image Container */}
      <div className="relative h-[95%] w-[95%] overflow-hidden rounded-full border-[6px] border-white shadow-xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 280px, 340px"
        />
      </div>

      {/* Floating Badge */}
      <div
        className={`absolute bottom-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white shadow-lg sm:h-14 sm:w-14 ${
          badgeSide === "right" ? "right-2 sm:right-4" : "left-2 sm:left-4"
        }`}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff6e5] sm:h-10 sm:w-10">
          {badge}
        </div>
      </div>
    </div>
  );
}

export default function MissionVisionSection({ data, className }: SectionProps<MissionVisionData> = {}) {
  const componentData = data || site.missionVision;
  const { eyebrow, title, description, vision, mission } = componentData;

  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-0 sm:pt-6 lg:pt-8 lg:pb-0">
      {/* Background Decoratives */}
      <div
        className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-[#fff8ea] opacity-80 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-12 h-64 w-64 rounded-full bg-[#fff8ea] opacity-80 blur-3xl"
        aria-hidden
      />

      {/* Floating Paw Prints */}
      <PawPrint className="pointer-events-none absolute left-[6%] top-[14%] h-7 w-7 -rotate-12 text-[#ffab00]/30" />
      <PawPrint className="pointer-events-none absolute left-[10%] top-[22%] h-5 w-5 rotate-12 text-[#ffab00]/20" />
      <PawPrint className="pointer-events-none absolute right-[10%] top-[40%] h-6 w-6 rotate-[25deg] text-[#ffab00]/25" />
      <PawPrint className="pointer-events-none absolute bottom-[20%] left-[50%] -translate-x-1/2 h-5 w-5 text-[#ffab00]/40" />

      {/* Curved SVG Dashed Lines */}
      <svg
        className="pointer-events-none absolute left-0 top-[26%] hidden w-full text-[#ffab00]/30 lg:block"
        height="120"
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 Q 300 0, 600 60 T 1200 60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>
      <svg
        className="pointer-events-none absolute left-0 bottom-[28%] hidden w-full text-[#ffab00]/30 lg:block"
        height="120"
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 Q 300 120, 600 60 T 1200 60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-[#ffab00]/60" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#ffab00]">
              {eyebrow}
            </p>
            <span className="h-[1px] w-8 bg-[#ffab00]/60" />
          </div>
          <PawPrint className="mx-auto mb-2 h-6 w-6 text-[#0b1324] rotate-[12deg]" />
          <h2 className="text-3xl font-extrabold text-[#0d1b3e] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Vision Block */}
        <div className="mb-6 grid items-center gap-8 lg:mb-8 lg:grid-cols-2 lg:gap-12">
          <CircleImage
            src={vision.image}
            alt="Our Vision"
            badgeSide="right"
            badge={<Eye className="h-5 w-5 text-[#ffab00]" strokeWidth={2} />}
          />

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff6e5]">
                <Eye className="h-5 w-5 text-[#ffab00]" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-extrabold text-[#ffab00] sm:text-3xl">
                {vision.label} {vision.titleHighlight}
              </h3>
            </div>
            <span className="block h-[2px] w-12 bg-[#ffab00]" />
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base max-w-lg">
              {vision.description}
            </p>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="my-6 hidden h-px w-full bg-slate-100 lg:my-8 lg:block" />

        {/* Mission Block */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff6e5]">
                  <Target className="h-5 w-5 text-[#ffab00]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-extrabold text-[#ffab00] sm:text-3xl">
                  {mission.label} {mission.titleHighlight}
                </h3>
              </div>
              <span className="block h-[2px] w-12 bg-[#ffab00]" />
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base max-w-lg">
                {mission.description}
              </p>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-gray-200 pt-6">
              {mission.features.map(
                (feature: { title: string; icon: string }) => (
                  <div
                    key={feature.title}
                    className="flex flex-col items-center justify-start text-center px-1 sm:px-2"
                  >
                    <div className="mb-3">
                      <FeatureIcon type={feature.icon} />
                    </div>
                    <p 
                      className="text-[12px] sm:text-[14px] font-extrabold leading-tight text-[#0b1324]" 
                      style={{ textWrap: "balance" }}
                    >
                      {feature.title}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <CircleImage
              src={mission.image}
              alt="Our Mission"
              badgeSide="left"
              badge={
                <Target className="h-5 w-5 text-[#ffab00]" strokeWidth={2} />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
