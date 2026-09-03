import Image from "next/image";
import Link from "next/link";
import { PawPrint, ArrowRight } from "lucide-react";
import data from "@/data/data.json";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-2 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#ffb016]/40" />
      ))}
    </div>
  );
}

export default function TeamSection() {
  const { team } = data;

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFC] py-20 lg:py-24">
      {/* Background Decorators */}
      <PawPrint
        className="pointer-events-none absolute left-[5%] top-[20%] h-32 w-32 text-[#ffb016]/5 -rotate-12"
        strokeWidth={1}
      />
      <DotGrid className="absolute left-[3%] top-[40%] z-0" />
      
      <div className="pointer-events-none absolute -right-[10%] top-[10%] h-96 w-96 rounded-full border-[2px] border-dashed border-[#ffb016]/10" />
      <div className="pointer-events-none absolute -right-[5%] top-[20%] h-64 w-64 rounded-full border-[1px] border-[#ffb016]/10" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-10 relative z-10">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-8 bg-[#ffb016]/50"></div>
            <PawPrint className="h-4 w-4 text-[#ffb016]" strokeWidth={2.5} fill="#ffb016" />
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ffb016]">
              {team.eyebrow}
            </p>
            <div className="h-[1.5px] w-8 bg-[#ffb016]/50"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[#0b1324] leading-[1.2] mb-5 font-serif">
            {team.title}{" "}
            <span className="text-[#ffb016]">{team.titleHighlight}</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1.5px] w-12 bg-gray-200"></div>
            <PawPrint className="h-[14px] w-[14px] text-[#ffb016]" strokeWidth={2.5} fill="#ffb016" />
            <div className="h-[1.5px] w-12 bg-gray-200"></div>
          </div>

          <p className="text-[#5a6577] text-[15px] leading-relaxed max-w-lg mx-auto whitespace-pre-line">
            {team.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {team.members.map((member: any, idx: number) => (
            <Link
              key={idx}
              href={`/team/${member.id}`}
              className="group flex flex-col items-center bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="relative mb-6">
                {/* Decorative Arc */}
                <div className="absolute -right-2 -top-2 h-[80px] w-[80px] rounded-tr-full border-t-[2px] border-r-[2px] border-[#ffb016] z-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"></div>
                <div className="absolute right-[76px] -top-3 h-2 w-2 rounded-full bg-[#ffb016] z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-1"></div>
                
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-white shadow-md z-10 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="text-[19px] font-bold text-[#0b1324] font-serif mb-1.5 group-hover:text-[#ffb016] transition-colors">
                {member.name}
              </h3>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#ffb016] mb-4">
                {member.role}
              </p>
              <p className="text-[13px] leading-relaxed text-[#5a6577]">
                {member.description}
              </p>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/team"
            className="inline-flex items-center justify-center gap-2 rounded-md border-[1.5px] border-[#ffb016] bg-white px-8 py-3.5 text-[14px] font-bold text-[#0b1324] transition-all hover:bg-[#ffb016] hover:text-white group"
          >
            <PawPrint className="h-[18px] w-[18px] text-[#ffb016] group-hover:text-white transition-colors" strokeWidth={2.5} fill="currentColor" />
            <span className="tracking-wide">VIEW OUR TEAM</span>
            <ArrowRight className="h-[18px] w-[18px] text-[#ffb016] group-hover:text-white transition-colors" strokeWidth={2} />
          </Link>
        </div>

      </div>
    </section>
  );
}
