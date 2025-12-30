'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { portfolioData } from '@/data/portfolio';
import { ShieldCheck, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

const icons = {
  ShieldCheck,
  Users,
  Zap,
};

export function ValueProp() {
  return (
    <Section className="bg-zinc-900/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.valueProps.map((prop, index) => {
          const Icon = icons[prop.icon as keyof typeof icons];
          
          return (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-zinc-800/50 bg-zinc-900/20 hover:border-cyan-500/20 hover:bg-zinc-900/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                    <Icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{prop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {prop.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}