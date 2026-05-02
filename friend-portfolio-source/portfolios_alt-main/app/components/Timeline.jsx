"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const experiences = [
    {
      company: "Sani-Matic",
      role: "Continuous Improvement Engineer Consultant",
      date: "Sep 2025 - Dec 2025",
      impact: "37% cycle time reduction",
      points: ["Redesigned a 48-step sheet metal fabrication workflow", "Applied PDCA, time studies, APQP, SPC, validation, and standardized work"],
    },
    {
      company: "University of Wisconsin-Madison",
      role: "Project Assistant - Grader",
      date: "Aug 2025 - Dec 2025",
      impact: "Lean and quality systems evaluation",
      points: ["Evaluated graduate-level Lean, Kaizen, Six Sigma, Minitab, and quality coursework", "Reviewed process optimization assignments applied to industrial projects"],
    },
    {
      company: "Doosan Bobcat",
      role: "Continuous Improvement Consultant",
      date: "Sep 2024 - Dec 2024",
      impact: "7.83% process efficiency improvement",
      points: ["Led Kaizen analysis for tire handling operations", "Used 5S, PDCA, spaghetti diagrams, time studies, Pareto, 8D, and 5 Whys"],
    },
    {
      company: "Pragati Switchgears",
      role: "Industrial Engineering Intern",
      date: "Jun 2024 - Aug 2024",
      impact: "21.6% production-rate increase",
      points: ["Designed custom fixtures using SolidWorks, Fusion 360, and AutoCAD", "Applied VSM, PFMEA, DFM, and assembly-line implementation"],
    },
    {
      company: "Flora Super Prints",
      role: "Operations Analyst Intern",
      date: "Jun 2023 - Sep 2023",
      impact: "35.38% worker-safety improvement",
      points: ["Designed ergonomic trolley and improved material flow", "Used Kanban, NASA-TLX, Excel Open Solver, and OEE improvement methods"],
    },
  ];

  return (
    <section id="experience" className="bg-[#0F1115] px-6 lg:px-[8vw] py-20 text-[#EDEFF2]">
      <h2 className="text-3xl lg:text-5xl font-bold mb-16">Engineering Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="border border-[#2C3440] bg-[#161A20] p-6 hover:border-[#E6B800] transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-[#9AA4AF] text-sm">{exp.role}</p>
              </div>
              <p className="text-sm text-[#6C7A89] mt-2 lg:mt-0">{exp.date}</p>
            </div>
            <div className="text-[#E6B800] font-mono mb-4">{exp.impact}</div>
            <ul className="space-y-2 text-[#9AA4AF] text-sm">
              {exp.points.map((point, idx) => <li key={idx}>- {point}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
