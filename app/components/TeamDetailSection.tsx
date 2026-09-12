import { site, SectionProps, TeamDetailData } from "@/data/index";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Drumstick,
  ClipboardList,
  Dog,
  Scissors,
  Bath,
} from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";

function StatIcon({ type }: { type: string }) {
  const common = "w-6 h-6 text-[#ffb016]";
  switch (type) {
    case "briefcase":
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
      );
    case "graduation":
      return <GraduationCap className={common} strokeWidth={1.6} />;
    case "ribbon":
      return <Award className={common} strokeWidth={1.6} />;
    default:
      return null;
  }
}

function ExpertiseIcon({ type }: { type: string }) {
  const common = "w-[22px] h-[22px] text-[#ffb016]";
  switch (type) {
    case "shield_check":
      return <ShieldCheck className={common} strokeWidth={1.5} />;
    case "stethoscope":
      return <Stethoscope className={common} strokeWidth={1.5} />;
    case "syringe":
      return <Syringe className={common} strokeWidth={1.5} />;
    case "food_bowl":
      return <Drumstick className={common} strokeWidth={1.5} />;
    case "clipboard":
      return <ClipboardList className={common} strokeWidth={1.5} />;
    case "pets":
      return <Dog className={common} strokeWidth={1.5} />;
    case "scissors":
      return <Scissors className={common} strokeWidth={1.5} />;
    case "bath":
      return <Bath className={common} strokeWidth={1.5} />;
    default:
      return <PawPrint className={common} strokeWidth={1.5} />;
  }
}

