"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import SectionDivider from "../ui/SectionDivider";

// Import Ikon
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiTypescript,
  SiPython,
  SiPhp,
  SiGithub,
  SiFigma,
} from "react-icons/si";

// Grouping Skill per Kategori dalam Bahasa Indonesia
const skillCategories = [
  {
    id: "frontend",
    title: "Pengembangan Frontend",
    subtitle: "UI/UX & Performa Web",
    desc: "Membangun antarmuka web modern, responsif, dan interaktif dengan ekosistem React, Next.js, dan Tailwind CSS.",
    badge: "4 Teknologi",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    id: "backend",
    title: "Pengembangan Backend",
    subtitle: "API & Logika Server",
    desc: "Mengembangkan arsitektur backend, RESTful API, dan integrasi basis data yang aman serta efisien.",
    badge: "2 Teknologi",
    items: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    id: "tools-ml",
    title: "Tools & Pengembangan ML",
    subtitle: "Workflow & Pengolahan Data",
    desc: "Pemrosesan data, pelatihan model Machine Learning, kontrol versi repositori, serta perancangan desain antarmuka.",
    badge: "3 Teknologi",
    items: [
      { name: "Python", icon: SiPython },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      className="relative flex flex-col justify-between overflow-hidden bg-[var(--bg-warm)] pt-20 pb-0"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute right-10 top-1/3 -z-10 h-80 w-80 rounded-full bg-amber-500/15 blur-[130px]" />
      <div className="absolute left-10 bottom-10 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-[110px]" />


        <div className="mx-auto max-w-6xl">
          {/* Header Center (Tanpa Tombol) */}
          <div className="mb-10 flex flex-col items-center text-center">
            
            <h3 className="mt-2.5 text-2xl font-black tracking-tight text-zinc-950 md:text-3xl">
              Teknologi Yang Saya Pelajari
            </h3>
            <p className="mt-1.5 max-w-lg text-xs font-medium text-zinc-600 md:text-sm">
              Teknologi dan tools utama yang saya gunakan dalam mengeksekusi proyek web & Machine Learning.
            </p>
          </div>

          {/* Wrapper Cards Layout Rata Tengah (Flex Center) */}
          <div className="flex flex-wrap justify-center gap-6 overflow-x-auto pb-4 pt-2">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="group relative flex w-full max-w-[340px] flex-col items-center rounded-3xl border border-zinc-300/80 bg-gradient-to-b from-white via-[var(--bg-warm)] to-zinc-100/80 p-7 text-center shadow-md shadow-zinc-950/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/80 hover:shadow-xl hover:shadow-amber-500/10 sm:w-[320px] lg:w-[340px]"
              >
                {/* Bevel Light Effect Line */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                {/* Container Ikon Stack Melingkar */}
                <div className="mb-6 flex items-center justify-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-3 shadow-inner transition-transform duration-300 group-hover:scale-105">
                  {cat.items.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <span
                        key={tech.name}
                        title={tech.name}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-amber-400 shadow-xs transition-colors group-hover:bg-amber-500 group-hover:text-zinc-950"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    );
                  })}
                </div>

                {/* Subtitle / Kategori Badge */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                  {cat.subtitle}
                </span>

                {/* Judul Kategori */}
                <h4 className="mt-1 text-lg font-black tracking-tight text-zinc-950 transition-colors group-hover:text-amber-600">
                  {cat.title}
                </h4>

                {/* Pill Ringkasan Teknologi */}
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {cat.items.map((tech) => (
                    <span
                      key={tech.name}
                      className="rounded-md border border-zinc-300/80 bg-white/80 px-2 py-0.5 text-[11px] font-bold text-zinc-800"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Deskripsi */}
                <p className="mt-4 text-xs leading-relaxed font-medium text-zinc-600">
                  {cat.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-auto pt-6 w-full flex justify-center">
                  <span className="h-1 w-10 rounded-full bg-zinc-300 transition-all duration-300 group-hover:w-20 group-hover:bg-amber-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
    

      {/* Section Divider Polos Seragam */}
      <SectionDivider />
    </Section>
  );
}