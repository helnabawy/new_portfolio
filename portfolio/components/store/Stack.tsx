'use client';

import { information, projects, stackColumns } from '@/data/portfolio';
import { useOn } from '@/lib/useOn';

export function Stack() {
  const { ref, on } = useOn<HTMLDivElement>(0.3);

  return (
    <section id="stack" aria-labelledby="stack-title" className="mt-14 pt-12 md:mt-16 md:pt-14">
      <h2 id="stack-title" className="mb-2 text-[26px] font-extrabold tracking-[-0.02em] md:text-[30px]">
        Stack by project
      </h2>
      <p className="mb-6 max-w-[60ch] text-[15px] text-ink-3">
        Which technology each product was built with. A filled dot means it shipped in that project.
      </p>

      <div ref={ref} data-on={on} className="rounded-[28px] bg-field p-3 md:p-8">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th scope="col" className="w-[30%] pb-3 text-left text-[11px] font-semibold tracking-[0.07em] text-ink-3 uppercase md:w-[22%]">
                Project
              </th>
              {stackColumns.map((col) => (
                <th key={col} scope="col" className="pb-3 align-bottom text-[12px] leading-tight font-semibold text-ink-2 md:text-[13px]">
                  <span className="max-md:inline-block max-md:rotate-180 max-md:[writing-mode:vertical-rl]">{col}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((project, row) => (
              <tr key={project.name} className="border-t border-rule">
                <th scope="row" className="py-3 pr-2 text-left text-[14px] font-bold md:text-[15px]">
                  {project.name}
                </th>
                {stackColumns.map((col, c) => {
                  const used = project.stack.includes(col);
                  return (
                    <td key={col} className="py-3 text-center">
                      {used ? (
                        <span
                          className="fig-pop inline-block size-4 rounded-full align-middle md:size-[18px]"
                          style={{ background: project.color, '--i': row + c, '--step': '55ms' } as React.CSSProperties}
                        >
                          <span className="sr-only">Used</span>
                        </span>
                      ) : (
                        <span aria-hidden className="inline-block size-1 rounded-full bg-[#b9b9c3] align-middle" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 mb-3 border-t border-rule pt-12 text-[26px] font-extrabold tracking-[-0.02em] md:mt-16 md:pt-14 md:text-[30px]">
        Information
      </h2>
      <dl>
        {information.map((row) => (
          <div key={row.label} className="border-b border-rule py-3.5 md:grid md:grid-cols-[220px_1fr] md:gap-6">
            <dt className="text-[14px] text-ink-3 md:text-[15px]">{row.label}</dt>
            <dd className="text-[15px] leading-relaxed font-medium md:text-[16px]">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
