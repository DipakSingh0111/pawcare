import Image from "next/image";
import { CheckCircle2, PawPrint } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";

export default function ServiceWhyMatters({ detail }: { detail: ServiceDetail }) {
  const { whyMatters } = detail;

  return (
    <section className="site-container pb-10 sm:pb-12">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-[#F4F5F7] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <PawPrint
          className="pointer-events-none absolute right-6 top-6 h-24 w-24 text-[#ffb016]/15"
          strokeWidth={1}
          aria-hidden
        />
        <PawPrint
          className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 text-[#ffb016]/12"
          strokeWidth={1}
          aria-hidden
        />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] lg:mx-0 lg:h-[340px] lg:w-[340px]">
            <div className="absolute inset-0 overflow-hidden rounded-full border-[8px] border-white shadow-md">
              <Image
                src={whyMatters.image}
                alt={whyMatters.title}
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#ffb016]">
              {whyMatters.eyebrow}
            </p>
            <h2 className="text-2xl font-extrabold text-[#0b1324] sm:text-3xl lg:text-[2.1rem]">
              {whyMatters.title}
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
              {whyMatters.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3.5">
              {whyMatters.points.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#ffb016]"
                    strokeWidth={2.25}
                  />
                  <span className="text-sm font-semibold text-[#0b1324]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
