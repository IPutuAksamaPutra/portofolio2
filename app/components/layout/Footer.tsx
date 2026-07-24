"use client";

import personal from "@/app/data/personal";
import Container from "../ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b3022] py-3.5 text-zinc-300 border-t border-zinc-800">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] tracking-wide">
          
          {/* KIRI: COPYRIGHT */}
          <p className="text-zinc-400">
            Copyright © {currentYear}{" "}
            <span className="font-semibold text-amber-500">
              {personal.nickname || personal.name || "TuuSame"}
            </span>
            . All Rights Reserved.
          </p>

          {/* KANAN: LINKS */}
          <div className="flex items-center gap-2 text-zinc-400">
            <a
              href="#"
              className="hover:text-amber-400 transition-colors"
            >
              User Terms & Conditions
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
}