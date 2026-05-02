"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0F1115] py-24 px-6 lg:px-[8vw] text-center border-t border-[#2C3440]">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Let's Build a Better Production System</h2>
        <p className="text-[#9AA4AF] mb-10 max-w-2xl mx-auto">
          Based in Madison, WI and interested in roles or projects where industrial engineering, automotive systems,
          aerospace thinking, and measurable operations impact meet.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="mailto:aryaraut11@gmail.com" className="px-8 py-3 bg-[#E6B800] text-black font-semibold text-sm hover:bg-[#d4a700] transition">
            EMAIL ARYA
          </motion.a>
          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="https://www.linkedin.com/in/arya-raut" target="_blank" rel="noreferrer" className="px-8 py-3 border border-[#2C3440] text-[#9AA4AF] font-semibold text-sm hover:text-white transition">
            LINKEDIN
          </motion.a>
          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="/files/Arya-Raut-Resume.pdf" target="_blank" rel="noreferrer" className="px-8 py-3 border border-[#2C3440] text-[#9AA4AF] font-semibold text-sm hover:text-white transition">
            RESUME
          </motion.a>
        </div>

        <p className="mt-6 text-[#6C7A89] text-xs">Madison, WI | aryaraut11@gmail.com</p>
      </motion.div>
    </section>
  );
}
