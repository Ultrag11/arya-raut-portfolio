"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0F1115]/70 border-b border-white/10 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 lg:px-[6vw] py-4">
        <a href="#" className="font-semibold text-white tracking-tight">
          Arya Raut
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm lg:text-[0.9vw] text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="mailto:aryaraut11@gmail.com" className="hover:text-white transition">Email</a>
          <a href="/files/Arya-Raut-Resume.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition">Resume</a>
        </div>
      </div>
    </header>
  );
}
