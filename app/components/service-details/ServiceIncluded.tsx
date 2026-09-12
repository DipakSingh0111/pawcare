import type { ServiceDetail } from "@/lib/services";

function IncludedIcon({ type }: { type: string }) {
  const common = "h-8 w-8";
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";

  if (type === "bath") {
    return (
      <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden="true">
        {/* Bathtub rim */}
        <path
          d="M6 16.5h18"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Bathtub basin */}
        <path
          d="M7 16.5v1.8c0 4 3 6.7 7.5 6.7s7.5-2.7 7.5-6.7v-1.8"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Bathtub legs */}
        <path
          d="M9 25l-1.5 2.5M20.5 25l1.5 2.5"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Shower pipe on right */}
        <path
          d="M21 16.5V9.5a2.5 2.5 0 0 0-2.5-2.5H16"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Shower head */}
        <path
          d="M16.5 5.5l-2 3"
          stroke={strokeDark}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Golden bubbles / sparkles floating up */}
        <circle cx="9.5" cy="11.5" r="1.1" fill={strokeOrange} />
        <circle cx="12.5" cy="8" r="1.5" fill={strokeOrange} />
        <circle cx="14" cy="12" r="1" fill={strokeOrange} />
        <circle cx="9" cy="8" r="0.8" fill={strokeOrange} />
      </svg>
    );
  }

  if (type === "brush") {
    return (
      <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden="true">
        {/* 45-degree angled slicker / grooming brush */}
        <g transform="rotate(45 16 16)">
          {/* Brush head */}
          <rect
            x="9"
            y="7.5"
            width="14"
            height="5.5"
            rx="1.5"
            stroke={strokeDark}
            strokeWidth="1.75"
            fill="none"
          />
          {/* Parallel bristle teeth */}
          <line x1="11" y1="7.5" x2="11" y2="4.5" stroke={strokeDark} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14.3" y1="7.5" x2="14.3" y2="4.5" stroke={strokeDark} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17.7" y1="7.5" x2="17.7" y2="4.5" stroke={strokeDark} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="21" y1="7.5" x2="21" y2="4.5" stroke={strokeDark} strokeWidth="1.5" strokeLinecap="round" />
          {/* Brush handle */}
          <rect
            x="14.5"
            y="13"
            width="3"
            height="12"
            rx="1.5"
            stroke={strokeDark}
            strokeWidth="1.75"
            fill="none"
          />
          {/* Detail ticks on handle */}
          <line x1="15" y1="17" x2="17" y2="17" stroke={strokeOrange} strokeWidth="1.4" strokeLinecap="round" />
          <line x1="15" y1="19.5" x2="17" y2="19.5" stroke={strokeOrange} strokeWidth="1.4" strokeLinecap="round" />
          <line x1="15" y1="22" x2="17" y2="22" stroke={strokeOrange} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  if (type === "scissors" || type === "nail") {
    return (
      <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden="true">
        {/* Nail trimmer / scissors */}
        {/* Left finger loop */}
        <circle cx="11.5" cy="23" r="3.2" stroke={strokeDark} strokeWidth="1.75" />
        {/* Right finger loop */}
        <circle cx="20.5" cy="23" r="3.2" stroke={strokeDark} strokeWidth="1.75" />
        {/* Left shaft to pivot */}
        <path d="M12.5 20L16 16" stroke={strokeDark} strokeWidth="1.75" strokeLinecap="round" />
        {/* Right shaft to pivot */}
        <path d="M19.5 20L16 16" stroke={strokeDark} strokeWidth="1.75" strokeLinecap="round" />
        {/* Pivot screw */}
        <circle cx="16" cy="16" r="1.2" fill={strokeDark} />
        {/* Orange curved trimmer blades in open V */}
        <path
          d="M16 16L12 8c1.6-.4 3.2.2 4 2"
          stroke={strokeOrange}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16L20 8c-1.6-.4-3.2.2-4 2"
          stroke={strokeOrange}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "ear") {
    return (
      <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden="true">
        {/* Clean, minimalist pet/human ear outline */}
        <path
          d="M14.5 6.5c4.5 0 8 3.2 8 7.8 0 3.6-2 6.5-4.2 9-1.5 1.7-2.8 2.7-4.3 2.7-3 0-5-2.2-5-5 0-1.8 1-3.2 2.5-4.2"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Inner ear curve */}
        <path
          d="M15 11c2.2 0 4 1.8 4 3.8 0 2-1.5 3.2-3.2 4.2"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Small golden sparkle to indicate hygiene */}
        <circle cx="24.5" cy="9" r="1" fill={strokeOrange} />
        <circle cx="26" cy="11.5" r="0.75" fill={strokeOrange} />
      </svg>
    );
  }

  if (type === "tooth") {
    return (
      <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden="true">
        {/* Molar tooth outline */}
        <path
          d="M10 7.5c2-1 4-1 6 .8 2-1.8 4-1.8 6-.8 1.6.8 2.2 2.2 2.2 3.8 0 3.6-1.5 6.6-2 10.2-.4 2.8-1.7 3.8-2.8 3.8-1.3 0-2.2-1.8-3.4-4.5-1.2 2.7-2.1 4.5-3.4 4.5-1.1 0-2.4-1-2.8-3.8-.5-3.6-2-6.6-2-10.2 0-1.6.6-3 2.2-3.8z"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Three golden dots inside crown in gentle horizontal arc */}
        <circle cx="13.2" cy="12" r="1" fill={strokeOrange} />
        <circle cx="16" cy="11.2" r="1.2" fill={strokeOrange} />
        <circle cx="18.8" cy="12" r="1" fill={strokeOrange} />
      </svg>
    );
  }

  if (type === "spray") {
    return (
      <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden="true">
        {/* Fragrance spray bottle outline */}
        {/* Bottle Body */}
        <path
          d="M9.5 15h13c1.4 0 2.5 1.1 2.5 2.5v7c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-7c0-1.4 1.1-2.5 2.5-2.5z"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Neck */}
        <path
          d="M14 15v-3.5h4V15"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        {/* Spray Nozzle / Cap */}
        <path
          d="M13.5 11.5h5M16 11.5V7.5M14 7.5h4"
          stroke={strokeDark}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Golden emblem inside bottle body */}
        <circle
          cx="16"
          cy="21.5"
          r="2.6"
          stroke={strokeOrange}
          strokeWidth="1.6"
        />
        <line
          x1="16"
          y1="19.5"
          x2="16"
          y2="21.5"
          stroke={strokeOrange}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  
  return null;
}

export default function ServiceIncluded({ detail }: { detail: ServiceDetail }) {
  const { included } = detail;

  return (
    <section className="bg-white pt-0 pb-10 sm:pt-0 sm:pb-12 lg:pt-0 lg:pb-14">
      <div className="site-container">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#ffb016]">
            {included.eyebrow}
          </p>
          <h2 className="text-2xl font-extrabold text-[#0b1324] sm:text-3xl lg:text-[2.1rem]">
            {included.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4 xl:gap-5">
          {included.items.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[160px] sm:min-h-[175px] flex-col items-center justify-center rounded-2xl border border-gray-150 bg-white px-3 py-6 sm:px-4 sm:py-7 text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#ffb016]/40 hover:shadow-md"
            >
              <div className="mb-3.5 flex h-16 w-16 sm:h-[68px] sm:w-[68px] items-center justify-center rounded-full bg-[#ffeedb]/65 transition-transform duration-300 hover:scale-105">
                <IncludedIcon type={item.icon} />
              </div>
              <h3 className="text-xs sm:text-[13.5px] font-bold leading-snug whitespace-pre-line text-[#0b1324]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
