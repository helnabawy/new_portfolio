import {
  Building2,
  Clock3,
  Layers,
  LayoutGrid,
  Nfc,
  Package,
  Scale as ScaleIcon,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { projects } from '@/data/portfolio';

const icons: Record<string, LucideIcon> = {
  Scale: ScaleIcon,
  ShoppingBag,
  Building2,
  Layers,
  Clock3,
  Sparkles,
  Nfc,
  Package,
  LayoutGrid,
};

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mt-14 border-t border-rule pt-12 md:mt-16 md:pt-14">
      <h2 id="projects-title" className="mb-3 text-[26px] font-extrabold tracking-[-0.02em] md:text-[30px]">
        Projects
      </h2>

      <ul className="md:grid md:grid-cols-2 md:gap-x-14">
        {projects.map((project) => {
          const Icon = icons[project.icon];
          return (
            <li key={project.name} className="group flex gap-4 border-b border-rule py-6">
              <span
                aria-hidden
                className="squircle grid size-16 shrink-0 place-items-center text-white transition-transform duration-500 ease-spring group-hover:scale-[1.06] group-hover:-rotate-3"
                style={{ background: project.color }}
              >
                <Icon size={30} strokeWidth={1.75} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-[17px] leading-tight font-bold">{project.name}</h3>
                    <p className="mt-0.5 text-[14px] text-ink-3">
                      {project.kind} · {project.context}
                    </p>
                  </div>
                  {project.metric && (
                    <span className="tnum shrink-0 rounded-full bg-field px-3 py-1.5 text-[13px] leading-none font-bold text-blue-press">
                      {project.metric}
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{project.description}</p>
                <p className="mt-2.5 text-[13px] leading-snug text-ink-3">{project.tech.join(' · ')}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
