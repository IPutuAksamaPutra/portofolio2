"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import personal from "@/app/data/personal";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionDivider from "../ui/SectionDivider";

export default function Hero() {
  const name = personal.name || "I Putu Aksama Putra";
  const avatarSrc = personal.avatar || "/images/pp.jpg";

  return (
    <Section className="theme-bg-warm relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-white pt-28 pb-0 md:pt-36">
      
      <Container className="relative z-10 pb-16 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left Column (Content & Typography) */}
          <div className="lg:col-span-7">

            {/* Greeting Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                HI THERE!
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-4 text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              I&apos;M <span className="text-amber-500">{name.split(" ")[2] || "AKSA"}</span>.
            </h1>

            {/* Full Name Sub-heading */}
            <p className="mb-3 text-lg font-bold tracking-wide text-zinc-800 sm:text-xl">
              {name}
            </p>

            {/* Role Tag Banner dengan Typewriter Effect */}
            <div className="mb-6 inline-flex items-center rounded-md bg-zinc-950 px-3.5 py-1.5 min-h-[36px]">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 sm:text-sm">
                <Typewriter
                  options={{
                    strings: [
                      "JUNIOR FULL-STACK DEVELOPER",
                      "AI ENTHUSIAST",
                      "MACHINE LEARNING & DEEP LEARNING",
                      "COMPUTER VISION",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </div>

            {/* Description Paragraph (Menggunakan heroDescription) */}
            <p className="mb-8 max-w-xl text-sm text-justify font-medium leading-relaxed text-zinc-600 sm:text-base">
              {personal.heroDescription}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-amber-500 px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-zinc-950 transition-all duration-200 hover:bg-amber-600 hover:shadow-lg hover:-translate-y-0.5"
              >
                View Projects
              </a>

              <a
                href={personal.cv || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-zinc-800 transition-all duration-200 hover:bg-zinc-950 hover:text-amber-400 hover:border-zinc-950 hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </div>

          </div>

          {/* Right Column (Hero Avatar) */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative">

              {/* Decorative Circle Line Overlay (Searah Jarum Jam) */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-amber-500/40 animate-[spin_60s_linear_infinite]" />

              {/* Container Floating Orbit Badges (Berputar Berlawanan Arah Jam) */}
              <div className="absolute -inset-4 rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]">
                {/* Badge ⚡ (Atas Kanan) */}
                <div className="absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs text-amber-400 shadow-md">
                  🧠
                </div>

                {/* Badge 💻 (Bawah Kiri) */}
                <div className="absolute bottom-2 left-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-xs text-zinc-950 font-bold shadow-md">
                  💻
                </div>
              </div>

              {/* Main Avatar Wrapper */}
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-zinc-100 bg-zinc-200 shadow-xl">
                <Image
                  src={avatarSrc}
                  alt={name}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>
      </Container>

      <SectionDivider />
    </Section>
  );
}