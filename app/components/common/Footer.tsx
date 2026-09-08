"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, PawPrint, Heart } from "lucide-react";
import { site, SectionProps, FooterData } from "@/data/index";

function FeatureIcon({ type }: { type: string }) {
  if (type === "heart") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
        <path
          d="M24 40s-12.5-7.6-12.5-16.5A6.7 6.7 0 0124 18.2a6.7 6.7 0 0112.5 5.3C36.5 32.4 24 40 24 40z"
          stroke="#0b1324"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="26" r="2.2" fill="#ffb016" />
        <circle cx="20.8" cy="23.4" r="1.4" fill="#ffb016" />
        <circle cx="27.2" cy="23.4" r="1.4" fill="#ffb016" />
        <circle cx="21.4" cy="28.4" r="1.4" fill="#ffb016" />
        <circle cx="26.6" cy="28.4" r="1.4" fill="#ffb016" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
        <path
          d="M24 8l12 4.5v9.8c0 7.6-5.1 14.6-12 16.7-6.9-2.1-12-9.1-12-16.7V12.5L24 8z"
          stroke="#0b1324"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 24.5l3.8 3.8 7.2-7.5"
          stroke="#ffb016"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "247") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
        <path
          d="M34.5 14.5A13.5 13.5 0 1115 14.8"
          stroke="#0b1324"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M34 10v6h-6"
          stroke="#ffb016"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="24"
          y="29"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#ffb016"
          fontFamily="var(--font-poppins), sans-serif"
        >
          24
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
      <path
        d="M14 34l-3 7 7.2-2.2A13.5 13.5 0 1034.5 14.8 13.5 13.5 0 0014 34z"
        stroke="#0b1324"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 29s-5.5-3.4-5.5-7.2A2.9 2.9 0 0124 19.4a2.9 2.9 0 015.5 2.4C29.5 25.6 24 29 24 29z"
        fill="#ffb016"
      />
    </svg>
  );
}

export default function Footer({
  data,
  className,
}: SectionProps<FooterData> = {}) {
  const footer = data || site.footer;
  const year = new Date().getFullYear();

  // map data to component's expected structure
  const contact = footer.contact;
  const socials = {
    facebook:
      footer.socialLinks?.find((s) => s.platform === "facebook")?.url || "#",
    instagram:
      footer.socialLinks?.find((s) => s.platform === "instagram")?.url || "#",
    twitter:
      footer.socialLinks?.find((s) => s.platform === "twitter")?.url || "#",
    linkedin:
      footer.socialLinks?.find((s) => s.platform === "linkedin")?.url || "#",
    youtube:
      footer.socialLinks?.find((s) => s.platform === "youtube")?.url || "#",
    whatsapp:
      footer.socialLinks?.find((s) => s.platform === "whatsapp")?.url || "#",
  };
  const menus = footer.menus;
  const features = footer.features || [];
  const bottom = { links: footer.bottomLinks };
  const copyright = footer.copyright;

  return (
    <footer
      className={`relative w-full overflow-hidden bg-[#F7F7F7] ${className || ""}`}
    >
      {/* Paw watermarks */}
      <PawPrint
        className="pointer-events-none absolute right-[6%] top-16 h-44 w-44 text-[#0b1324]/[0.04] sm:h-56 sm:w-56"
        strokeWidth={1}
        aria-hidden
      />
      <PawPrint
        className="pointer-events-none absolute bottom-40 right-[18%] h-28 w-28 rotate-12 text-[#0b1324]/[0.035] sm:h-36 sm:w-36"
        strokeWidth={1}
        aria-hidden
      />

      {/* Main footer */}
      <div className="site-container relative z-10 pt-8 pb-8 lg:pt-10 lg:pb-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.25fr_auto_1fr_1fr_1fr] lg:gap-8 xl:gap-10">
          {/* Brand + contact */}
          <div className="max-w-sm sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="PawCare"
                width={190}
                height={70}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[#0b1324]/80 sm:text-[15px]">
              {footer.description}
            </p>

            <div className="mt-7 space-y-4">
              <a
                href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3.5 text-sm font-medium text-[#0b1324] transition-colors hover:text-[#ffb016]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffb016]">
                  <Phone className="h-4 w-4 text-white" strokeWidth={2.25} />
                </span>
                {footer.contact.phone}
              </a>

              <a
                href={`mailto:${footer.contact.email}`}
                className="flex items-center gap-3.5 text-sm font-medium text-[#0b1324] transition-colors hover:text-[#ffb016]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffb016]">
                  <Mail className="h-4 w-4 text-white" strokeWidth={2.25} />
                </span>
                {footer.contact.email}
              </a>

              <div className="flex items-start gap-3.5 text-sm font-medium text-[#0b1324]">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffb016]">
                  <MapPin className="h-4 w-4 text-white" strokeWidth={2.25} />
                </span>
                <span className="max-w-[220px] leading-snug">
                  {contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden w-px bg-[#d9dee7] lg:block" aria-hidden />

          {/* Link columns */}
          {footer.menus.map((menu) => (
            <div key={menu.title} className="lg:pt-3">
              <h3 className="text-base font-bold text-[#0b1324]">
                {menu.title}
              </h3>
              <span className="mt-2 mb-5 block h-[3px] w-8 rounded-full bg-[#ffb016]" />
              <ul className="space-y-3">
                {menu.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-sm text-[#0b1324]/75 transition-colors hover:text-[#ffb016]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Features bar */}
      <div className="relative z-10 border-y border-[#e5e8ee] bg-[#F1F2F4]">
        <div className="site-container grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-9">
          {features.map((feature: any, index: number) => (
            <div
              key={feature.title}
              className={`flex items-center gap-4 lg:px-6 ${
                index < features.length - 1
                  ? "lg:border-r lg:border-[#d5dae3]"
                  : ""
              }`}
            >
              <FeatureIcon type={feature.icon} />
              <div>
                <h4 className="text-[15px] font-bold text-[#0b1324]">
                  {feature.title}
                </h4>
                <p className="mt-0.5 text-sm leading-snug text-[#0b1324]/65">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 border-t-2 border-[#ffb016] bg-[#0b1324]">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-5 lg:flex-row">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <PawPrint
              className="h-4 w-4 text-[#ffb016]"
              strokeWidth={2.25}
              fill="#ffb016"
            />
            <span>
              {footer.copyright}{" "}
              {footer.poweredBy && (
                <>
                  Powered By{" "}
                  <span className="font-semibold text-[#ffb016]">
                    {footer.poweredBy}
                  </span>
                </>
              )}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 text-sm text-white/75">
            {[...bottom.links, { label: "Sitemap", href: "/sitemap" }].map(
              (link, index, arr) => (
                <span key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="px-2 transition-colors hover:text-[#ffb016] sm:px-3"
                  >
                    {link.label}
                  </Link>
                  {index < arr.length - 1 && (
                    <span className="text-white/30" aria-hidden>
                      |
                    </span>
                  )}
                </span>
              ),
            )}
          </div>

          <div className="hidden items-center lg:flex" aria-hidden>
            <Heart
              className="h-5 w-5 fill-none text-[#ffb016]"
              strokeWidth={1.75}
            />
            <Heart
              className="-ml-2 h-5 w-5 fill-none text-[#ffb016]"
              strokeWidth={1.75}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
