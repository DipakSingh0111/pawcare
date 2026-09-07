"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, ArrowRight, ChevronUp } from "lucide-react";
import { site, SectionProps, TeamData } from "@/data";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-2 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#d6c4a8]" />
      ))}
    </div>
  );
}

export default function TeamSection({
  data,
  className,
}: SectionProps<TeamData> = {}) {
  const team = data || site.team;
  const initialCount = team.initialCount ?? 4;
  const [expanded, setExpanded] = useState(false);

  const visibleMembers = expanded
    ? team.members
    : team.members.slice(0, initialCount);
  const hasMore = team.members.length > initialCount;

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#FAFBFC] py-14 sm:py-16 lg:py-20 ${className ?? ""}`}
    >
      <PawPrint
        className="pointer-events-none absolute top-10 left-[4%] h-36 w-36 -rotate-12 text-[#e8dcc8]/70 sm:h-48 sm:w-48"
        strokeWidth={1}
        aria-hidden
      />
      <DotGrid className="absolute top-[28%] left-[3%] z-0 sm:left-[4%]" />

      {/* Diagonal gold lines — top right */}
      <div
        className="pointer-events-none absolute top-8 right-[4%] flex flex-col gap-2 opacity-40 sm:right-[6%]"
        aria-hidden
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="h-px w-16 origin-right rotate-[-28deg] bg-[#ffb016] sm:w-20"
            style={{ marginRight: `${i * 4}px` }}
          />
        ))}
      </div>

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-8 bg-[#ffb016] sm:w-10" />
            <p className="text-[13px] font-bold tracking-[0.2em] text-[#ffb016] uppercase">
              {team.tagline}
            </p>
            <span className="h-[1.5px] w-8 bg-[#ffb016] sm:w-10" />
          </div>

          <PawPrint
            className="mx-auto mb-3 h-4 w-4 text-[#ffb016]"
            strokeWidth={2.5}
            fill="#ffb016"
          />

          <h2 className="mb-3 font-serif text-3xl font-extrabold leading-tight text-[#0b1324] md:text-4xl lg:text-[2.75rem]">
            {team.title}{" "}
            <span className="text-[#ffb016]">{team.titleHighlight}</span>
          </h2>

          <PawPrint
            className="mx-auto mb-4 h-3.5 w-3.5 text-[#ffb016]"
            strokeWidth={2.5}
            fill="#ffb016"
          />

          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-[#5a6577]">
            {team.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-8">
          {visibleMembers.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.slug || member.id}`}
              className="group flex flex-col items-center rounded-2xl border border-[#f0ebe3] bg-white p-6 text-center shadow-[0_4px_24px_rgba(11,19,36,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(11,19,36,0.08)] sm:p-7"
            >
              <div className="relative mb-6">
                {/* Gold arc accent */}
                <div className="absolute -top-1 -right-1 z-0 h-[78px] w-[78px] rounded-tr-full border-t-[2px] border-r-[2px] border-[#ffb016] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <span className="absolute top-[-6px] right-[72px] z-10 h-1.5 w-1.5 rounded-full bg-[#ffb016]" />

                <div className="relative z-10 h-[180px] w-[180px] overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md sm:h-[190px] sm:w-[190px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="190px"
                  />
                </div>
              </div>

              <h3 className="mb-1.5 font-serif text-[19px] font-bold text-[#0b1324] transition-colors group-hover:text-[#ffb016]">
                {member.name}
              </h3>
              <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-[#ffb016] uppercase">
                {member.role}
              </p>
              <p className="text-[13px] leading-relaxed text-[#5a6577]">
                {member.description}
              </p>
            </Link>
          ))}
        </div>

        {/* View Our Team — expands more members */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="group inline-flex items-center justify-center gap-2.5 rounded-md border-[1.5px] border-[#ffb016] bg-white px-8 py-3.5 text-[14px] font-bold text-[#0b1324] transition-all hover:bg-[#ffb016] hover:text-white"
              aria-expanded={expanded}
            >
              <PawPrint
                className="h-[18px] w-[18px] text-[#ffb016] transition-colors group-hover:text-white"
                strokeWidth={2.5}
                fill="currentColor"
              />
              <span className="tracking-wide">
                {expanded
                  ? team.cta?.collapseLabel || "SHOW LESS"
                  : team.cta?.label || "VIEW OUR TEAM"}
              </span>
              {expanded ? (
                <ChevronUp
                  className="h-[18px] w-[18px] text-[#ffb016] transition-colors group-hover:text-white"
                  strokeWidth={2.25}
                />
              ) : (
                <ArrowRight
                  className="h-[18px] w-[18px] text-[#ffb016] transition-colors group-hover:text-white"
                  strokeWidth={2}
                />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
