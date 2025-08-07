"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled
          ? "backdrop-blur border-b border-foreground/10 bg-background/60 supports-[backdrop-filter]:bg-background/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-base md:text-lg">
          {profile.name}
        </a>
        <div className="hidden sm:flex items-center gap-6 text-base text-foreground/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}


