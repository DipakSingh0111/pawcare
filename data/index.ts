import siteData from "./data.json";

export type SectionProps<T = unknown> = {
  data?: T;
  className?: string;
};

export type TopbarData = typeof siteData.categories.PawCare.sections.Topbar.variants.PawCareTopbar1;
export type HeaderData = typeof siteData.categories.PawCare.sections.Header.variants.PawCareHeader1;
export type BannerData = typeof siteData.categories.PawCare.sections.Banner.variants.PawCareBanner1;
export type AboutData = typeof siteData.categories.PawCare.sections.About.variants.PawCareAbout1;
export type ServicesData = typeof siteData.categories.PawCare.sections.Services.variants.PawCareServices1;
export type ServiceDetailData = typeof siteData.categories.PawCare.sections.ServiceDetail.variants.PawCareServiceDetail1;
export type WhyChooseUsData = typeof siteData.categories.PawCare.sections.WhyChooseUs.variants.PawCareWhyChooseUs1;
export type LocationsData = typeof siteData.categories.PawCare.sections.Locations.variants.PawCareLocations1;
export type PricingData = typeof siteData.categories.PawCare.sections.Pricing.variants.PawCarePricing1;
export type TestimonialData = typeof siteData.categories.PawCare.sections.Testimonial.variants.PawCareTestimonial1;
export type GalleryData = typeof siteData.categories.PawCare.sections.Gallery.variants.PawCareGallery1;
export type PartnersData = typeof siteData.categories.PawCare.sections.Partners.variants.PawCarePartners1;
export type MissionVisionData = typeof siteData.categories.PawCare.sections.MissionVision.variants.PawCareMissionVision1;
export type BlogData = typeof siteData.categories.PawCare.sections.Blog.variants.PawCareBlog1;
export type FAQData = typeof siteData.categories.PawCare.sections.FAQ.variants.PawCareFAQ1;
export type TeamData = typeof siteData.categories.PawCare.sections.Team.variants.PawCareTeam1;
export type TeamDetailData = typeof siteData.categories.PawCare.sections.TeamDetail.variants.PawCareTeamDetail1;
export type SitemapData = typeof siteData.categories.PawCare.sections.Sitemap.variants.PawCareSitemap1;
export type LegalContentData = typeof siteData.categories.PawCare.sections.LegalContent.variants.PawCareLegalContent1;
export type FooterData = typeof siteData.categories.PawCare.sections.Footer.variants.PawCareFooter1;
export type ContactData = typeof siteData.categories.PawCare.sections.Contact.variants.PawCareContact1;
export type PageBannerData = typeof siteData.categories.PawCare.sections.PageBanner.variants.PawCarePageBanner1;
export type AppointmentData = typeof siteData.categories.PawCare.sections.Appointment.variants.PawCareAppointment1;
export type BlogDetailData = typeof siteData.categories.PawCare.sections.BlogDetail.variants.PawCareBlogDetail1;

export const site = {
  topbar: siteData.categories.PawCare.sections.Topbar.variants.PawCareTopbar1,
  header: siteData.categories.PawCare.sections.Header.variants.PawCareHeader1,
  banner: siteData.categories.PawCare.sections.Banner.variants.PawCareBanner1,
  about: siteData.categories.PawCare.sections.About.variants.PawCareAbout1,
  services: siteData.categories.PawCare.sections.Services.variants.PawCareServices1,
  serviceDetail: siteData.categories.PawCare.sections.ServiceDetail.variants.PawCareServiceDetail1,
  whyChooseUs: siteData.categories.PawCare.sections.WhyChooseUs.variants.PawCareWhyChooseUs1,
  locations: siteData.categories.PawCare.sections.Locations.variants.PawCareLocations1,
  pricing: siteData.categories.PawCare.sections.Pricing.variants.PawCarePricing1,
  testimonial: siteData.categories.PawCare.sections.Testimonial.variants.PawCareTestimonial1,
  gallery: siteData.categories.PawCare.sections.Gallery.variants.PawCareGallery1,
  partners: siteData.categories.PawCare.sections.Partners.variants.PawCarePartners1,
  missionVision: siteData.categories.PawCare.sections.MissionVision.variants.PawCareMissionVision1,
  blog: siteData.categories.PawCare.sections.Blog.variants.PawCareBlog1,
  faq: siteData.categories.PawCare.sections.FAQ.variants.PawCareFAQ1,
  team: siteData.categories.PawCare.sections.Team.variants.PawCareTeam1,
  teamDetail: siteData.categories.PawCare.sections.TeamDetail.variants.PawCareTeamDetail1,
  sitemap: siteData.categories.PawCare.sections.Sitemap.variants.PawCareSitemap1,
  legalContent: siteData.categories.PawCare.sections.LegalContent.variants.PawCareLegalContent1,
  footer: siteData.categories.PawCare.sections.Footer.variants.PawCareFooter1,
  contact: siteData.categories.PawCare.sections.Contact.variants.PawCareContact1,
  pageBanner: siteData.categories.PawCare.sections.PageBanner.variants.PawCarePageBanner1,
  appointment: siteData.categories.PawCare.sections.Appointment.variants.PawCareAppointment1,
  blogDetail: siteData.categories.PawCare.sections.BlogDetail.variants.PawCareBlogDetail1,
};

