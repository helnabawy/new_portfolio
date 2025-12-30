'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio';
import Link from 'next/link';

export function Contact() {
  return (
    <Section id="contact" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-16 text-center overflow-hidden relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {portfolioData.contact.headline}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`mailto:${portfolioData.contact.email}`}>
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8">
                {portfolioData.contact.cta}
                </Button>
            </Link>
          </div>
          <p className="text-zinc-500 text-sm">
            Or email me directly at <a href={`mailto:${portfolioData.contact.email}`} className="text-zinc-300 hover:text-cyan-400 transition-colors">{portfolioData.contact.email}</a>
          </p>
        </div>
      </motion.div>
    </Section>
  );
}