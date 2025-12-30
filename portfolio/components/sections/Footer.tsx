'use client';

import * as React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const icons = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
        </div>
        
        <div className="flex items-center space-x-6">
          {portfolioData.contact.socials.map((social) => {
            const Icon = icons[social.icon as keyof typeof icons];
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
                aria-label={social.name}
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}