'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import { portfolioData } from '@/data/portfolio';
import { ArrowRight, Scale, Building2, ShoppingCart, Users, Sparkles, BookOpen, CreditCard, Package, Layout, Github, ExternalLink, Calendar, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

const icons = {
  Scale,
  Building2,
  ShoppingCart,
  Users,
  Sparkles,
  BookOpen,
  CreditCard,
  Package,
  Layout,
};

interface CaseStudyContentProps {
  caseStudy: {
    timeline: string;
    overview: string;
    challenges: string[];
    solutions: string[];
    achievements: string[];
    technicalHighlights: string[];
    images: string[];
    links?: {
      github?: string;
      liveDemo?: string;
      caseStudy?: string;
    };
  } | undefined;
}

function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  if (!caseStudy) return null;

  return (
    <div className="space-y-8">
      {/* Timeline */}
      <div className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-800/50 px-4 py-2 rounded-lg inline-block">
        <Calendar size={16} className="text-cyan-400" />
        <span>{caseStudy.timeline}</span>
      </div>

      {/* Overview */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
        <p className="text-zinc-400 text-base leading-relaxed">{caseStudy.overview}</p>
      </div>

      {/* Challenges */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">Challenges</h3>
        <ul className="space-y-3">
          {caseStudy.challenges.map((challenge, idx) => (
            <li key={idx} className="flex items-start gap-3 text-base text-zinc-400">
              <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">Solutions</h3>
        <ul className="space-y-3">
          {caseStudy.solutions.map((solution, idx) => (
            <li key={idx} className="flex items-start gap-3 text-base text-zinc-400">
              <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
              <span>{solution}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">Key Achievements</h3>
        <ul className="space-y-3">
          {caseStudy.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-3 text-base text-zinc-400">
              <span className="text-cyan-400 mt-1 flex-shrink-0">★</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Highlights */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">Technical Highlights</h3>
        <div className="flex flex-wrap gap-2">
          {caseStudy.technicalHighlights.map((highlight, idx) => (
            <span key={idx} className="text-sm px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      {caseStudy.images && caseStudy.images.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Screenshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudy.images.map((image, idx) => (
              <div key={idx} className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
                {image.startsWith('http') ? (
                  <Image
                    src={image}
                    alt={`Screenshot ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 text-sm p-4 text-center">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="opacity-70">{image.split('/').pop()}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* External Links */}
      {caseStudy.links && (caseStudy.links.github || caseStudy.links.liveDemo || caseStudy.links.caseStudy) && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Links</h3>
          <div className="flex flex-wrap gap-3">
            {caseStudy.links.github && (
              <a
                href={caseStudy.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors text-sm"
              >
                <Github size={16} />
                GitHub
                <ExternalLink size={12} />
              </a>
            )}
            {caseStudy.links.liveDemo && (
              <a
                href={caseStudy.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {caseStudy.links.caseStudy && (
              <a
                href={caseStudy.links.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors text-sm"
              >
                <BookOpen size={16} />
                Case Study
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<typeof portfolioData.projects[0] | null>(null);

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
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn px-0 hover:bg-transparent hover:text-cyan-400"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Case Study
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Dialog */}
      <Dialog
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject?.caseStudy && (
          <CaseStudyContent caseStudy={selectedProject.caseStudy} />
        )}
      </Dialog>
    </Section>
  );
}
