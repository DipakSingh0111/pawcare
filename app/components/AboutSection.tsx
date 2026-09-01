import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, PawPrint } from "lucide-react";
import data from "../../data.json";

function AboutIcon({ type }: { type: string }) {
  const common = "h-5 w-5";

  if (type === "trusted") {
    return (
      <Heart className={common} stroke="#ffb016" strokeWidth={1.75} fill="none" />
    );
  }

  if (type === "pet-first") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <path
          d="M12 3.2l6.5 2.2v5.3c0 4.1-2.8 7.9-6.5 9.1-3.7-1.2-6.5-5-6.5-9.1V5.4L12 3.2z"
          stroke="#ffb016"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="1.15" fill="#ffb016" />
        <circle cx="10.4" cy="9.7" r="0.7" fill="#ffb016" />
        <circle cx="13.6" cy="9.7" r="0.7" fill="#ffb016" />
        <circle cx="10.7" cy="12.2" r="0.7" fill="#ffb016" />
        <circle cx="13.3" cy="12.2" r="0.7" fill="#ffb016" />
      </svg>
    );
  }

  if (type === "team") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <circle cx="12" cy="8" r="2.6" stroke="#ffb016" strokeWidth="1.6" />
        <path
          d="M6.5 19v-1.4c0-2.5 2.3-4.5 5.5-4.5s5.5 2 5.5 4.5V19"
          stroke="#ffb016"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
      <path
        d="M12 3l1.4 3.1 3.4.4-2.6 2.4.8 3.3L12 10.6 9 12.2l.8-3.3-2.6-2.4 3.4-.4L12 3z"
        stroke="#ffb016"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.2l-1.2 6.5L12 17.5l4.2 2.2-1.2-6.5"
        stroke="#ffb016"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-[5px] ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#0b1324]/35" />
      ))}
    </div>
  );
}

function AboutCollage({
  one,
  two,
  three,
}: {
  one: string;
  two: string;
  three: string;
}) {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[480px] sm:h-[540px] lg:mx-0 lg:h-[600px] lg:max-w-[560px]">
      {/* Yellow block behind top-left */}
      <div className="absolute left-[2%] top-[3%] z-[1] h-[48%] w-[44%] rounded-[2.5rem] bg-[#ffb016] sm:rounded-[3rem]" />

      {/* Yellow bar under collage */}
      <div className="absolute bottom-[5%] left-[28%] z-[1] h-[18%] w-[42%] rounded-[1.75rem] bg-[#ffb016]" />

      {/* Navy peek behind big image (top) */}
      <div className="absolute right-[14%] top-[6%] z-[1] h-[14%] w-[16%] rounded-[1.25rem] bg-[#0b1324]" />

      {/* Small yellow accent */}
      <div className="absolute right-[8%] top-[16%] z-[6] h-[8%] w-[9%] rounded-[0.85rem] bg-[#ffb016]" />

      {/* Navy peek bottom-right */}
      <div className="absolute bottom-[3%] right-[4%] z-[1] h-[10%] w-[18%] rounded-2xl bg-[#0b1324]" />

      <DotGrid className="absolute right-[1%] top-[1%] z-[2]" />
      <DotGrid className="absolute bottom-[1%] left-[1%] z-[2]" />

      {/* 1 — Top-left */}
      <div className="absolute left-[5%] top-[6%] z-10 h-[40%] w-[38%] overflow-hidden rounded-[2.25rem] border-[10px] border-[#ffb016] bg-[#ffb016] shadow-sm sm:rounded-[2.75rem] sm:border-[12px]">
        <Image
          src={one}
          alt="Pet portrait"
          fill
          className="object-cover object-center"
          sizes="200px"
          priority
        />
      </div>

      {/* 2 — Bottom-left */}
      <div className="absolute bottom-[12%] left-[5%] z-30 h-[32%] w-[34%] overflow-hidden rounded-[2rem] border-[10px] border-[#0b1324] bg-[#0b1324] shadow-md sm:rounded-[2.5rem] sm:border-[12px]">
        <Image
          src={two}
          alt="Pet in sweater"
          fill
          className="object-cover object-[center_10%]"
          sizes="170px"
        />
      </div>

      {/* 3 — Big tall image (overlaps left column) */}
      <div className="absolute bottom-[8%] left-[36%] top-[12%] z-20 w-[58%] overflow-hidden rounded-[2.25rem] border-[8px] border-white bg-white shadow-[0_16px_40px_rgba(11,19,36,0.18)] sm:rounded-[2.75rem] sm:border-[10px]">
        <Image
          src={three}
          alt="Pet on couch"
          fill
          className="object-cover object-[center_20%]"
          sizes="320px"
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { eyebrow, title, description, features, cta, images } = data.about;

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-8 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-16">
      <PawPrint
        className="pointer-events-none absolute -bottom-6 right-[6%] h-40 w-40 text-[#f3ebe1] sm:h-56 sm:w-56"
        strokeWidth={1}
        aria-hidden
      />
      <PawPrint
        className="pointer-events-none absolute bottom-20 right-[20%] h-24 w-24 rotate-[18deg] text-[#f6f0e8] sm:h-36 sm:w-36"
        strokeWidth={1}
        aria-hidden
      />
      <PawPrint
        className="pointer-events-none absolute -left-10 top-24 h-28 w-28 -rotate-12 text-[#f6f0e8] opacity-60"
        strokeWidth={1}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10 xl:gap-20">
        <div className="animate-fade-up">
          <AboutCollage one={images.one} two={images.two} three={images.three} />
        </div>

        {/* Right content */}
        <div className="animate-fade-up animation-delay-100">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#ffb016]">
            <PawPrint
              className="h-4 w-4 text-[#0b1324]"
              strokeWidth={2.5}
              fill="#0b1324"
            />
            {eyebrow}
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-[3px] w-14 rounded-full bg-[#ffb016]" />
            <Heart className="h-4 w-4 fill-[#ffb016] text-[#ffb016]" />
          </div>

          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1324]">
                  <AboutIcon type={feature.icon} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0b1324] sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-[#5a6577]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={cta.href}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ffb016] px-6 py-3.5 text-sm font-bold text-[#0b1324] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e09a0f] hover:shadow-md sm:text-[15px]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b1324]">
              <PawPrint
                className="h-3.5 w-3.5 text-white"
                strokeWidth={2.5}
                fill="white"
              />
            </span>
            <span>{cta.text}</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
