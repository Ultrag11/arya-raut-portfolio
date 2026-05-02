"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  const swiperRef = useRef(null);

  const projects = [
    {
      title: "Downtime Optimization and Cost Reduction",
      desc: "Master's project framing a production line as a scheduling and sequencing optimization problem. The model connected station idle time, delay sensitivity, utility cost, and labor cost to production decisions.",
      media: [{ type: "image", src: "/images/arya/assembly-line-process-map.jpg" }],
      tech: ["MILP", "Julia", "Sensitivity Analysis", "Production Scheduling"],
      result: "12% idle-time reduction, 15% throughput improvement, $0.7M annual cost reduction modeled",
      link: "/files/524_project.pdf",
    },
    {
      title: "DJS Skylark | SAE Aero Design",
      desc: "Led structure and stability work, mentored six team members, and supported aircraft design decisions under weight, stability, payload, and mission-performance constraints.",
      media: [{ type: "image", src: "/images/arya/hero-runway-hangar.png" }],
      tech: ["Aerospace", "Python", "Structure", "Stability"],
      result: "1st in design report, 3rd in mission performance, 30% testing-time reduction",
    },
    {
      title: "Sani-Matic Workflow Redesign",
      desc: "Redesigned a 48-step sheet metal fabrication workflow using PDCA and time studies, then supported quality reliability through APQP, SPC, validation, and standard work.",
      media: [{ type: "image", src: "/images/arya/hero-runway-hangar.png" }],
      tech: ["PDCA", "Time Study", "APQP", "SPC"],
      result: "37% cycle time reduction and $60K annual savings",
    },
    {
      title: "Doosan Bobcat Tire Handling Kaizen",
      desc: "Led Kaizen analysis for tire handling operations using 5S, PDCA, spaghetti diagrams, ergonomic analysis, Pareto, 8D, and 5 Whys.",
      media: [{ type: "image", src: "/images/arya/hero-runway-hangar.png" }],
      tech: ["Kaizen", "5S", "RCA", "Ergonomics"],
      result: "7.83% process efficiency improvement with reduced injury risk",
    },
    {
      title: "Pragati Switchgears Fixture Design",
      desc: "Used VSM, SolidWorks, Fusion 360, AutoCAD, PFMEA, and DFM to improve fixture design and electromechanical assembly-line implementation.",
      media: [{ type: "image", src: "/images/arya/hero-runway-hangar.png" }],
      tech: ["VSM", "SolidWorks", "PFMEA", "DFM"],
      result: "21.6% production-rate increase and 15.66% line-efficiency improvement",
    },
    {
      title: "Flora Super Prints Operations Improvement",
      desc: "Designed an ergonomic trolley, improved inventory flow through Kanban, and optimized labeling schedules with Excel Open Solver.",
      media: [{ type: "image", src: "/images/arya/hero-runway-hangar.png" }],
      tech: ["Kanban", "NASA-TLX", "Excel Solver", "OEE"],
      result: "18.93% handling-time reduction and 35.38% worker-safety improvement",
    },
  ];

  return (
    <section id="projects" className="bg-[#0F1115] px-6 lg:px-[8vw] py-20 text-[#EDEFF2]">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4">Project Modules</h2>
      <p className="text-[#9AA4AF] max-w-3xl mb-12">
        Case studies across manufacturing systems, aerospace design, quality, human factors, and operations analytics.
      </p>

      <Swiper modules={[Pagination]} pagination={{ clickable: true }} onSwiper={(swiper) => (swiperRef.current = swiper)} spaceBetween={50} speed={800}>
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <ProjectSlide project={project} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-6 mt-10">
        <button onClick={() => swiperRef.current?.slidePrev()} className="px-6 py-3 bg-[#E6B800] text-black font-semibold text-sm hover:bg-[#d4a700]">PREV</button>
        <button onClick={() => swiperRef.current?.slideNext()} className="px-6 py-3 bg-[#E6B800] text-black font-semibold text-sm hover:bg-[#d4a700]">NEXT</button>
      </div>
    </section>
  );
}

function ProjectSlide({ project, index }) {
  const [active, setActive] = useState(0);

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="border border-[#2C3440] bg-[#161A20] p-6">
      <p className="text-xs tracking-[3px] text-[#E6B800] mb-4">PROJECT MODULE {`0${index + 1}`}</p>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
          <p className="text-[#9AA4AF] mb-5">{project.desc}</p>
          <p className="text-[#E6B800] font-mono text-sm mb-6">{project.result}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 text-xs bg-[#1E242C] text-[#9AA4AF]">{t}</span>
            ))}
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex bg-[#E6B800] text-black px-5 py-3 text-xs font-semibold">
              OPEN PROJECT PDF
            </a>
          )}
        </div>

        <div className="border border-[#2C3440] bg-[#0F1115] p-2">
          <div className="w-full h-[280px]">
            {project.media[active].type === "video" ? (
              <video src={project.media[active].src} className="w-full h-full object-cover" autoPlay loop muted />
            ) : (
              <img src={project.media[active].src} alt={project.title} className="w-full h-full object-cover" />
            )}
          </div>

          <div className="flex gap-2 mt-4 flex-wrap">
            {project.media.map((_, idx) => (
              <button key={idx} onClick={() => setActive(idx)} className={`px-3 py-1 text-xs font-mono border ${active === idx ? "bg-[#E6B800] text-black border-[#E6B800]" : "border-[#2C3440] text-[#9AA4AF]"}`}>
                VIEW {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
