import { site, SectionProps, TeamDetailData } from "@/data/index";
import Image from "next/image";
import { PawPrint, Briefcase, GraduationCap, Award, ShieldCheck, Stethoscope, Syringe, Drumstick, ClipboardList, Dog, Scissors, Bath } from "lucide-react";

function StatIcon({ type }: { type: string }) {
  const common = "w-6 h-6 text-[#ffb016]";
  switch (type) {
    case "briefcase": return <Briefcase className={common} strokeWidth={1.5} />;
    case "graduation": return <GraduationCap className={common} strokeWidth={1.5} />;
    case "ribbon": return <Award className={common} strokeWidth={1.5} />;
    default: return null;
  }
}

function ExpertiseIcon({ type }: { type: string }) {
  const common = "w-[22px] h-[22px] text-[#ffb016]";
  switch (type) {
    case "shield_check": return <ShieldCheck className={common} strokeWidth={1.5} />;
    case "stethoscope": return <Stethoscope className={common} strokeWidth={1.5} />;
    case "syringe": return <Syringe className={common} strokeWidth={1.5} />;
    case "food_bowl": return <Drumstick className={common} strokeWidth={1.5} />;
    case "clipboard": return <ClipboardList className={common} strokeWidth={1.5} />;
    case "pets": return <Dog className={common} strokeWidth={1.5} />;
    case "scissors": return <Scissors className={common} strokeWidth={1.5} />;
    case "bath": return <Bath className={common} strokeWidth={1.5} />;
    default: return <PawPrint className={common} strokeWidth={1.5} />;
  }
}

export default function TeamDetailSection({ member, data, className }: { member: any } & SectionProps<TeamDetailData>) {
  const componentData = data || site.teamDetail;
  return (
    <section className="w-full bg-white pt-20 pb-24">
      <div className="site-container">
        
        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center mb-16 relative">
          
          {/* Background decorations */}
          <div className="absolute top-[20%] left-0 w-full h-[60%] bg-[#FAFBFC] rounded-[40px] -z-10 hidden lg:block"></div>
          <div className="absolute top-10 left-[-2%] w-32 h-32 opacity-10 bg-[radial-gradient(circle,#ffb016_2px,transparent_2px)] bg-[length:12px_12px] -z-20"></div>

          {/* Left: Image Container */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px]">
              {/* Decorative Arc */}
              <div className="absolute -left-6 top-[15%] h-[70%] w-[120%] rounded-l-full border-l-[1.5px] border-[#ffb016]/40 z-0 border-dashed"></div>
              <div className="absolute -left-6 top-[15%] h-1.5 w-1.5 rounded-full bg-[#ffb016]"></div>
              <div className="absolute -left-6 bottom-[15%] h-1.5 w-1.5 rounded-full bg-[#ffb016]"></div>
              
              <div className="relative h-full w-full overflow-hidden rounded-full border-8 border-white shadow-[0_10px_40px_rgba(11,19,36,0.08)] bg-gray-100 z-10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Paw Badge */}
              <div className="absolute bottom-[5%] left-[10%] z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100">
                <PawPrint className="h-7 w-7 text-[#ffb016]" strokeWidth={2.5} fill="#ffb016" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col relative z-10 lg:pr-10">
            <div className="mb-4 flex items-center gap-3">
              <PawPrint className="h-6 w-6 text-[#ffb016]" strokeWidth={2.5} fill="#ffb016" />
              <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ffb016]">
                TEAM MEMBER
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1324] font-serif mb-4">
              {member.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1.5px] w-12 bg-gray-200"></div>
              <PawPrint className="h-[14px] w-[14px] text-[#ffb016]" strokeWidth={2.5} fill="#ffb016" />
              <div className="h-[1.5px] w-12 bg-gray-200"></div>
            </div>

            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ffb016] mb-5">
              {member.role}
            </p>

            <p className="text-[#5a6577] text-[15.5px] leading-relaxed mb-8 max-w-xl">
              {member.fullDescription}
            </p>

            {/* Stats Banner */}
            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200 bg-[#FAFBFC] border border-gray-100 rounded-2xl p-2 w-full sm:w-fit shadow-sm">
              {member.stats.map((stat: any, idx: number) => (
                <div key={idx} className="flex items-center justify-center sm:justify-start gap-4 px-6 py-4">
                  <div className="flex-shrink-0">
                    <StatIcon type={stat.icon} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-[11px] text-gray-500 uppercase tracking-wider font-semibold mb-0.5 text-center sm:text-left">
                      {stat.title}
                    </span>
                    <span className="text-base sm:text-[14px] font-bold text-[#0b1324] text-center sm:text-left">
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
