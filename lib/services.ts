import data from "@/data/data.json";

export type ServiceDetail = (typeof data.serviceDetails)[keyof typeof data.serviceDetails];

export function getServiceSlugs(): string[] {
  return Object.keys(data.serviceDetails);
}

export function getServiceDetail(slug: string): ServiceDetail | null {
  const details = data.serviceDetails as Record<string, ServiceDetail>;
  return details[slug] ?? null;
}
