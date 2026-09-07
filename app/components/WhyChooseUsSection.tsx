import Image from "next/image";
import { PawPrint, Heart } from "lucide-react";
import { site, SectionProps, WhyChooseUsData } from "@/data";

function WhyIcon({ type }: { type: string }) {
  const common = "w-10 h-10";

  if (type === "doctor") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={common}
        fill="none"
        stroke="#0b1324"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5 22v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" />
        <path d="M12 11v3" stroke="#ffb016" strokeWidth="2" />
        <path d="M10.5 12.5h3" stroke="#ffb016" strokeWidth="2" />
        <circle cx="15.5" cy="15.5" r="3.5" fill="white" stroke="#0b1324" />
        <path d="M15.5 13.5v4M13.5 15.5h4" stroke="#ffb016" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "ribbon") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={common}
        fill="none"
        stroke="#0b1324"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="8" r="6" />
        <path
          d="M12 5l1 2 2 .5-1.5 1.5.5 2L12 10l-2 1 .5-2L9 7.5l2-.5L12 5z"
          fill="#ffb016"
          stroke="#ffb016"
        />
        <path d="M8.5 12.5L5 22l4-2 3 2 3-2 4 2-3.5-9.5" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={common}
        fill="none"
        stroke="#0b1324"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" stroke="#ffb016" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={common}
        fill="none"
        stroke="#0b1324"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l3 3" />
        <text
          x="12"
          y="16"
          fontSize="6"
          fontWeight="bold"
          fill="#ffb016"
          stroke="none"
          textAnchor="middle"
        >
          24
        </text>
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={common}
        fill="none"
        stroke="#0b1324"
        strokeWidth="1.5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <circle cx="9.5" cy="11.5" r="1" fill="#ffb016" stroke="none" />
        <circle cx="10.5" cy="9.5" r="1" fill="#ffb016" stroke="none" />
        <circle cx="13.5" cy="9.5" r="1" fill="#ffb016" stroke="none" />
        <circle cx="14.5" cy="11.5" r="1" fill="#ffb016" stroke="none" />
        <path
          d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          fill="#ffb016"
          stroke="none"
        />
      </svg>
    );
  }

  if (type === "house") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={common}
        fill="none"
        stroke="#0b1324"
        strokeWidth="1.5"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
        <circle cx="10" cy="15" r="0.75" fill="#ffb016" stroke="none" />
        <circle cx="11" cy="13.5" r="0.75" fill="#ffb016" stroke="none" />
        <circle cx="13" cy="13.5" r="0.75" fill="#ffb016" stroke="none" />
        <circle cx="14" cy="15" r="0.75" fill="#ffb016" stroke="none" />
        <path
          d="M12 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          fill="#ffb016"
          stroke="none"
        />
      </svg>
    );
  }

  return null;
}

export default function WhyChooseUsSection({ data, className }: SectionProps<WhyChooseUsData> = {}) {
  const componentData = data || site.whyChooseUs;
  

  return (
    <section className="site-section w-full overflow-hidden bg-white !pt-4 sm:!pt-6 lg:!pt-8">
      <div className="site-container">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-px w-8 bg-[#ffb016]"></div>
            <PawPrint className="w-6 h-6 text-[#0b1324]" />
            <span className="text-[#ffb016] font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              {componentData.tagline}
            </span>
            <div className="h-px w-8 bg-[#ffb016]"></div>
          </div>

          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#0b1324] mb-4 font-serif">
            {componentData.title}{" "}
            <span className="text-[#ffb016]">{componentData.titleHighlight}</span>
          </h2>

          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-[1.5px] w-10 bg-[#ffb016]/50"></div>
            <Heart
              className="w-[18px] h-[18px] text-[#ffb016] fill-none"
              strokeWidth={2}
            />
            <div className="h-[1.5px] w-10 bg-[#ffb016]/50"></div>
          </div>

          <p className="text-[#5a6577] max-w-2xl text-[15px] leading-relaxed whitespace-pre-line mx-auto">
            {componentData.description}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-10 xl:gap-14 items-stretch">
          {/* Left Side (Image Area) */}
          <div className="relative w-full h-[500px] lg:h-auto mt-4 lg:mt-0 flex flex-col justify-between">
            {/* Background elements */}
            <div className="absolute -top-3 -left-3 w-32 h-32 border-t-[1.5px] border-l-[1.5px] border-[#ffb016] rounded-tl-[80px] z-0"></div>

            {/* Main Image */}
            <div className="w-[92%] h-[75%] lg:h-[82%] rounded-t-[80px] rounded-bl-[80px] rounded-br-none bg-gray-200 flex items-center justify-center overflow-hidden relative z-10 mx-auto lg:mx-0">
              <Image
                src="/images/pets.png"
                alt="Pets"
                fill
                className="object-cover object-center"
              />

              {/* Floating Heart Icon Top Right */}
              <div className="absolute top-5 right-5 bg-[#0b1324] rounded-xl p-3 shadow-lg z-20">
                <Heart className="w-5 h-5 text-[#ffb016]" strokeWidth={2.5} />
              </div>
            </div>

            {/* Overlapping Blue Card */}
            <div className="absolute bottom-0 left-0 w-full lg:w-[95%] bg-[#0b1324] rounded-[24px] p-6 lg:p-7 flex flex-col justify-center z-20 shadow-xl min-h-[160px]">
              {/* Dot pattern background inside card */}
              <div className="absolute bottom-4 right-4 opacity-50 pointer-events-none">
                <svg width="40" height="40" fill="none" viewBox="0 0 100 100">
                  <pattern
                    id="dots-card"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle fill="#ffffff" cx="3" cy="3" r="2.5"></circle>
                  </pattern>
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    fill="url(#dots-card)"
                  ></rect>
                </svg>
              </div>

              {/* Yellow Square bottom left */}
              <div className="absolute -bottom-2 -left-2 w-7 h-7 bg-[#ffb016] rounded-md z-30"></div>

              <div className="flex items-start gap-4 mb-3 relative z-10">
                <div className="flex-shrink-0 w-11 h-11 bg-[#ffb016] rounded-full flex items-center justify-center shadow-inner mt-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M12 21a5 5 0 0 1-5-5c0-2.5 3-5 5-5s5 2.5 5 5a5 5 0 0 1-5 5z" />
                    <circle cx="8" cy="11" r="2.5" />
                    <circle cx="16" cy="11" r="2.5" />
                    <circle cx="12" cy="7" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                    {componentData.leftCard.title} <br />
                    <span className="text-[#ffb016]">
                      {componentData.leftCard.titleHighlight}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/10 my-2 relative z-10"></div>

              <p className="text-white/80 text-xs md:text-sm leading-relaxed relative z-10 pr-6 mt-1">
                {componentData.leftCard.description}
              </p>
            </div>
          </div>

          {/* Right Side (Features Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
            {componentData.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fa] rounded-[24px] p-6 lg:p-7 flex flex-col items-start hover:shadow-md transition-shadow h-full"
              >
                <div className="mb-5 flex items-center justify-center">
                  <WhyIcon type={feature.icon} />
                </div>
                <h3 className="text-[15px] font-bold text-[#0b1324] mb-3 leading-snug whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="text-[#5a6577] text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
