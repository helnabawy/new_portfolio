'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { portfolioData } from '@/data/portfolio';

export function Skills() {
  return (
    <Section id="skills" className="bg-zinc-900/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Technical Expertise
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {portfolioData.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.15)" }}
              className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-zinc-300 text-sm md:text-base font-medium cursor-default transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}