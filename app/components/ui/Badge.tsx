import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 px-4 py-2 text-xs font-bold tracking-tight text-zinc-800 shadow-2xs transition-all duration-200 hover:border-zinc-950 hover:bg-zinc-950 hover:text-amber-400 sm:text-sm ${className}`}
    >
      {children}
    </span>
  );
}