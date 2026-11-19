'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useOn } from '@/lib/useOn';

const css = (vars: Record<string, string | number>) => vars as React.CSSProperties;

function Panel({
  tone,
  title,
  caption,
  children,
}: {
  tone: string;
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  const { ref, on } = useOn<HTMLElement>(0.55);
  return (
    <article
      ref={ref}
      data-on={on}
      className={`panel flex h-[520px] w-[272px] shrink-0 flex-col rounded-[32px] p-6 ${tone}`}
    >
      <h3 className="text-[22px] leading-[1.14] font-extrabold tracking-[-0.02em]">{title}</h3>
      <div className="flex min-h-0 flex-1 flex-col justify-center py-4">{children}</div>
      <p className="text-[13px] leading-snug font-medium">{caption}</p>
    </article>
  );
}

const moduleColors = [
  '#0a66ff', '#0b6b4f', '#c2410c', '#6d28d9',
  '#b5175a', '#0e7490', '#a16207', '#111114',
  '#1556b0', '#b91c1c', '#0b6b4f', '#0a66ff',
];

export function Previews() {
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, moved: false, x: 0, left: 0 });
  const [dragging, setDragging] = useState(false);

  const step = (dir: 1 | -1) => scroller.current?.scrollBy({ left: dir * 292 * 2, behavior: 'smooth' });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !scroller.current) return;
    drag.current = { active: true, moved: false, x: e.clientX, left: scroller.current.scrollLeft };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active || !scroller.current) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 4) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) scroller.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    drag.current.active = false;
    setDragging(false);
  };

  return (
    <section id="preview" aria-labelledby="preview-title" className="pt-12 md:pt-14">
      <div className="mb-5 flex items-center justify-between">
        <h2 id="preview-title" className="text-[26px] font-extrabold tracking-[-0.02em] md:text-[30px]">
          Preview
        </h2>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous previews"
            className="pill pill-grey size-9 text-blue-press"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next previews"
            className="pill pill-grey size-9 text-blue-press"
          >
            <ChevronRight size={20} aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        tabIndex={0}
        role="group"
        aria-label="Career highlights, scroll sideways for more"
        data-dragging={dragging}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="gallery -mx-5 flex cursor-grab gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0 md:[scroll-padding-inline:0]"
      >
        <Panel
          tone="on-color bg-blue text-white"
          title="Over 4 million people can meet a judge from their phone."
          caption="Najiz, Ministry of Justice KSA. Each dot is 100,000 users."
        >
          <p className="tnum mb-5 text-[76px] leading-none font-extrabold tracking-[-0.04em]">4M+</p>
          <div className="grid grid-cols-8 gap-[9px]" role="img" aria-label="40 dots, each standing for 100,000 users">
            {Array.from({ length: 40 }, (_, i) => (
              <span
                key={i}
                className="fig-pop aspect-square rounded-full bg-white"
                style={css({ '--i': i, '--step': '32ms' })}
              />
            ))}
          </div>
        </Panel>

        <Panel
          tone="bg-field text-ink"
          title="12+ micro&#8209;apps, assembled into one app."
          caption="Najiz runs on a micro-frontend architecture built for scale and modularity."
        >
          <div
            className="mx-auto grid w-[188px] grid-cols-3 gap-3 rounded-[28px] bg-white p-4 shadow-[0_14px_30px_-18px_rgba(17,17,20,0.35)]"
            role="img"
            aria-label="Twelve app modules arranged inside one app shell"
          >
            {moduleColors.map((color, i) => (
              <span
                key={i}
                className="fig-pop squircle aspect-square"
                style={css({ '--i': i, '--step': '75ms', background: color })}
              />
            ))}
          </div>
        </Panel>

        <Panel
          tone="on-color bg-ink text-white"
          title="One design system. 60+ screens. Light and dark."
          caption="Each tile is a screen. Dark mode and accessibility are part of the system."
        >
          <div
            className="grid grid-cols-10 gap-[5px]"
            role="img"
            aria-label="Sixty screens switching between light and dark themes"
          >
            {Array.from({ length: 60 }, (_, i) => {
              const d = (i % 10) + Math.floor(i / 10);
              return (
                <span
                  key={i}
                  className="screen-tile fig aspect-[9/16] rounded-[3px]"
                  style={css({ '--i': d, '--d': d, '--step': '45ms', background: d < 7 ? '#f2f2f7' : '#3a3a44' })}
                />
              );
            })}
          </div>
        </Panel>

        <Panel
          tone="on-color bg-[#c2410c] text-white"
          title="App Store review time cut by 15 hours a week."
          caption="A protocol for assessing and fixing rejected apps, used across the department. Each block is one hour."
        >
          <p className="tnum mb-5 text-[76px] leading-none font-extrabold tracking-[-0.04em]">15 h</p>
          <div className="grid grid-cols-5 gap-2" role="img" aria-label="Fifteen blocks, one per hour of review time cut each week">
            {Array.from({ length: 15 }, (_, i) => (
              <span
                key={i}
                className="fig-pop aspect-square rounded-[10px] bg-white"
                style={css({ '--i': i, '--step': '70ms' })}
              />
            ))}
          </div>
        </Panel>

        <Panel
          tone="on-color bg-[#0b6b4f] text-white"
          title="40% more efficient NFC payments."
          caption="Sahl, after the code architecture was modularised."
        >
          <div
            className="flex h-[250px] items-end justify-center gap-6"
            role="img"
            aria-label="Transaction efficiency before and after: up 40 percent"
          >
            <div className="flex w-[84px] flex-col items-center gap-2">
              <span className="fig-col h-[150px] w-full rounded-t-[14px] bg-white/45" style={css({ '--i': 0 })} />
              <span className="text-[13px] font-semibold">Before</span>
            </div>
            <div className="flex w-[84px] flex-col items-center gap-2">
              <span className="fig tnum text-[26px] leading-none font-extrabold" style={css({ '--i': 1, '--step': '900ms' })}>
                +40%
              </span>
              <span className="fig-col h-[210px] w-full rounded-t-[14px] bg-white" style={css({ '--i': 1 })} />
              <span className="text-[13px] font-semibold">After</span>
            </div>
          </div>
        </Panel>

        <Panel
          tone="bg-field text-ink"
          title="Native on iOS and Android. Cross-platform when it fits."
          caption="Shipped to both stores, from scratch and in existing apps."
        >
          <ul className="space-y-3">
            {[
              { name: 'iOS', color: '#0a66ff', tools: 'Swift, SwiftUI, Objective-C' },
              { name: 'Android', color: '#0b6b4f', tools: 'Kotlin, Jetpack Compose' },
              { name: 'Cross-platform', color: '#6d28d9', tools: 'Flutter, Compose Multiplatform, Ionic' },
            ].map((p, i) => (
              <li
                key={p.name}
                className="fig flex items-center gap-3 rounded-[18px] bg-white p-3"
                style={css({ '--i': i, '--step': '140ms' })}
              >
                <span className="squircle size-10 shrink-0" style={{ background: p.color }} aria-hidden />
                <span className="min-w-0">
                  <span className="block text-[15px] leading-tight font-bold">{p.name}</span>
                  <span className="block text-[12.5px] leading-snug text-ink-2">{p.tools}</span>
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </section>
  );
}
