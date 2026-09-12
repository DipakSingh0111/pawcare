import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import { site, SectionProps, PricingData } from "@/data/index";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-2 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#ffb016]/45" />
      ))}
    </div>
  );
}

export default function PricingSection({
  data,
  className,
}: SectionProps<PricingData> = {}) {
  const componentData = data || site.pricing;
  const pricing = componentData;

  return (
    <section className="site-section relative overflow-hidden bg-white">
      <PawPrint
        className="pointer-events-none absolute right-[6%] top-16 h-40 w-40 text-[#ffb016]/10 sm:h-52 sm:w-52"
        strokeWidth={1}
        aria-hidden
      />
      <DotGrid className="absolute left-4 top-20 sm:left-8" />
      <DotGrid className="absolute right-4 bottom-16 sm:right-8" />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <div className="mb-5 flex items-center justify-center">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb016]"
              aria-hidden
            />
            <span
              className="h-px w-8 shrink-0 bg-[#ffb016] sm:w-10"
              aria-hidden
            />
            <div className="mx-0 inline-flex items-center gap-2 rounded-full border border-[#ffb016] bg-white px-4 py-1.5 sm:px-5">
              <PawPrint
                className="h-3.5 w-3.5 text-[#ffb016]"
                strokeWidth={2.5}
                fill="#ffb016"
              />
              <p className="text-xs font-bold tracking-[0.16em] text-[#ffb016] uppercase">
                {pricing.tagline}
              </p>
            </div>
            <span
              className="h-px w-8 shrink-0 bg-[#ffb016] sm:w-10"
              aria-hidden
            />
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb016]"
              aria-hidden
            />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.6rem]">
            {pricing.title}{" "}
            <span className="text-[#ffb016]">{pricing.titleHighlight}</span>
          </h2>

          <PawPrint
            className="mx-auto mt-4 h-4 w-4 text-[#ffb016]"
            strokeWidth={2.5}
            fill="#ffb016"
          />
          <p className="mx-auto mt-4 max-w-lg whitespace-pre-line text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
            {pricing.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 pt-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {pricing.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex h-full flex-col rounded-2xl bg-white p-7 sm:p-8 ${
                plan.isPopular
                  ? "border-2 border-[#ffb016] shadow-[0_12px_36px_rgba(255,176,22,0.18)]"
                  : "border border-[#eee8df] shadow-[0_8px_28px_rgba(11,19,36,0.06)]"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-md bg-[#0b1324] px-4 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase">
                  <Star className="h-3 w-3 fill-[#ffb016] text-[#ffb016]" />
                  MOST POPULAR
                  <Star className="h-3 w-3 fill-[#ffb016] text-[#ffb016]" />
                </div>
              )}

              <p className="mb-2 text-[11px] font-bold tracking-[0.14em] text-[#6b7280] uppercase">
                {plan.planType}
              </p>
              <h3 className="mb-5 text-xl font-extrabold text-[#0b1324] sm:text-2xl">
                {plan.name}
              </h3>

              <div className="mb-6 flex items-end gap-1.5">
                <span className="pb-1 text-lg font-bold text-[#ffb016]">$</span>
                <span className="text-5xl leading-none font-extrabold text-[#ffb016]">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-[#9ca3af]">
                  {plan.billingCycle}
                </span>
              </div>

              <div className="mb-6 h-px w-full bg-[#eee8df]" />

              <ul className="mb-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffb016]">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-snug text-[#5a6577]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-md border-[1.5px] border-[#ffb016] px-6 py-3.5 text-[14px] font-bold transition-all duration-300 bg-white text-[#0b1324] hover:bg-[#ffb016] hover:text-white"
                >
                  <span>Enquiry Now</span>
                  <ArrowRight
                    className="h-[18px] w-[18px] transition-colors text-[#ffb016] group-hover:text-white"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[#5a6577]">
          <ShieldCheck className="h-5 w-5 text-[#ffb016]" strokeWidth={1.75} />
          <span className="text-sm">No hidden fees. Cancel anytime.</span>
        </div>
      </div>
    </section>
  );
}
