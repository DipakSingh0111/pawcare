import type { ServiceDetail } from "@/lib/services";

function IncludedIcon({ type }: { type: string }) {
  const common = "h-7 w-7";

  if (type === "bath") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <path d="M4 12h16v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5z" />
        <path d="M6 12V9a3 3 0 0 1 3-3h1" />
        <circle cx="10" cy="5" r="1" fill="#ffb016" stroke="none" />
        <circle cx="14" cy="5" r="1.5" fill="#ffb016" stroke="none" />
      </svg>
    );
  }
  if (type === "brush") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <rect x="5" y="4" width="14" height="6" rx="2" />
        <path d="M8 10v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10" />
        <path d="M7 4V2M10 4V2M14 4V2M17 4V2" stroke="#ffb016" />
      </svg>
    );
  }
  if (type === "scissors") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    );
  }
  if (type === "ear") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <path d="M12 22c-4.5 0-7-3.5-7-8V9a7 7 0 0 1 14 0v5c0 4.5-2.5 8-7 8z" />
        <path d="M9 13a3 3 0 0 1 3-3 3 3 0 0 1 3 3v2" stroke="#ffb016" />
      </svg>
    );
  }
  if (type === "tooth") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
        <path d="M15 3h-6a3 3 0 0 0-3 3v9a6 6 0 0 0 12 0V6a3 3 0 0 0-3-3z" />
        <path d="M12 15v7M9 22h6" stroke="#ffb016" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#0b1324" strokeWidth="1.5" aria-hidden>
      <path d="M12 8v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8h6z" />
      <path d="M7 8l2-4h2l2 4" />
      <path d="M14 4h3M15 6h2" stroke="#ffb016" />
    </svg>
  );
}

export default function ServiceIncluded({ detail }: { detail: ServiceDetail }) {
  const { included } = detail;

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
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
              className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-[#eee8df] bg-white px-3 py-5 text-center shadow-[0_6px_20px_rgba(11,19,36,0.04)]"
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
