"use client";

export default function SectionDivider() {
  return (
    <div className="relative w-full py-4 flex items-center justify-center bg-transparent pointer-events-none">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </div>
  );
}