"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import useScroll from "@/app/hooks/useScroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const menus = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScroll(20);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/60 bg-stone-100/80 py-3 backdrop-blur-md shadow-xs dark:border-zinc-800/80 dark:bg-zinc-950/80"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 text-xl font-black tracking-tight text-zinc-900 dark:text-white"
          >
            <span>TuuSamee.</span>
            <span className="h-2 w-2 rounded-full bg-amber-500 transition-all duration-300 group-hover:scale-150 group-hover:bg-amber-400 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          </Link>

          {/* Floating Pill Navigation Links (Desktop) */}
          <nav className="hidden items-center gap-1 rounded-full border border-zinc-200/80 bg-white/70 p-1.5 shadow-xs backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70 md:flex">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="relative rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 transition-all duration-200 hover:bg-zinc-900 hover:text-amber-400 dark:text-zinc-300 dark:hover:bg-amber-500 dark:hover:text-zinc-950"
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button with Available Status (Desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-amber-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-900 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-950"></span>
              </span>
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 shadow-xs backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>

        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-zinc-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/95 md:hidden">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-700 transition-colors hover:bg-amber-500/10 hover:text-amber-500 dark:text-zinc-300"
              >
                {menu.name}
              </Link>
            ))}
            <hr className="my-1 border-zinc-200 dark:border-zinc-800" />
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all active:scale-98"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-950" />
              Hire Me
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}