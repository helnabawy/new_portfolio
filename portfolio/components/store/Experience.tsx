'use client';

import { experience } from '@/data/portfolio';
import { useOn } from '@/lib/useOn';

const AXIS_START = 2015;
const barTone = ['bg-blue', 'bg-ink', 'bg-[#9a9aa6]'];

export function Experience({ now }: { now: number }) {
  const { ref, on } = useOn<HTMLDivElement>(0.4);
  const axisEnd = Math.ceil(now);
  const span = axisEnd - AXIS_START;
  const years = Array.from({ length: span + 1 }, (_, i) => AXIS_START + i);
  const pct = (year: number) => ((year - AXIS_START) / span) * 100;

  return (
    <section id="experience" aria-labelledby="experience-title" className="mt-14 border-t border-rule pt-12 md:mt-16 md:pt-14">
      <h2 id="experience-title" className="mb-7 text-[26px] font-extrabold tracking-[-0.02em] md:text-[30px]">
        Experience
      </h2>

      <figure ref={ref} data-on={on} className="rounded-[28px] bg-field p-5 md:p-8">
        <div className="space-y-4">
          {experience.map((item, i) => {
            const end = item.end ?? now;
            return (
              <div key={item.org} className="md:grid md:grid-cols-[210px_1fr] md:items-center md:gap-6">
                <p className="mb-1.5 text-[14px] leading-tight font-bold md:mb-0 md:text-[15px]">{item.org}</p>
                <div className="relative h-9">
                  <div
                    className={`fig-bar absolute inset-y-0 rounded-full ${barTone[i]}`}
                    style={{ left: `${pct(item.start)}%`, width: `${pct(end) - pct(item.start)}%`, '--i': experience.length - 1 - i, '--step': '220ms' } as React.CSSProperties}
                  />
                  {item.end === null && (
                    <span
                      className="fig absolute top-1/2 ml-2 -translate-y-1/2 text-[12px] font-bold text-blue-press"
                      style={{ left: `${pct(end)}%`, '--i': 1, '--step': '1200ms' } as React.CSSProperties}
                    >
                      now
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 md:grid md:grid-cols-[210px_1fr] md:gap-6" aria-hidden>
          <span />
          <div className="relative h-5 border-t border-rule">
            {years.map((year, i) => (
              <span
                key={year}
                className={`tnum absolute top-1.5 -translate-x-1/2 text-[11px] font-medium text-ink-3 first:translate-x-0 last:-translate-x-full ${
                  i % 2 ? 'max-md:hidden' : ''
                }`}
                style={{ left: `${pct(year)}%` }}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
        <figcaption className="mt-5 text-[13px] text-ink-3">
          Study and work overlapped: the first role at Jomla ECommerce began a year before graduation.
        </figcaption>
      </figure>

      <h3 className="mt-12 text-[20px] font-bold tracking-[-0.01em]">Version history</h3>
      <ol className="mt-2">
        {experience.map((item) => (
          <li key={item.org} className="border-b border-rule py-6 last:border-b-0 last:pb-0">
            <div className="flex items-baseline justify-between gap-6">
              <h4 className="flex items-center gap-2.5 text-[17px] leading-tight font-bold">
                {item.product}
                {item.end === null && (
                  <span className="rounded-full bg-blue px-2.5 py-1 text-[11px] leading-none font-bold text-white">Current</span>
                )}
              </h4>
              <p className="tnum shrink-0 text-right text-[14px] text-ink-3">{item.period}</p>
            </div>
            <p className="mt-1 text-[14px] text-ink-3">{item.org}</p>
            {item.notes.length > 0 && (
              <ul className="mt-3 max-w-[70ch] space-y-1.5 text-[16px] leading-relaxed text-ink-2">
                {item.notes.map((note) => (
                  <li key={note} className="relative pl-5 before:absolute before:left-0 before:text-ink-3 before:content-['–']">
                    {note}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
