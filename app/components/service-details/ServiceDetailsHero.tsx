import Image from "next/image";
import Link from "next/link";
import {
  PawPrint,
  Shield,
  Leaf,
  CheckCircle2,
  Star,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/services";

function HeroIcon({ type }: { type: string }) {
  const common = "h-5 w-5 text-[#0b1324]";
  switch (type) {
    case "shield":
      return <Shield className={common} strokeWidth={1.75} />;
    case "leaf":
      return <Leaf className={common} strokeWidth={1.75} />;
    case "check_shield":
      return <CheckCircle2 className={common} strokeWidth={1.75} />;
    case "star":
      return <Star className={common} strokeWidth={1.75} />;
    default:
      return <PawPrint className={common} strokeWidth={1.75} />;
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

            <div className="mt-8 grid max-w-lg grid-cols-2 gap-5">
              {hero.features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ffb016]/50 bg-white">
                    <HeroIcon type={feature.icon} />
                  </div>
                  <span className="text-sm font-bold leading-snug text-[#0b1324]">
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
