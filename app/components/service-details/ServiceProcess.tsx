import { ChevronRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";

function ProcessIcon({ type }: { type: string }) {
  const common = "h-7 w-7";

  if (type === "message") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  if (type === "bath") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <path d="M4 12h16v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5z" />
        <path d="M6 12V9a3 3 0 0 1 3-3h1" />
      </svg>
    );
  }
  if (type === "hairdryer") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <path d="M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1l-3 7H9l3-7H6a3 3 0 0 1-3-3V8z" />
      </svg>
    );
  }
  if (type === "heart_check") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <path d="M9 12l2 2 4-4" stroke="#ffb016" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function ServiceProcess({ detail }: { detail: ServiceDetail }) {
  const { process } = detail;

  return (
    <section className="site-container pb-12 sm:pb-14 lg:pb-16">
      <div className="overflow-hidden rounded-[1.75rem] bg-[#F4F5F7] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#ffb016]">
            {process.eyebrow}
          </p>
          <h2 className="text-2xl font-extrabold text-[#0b1324] sm:text-3xl lg:text-[2.1rem]">
            {process.title}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-[44px] right-[8%] left-[8%] z-0 hidden h-px border-t border-dashed border-[#ffb016]/45 lg:block" />

          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {process.steps.map((step, idx) => (
              <div key={step.stepNumber} className="relative flex flex-col items-center text-center">
                {idx < process.steps.length - 1 && (
                  <div className="absolute top-[36px] -right-2 z-20 hidden h-6 w-6 items-center justify-center rounded-full bg-[#F4F5F7] lg:flex">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffb016]">
                      <ChevronRight className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                  </div>
                )}

                <div className="mb-4 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#e5e8ee] bg-white shadow-sm">
                  <ProcessIcon type={step.icon} />
                </div>
                <span className="mb-1 text-sm font-extrabold text-[#ffb016]">
                  {step.stepNumber}
                </span>
                <h3 className="mb-1 text-[15px] font-bold text-[#0b1324]">{step.title}</h3>
                <p className="max-w-[180px] text-xs leading-relaxed text-[#5a6577] sm:text-[13px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
