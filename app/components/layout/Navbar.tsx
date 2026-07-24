"use client";

import Link from "next/link";
import Container from "../ui/Container";
import useScroll from "@/app/hooks/useScroll";

const menus = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScroll(20);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-stone-100/85 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-1 text-xl font-black tracking-tight text-zinc-900"
          >
            <span>Aksa</span>
            <span className="h-2 w-2 rounded-full bg-amber-500 transition-transform duration-300 group-hover:scale-150" />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-1 rounded-full border border-zinc-300/70 bg-white/80 p-1.5 shadow-xs backdrop-blur-md md:flex">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-600 transition-all duration-200 hover:bg-zinc-900 hover:text-amber-400"
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button / Status Badge */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#contact"
              className="rounded-full bg-amber-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all duration-200 hover:bg-amber-600 hover:shadow-md"
            >
              Hire Me
            </Link>
          </div>

        </div>
      </Container>
    </header>
  );
}