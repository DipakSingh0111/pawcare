"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PawPrint, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { site, SectionProps, TestimonialData } from "@/data";

export default function HomeTestimonialsSection({ data, className }: SectionProps<TestimonialData> = {}) {
  const componentData = data || site.testimonial;
  const testimonials = componentData;
  const reviews = testimonials.items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState<'prev' | 'next'>('next');

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setActiveArrow('next');
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setActiveArrow('prev');
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="site-section bg-white overflow-hidden">
      <div className="site-container">
        
        {/* Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <div className="mb-4 flex items-center justify-center">
            <span className="h-[1.5px] w-10 shrink-0 bg-[#ffb016] sm:w-12" aria-hidden />
            <div className="mx-3 flex items-center gap-2">
              <PawPrint
                className="h-4 w-4 shrink-0 text-[#ffb016]"
                strokeWidth={2.5}
                fill="#ffb016"
              />
              <p className="text-sm font-bold tracking-[0.16em] text-[#ffb016] uppercase">
                {testimonials.tagline}
              </p>
            </div>
            <span className="h-[1.5px] w-10 shrink-0 bg-[#ffb016] sm:w-12" aria-hidden />
          </div>

          <h2 className="whitespace-nowrap font-serif text-[1.35rem] font-extrabold tracking-tight text-[#0b1324] sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            {testimonials.title.trim()}{" "}
            <span className="text-[#ffb016]">{testimonials.titleHighlight}</span>
          </h2>

          <div className="mt-4 mb-4 flex w-full items-center justify-center">
            <span className="h-[1.5px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
            <PawPrint
              className="mx-2.5 h-4 w-4 shrink-0 text-[#ffb016]"
              strokeWidth={2.5}
              fill="#ffb016"
            />
            <span className="h-[1.5px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
          </div>

          <p className="mx-auto whitespace-nowrap text-sm leading-relaxed text-[#5a6577] sm:text-base">
            {testimonials.description}
          </p>
        </div>

        {/* Carousel Card */}
        <div className="w-full bg-[#f8f9fa] rounded-[32px] p-8 md:p-12 lg:p-16 relative">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Image side */}
            <div className="relative shrink-0">
              <div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-[8px] border-white shadow-xl relative z-10">
                <Image
                  src={currentReview.image}
                  alt={currentReview.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 340px"
                  priority
                />
              </div>
              {/* Quote badge */}
              <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 w-16 h-16 bg-[#ffb016] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <span className="font-serif text-4xl text-[#0b1324] font-bold mt-3">“</span>
              </div>
            </div>

            {/* Content side */}
            <div className="flex-1 text-left relative min-h-[220px] flex flex-col justify-center">
              
              <div className="flex gap-1 mb-6">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffb016] text-[#ffb016]" />
                ))}
              </div>

              <p className="mb-6 text-[15px] italic leading-relaxed text-[#4a5568]">
                &quot;{currentReview.quote}&quot;
              </p>

              <div>
                <h4 className="text-[#0b1324] font-extrabold text-lg mb-1">{currentReview.name}</h4>
                <p className="text-[#5a6577] text-sm mb-3">{currentReview.role || "Pet Lover"}</p>
                <div className="w-8 h-[3px] bg-[#ffb016] rounded-full"></div>
              </div>

              {/* Controls */}
              <div className="absolute bottom-0 right-0 flex gap-3">
                <button
                  onClick={prevSlide}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors border ${
                    activeArrow === 'prev'
                      ? 'bg-[#ffb016] hover:bg-[#e69300] text-white border-transparent'
                      : 'bg-white hover:bg-gray-50 text-[#0b1324] border-gray-100'
                  }`}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors border ${
                    activeArrow === 'next'
                      ? 'bg-[#ffb016] hover:bg-[#e69300] text-white border-transparent'
                      : 'bg-white hover:bg-gray-50 text-[#0b1324] border-gray-100'
                  }`}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
