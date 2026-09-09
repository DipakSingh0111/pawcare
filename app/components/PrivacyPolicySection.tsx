import { site, SectionProps, LegalContentData } from "@/data/index";

export default function PrivacyPolicySection({ data, className }: SectionProps<LegalContentData> = {}) {
  const componentData = data || site.legalContent;
  const { intro, sections, lastUpdated, footer } = componentData.bySlug["privacy-policy"];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="site-container">
        <div className="max-w-[900px]">
          <p className="text-gray-600 mb-10 leading-relaxed text-[15px] animate-fade-up">
            {intro}
          </p>

          <div className="space-y-10 animate-fade-up animation-delay-100">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed text-[15px]">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#fffaf5] p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-[15px]">
            <span className="text-gray-600">Last updated: {lastUpdated}</span>
            <span className="font-bold text-[#0b1324]">{footer}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
