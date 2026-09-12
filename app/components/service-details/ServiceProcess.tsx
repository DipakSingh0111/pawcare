import type { ServiceDetail } from "@/lib/services";

function ConsultationIcon({ className = "h-10 w-10 sm:h-11 sm:w-11" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      {/* Back speech bubble */}
      <path
        d="M17 10h11a4 4 0 0 1 4 4v6.5a4 4 0 0 1-4 4h-2l-3.5 3.5v-3.5"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Front speech bubble */}
      <path
        d="M10 14h13a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-7l-4 3.5V28a4 4 0 0 1-2-3.5v-6.5a4 4 0 0 1 4-4z"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 3 orange dots inside front bubble */}
      <circle cx="13.5" cy="21" r="1.1" fill={strokeOrange} />
      <circle cx="17" cy="21" r="1.1" fill={strokeOrange} />
      <circle cx="20.5" cy="21" r="1.1" fill={strokeOrange} />
    </svg>
  );
}

function GentleGroomingIcon({ className = "h-10 w-10 sm:h-11 sm:w-11" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      {/* Shower pipe on left */}
      <path
        d="M12.5 21V12a3.5 3.5 0 0 1 3.5-3.5h3"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Shower head nozzle */}
      <path
        d="M18 6.5l2 3.5"
        stroke={strokeDark}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Water spray droplets */}
      <circle cx="20" cy="13.5" r="0.75" fill={strokeOrange} />
      {/* Bathtub rim */}
      <path
        d="M9 21h22"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Bathtub basin */}
      <path
        d="M10.5 21v1.5c0 4.5 3.5 7 9.5 7s9.5-2.5 9.5-7V21"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Bathtub feet */}
      <path
        d="M13 29.5l-1.5 2.5M27 29.5l1.5 2.5"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* 4 Gold sparkles floating above tub */}
      <path d="M23 11v3M21.5 12.5h3" stroke={strokeOrange} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M27.5 7.5v3.5M25.8 9.2h3.4" stroke={strokeOrange} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M29.5 14v2.5M28.3 15.2h2.4" stroke={strokeOrange} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="23.5" cy="16.5" r="0.9" fill={strokeOrange} />
    </svg>
  );
}

function DryStyleIcon({ className = "h-10 w-10 sm:h-11 sm:w-11" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      {/* Hair dryer body & nozzle */}
      <path
        d="M13 14c0-3.3 2.5-5 5.5-5h6.5v7H18.5c-3 0-5.5-1-5.5-2z"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Back round cap of dryer */}
      <path
        d="M13.5 9c-2.5 1-3.5 2.5-3.5 4.5s1 3.5 3.5 4.5"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Handle angled downwards */}
      <path
        d="M17.5 16l-2.5 8.5c-.3 1 .2 1.8 1.2 2.1l1.5.4c1 .3 2-.2 2.3-1.2l2.5-8.8"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* 3 orange dots blowing out from nozzle */}
      <circle cx="28" cy="10" r="1" fill={strokeOrange} />
      <circle cx="30.5" cy="12.5" r="1.3" fill={strokeOrange} />
      <circle cx="28" cy="15" r="1" fill={strokeOrange} />
      {/* Upright gold paw print below */}
      <circle cx="11.5" cy="27" r="0.9" fill={strokeOrange} />
      <circle cx="13.7" cy="25.3" r="0.9" fill={strokeOrange} />
      <circle cx="16.3" cy="25.3" r="0.9" fill={strokeOrange} />
      <circle cx="18.5" cy="27" r="0.9" fill={strokeOrange} />
      <ellipse cx="15" cy="28.8" rx="2.4" ry="1.6" fill={strokeOrange} />
    </svg>
  );
}

