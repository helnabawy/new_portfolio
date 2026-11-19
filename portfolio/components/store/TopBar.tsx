'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';

const links = [
  { name: 'Preview', href: '#preview' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#stack' },
];

export function TopBar() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = document.getElementById('identity');
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      rootMargin: '-64px 0px 0px 0px',
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <header
      data-stuck={stuck}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/80 backdrop-blur-xl transition-[transform,border-color] duration-500 ease-expo data-[stuck=true]:border-rule max-md:data-[stuck=false]:-translate-y-full"
    >
      <div className="mx-auto flex h-14 max-w-[1104px] items-center gap-6 px-5 md:px-8">
        <a
          href="#top"
          aria-hidden={!stuck}
          tabIndex={stuck ? 0 : -1}
          className="flex min-w-0 items-center gap-2.5 transition-[opacity,transform] duration-500 ease-expo data-[show=false]:hidden data-[show=true]:[animation:rise_500ms_cubic-bezier(0.16,1,0.3,1)_both]"
          data-show={stuck}
        >
          <span className="squircle grid size-8 shrink-0 place-items-center bg-blue text-[13px] font-bold text-white">
            {profile.monogram}
          </span>
          <span className="truncate text-[15px] font-bold">{profile.name}</span>
        </a>

        <nav aria-label="Sections" className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-ink-2 transition-colors duration-200 hover:text-ink"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          aria-hidden={!stuck}
          tabIndex={stuck ? 0 : -1}
          data-show={stuck}
          className="pill pill-blue h-8 px-4 text-[14px] data-[show=false]:hidden data-[show=true]:[animation:launch_500ms_cubic-bezier(0.3,1.2,0.5,1)_both] max-md:ml-auto"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
