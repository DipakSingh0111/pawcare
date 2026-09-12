"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight, Minus, Plus } from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import { site, SectionProps, FAQData } from "@/data/index";

export default function FaqSection({
  data,
  className,
}: SectionProps<FAQData> = {}) {
  const componentData = data || site.faq;
  const faqs = componentData;
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className={`relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20 ${className || ""}`}>
      {/* ── Background Curved Dashed Track (Top-Left) ── */}
      <svg
        className="pointer-events-none absolute left-0 top-[18%] hidden w-[320px] lg:block text-[#ffab00]"
        height="120"
        viewBox="0 0 320 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0 100 Q 120 70 200 40 T 320 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.35"
        />
      </svg>

      {/* ── Background Subtle Paw Prints ── */}
      {/* Top Left Paws */}
      <PawPrint
        className="pointer-events-none absolute left-[4%] top-[14%] h-7 w-7 text-[#ffab00]/25"
        fill="#ffab00"
        strokeWidth={0}
      />
      <PawPrint
        className="pointer-events-none absolute left-[8%] top-[19%] h-5 w-5 text-[#ffab00]/20"
        fill="#ffab00"
        strokeWidth={0}
      />

      {/* Top Right Paws */}
      <PawPrint
        className="pointer-events-none absolute right-[5%] top-[12%] h-10 w-10 text-[#ffab00]/20"
        fill="#ffab00"
        strokeWidth={0}
      />

      {/* Bottom Left Paw */}
      <PawPrint
        className="pointer-events-none absolute bottom-[10%] left-[3%] h-12 w-12 text-[#ffab00]/15"
        fill="#ffab00"
        strokeWidth={0}
      />

      <div className="site-container relative z-10">
        {/* ── Section Header ── */}
        <div className="mx-auto mb-12 sm:mb-14 lg:mb-16 max-w-2xl text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-12 sm:w-16 bg-[#ffab00]" />
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#ffab00]">
              {faqs.tagline || "FAQS"}
            </p>
            <span className="h-[1.5px] w-12 sm:w-16 bg-[#ffab00]" />
          </div>

          <div className="mb-2.5 flex justify-center">
            <PawPrint className="h-3 w-3 text-[#ffab00]" fill="#ffab00" strokeWidth={0} />
          </div>

          <h2 className="text-3xl font-extrabold text-[#0b1324] sm:text-4xl lg:text-[2.75rem] tracking-tight leading-tight">
            {faqs.title} {faqs.titleHighlight}
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#5a6577] max-w-xl mx-auto">
            {faqs.description}
          </p>
        </div>

        {/* ── Two-Column Layout (Equal 50/50 Width & Stretched Height) ── */}
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* ── Left Column: Circular Image & Contact Card (Top-to-Bottom Equal Alignment) ── */}
          <div className="flex flex-col justify-between items-center gap-8 lg:gap-0 h-full">
            {/* Circular Image with Outer Orange Ring */}
            <div className="relative mx-auto flex items-center justify-center h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[340px] lg:w-[340px] xl:h-[360px] xl:w-[360px]">
              {/* Golden ring border offset */}
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-full border-[1.5px] border-[#ffab00]" />

              {/* Main Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-[7px] border-white shadow-[0_10px_32px_rgba(11,19,36,0.08)] bg-white">
                <Image
                  src={faqs.image || "/images/pets.png"}
                  alt="Pets"
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  priority
                />
              </div>
            </div>

            {/* Contact Card (Aligns with Bottom of Right Accordion) */}
            <div className="w-full max-w-[380px] sm:max-w-[420px] bg-[#fffbf2] rounded-2xl border border-[#ffab00]/25 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-10">
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffab00] shadow-sm">
                  <Heart className="h-6 w-6 text-white" fill="white" strokeWidth={0} />
                  <PawPrint
                    className="absolute h-3.5 w-3.5 text-[#ffab00]"
                    fill="#ffab00"
                    strokeWidth={0}
                  />
                </div>
                <div>
                  <h4 className="text-[17px] font-extrabold text-[#0b1324] mb-1">
                    {faqs.contactBox.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 mb-4 leading-relaxed">
                    {faqs.contactBox.description}
                  </p>
                  <Link
                    href={faqs.contactBox.buttonHref}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0b1324] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-[#0b1324]/85 hover:shadow-md"
                  >
                    <span>{faqs.contactBox.buttonText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: FAQ Accordion ── */}
          <div className="flex flex-col space-y-3">
            {faqs.items.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#ffab00] bg-[#fffdf9] shadow-sm"
                      : "border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-orange-200/70"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-4.5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div
                        className={`flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-[#ffab00] text-white shadow-sm"
                            : "border border-[#ffab00] bg-white text-[#ffab00]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" strokeWidth={3} />
                        ) : (
                          <Plus className="h-3.5 w-3.5" strokeWidth={3} />
                        )}
                      </div>
                      <span className="text-[14.5px] sm:text-[15.5px] font-bold text-[#0b1324] leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronIcon isOpen={isOpen} />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 pl-14 sm:pl-16">
                        <p className="text-sm leading-relaxed text-[#5a6577]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-[#ffab00] transition-transform duration-300 ${
        isOpen ? "-rotate-180" : "rotate-0"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
