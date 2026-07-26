"use client";

import { useState } from "react";
import personal from "@/app/data/personal";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import SectionDivider from "../ui/SectionDivider";

export default function About() {
  const [activeTab, setActiveTab] = useState<"bio" | "education" | "philosophy">("bio");

  // Pengamanan pembacaan teks deskripsi
  const description = personal.aboutDescription
    ? personal.aboutDescription.replace(/Tuusame/g, "I Putu Aksama Putra")
    : "";

  return (
    <Section 
      id="about" 
      className="theme-bg-warm relative flex flex-col justify-between overflow-hidden pt-20 pb-0"
    >
      <div className="absolute right-10 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute left-10 top-10 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" />

      <Container className="relative z-10 pb-16 md:pb-20">
        <SectionTitle
          subtitle="ABOUT ME"
          title="Get to Know Me"
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Decorative Corner Borders */}
          <div className="absolute -top-3 -left-3 h-8 w-8 border-l-2 border-t-2 border-amber-500 rounded-tl z-20" />
          <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-amber-500 rounded-br z-20" />

          {/* Main Container Card */}
          <div className="glass-card relative overflow-hidden rounded-3xl border border-zinc-300/80 p-6 shadow-xs md:p-10 transition-all duration-300 hover:border-amber-500/80 hover:shadow-md">
            
            {/* Watermark Background Text */}
            <span className="absolute -right-6 -bottom-8 pointer-events-none select-none text-8xl font-black tracking-tighter text-zinc-900/5 sm:text-9xl">
              TuuSame
            </span>

            {/* Top Navigation Bar / Interactive Tabs */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-300/70 pb-6">
              
              {/* Status Badge */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500"></span>
                </span>
                <span className="text-xs font-extrabold tracking-widest text-zinc-900 uppercase">
                  I Putu Aksama Putra
                </span>
              </div>

              {/* Tab Switcher Buttons */}
              <div className="inline-flex rounded-xl border border-zinc-300 bg-zinc-200/50 p-1">
                <button
                  onClick={() => setActiveTab("bio")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    activeTab === "bio"
                      ? "bg-amber-500 text-zinc-950 shadow-xs"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Bio & Overview
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    activeTab === "education"
                      ? "bg-amber-500 text-zinc-950 shadow-xs"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Education
                </button>
                
              </div>

            </div>

            {/* Tab Content Display Area */}
            <div className="min-h-[220px]">
              
              {/* TAB 1: BIO & OVERVIEW */}
              {activeTab === "bio" && (
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center animate-fadeIn">
                  <div className="space-y-4 lg:col-span-7">
                    <p className="text-justify text-base md:text-lg leading-relaxed text-zinc-800 font-medium tracking-wide">
                      {description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="rounded-md border border-zinc-300 bg-zinc-200/50 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                        💡 Problem Solver
                      </span>
                      <span className="rounded-md border border-zinc-300 bg-zinc-200/50 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                        🚀 Learner
                      </span>
                      <span className="rounded-md border border-zinc-300 bg-zinc-200/50 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                        🎯 Detail-Oriented
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 lg:col-span-5">
                    <div className="rounded-2xl border border-zinc-300/80 bg-zinc-200/40 p-4 transition-colors hover:border-amber-500/50">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                        Main Focus
                      </div>
                      <div className="mt-1 text-xs font-bold text-zinc-800 sm:text-sm">
                        Web Development & Machine Learning
                      </div>
                    </div>

                    <div className="rounded-2xl border border-zinc-300/80 bg-zinc-200/40 p-4 transition-colors hover:border-amber-500/50">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                        Core Tech Stack
                      </div>
                      <div className="mt-1 text-xs font-bold text-zinc-800 sm:text-sm">
                        React • Next.js • Laravel • Python
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: EDUCATION */}
              {activeTab === "education" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="rounded-2xl border border-zinc-300/80 bg-zinc-200/40 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                        Higher Education
                      </span>
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-extrabold text-amber-800 border border-amber-500/20">
                        Computer Science
                      </span>
                    </div>
                    <h4 className="mt-2 text-xl font-black text-zinc-950">
                      Universitas Pendidikan Ganesha (UNDIKSHA)
                    </h4>
                    {/* Menggunakan text-justify juga di paragraf Education */}
                    <p className="mt-2 text-justify text-sm text-zinc-700 font-medium leading-relaxed">
                        Dengan Peminatan Sistem Cerdas dengan Fokus pada pengembangan aplikasi web modern (Full-Stack), perancangan sistem, serta algoritma Machine Learning & Deep Learning (Computer Vision, Clasification, Custering, Analysis Sentiment & Segmentation).
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </Container>

      {/* Divider Polos Seragam */}
      <SectionDivider />
    </Section>
  );
}