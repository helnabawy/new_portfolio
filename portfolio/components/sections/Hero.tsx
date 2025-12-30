'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { portfolioData } from '@/data/portfolio';
import Link from 'next/link';
import Particles from '@/components/ui/Particles';

export function Hero() {
  return (
    <Section
      container={false}
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px] animate-gradient" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px] animate-gradient" style={{ animationDelay: '2s' }} />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={50}
          staticity={50}
          ease={50}
          size={0.6}
          color="#22d3ee"
          vx={0.2}
          vy={0.2}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            {portfolioData.hero.name}
            <span className="block text-3xl md:text-4xl text-cyan-400 mt-2 font-light">
              {portfolioData.hero.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            {portfolioData.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto">
                {portfolioData.hero.primaryCta}
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {portfolioData.hero.secondaryCta}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}