import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, PawPrint } from "lucide-react";
import { site, SectionProps, LocationsData } from "@/data";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-5 gap-1.5 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#0b1324]/10" />
      ))}
    </div>
  );
}

const citySlugMap: Record<string, string> = {
  "New Delhi": "delhi-south-extension",
  Mumbai: "mumbai-andheri",
  Bengaluru: "bengaluru-koramangala",
  Hyderabad: "hyderabad-banjara-hills",
  Pune: "pune-kalyani-nagar",
  Ahmedabad: "ahmedabad-prahlad-nagar",
};

export default function LocationsSection({
  data,
  className,
}: SectionProps<LocationsData> = {}) {
  const locations = data || site.locations;

  return (
    <section
      className={`site-section relative w-full overflow-hidden bg-white !pt-4 sm:!pt-6 lg:!pt-6 ${className ?? ""}`}
    >
      <DotGrid className="absolute top-8 left-4 sm:left-8 lg:left-12" />
      <PawPrint
        className="pointer-events-none absolute right-[2%] bottom-4 h-48 w-48 text-[#0b1324]/[0.04] sm:h-64 sm:w-64"
        strokeWidth={1}
        aria-hidden
      />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center sm:mb-12">
          <PawPrint
            className="mb-2.5 h-5 w-5 text-[#0b1324]"
            strokeWidth={2.25}
            fill="#0b1324"
          />

          <span className="mb-3 text-sm font-bold tracking-[0.16em] text-[#ffb016] uppercase">
            {locations.tagline}
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.75rem]">
            {locations.title}{" "}
            <span className="text-[#ffb016]">{locations.titleHighlight}</span>
          </h2>

          <div className="mt-4 mb-5 flex w-full items-center justify-center">
            <span className="h-[1.5px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
            <Heart
              className="mx-2.5 h-4 w-4 shrink-0 text-[#ffb016]"
              strokeWidth={2.25}
            />
            <span className="h-[1.5px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
          </div>

          <p className="mx-auto max-w-2xl text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {locations.description.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {locations.items.map((place) => {
            const slug =
              citySlugMap[place.city] ||
              place.city.toLowerCase().replace(/\s+/g, "-");

            return (
              <Link
                key={place.city}
                href={`/location/${slug}`}
                className="group relative flex flex-col rounded-2xl border border-[#eee8df] bg-white p-5 shadow-[0_8px_28px_rgba(11,19,36,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(11,19,36,0.08)] sm:p-6"
              >
                <div className="flex items-center gap-5 pb-8">
                  {/* Circular landmark image */}
                  <div className="relative h-[108px] w-[108px] shrink-0 sm:h-[118px] sm:w-[118px]">
                    <div className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-white bg-gray-100 shadow-[0_4px_16px_rgba(11,19,36,0.1)]">
                      <Image
                        src={place.image}
                        alt={place.city}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="118px"
                      />
                    </div>

                    {/* Navy pin badge */}
                    <div className="absolute -top-1 -left-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1324] shadow-md ring-2 ring-white">
                      <MapPin
                        className="h-4 w-4 text-[#ffb016]"
                        strokeWidth={2.5}
                        fill="#ffb016"
                      />
                    </div>
                  </div>

                  {/* City + address */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-extrabold text-[#0b1324] sm:text-[1.35rem]">
                      {place.city}
                    </h3>
                    <span className="mt-2 mb-3 block h-[2px] w-10 rounded-full bg-[#ffb016]" />
                    <p className="flex items-start gap-1.5 text-sm leading-relaxed text-[#5a6577]">
                      <MapPin
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ffb016]"
                        strokeWidth={2.25}
                      />
                      <span>{place.address}</span>
                    </p>
                  </div>
                </div>

                {/* Bottom line + left paw */}
                <div className="absolute right-5 bottom-5 left-5 sm:right-6 sm:bottom-6 sm:left-6">
                  <div className="relative h-px w-full bg-[#e8eaee]">
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 bg-white pr-2">
                      <PawPrint
                        className="h-3.5 w-3.5 text-[#ffb016]"
                        strokeWidth={2.25}
                        fill="#ffb016"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
