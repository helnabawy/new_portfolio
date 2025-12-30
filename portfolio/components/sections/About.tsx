'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { portfolioData } from '@/data/portfolio';

export function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {portfolioData.about.headline}
          </h2>
          <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
            {portfolioData.about.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
            {/* Placeholder for an image or graphic. 
                For now, a stylized code block or abstract shape could work.
                Using a simple gradient box for visual weight. */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500" />
                <div className="text-zinc-700 font-mono text-sm leading-6 select-none">
                   {"<Developer />"}<br/>
                   {"<Designer />"}<br/>
                   {"<ProblemSolver />"}
                </div>
            </div>
        </motion.div>
      </div>
    </Section>
  );
}