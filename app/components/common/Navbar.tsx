"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import { site, SectionProps, HeaderData } from "@/data/index";
import { motion, AnimatePresence } from "framer-motion";

function MobileNavItem({ link, setOpen }: { link: any, setOpen: (open: boolean) => void }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {link.hasDropdown ? (
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-[15px] font-semibold transition-colors ${
            link.active || isDropdownOpen
              ? "bg-[#fff7e8] text-[#ffb016]"
              : "text-[#0b1324] hover:bg-[#f7f4ef]"
          }`}
        >
          <span>{link.label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      ) : (
        <Link
          href={link.href}
          onClick={() => setOpen(false)}
          className={`flex items-center justify-between rounded-md px-3 py-3 text-[15px] font-semibold transition-colors ${
            link.active
              ? "bg-[#fff7e8] text-[#ffb016]"
              : "text-[#0b1324] hover:bg-[#f7f4ef]"
          }`}
        >
          <span>{link.label}</span>
        </Link>
      )}
      
      <AnimatePresence>
        {link.hasDropdown && link.subLinks && isDropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col pl-6 pr-3 border-l-[1.5px] border-[#fff7e8] ml-4"
          >
            <div className="py-2 mt-1 flex flex-col space-y-1">
              {link.subLinks.map((sub: any, idx: number) => (
                <Link
                  key={`${sub.href}-${idx}`}
                  href={sub.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-[14.5px] font-medium text-[#4a5568] hover:bg-[#fff7e8] hover:text-[#ffb016] transition-colors"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar({ data, className }: SectionProps<HeaderData> = {}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navbarData = data || site.header;
  
  // Map new schema to expected props
  const logoText = navbarData.logo?.name || "PawCare";
  const links = navbarData.menuItems?.map((item: any) => ({
    label: item.label,
    href: item.href,
    active: pathname === item.href || (item.hasDropdown && item.dropdownItems?.some((sub: any) => pathname === sub.href)),
    hasDropdown: item.hasDropdown,
    subLinks: item.dropdownItems
  })) || [];
  const button = navbarData.cta ? { text: navbarData.cta.label, href: navbarData.cta.href } : null;

  return (
    <div className={`relative w-full border-b border-[#eee8df] bg-white ${className || ''}`}>
      <div className="site-container flex items-center justify-between gap-4 py-3 lg:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-20 flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/pawcare-logo.png"
            alt={logoText}
            width={193}
            height={56}
            className="block h-14 w-auto sm:h-16"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {links.map((link: any) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`group/link relative flex items-center gap-1 text-[15px] font-semibold transition-colors hover:text-[#ffb016] py-2 ${
                  link.active ? "text-[#ffb016]" : "text-[#0b1324]"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
                )}
                <span 
                  className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-[#ffb016] transition-all duration-300 ease-out ${
                    link.active ? "w-full" : "w-0 group-hover/link:w-full"
                  }`} 
                />
              </Link>
              
              {link.hasDropdown && link.subLinks && (
                <div className="absolute top-[100%] left-0 mt-2 w-48 rounded-md bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <div className="py-2">
                    {link.subLinks.map((sub: any, idx: number) => (
                      <Link
                        key={`${sub.href}-${idx}`}
                        href={sub.href}
                        className="block px-4 py-2 text-sm font-medium text-[#0b1324] hover:bg-[#fff7e8] hover:text-[#ffb016] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={button?.href || "#"}
          className="hidden items-center gap-2.5 rounded-md bg-[#ffb016] px-5 py-3 text-[15px] font-bold text-[#0b1324] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e09a0f] hover:shadow-md lg:inline-flex"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <PawPrint className="h-3.5 w-3.5 text-[#0b1324]" strokeWidth={2.5} fill="#0b1324" />
          </span>
          <span>{button?.text}</span>
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#0b1324]/15 text-[#0b1324] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-[#eee8df]"
          >
            <div className="bg-white px-4 pb-5 pt-3 sm:px-6">
              <nav className="flex flex-col gap-1">
                {links.map((link: any) => (
                  <MobileNavItem key={link.href} link={link} setOpen={setOpen} />
                ))}
              </nav>

              <Link
                href={button?.href || "#"}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-[#ffb016] px-5 py-3.5 text-[15px] font-bold text-[#0b1324]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                  <PawPrint className="h-3.5 w-3.5 text-[#0b1324]" strokeWidth={2.5} fill="#0b1324" />
                </span>
                <span>{button?.text}</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

