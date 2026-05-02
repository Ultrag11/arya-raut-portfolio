"use client";

import { useEffect, useState } from "react";

export default function GridBackground() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2C3440 1px, transparent 1px),
            linear-gradient(to bottom, #2C3440 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <div
        className="absolute inset-0 transition-[background] duration-75"
        style={{
          background: `radial-gradient(
            circle at ${pos.x}% ${pos.y}%,
            rgba(230,184,0,0.12),
            transparent 35%
          )`,
        }}
      />
    </div>
  );
}
