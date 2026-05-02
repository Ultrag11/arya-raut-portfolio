"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const aboutData = [
  {
    title: "Industrial Engineering",
    description:
      "I am pursuing an M.S. in Industrial Engineering at the University of Wisconsin-Madison, with a background in Mechanical Engineering and Data Science from the University of Mumbai. My work focuses on process optimization, manufacturing systems, quality, and human-centered production improvement.",
    image: "/images/arya/hero-runway-hangar.png",
  },
  {
    title: "Aerospace Mindset",
    description:
      "Through DJS Skylark and SAE Aero Design, I led structure and stability work, mentored six members, and used Python to support tail moment, payload, and planform analysis. Aircraft design taught me to think carefully about tradeoffs, constraints, and performance.",
    image: "/images/arya/hero-runway-hangar.png",
  },
  {
    title: "Manufacturing Impact",
    description:
      "Across fabrication, tire handling, switchgear assembly, printing operations, and production optimization, I have worked on practical improvements that reduce cycle time, improve safety, increase throughput, and make processes easier to sustain.",
    image: "/images/arya/assembly-line-process-map.jpg",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${sections.length * 100}%`,
        scrub: true,
        pin: true,
      },
    });

    sections.forEach((section, i) => {
      if (i === 0) return;

      const prev = sections[i - 1];

      tl.fromTo(
        section,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1 }
      ).to(prev, { opacity: 0, duration: 1 }, "<");
    });
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative h-screen overflow-hidden bg-transparent">
      {aboutData.map((item, index) => (
        <div key={index} className="panel absolute inset-0 flex items-center px-6 lg:px-[8vw]">
          <div className="grid lg:grid-cols-2 gap-12 w-full items-center">
            <div>
              <p className="text-xs tracking-[3px] text-[#E6B800] mb-4">{`0${index + 1} / 03`}</p>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#EDEFF2]">{item.title}</h2>
              <p className="text-[#9AA4AF] max-w-xl leading-relaxed">{item.description}</p>
            </div>

            <div className="border border-[#2C3440] bg-[#161A20] p-2">
              <Image width={700} height={420} src={item.image} alt={item.title} className="w-full h-[280px] object-cover" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
