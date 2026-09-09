"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, Heart, ArrowRight, Minus, Plus } from "lucide-react";
import { site, SectionProps, FAQData } from "@/data/index";

export default function FaqSection({ data, className }: SectionProps<FAQData> = {}) {
  const componentData = data || site.faq;
  const faqs = componentData;
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-10 lg:py-12">
      {/* Background Decoratives */}
      <PawPrint className="pointer-events-none absolute left-[8%] top-[10%] h-8 w-8 -rotate-12 text-[#ffab00]/20" />
      <PawPrint className="pointer-events-none absolute right-[10%] top-[25%] h-12 w-12 rotate-12 text-[#ffab00]/15" />
      <PawPrint className="pointer-events-none absolute bottom-[15%] left-[5%] h-16 w-16 -rotate-[20deg] text-[#ffab00]/10" />
      <PawPrint className="pointer-events-none absolute bottom-[30%] right-[15%] h-6 w-6 rotate-[25deg] text-[#ffab00]/20" />

      {/* Curved SVG Dashed Lines */}
      <svg
        className="pointer-events-none absolute left-0 top-[15%] hidden w-full text-[#ffab00]/25 lg:block"
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
        className="pointer-events-none absolute right-0 bottom-[15%] hidden w-1/2 text-[#ffab00]/25 lg:block"
        height="120"
        viewBox="0 0 600 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 Q 300 120, 600 60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 bg-[#ffab00]/60" />
            <p className="text-lg font-bold uppercase tracking-widest text-[#ffab00]">
              {faqs.tagline}
            </p>
            <span className="h-[2px] w-10 bg-[#ffab00]/60" />
          </div>
          <PawPrint className="mx-auto mb-3 h-6 w-6 text-[#0b1324] rotate-[12deg]" />
          <h2 className="text-3xl font-extrabold text-[#0b1324] sm:text-4xl lg:text-[2.75rem] font-serif mb-4">
            {faqs.title}{" "}
            <span className="text-[#0b1324]">{faqs.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-[15px] text-slate-500 sm:text-base leading-relaxed max-w-xl mx-auto">
            {faqs.description}
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Image & Contact Box */}
          <div className="flex flex-col items-center">
            <div className="relative mx-auto flex items-center justify-center h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] mb-8">
              {/* Golden ring border */}
              <div className="absolute inset-0 rounded-full border-[1.5px] border-[#ffab00]" />

              {/* Main Image Container */}
              <div className="relative h-[95%] w-[95%] overflow-hidden rounded-full border-[6px] border-white shadow-md">
                <Image
                  src={faqs.image}
                  alt="Pets"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 340px, 420px"
                />
              </div>
            </div>

            {/* Contact Box */}
            <div className="relative mt-4 w-[90%] sm:w-[400px] bg-[#fffbf2] rounded-xl border border-orange-100 p-6 sm:p-8 shadow-sm z-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffab00]">
                  <Heart className="h-6 w-6 text-white" fill="white" />
                  <PawPrint className="absolute h-3 w-3 text-[#ffab00] fill-[#ffab00] translate-x-[2px] translate-y-[2px]" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#0b1324] mb-2">
                    {faqs.contactBox.title}
                  </h4>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {faqs.contactBox.description}
                  </p>
                  <Link
                    href={faqs.contactBox.buttonHref}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0b1324] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0b1324]/80"
                  >
                    {faqs.contactBox.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col space-y-3 lg:mt-4">
            {faqs.items.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-md border transition-all duration-300 ${
                    isOpen
                      ? "border-[#ffab00] bg-white shadow-sm"
                      : "border-gray-200 bg-white hover:border-orange-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-[#ffab00] bg-[#ffab00] text-white"
                            : "border-[#ffab00] bg-white text-[#ffab00]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" strokeWidth={3} />
                        ) : (
                          <Plus className="h-3.5 w-3.5" strokeWidth={3} />
                        )}
                      </div>
                      <span className="text-[15px] font-bold text-[#0b1324]">
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
                        <p className="text-sm leading-relaxed text-slate-500">
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
