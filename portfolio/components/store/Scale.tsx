'use client';

import { reach } from '@/data/portfolio';
import { useOn } from '@/lib/useOn';

const ticks = ['1K', '10K', '100K', '1M', '10M'];
// Log scale from 1,000 to 10,000,000 users.
const width = (users: number) => ((Math.log10(users) - 3) / 4) * 100;

export function Scale() {
  const { ref, on } = useOn<HTMLDivElement>(0.4);

  return (
    <section id="scale" aria-labelledby="scale-title" className="mt-14 border-t border-rule pt-12 md:mt-16 md:pt-14">
      <div className="md:grid md:grid-cols-[300px_1fr] md:gap-14">
        <div>
          <h2 id="scale-title" className="text-[26px] font-extrabold tracking-[-0.02em] md:text-[30px]">
            Scale
          </h2>
          <p className="mt-3 max-w-[30ch] text-[15px] leading-snug text-ink-3">
            How many people use the products I have built or contributed to.
          </p>
        </div>

        <figure ref={ref} data-on={on} className="mt-8 md:mt-2">
          <div className="space-y-5">
            {reach.map((item, i) => (
              <div key={item.name}>
                <div className="mb-1.5 flex items-baseline justify-between gap-4">
                  <p className="text-[15px] font-bold">
                    {item.name} <span className="font-normal text-ink-3">· {item.role}</span>
                  </p>
                  <p className="tnum text-[15px] font-bold">{item.label}</p>
                </div>
                <div className="h-2.5 rounded-full bg-field">
                  <div
                    className="fig-bar h-full rounded-full bg-ink-2"
                    style={{ width: `${width(item.users)}%`, '--i': i, '--step': '130ms' } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="tnum mt-3 flex justify-between text-[11px] font-medium text-ink-3" aria-hidden>
            {ticks.map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>
          <figcaption className="mt-3 text-[13px] text-ink-3">
            Logarithmic scale: each step is ten times the one before it.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
