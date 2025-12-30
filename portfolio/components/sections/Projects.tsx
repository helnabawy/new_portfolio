'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio';
import { ArrowRight, Wallet, Activity, Map } from 'lucide-react';
import Link from 'next/link';

const icons = {
  Wallet,
  Activity,
  Map,
};

export function Projects() {
  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Selected Works
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          A showcase of mobile applications built with a focus on performance, user experience, and clean architecture.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => {
          const Icon = icons[project.icon as keyof typeof icons];

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-zinc-800 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between group/btn px-0 hover:bg-transparent hover:text-cyan-400">
                    View Case Study
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}