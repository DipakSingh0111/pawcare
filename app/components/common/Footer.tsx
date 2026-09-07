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

export default function Footer({ data, className }: SectionProps<FooterData> = {}) {
  const footer = data || site.footer;
  const year = new Date().getFullYear();

  // map data to component's expected structure
  const contact = footer.contact;
  const socials = {
    facebook: footer.socialLinks?.find(s => s.platform === 'facebook')?.url || '#',
    instagram: footer.socialLinks?.find(s => s.platform === 'instagram')?.url || '#',
    twitter: footer.socialLinks?.find(s => s.platform === 'twitter')?.url || '#',
    linkedin: footer.socialLinks?.find(s => s.platform === 'linkedin')?.url || '#',
    youtube: footer.socialLinks?.find(s => s.platform === 'youtube')?.url || '#',
    whatsapp: footer.socialLinks?.find(s => s.platform === 'whatsapp')?.url || '#'
  };
  const menus = footer.menus;
  const features = footer.features || [];
  const bottom = { links: footer.bottomLinks };
  const copyright = footer.copyright;

  return (
    <footer className={`relative w-full overflow-hidden bg-[#F7F7F7] ${className || ''}`}>
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
      <div className="site-container relative z-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_auto_1fr_1fr_1fr_1fr] lg:gap-8 xl:gap-10">
          {/* Brand + contact */}
          <div className="max-w-sm">
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

            <div className="mt-7 flex items-center gap-3">
              <Link
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1324]/25 text-[#0b1324] transition-colors hover:border-[#ffb016] hover:bg-[#ffb016] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1324]/25 text-[#0b1324] transition-colors hover:border-[#ffb016] hover:bg-[#ffb016] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1324]/25 text-[#0b1324] transition-colors hover:border-[#ffb016] hover:bg-[#ffb016] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </Link>
              <Link
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1324]/25 text-[#0b1324] transition-colors hover:border-[#ffb016] hover:bg-[#ffb016] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden w-px bg-[#d9dee7] lg:block" aria-hidden />

          {/* Link columns */}
          {footer.menus.map((menu) => (
            <div key={menu.title}>
              <h3 className="text-base font-bold text-[#0b1324]">{menu.title}</h3>
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
              © {year}{" "}
              <span className="font-semibold text-[#ffb016]">Paw Care</span>. All
              rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 text-sm text-white/75">
            {[...bottom.links, { label: "Sitemap", href: "/sitemap" }].map((link, index, arr) => (
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
            ))}
          </div>

          <div className="hidden items-center lg:flex" aria-hidden>
            <Heart className="h-5 w-5 fill-none text-[#ffb016]" strokeWidth={1.75} />
            <Heart className="-ml-2 h-5 w-5 fill-none text-[#ffb016]" strokeWidth={1.75} />
          </div>
        </div>
      </div>
    </footer>
  );
}

