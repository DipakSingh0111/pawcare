import { site } from "@/data";

export type ServiceDetail = (typeof site.serviceDetail.bySlug)[keyof typeof site.serviceDetail.bySlug];

export function getServiceSlugs(): string[] {
  return Object.keys(site.serviceDetail.bySlug);
}

export function getServiceDetail(slug: string): ServiceDetail | null {
  const details = site.serviceDetail.bySlug as Record<string, ServiceDetail>;
  return details[slug] ?? null;
}
