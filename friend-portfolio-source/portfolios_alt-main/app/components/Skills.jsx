"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "CONTINUOUS IMPROVEMENT",
      skills: ["Lean Six Sigma", "Kaizen", "5S", "VSM", "PDCA", "Time Studies", "Standard Work"],
    },
    {
      title: "QUALITY SYSTEMS",
      skills: ["APQP", "PFMEA", "SPC", "RCA", "8D", "5 Whys", "Control Plans", "Validation"],
    },
    {
      title: "CAD AND ENGINEERING",
      skills: ["SolidWorks", "AutoCAD", "Fusion 360", "CATIA", "ANSYS", "DFM", "Fixture Design"],
    },
    {
      title: "DATA AND ANALYTICS",
      skills: ["Python", "SQL", "R", "R Shiny", "MATLAB", "Minitab", "Tableau", "Power BI"],
    },
    {
      title: "SYSTEMS AND TOOLS",
      skills: ["SAP", "Trello", "MS Office", "Excel Solver", "Manufacturing Integration"],
    },
    {
      title: "CERTIFICATIONS",
      skills: ["Lean Six Sigma Green Belt", "ISO 9001:2015 Auditor", "ISO 14001:2015 Auditor", "SAP"],
    },
  ];

  return (
    <section id="skills" className="bg-[#0F1115] py-16 px-6 lg:px-[8vw] text-[#EDEFF2]">
      <h2 className="text-3xl lg:text-5xl font-bold mb-12">Capabilities</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="border border-[#2C3440] bg-[#161A20] p-6">
            <p className="text-xs tracking-[3px] text-[#E6B800] mb-4">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 text-xs bg-[#1E242C] text-[#9AA4AF]">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
