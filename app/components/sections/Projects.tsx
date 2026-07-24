"use client";

import { useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import projects, { Project } from "@/app/data/projects";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionDivider from "../ui/SectionDivider";

import { HiOutlineFolderOpen } from "react-icons/hi2";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <Section
      id="projects"
      className="relative flex flex-col justify-between overflow-hidden bg-[var(--bg-warm)] pt-16 pb-0"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute left-10 top-1/4 -z-10 h-80 w-80 rounded-full bg-amber-500/15 blur-[130px]" />
      <div className="absolute right-10 bottom-20 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-[110px]" />

      <Container className="relative z-10 pb-12 md:pb-16">
        
        {/* ======================================================== */}
        {/* HEADER SECTION (TYPEWRITER DI BAWAH JUDUL)               */}
        {/* ======================================================== */}
        <div className="mb-8 flex flex-col gap-1.5 border-b border-zinc-300/60 pb-6">
          <h2 className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl md:text-4xl">
            Portofolio & Project
          </h2>

          <div className="text-xs font-semibold text-zinc-600 text-left max-w-lg">
            <Typewriter
              options={{
                strings: [
                  "Pengembangan Aplikasi Web & Full-Stack",
                  "Implementasi Machine Learning & Vision",
                  "Eksplorasi Solusi Kecerdasan Buatan (AI)",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 25,
              }}
            />
          </div>
        </div>

        {/* CONTAINER UTAMA (Interactive Grid Layout) */}
        {selectedProject && (
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            
            {/* SISI KIRI: DISPLAY UTAMA (DETAIL COMPACT) - 7 Kolom */}
            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-zinc-300/80 bg-gradient-to-b from-white via-[var(--bg-warm)] to-zinc-100/80 p-5 sm:p-6 shadow-md shadow-zinc-950/5 lg:col-span-7">
              
              {/* Highlight Line Top */}
              <div className="absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

              {/* Visual Image Preview */}
              <div className="relative h-52 sm:h-60 w-full overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-300/60 shadow-xs">
                {selectedProject.image ? (
                  <Image
                    key={selectedProject.id}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover opacity-95 transition-all duration-300 animate-fadeIn"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                    <HiOutlineFolderOpen className="h-10 w-10 text-amber-500/80 mb-1" />
                    <span className="text-xs font-bold text-amber-400">
                      {selectedProject.title}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-70" />

                {/* Badge Status */}
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-zinc-950/80 px-2.5 py-1 text-[10px] font-extrabold text-amber-400 backdrop-blur-md shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                    ACTIVE SHOWCASE
                  </span>
                  {selectedProject.featured && (
                    <span className="inline-flex items-center rounded-lg border border-amber-500/50 bg-amber-500 px-2.5 py-1 text-[10px] font-extrabold text-zinc-950 shadow-xs">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* Informasional Rapat (Judul, Deskripsi, Tech Stack, & Tombol) */}
              <div className="mt-4 flex flex-col gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-zinc-950">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-zinc-600 sm:text-sm">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack + Tombol Link Rapat Dalam Satu Seksi */}
                <div className="pt-3 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-300/80 bg-white px-2 py-0.5 text-[10px] font-bold text-zinc-800 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tombol GitHub & Live Demo */}
                  <div className="flex items-center gap-2">
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 hover:bg-zinc-100 transition-colors"
                      >
                        <FiGithub className="h-3.5 w-3.5" />
                        <span>Repo</span>
                      </a>
                    )}

                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-zinc-950 shadow-xs hover:bg-amber-400 transition-colors"
                      >
                        <span>Demo</span>
                        <FiExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* SISI KANAN: GRID KECIL (SCROLLABLE LIST) - 5 Kolom */}
            <div className="flex flex-col lg:col-span-5">
              
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase">
                  Daftar Proyek ({projects.length})
                </span>
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded-md">
                  Scroll Vertikal ↓
                </span>
              </div>

              {/* Scroll Container List Proyek */}
              <div 
                className="no-scrollbar flex flex-col gap-2.5 max-h-[440px] sm:max-h-[480px] overflow-y-auto pr-1"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#d4d4d8 transparent" }}
              >
                {projects.map((project) => {
                  const isSelected = selectedProject.id === project.id;

                  return (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`group relative flex items-center gap-3 rounded-2xl border p-2.5 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-amber-500 bg-white shadow-sm ring-2 ring-amber-500/20"
                          : "border-zinc-300/70 bg-white/60 hover:border-amber-500/50 hover:bg-white"
                      }`}
                    >
                      {/* Thumbnail Kecil */}
                      <div className="relative h-14 w-18 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-200">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="72px"
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <HiOutlineFolderOpen className="h-4 w-4 text-amber-500" />
                          </div>
                        )}
                      </div>

                      {/* Info Ringkas */}
                      <div className="flex flex-1 flex-col justify-center min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className={`text-xs font-bold truncate ${isSelected ? "text-amber-600" : "text-zinc-900"}`}>
                            {project.title}
                          </h4>
                          {isSelected && <FiCheckCircle className="h-3.5 w-3.5 flex-shrink-0 text-amber-500" />}
                        </div>

                        <p className="mt-0.5 line-clamp-1 text-[11px] font-medium text-zinc-500">
                          {project.description}
                        </p>

                        <div className="mt-1 flex flex-wrap gap-1">
                          {project.technologies.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-sm bg-zinc-100 px-1 py-0.5 text-[9px] font-semibold text-zinc-600"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="text-[9px] font-bold text-zinc-400 self-center">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>
        )}

      </Container>

      <SectionDivider />
    </Section>
  );
}