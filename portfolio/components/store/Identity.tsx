'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import { Download, Mail, MapPin } from 'lucide-react';
import { facts, profile } from '@/data/portfolio';
import { basePath } from '@/lib/basePath';

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.textContent = `0${suffix}`;
    const controls = animate(0, value, {
      duration: 1.6,
      delay: 0.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [value, suffix]);

  return <span ref={ref}>{`${value}${suffix}`}</span>;
}

export function Identity() {
  const iconRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const el = iconRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section id="top" className="pt-8 md:pt-[126px]" onPointerMove={onPointerMove}>
      <div id="identity" className="flex items-center gap-5 md:gap-10">
        <div
          ref={iconRef}
          aria-hidden
          className="launch icon-sheen squircle grid size-[112px] shrink-0 place-items-center text-[50px] font-bold tracking-[-0.02em] text-white md:size-[210px] md:text-[96px]"
        >
          {profile.monogram}
        </div>

        <div className="min-w-0">
          <h1
            className="rise text-[30px] leading-[1.05] font-extrabold tracking-[-0.03em] md:text-[64px]"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            {profile.name}
          </h1>
          <p
            className="rise mt-1 text-[18px] text-ink-3 md:mt-1.5 md:text-[26px]"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            {profile.title}
          </p>
          <p
            className="rise mt-1.5 flex items-center gap-1.5 text-[14px] text-ink-3 md:text-[15px]"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            <MapPin size={15} aria-hidden /> {profile.location}
          </p>

          <div className="rise mt-6 hidden items-center gap-3 md:flex" style={{ '--i': 3 } as React.CSSProperties}>
            <Actions />
          </div>
        </div>
      </div>

      <div className="rise mt-6 flex items-center gap-3 md:hidden" style={{ '--i': 3 } as React.CSSProperties}>
        <Actions />
      </div>

      <dl
        className="rise -mx-5 mt-9 flex overflow-x-auto border-y border-rule px-5 py-5 [scrollbar-width:none] md:mx-0 md:mt-12 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:py-[22px]"
        style={{ '--i': 4 } as React.CSSProperties}
      >
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            className={`flex min-w-[132px] shrink-0 flex-col items-center px-4 text-center md:min-w-0 ${
              i > 0 ? 'border-l border-rule' : ''
            }`}
          >
            <dt className="text-[11px] font-semibold tracking-[0.07em] text-ink-3 uppercase">{fact.label}</dt>
            <dd className="tnum mt-1 flex h-12 items-center text-[38px] leading-none font-extrabold tracking-[-0.02em] text-ink-2">
              {'value' in fact ? (
                <CountUp value={fact.value} suffix={fact.suffix} />
              ) : (
                <span className="text-[21px] tracking-[-0.01em]">{fact.text}</span>
              )}
            </dd>
            <dd className="mt-1 text-[13px] text-ink-3">{fact.note}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Actions() {
  return (
    <>
      <a href={`mailto:${profile.email}`} className="pill pill-blue h-[46px] px-8 text-[17px] max-md:flex-1">
        <Mail size={18} aria-hidden /> Contact
      </a>
      <a
        href={`${basePath}${profile.cvFile}`}
        download
        className="pill pill-grey h-[46px] px-6 text-[17px] text-blue-press max-md:flex-1"
      >
        <Download size={18} aria-hidden /> Download CV
      </a>
    </>
  );
}
