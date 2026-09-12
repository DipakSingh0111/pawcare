import { PawPrint } from "@/app/components/common/PawPrint";
import Image from "next/image";
import { site, SectionProps, PartnersData } from "@/data/index";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-2 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#ffb016]/45" />
      ))}
    </div>
  );
}

export default function PartnersSection({
  data,
  className,
}: SectionProps<PartnersData> = {}) {
  const partners = data || site.partners;

  return (
    <section
      className={`site-section relative overflow-hidden bg-[#FAFBFC] ${className ?? ""}`}
    >
      <DotGrid className="absolute top-10 left-4 sm:left-8" />
      <PawPrint
        className="pointer-events-none absolute top-12 right-[3%] h-44 w-44 text-[#ffb016]/10 sm:h-56 sm:w-56"
        strokeWidth={1}
        aria-hidden
      />

      <div className="site-container relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-4 flex items-center justify-center">
            <span className="h-[1.5px] w-10 shrink-0 bg-[#ffb016] sm:w-12" aria-hidden />
            <div className="mx-3 flex items-center gap-2">
              <PawPrint
                className="h-4 w-4 shrink-0 text-[#ffb016]"
                strokeWidth={2.5}
                fill="#ffb016"
              />
              <p className="text-sm font-bold tracking-[0.16em] text-[#ffb016] uppercase">
                {partners.tagline}
              </p>
            </div>
            <span className="h-[1.5px] w-10 shrink-0 bg-[#ffb016] sm:w-12" aria-hidden />
          </div>

          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.6rem]">
            {partners.title}{" "}
            <span className="text-[#ffb016]">{partners.titleHighlight}</span>
          </h2>

          <div className="mt-4 flex w-full items-center justify-center">
            <span className="h-[1.5px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
            <PawPrint
              className="mx-2.5 h-4 w-4 shrink-0 text-[#ffb016]"
              strokeWidth={2.5}
              fill="#ffb016"
            />
            <span className="h-[1.5px] w-12 shrink-0 bg-[#ffb016] sm:w-14" aria-hidden />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {partners.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-5">
          {partners.items.map((partner) => (
            <div
              key={partner.id}
              className="flex min-h-[100px] flex-col items-center justify-center rounded-xl border border-[#eee8df] bg-white px-3 py-5 text-center shadow-[0_4px_16px_rgba(11,19,36,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(11,19,36,0.08)] sm:min-h-[110px] sm:px-4"
            >
              {(partner as any).image ? (
                <div className="relative w-full h-12 sm:h-16 flex items-center justify-center">
                  <Image src={(partner as any).image} alt={partner.name} fill className="object-contain" />
                </div>
              ) : (
                <p className="text-sm font-extrabold tracking-wide text-gray-800 sm:text-[15px]">
                  {partner.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
