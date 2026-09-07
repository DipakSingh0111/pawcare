import type { ServiceDetail } from "@/lib/services";

function IncludedIcon({ type }: { type: string }) {
  const common = "h-7 w-7";
  const strokeDark = "#0b1324";
  const strokeOrange = "#ffb016";

  if (type === "bath") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5" aria-hidden>
        {/* Tub */}
        <path d="M4 11h16c0 4.418-3.582 8-8 8s-8-3.582-8-8z" stroke={strokeDark} />
        {/* Legs */}
        <path d="M7 19v2M17 19v2" stroke={strokeDark} strokeLinecap="round" />
        {/* Shower head / bubbles */}
        <path d="M9 7c0-2 2-2 2-2" stroke={strokeDark} strokeLinecap="round" />
        <path d="M11 5h2M12 4v2" stroke={strokeOrange} strokeLinecap="round" />
        <circle cx="15" cy="7" r="1" fill={strokeOrange} stroke="none" />
        <circle cx="8" cy="9" r="0.5" fill={strokeOrange} stroke="none" />
      </svg>
    );
  }
  if (type === "brush") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5" aria-hidden>
        {/* Brush body */}
        <path d="M7 17L17 7c1.1-1.1 2.8-1.1 3.9 0 1.1 1.1 1.1 2.8 0 3.9L11 21c-1.1 1.1-2.8 1.1-3.9 0-1.1-1.1-1.1-2.8 0-3.9z" stroke={strokeDark} />
        {/* Handle details */}
        <path d="M14 10l-4 4" stroke={strokeDark} />
        {/* Orange bristles / lines */}
        <path d="M8 12l2-2M10 14l2-2M12 16l2-2" stroke={strokeOrange} strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "scissors") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5" aria-hidden>
        {/* Blades */}
        <path d="M9.5 9.5L4 4M14.5 14.5L20 20M9.5 14.5L4 20M14.5 9.5L20 4" stroke={strokeDark} strokeLinecap="round" />
        {/* Center screw */}
        <circle cx="12" cy="12" r="1" fill={strokeDark} stroke="none" />
        {/* Handles (Orange) */}
        <circle cx="8" cy="8" r="2.5" stroke={strokeOrange} />
        <circle cx="16" cy="16" r="2.5" stroke={strokeDark} />
        <circle cx="8" cy="16" r="2.5" stroke={strokeDark} />
        <circle cx="16" cy="8" r="2.5" stroke={strokeOrange} />
      </svg>
    );
  }
  if (type === "ear") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5" aria-hidden>
        {/* Ear Outline */}
        <path d="M12 22c-4.5 0-7-4-7-9V7c0-3.5 2.5-5 6-5s6 1.5 6 5v6c0 5-2.5 9-5 9z" stroke={strokeDark} strokeLinecap="round" strokeLinejoin="round" />
        {/* Inner ear lines */}
        <path d="M10 12a3 3 0 0 0 4-2V8" stroke={strokeDark} strokeLinecap="round" />
        {/* Orange sparkle */}
        <path d="M14 16h2M15 15v2" stroke={strokeOrange} strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "tooth") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5" aria-hidden>
        {/* Tooth Outline */}
        <path d="M15 3H9C6 3 5 4.5 5 7v4c0 3 2 5 2 7v1.5a1.5 1.5 0 0 0 3 0V17c0-1 1-1.5 2-1.5s2 .5 2 1.5v2.5a1.5 1.5 0 0 0 3 0V18c0-2 2-4 2-7V7c0-2.5-1-4-4-4z" stroke={strokeDark} strokeLinecap="round" strokeLinejoin="round" />
        {/* Orange sparkle */}
        <path d="M11 9h2M12 8v2" stroke={strokeOrange} strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "spray") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5" aria-hidden>
        {/* Spray Bottle */}
        <path d="M7 10h10v10c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V10z" stroke={strokeDark} strokeLinejoin="round" />
        <path d="M10 10V6h4v4M12 6V3M10 3h4" stroke={strokeDark} strokeLinecap="round" strokeLinejoin="round" />
        {/* Orange logo/shield inside */}
        <path d="M12 13c-1.5 0-2.5 1-2.5 2.5S10.5 18 12 18s2.5-1 2.5-2.5S13.5 13 12 13z" stroke={strokeOrange} strokeLinecap="round" />
        <path d="M12 14.5v1.5" stroke={strokeOrange} strokeLinecap="round" />
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {included.items.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-[#f0ebe1] bg-white px-3 py-5 text-center"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF6E5]">
                <IncludedIcon type={item.icon} />
              </div>
              <h3 className="text-sm font-bold leading-snug whitespace-pre-line text-[#0b1324]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