export default function TeamDetailSection({
  member,
  data,
  className,
}: { member: any } & SectionProps<TeamDetailData>) {
  const componentData = data || site.teamDetail;
  return (
    <section className="w-full bg-white pt-20 pb-24">
      <div className="site-container">
        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-10 lg:gap-16 items-center mb-16 relative">
          {/* Background decorations */}
          <div className="absolute top-[10%] left-0 w-full h-[80%] bg-[#FAFBFC] rounded-[40px] -z-10 hidden lg:block"></div>

          {/* Left: Image Container with Outer Golden Arc & 3 Dots */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[290px] w-[290px] sm:h-[350px] sm:w-[350px] lg:h-[380px] lg:w-[380px] xl:h-[400px] xl:w-[400px]">
              {/* Outer Golden Concentric Arc & Dots Anchor */}
              <svg
                className="pointer-events-none absolute -inset-[22px] sm:-inset-[26px] lg:-inset-[28px] h-[calc(100%+44px)] w-[calc(100%+44px)] sm:h-[calc(100%+52px)] sm:w-[calc(100%+52px)] lg:h-[calc(100%+56px)] lg:w-[calc(100%+56px)] z-0"
                viewBox="0 0 460 460"
                fill="none"
                aria-hidden="true"
              >
                {/* Faint background dot matrix around the 9 o'clock anchor */}
                <g fill="#ffb016" opacity="0.22">
                  <circle cx="2" cy="206" r="1.2" />
                  <circle cx="2" cy="218" r="1.2" />
                  <circle cx="2" cy="230" r="1.2" />
                  <circle cx="2" cy="242" r="1.2" />
                  <circle cx="2" cy="254" r="1.2" />

                  <circle cx="8" cy="206" r="1.2" />
                  <circle cx="8" cy="218" r="1.2" />
                  <circle cx="8" cy="230" r="1.2" />
                  <circle cx="8" cy="242" r="1.2" />
                  <circle cx="8" cy="254" r="1.2" />

                  <circle cx="20" cy="206" r="1.2" />
                  <circle cx="20" cy="218" r="1.2" />
                  <circle cx="20" cy="230" r="1.2" />
                  <circle cx="20" cy="242" r="1.2" />
                  <circle cx="20" cy="254" r="1.2" />

                  <circle cx="26" cy="206" r="1.2" />
                  <circle cx="26" cy="218" r="1.2" />
                  <circle cx="26" cy="230" r="1.2" />
                  <circle cx="26" cy="242" r="1.2" />
                  <circle cx="26" cy="254" r="1.2" />
                </g>

                {/* Thin gold arc STARTING EXACTLY from the dots (at 9 o'clock, x=14, y=230) and arching UP and over the top */}
                <path
                  d="M 14 230 A 216 216 0 0 1 315 36"
                  stroke="#ffb016"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />

                {/* 3 Prominent solid gold dots vertically aligned: line starts right from the central largest dot */}
                <circle cx="14" cy="208" r="3" fill="#ffb016" />
                <circle cx="14" cy="230" r="5" fill="#ffb016" />
                <circle cx="14" cy="252" r="3" fill="#ffb016" />
              </svg>

              {/* Main Circular Profile Photo */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-[7px] sm:border-[8px] border-white shadow-[0_12px_36px_rgba(11,19,36,0.08)] bg-[#fffbf2] z-10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Paw Badge (at bottom-left edge) */}
              <div className="absolute bottom-[2%] left-[4%] sm:bottom-[3%] sm:left-[5%] z-20 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.1)] border-[1.5px] border-[#ffb016]/40">
                <PawPrint
                  className="h-7 w-7 sm:h-8 sm:w-8 text-[#ffb016]"
                  fill="#ffb016"
                  strokeWidth={0}
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col relative z-10 lg:pr-6">
            <div className="mb-2.5 flex items-center gap-2">
              <PawPrint
                className="h-4 w-4 text-[#ffb016]"
                fill="#ffb016"
                strokeWidth={0}
              />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffb016]">
                PET CARE EXPERT
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#0b1324] font-serif tracking-tight leading-tight">
              {member.name}
            </h1>

            {/* Divider with small center paw */}
            <div className="flex items-center gap-2.5 my-3">
              <span className="h-[1.5px] w-12 bg-[#ffb016]" />
              <PawPrint
                className="h-3 w-3 text-[#ffb016]"
                fill="#ffb016"
                strokeWidth={0}
              />
              <span className="h-[1.5px] w-12 bg-[#ffb016]" />
            </div>

            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#ffb016] mb-4">
              {member.role}
            </p>

            <p className="text-[#5a6577] text-[14.5px] sm:text-[15.5px] leading-relaxed mb-7 max-w-xl">
              {member.fullDescription}
            </p>

            {/* Stats Banner */}
            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200/80 bg-[#fffbf2] border border-[#ffb016]/20 rounded-2xl p-2 w-full sm:w-fit shadow-sm">
              {member.stats.map((stat: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center justify-center sm:justify-start gap-4 px-6 py-3.5"
                >
                  <div className="flex-shrink-0">
                    <StatIcon type={stat.icon} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[12px] text-gray-500 font-medium mb-0.5 text-center sm:text-left">
                      {stat.title}
                    </span>
                    <span className="text-sm sm:text-[15px] font-bold text-[#0b1324] text-center sm:text-left">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education + Expertise */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Education */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#eee8df] bg-[#FAF8F4] p-7 sm:p-8 lg:p-10">
            <PawPrint
              className="pointer-events-none absolute right-4 bottom-4 h-28 w-28 text-[#ffb016]/10"
              strokeWidth={1}
              aria-hidden
            />

            <h3 className="relative z-10 text-base font-extrabold uppercase tracking-wider text-[#0b1324]">
              Education
            </h3>
            <span className="mt-2 mb-8 block h-[3px] w-12 rounded-full bg-[#ffb016]" />

            <div className="relative z-10 ml-1 border-l-2 border-[#ffb016]/50 pl-6">
              {member.education.map(
                (
                  edu: { title: string; institution: string; period: string },
                  idx: number,
                ) => (
                  <div
                    key={edu.title}
                    className={`relative ${idx < member.education.length - 1 ? "mb-8 pb-1" : ""}`}
                  >
                    <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full bg-[#ffb016] ring-4 ring-[#FAF8F4]" />
                    <h4 className="text-[15px] font-bold leading-snug text-[#0b1324]">
                      {edu.title}
                    </h4>
                    <p className="mt-1.5 text-sm italic text-[#5a6577]">
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#ffb016]">
                      {edu.period}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="overflow-hidden rounded-[24px] border border-[#eee8df] bg-[#FAF8F4] p-7 sm:p-8 lg:p-10">
            <h3 className="text-base font-extrabold uppercase tracking-wider text-[#0b1324]">
              Areas of Expertise
            </h3>
            <span className="mt-2 mb-8 block h-[3px] w-12 rounded-full bg-[#ffb016]" />

            <div className="grid grid-cols-1 border-t border-l border-[#e5e8ee] sm:grid-cols-2">
              {member.expertise.map(
                (skill: { title: string; icon: string }) => (
                  <div
                    key={skill.title}
                    className="flex items-center gap-3 border-r border-b border-[#e5e8ee] px-4 py-5"
                  >
                    <ExpertiseIcon type={skill.icon} />
                    <span className="text-sm font-semibold leading-snug text-[#0b1324]">
                      {skill.title}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
