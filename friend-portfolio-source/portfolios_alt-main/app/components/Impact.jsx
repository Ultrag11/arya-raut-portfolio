"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

function Counter({ value, start }) {
  const numericValue = parseFloat(value);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (start) motionValue.set(numericValue);
  }, [start, motionValue, numericValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => setDisplay(latest));
    return () => unsubscribe();
  }, [spring]);

  const prefix = value.includes("$") ? "$" : "";
  const suffix = value.includes("%") ? "%" : value.includes("M") ? "M" : value.includes("+") ? "+" : "";
  const decimals = value.includes(".") ? 1 : 0;

  return <span>{prefix}{display.toFixed(decimals)}{suffix}</span>;
}

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const stats = [
    { value: "37%", label: "Cycle time reduction at Sani-Matic" },
    { value: "$0.7M", label: "Annual cost reduction modeled" },
    { value: "240+", label: "Annual labor hours saved" },
    { value: "35.38%", label: "Worker-safety improvement" },
    { value: "21.6%", label: "Production-rate increase" },
    { value: "30%", label: "Testing-time reduction in DJS Skylark" },
  ];

  return (
    <section ref={ref} className="bg-[#0F1115] py-20 px-6 lg:px-[8vw] text-[#EDEFF2]">
      <h2 className="text-3xl lg:text-5xl font-bold mb-16">Measured Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="border border-[#2C3440] bg-[#161A20] p-6 relative group">
            <p className="text-xs text-[#6C7A89] mb-2 tracking-widest">KPI 0{i + 1}</p>
            <h3 className="text-3xl lg:text-5xl font-bold text-[#E6B800] font-mono"><Counter value={stat.value} start={isInView} /></h3>
            <p className="mt-2 text-[#9AA4AF] text-sm">{stat.label}</p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E6B800] group-hover:w-full transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
