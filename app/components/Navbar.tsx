"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, PawPrint, ArrowRight, Menu, X } from "lucide-react";
import data from "../../data.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { logoText, links, button } = data.navbar;

  return (
    <div className="relative w-full border-b border-[#eee8df] bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        {/* Logo */}
        <Link href="/" className="relative z-20 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={logoText}
            width={200}
            height={72}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex items-center gap-1 text-[15px] font-semibold transition-colors hover:text-[#ffb016] ${
                link.active ? "text-[#ffb016]" : "text-[#0b1324]"
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
              )}
              {link.active && (
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#ffb016]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={button.href}
          className="hidden items-center gap-2.5 rounded-md bg-[#ffb016] px-5 py-3 text-[15px] font-bold text-[#0b1324] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e09a0f] hover:shadow-md lg:inline-flex"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <PawPrint className="h-3.5 w-3.5 text-[#0b1324]" strokeWidth={2.5} fill="#0b1324" />
          </span>
          <span>{button.text}</span>
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
      {open && (
        <div className="border-t border-[#eee8df] bg-white px-4 pb-5 pt-3 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-3 text-[15px] font-semibold transition-colors ${
                  link.active
                    ? "bg-[#fff7e8] text-[#ffb016]"
                    : "text-[#0b1324] hover:bg-[#f7f4ef]"
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
          </nav>

          <Link
            href={button.href}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-[#ffb016] px-5 py-3.5 text-[15px] font-bold text-[#0b1324]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <PawPrint className="h-3.5 w-3.5 text-[#0b1324]" strokeWidth={2.5} fill="#0b1324" />
            </span>
            <span>{button.text}</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      )}
    </div>
  );
}
