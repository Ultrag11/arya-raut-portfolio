"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20 bg-[#0F1115] text-[#EDEFF2]">
      <div className="grid lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
        <div>
          <motion.p
            className="text-xs tracking-[3px] text-[#E6B800] mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            INDUSTRIAL ENGINEER | AERO AND AUTOMOTIVE ENTHUSIAST
          </motion.p>

          <motion.h1
            className="font-bold text-5xl lg:text-7xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Arya Raut
          </motion.h1>

          <motion.p
            className="mt-6 text-[#9AA4AF] text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I turn manufacturing problems into measurable improvements: faster flow,
            safer work, cleaner quality systems, and data-backed decisions from the
            shop floor to the design table.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-5 text-sm font-mono text-[#E6B800]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>37% cycle time reduction</span>
            <span>$0.7M cost reduction modeled</span>
            <span>SAE Aero Design recognition</span>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#projects" className="bg-[#E6B800] text-black px-6 py-3 font-semibold text-sm">
              VIEW PROJECTS
            </a>
            <a href="/files/Arya-Raut-Resume.pdf" target="_blank" rel="noreferrer" className="border border-[#2C3440] px-6 py-3 text-sm text-[#9AA4AF]">
              DOWNLOAD CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="bg-[#161A20] border border-[#2C3440] p-6 font-mono text-sm"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[#E6B800] mb-4">PORTFOLIO STATUS</p>

          <div className="space-y-3 text-[#9AA4AF]">
            <div className="flex justify-between gap-6">
              <span>Lean / CI</span>
              <span className="text-[#EDEFF2]">Active</span>
            </div>
            <div className="flex justify-between gap-6">
              <span>Manufacturing Analytics</span>
              <span className="text-[#EDEFF2]">Ready</span>
            </div>
            <div className="flex justify-between gap-6">
              <span>Aerospace Projects</span>
              <span className="text-[#EDEFF2]">Logged</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-[#E6B800]">
            <div className="w-2 h-2 bg-[#E6B800] rounded-full animate-pulse"></div>
            <span>AVAILABLE FOR ENGINEERING IMPACT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
