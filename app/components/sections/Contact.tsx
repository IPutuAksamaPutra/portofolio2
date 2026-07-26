"use client";

import personal from "@/app/data/personal";
import { socials } from "@/app/data/social";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionDivider from "../ui/SectionDivider";

// Import Ikon
import { FiArrowRight, FiSend, FiMail } from "react-icons/fi";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaTwitter, 
  FaInstagram,
  FaGithub
} from "react-icons/fa";

export default function Contact() {
  // Mapping ikon sosial media berdasar nama item di array socials
  const getSocialIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("github")) return <FaGithub className="h-4 w-4" />;
    if (lower.includes("linkedin")) return <FaLinkedinIn className="h-4 w-4" />;
    if (lower.includes("instagram")) return <FaInstagram className="h-4 w-4" />;
    if (lower.includes("email") || lower.includes("mail")) return <FiMail className="h-4 w-4" />;
    if (lower.includes("youtube")) return <FaYoutube className="h-4 w-4" />;
    if (lower.includes("twitter") || lower.includes("x")) return <FaTwitter className="h-4 w-4" />;
    if (lower.includes("facebook")) return <FaFacebookF className="h-4 w-4" />;
    return <FaInstagram className="h-4 w-4" />;
  };

  return (
    <Section
      id="contact"
      className="relative flex flex-col justify-between overflow-hidden bg-[var(--bg-warm)] pt-16 pb-0"
    >
      <Container className="relative z-10 pb-16 md:pb-20">
        
        {/* TOP CALL TO ACTION BANNER */}
        <div className="mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-zinc-200/80 pb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 tracking-wide uppercase mb-2">
              <span className="h-0.5 w-4 bg-amber-500" />
              <span>Contact</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
              Let’s <span className="text-amber-500">Connect</span>
            </h2>
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-3 rounded-full bg-zinc-950 pl-6 pr-2 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-zinc-800 shadow-md"
          >
            <span>Kirim Email Langsung</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-zinc-950 transition-transform group-hover:translate-x-0.5">
              <FiArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* MAIN GRID CONTENT */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          
          {/* 1. BRAND & SOSMED */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-zinc-950 font-black text-lg shadow-xs">
                {personal.name ? personal.name.charAt(0) : "A"}
              </div>
              <span className="text-xl font-black tracking-tight text-zinc-950">
                {personal.nickname || personal.name}<span className="text-amber-500">.</span>
              </span>
            </div>

            {/* Kalimat Ajakan Kolaborasi */}
            <p className="text-xs text-justify leading-relaxed font-medium text-zinc-600 max-w-md">
              Punya ide proyek menarik atau butuh partner kolaborasi? Saya siap membantu merancang dan membangun solusi digital modern berbasis <span className="font-semibold text-zinc-900">Web Development</span> maupun mengintegrasikan sistem cerdas <span className="font-semibold text-zinc-900">Machine Learning & Computer Vision</span>. Mari terhubung dan diskusikan ide Anda!
            </p>

            {/* Bulatan Sosial Media */}
            <div className="mt-2 flex items-center gap-2.5 flex-wrap">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-zinc-950 transition-all duration-200 hover:scale-110 shadow-xs"
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* 2. DETAIL KONTAK */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-amber-500">Informasi Kontak</h3>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-zinc-800">
              {personal.phone && (
                <div>
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase">Telepon / WA</span>
                  <a 
                    href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              )}

              {personal.email && (
                <div>
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase">Email</span>
                  <a 
                    href={`mailto:${personal.email}`} 
                    className="hover:text-amber-600 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              )}

              {personal.location && (
                <div>
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase">Lokasi</span>
                  <p className="text-zinc-700 font-medium">{personal.location}</p>
                </div>
              )}
            </div>
          </div>

          {/* 3. PESAN / NEWSLETTER CARD */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-amber-500">Tinggalkan Pesan</h3>
            <p className="text-xs text-zinc-600 font-medium">
              Masukkan email kamu untuk tetap terhubung atau memulai obrolan.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-1 flex items-center">
              <input
                type="email"
                placeholder="Alamat email kamu..."
                className="w-full rounded-l-xl border border-r-0 border-zinc-300 bg-white px-3.5 py-2.5 text-xs text-zinc-900 outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                aria-label="Kirim"
                className="flex items-center justify-center rounded-r-xl bg-zinc-950 px-4 py-2.5 text-amber-400 transition-colors hover:bg-zinc-800"
              >
                <FiSend className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </Container>

      <SectionDivider />
    </Section>
  );
}