function FinalCheckIcon({ className = "h-10 w-10 sm:h-11 sm:w-11" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      {/* Main heart outline */}
      <path
        d="M20 31.5C14 26 7.5 21.2 7.5 15.5 7.5 11.2 11 8 15.2 8c2.4 0 4 1.2 4.8 2.5.8-1.3 2.4-2.5 4.8-2.5 4.2 0 7.7 3.2 7.7 7.5 0 5.7-6.5 10.5-12.5 16z"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inside paw & check details */}
      <circle cx="16" cy="15" r="1" fill={strokeOrange} />
      <circle cx="18.5" cy="13.5" r="1" fill={strokeOrange} />
      <circle cx="21.5" cy="13.5" r="1" fill={strokeOrange} />
      <circle cx="24" cy="15" r="1" fill={strokeOrange} />
      {/* Checkmark inside */}
      <path
        d="M16 19l2.5 2.5 5.5-5.5"
        stroke={strokeOrange}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Two small sparkles flanking bottom of heart */}
      <path d="M11 27v2.5M9.8 28.2h2.4" stroke={strokeOrange} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M29 27v2.5M27.8 28.2h2.4" stroke={strokeOrange} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function HappyPetStepIcon({ className = "h-10 w-10 sm:h-11 sm:w-11" }: { className?: string }) {
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      {/* Clean heart outline */}
      <path
        d="M20 31.5C14 26 7.5 21.2 7.5 15.5 7.5 11.2 11 8 15.2 8c2.4 0 4 1.2 4.8 2.5.8-1.3 2.4-2.5 4.8-2.5 4.2 0 7.7 3.2 7.7 7.5 0 5.7-6.5 10.5-12.5 16z"
        stroke={strokeDark}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 3 decorative sparkle dots matching screenshot */}
      <circle cx="5" cy="17" r="1.1" fill={strokeOrange} />
      <circle cx="7" cy="27" r="0.9" fill={strokeOrange} />
      <circle cx="26" cy="21" r="1.1" fill={strokeOrange} />
    </svg>
  );
}

function ProcessIcon({ type, index }: { type: string; index: number }) {
  if (type === "message" || index === 0) return <ConsultationIcon />;
  if (type === "bath" || index === 1) return <GentleGroomingIcon />;
  if (type === "hairdryer" || index === 2) return <DryStyleIcon />;
  if (type === "heart_check" || index === 3) return <FinalCheckIcon />;
  if (type === "heart" || index === 4) return <HappyPetStepIcon />;
  return <ConsultationIcon />;
}

export default function ServiceProcess({ detail }: { detail: ServiceDetail }) {
  const { process } = detail;

  return (
    <section className="bg-white pt-2 pb-14 sm:pb-16 lg:pb-20">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#ffb016]">
            {process.eyebrow}
          </p>
          <h2 className="text-2xl font-extrabold text-[#0b1324] sm:text-3xl lg:text-[2.1rem]">
            {process.title}
          </h2>
        </div>

        <div className="relative">
          {/* Dashed connecting line passing through center of circles */}
          <div
            className="pointer-events-none absolute top-[48px] sm:top-[56px] left-[10%] right-[10%] hidden lg:block border-t-2 border-dashed border-[#ffb016]/45 z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-5">
            {process.steps.map((step, idx) => (
              <div key={step.stepNumber} className="relative flex flex-col items-center text-center">
                {/* Orange circle with right chevron between adjacent steps */}
                {idx < process.steps.length - 1 && (
                  <div
                    className="pointer-events-none absolute top-[34px] sm:top-[40px] -right-[15px] lg:-right-[17px] xl:-right-[22px] z-20 hidden lg:flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#ffb016] text-white shadow-sm ring-4 ring-white"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}

                {/* White circle with subtle light border & custom icon */}
                <div className="mb-4 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border border-[#ffeedb] bg-white shadow-[0_4px_16px_rgba(255,176,22,0.06)] transition-transform duration-300 hover:scale-105">
                  <ProcessIcon type={step.icon} index={idx} />
                </div>

                {/* Step number in bold orange */}
                <span className="mb-1 text-sm sm:text-base font-extrabold text-[#ffb016] tracking-wide">
                  {step.stepNumber}
                </span>

                {/* Title in bold dark navy */}
                <h3 className="mb-1.5 text-[15px] sm:text-base font-bold text-[#0b1324] leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="max-w-[190px] text-xs sm:text-[13px] leading-relaxed text-[#5a6577]">
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
