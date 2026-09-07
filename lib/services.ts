import siteData from "@/data/data.json";

const serviceDetailBySlug =
  siteData.categories.PawCare.sections.ServiceDetail.variants.PawCareServiceDetail1
    .bySlug;

export type ServiceDetail =
  (typeof serviceDetailBySlug)[keyof typeof serviceDetailBySlug];

export function getServiceSlugs(): string[] {
  return Object.keys(serviceDetailBySlug);
}

export function getServiceDetail(slug: string): ServiceDetail | null {
  const details = serviceDetailBySlug as Record<string, ServiceDetail>;
  return details[slug] ?? null;
}
