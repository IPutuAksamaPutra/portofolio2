"use client";

import { experiences } from "@/app/data/experience";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionDivider from "../ui/SectionDivider";

// Import Ikon
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi2";

export default function Experience() {
  // Pengelompokan Otomatis:
  const educationList = experiences.filter(
    (item) =>
      item.organization?.toLowerCase().includes("undiksha") ||
      item.organization?.toLowerCase().includes("sma") ||
      item.organization?.toLowerCase().includes("smk") ||
      item.title?.toLowerCase().includes("mahasiswa")
  );

  const workList = experiences.filter(
    (item) => !educationList.some((edu) => edu.title === item.title)
  );

  return (
    <Section
      id="experience"
      className="relative flex flex-col justify-between overflow-hidden bg-[var(--bg-warm)] pt-16 pb-0"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute right-10 top-1/3 -z-10 h-80 w-80 rounded-full bg-amber-500/15 blur-[130px]" />
      <div className="absolute left-10 bottom-10 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-[110px]" />

      <Container className="relative z-10 pb-12 md:pb-16">
        
        {/* HEADER SECTION (RATA TENGAH & TEKS SERAGAM TANPA MIRING) */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 tracking-wide uppercase">
            <span className="h-0.5 w-4 bg-amber-500" />
            <span>Education & Experience</span>
          </div>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl md:text-4xl">
            My Academic and Professional Journey
          </h2>
        </div>

        {/* CONTAINER 2 KOLOM (GRID) */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 items-start">
          
          {/* ======================================================== */}
          {/* KOLOM 1: EDUCATION                                      */}
          {/* ======================================================== */}
          <div className="flex flex-col rounded-3xl border border-zinc-200/80 bg-white/70 p-6 sm:p-8 shadow-sm backdrop-blur-xs">
            
            {/* Header Kolom */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-zinc-950 shadow-xs">
                <HiOutlineAcademicCap className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Education</h3>
            </div>

            {/* List Item Education */}
            <div className="flex flex-col gap-6 pl-2">
              {educationList.length > 0 ? (
                educationList.map((item, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-zinc-300/80">
                    <span className="text-xs font-bold tracking-wider text-zinc-600">
                      {item.year}
                    </span>
                    <h4 className="mt-1 text-base font-extrabold text-zinc-900">
                      {item.organization}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-700 mt-0.5">
                      {item.title}
                    </p>
                    <p className="text-xs font-medium text-zinc-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                /* Fallback jika belum ada data khusus edukasi */
                <div className="relative pl-4 border-l-2 border-zinc-300/80">
                  <span className="text-xs font-bold tracking-wider text-zinc-600">
                    2023 - Sekarang
                  </span>
                  <h4 className="mt-1 text-base font-extrabold text-zinc-900">
                    Universitas Pendidikan Ganesha
                  </h4>
                  <p className="text-xs font-semibold text-amber-600 mt-0.5">
                    S1 Ilmu Komputer
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* ======================================================== */}
          {/* KOLOM 2: WORK & ORGANIZATION EXPERIENCE                  */}
          {/* ======================================================== */}
          <div className="flex flex-col rounded-3xl border border-zinc-200/80 bg-white/70 p-6 sm:p-8 shadow-sm backdrop-blur-xs">
            
            {/* Header Kolom */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-zinc-950 shadow-xs">
                <HiOutlineBriefcase className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Work & Organization</h3>
            </div>

            {/* List Item Work / Organization */}
            <div className="flex flex-col gap-6 pl-2">
              {workList.map((item, index) => (
                <div key={index} className="relative pl-4 border-l-2 border-zinc-300/80">
                  <span className="text-xs font-bold tracking-wider text-zinc-600">
                    {item.year}
                  </span>
                  <h4 className="mt-1 text-base font-extrabold text-zinc-900">
                    {item.organization}
                  </h4>
                  <p className="text-xs font-semibold text-amber-600 mt-0.5">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium text-zinc-600 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </Container>

      <SectionDivider />
    </Section>
  );
}