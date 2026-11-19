import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { basePath } from '@/lib/basePath';

export function About() {
  return (
    <section aria-labelledby="about-title" className="mt-14 border-t border-rule pt-12 md:mt-16 md:grid md:grid-cols-[1fr_300px] md:gap-16 md:pt-14">
      <div>
        <h2 id="about-title" className="mb-5 text-[26px] font-extrabold tracking-[-0.02em] md:text-[30px]">
          About
        </h2>
        <div className="max-w-[66ch] space-y-4 text-[17px] leading-[1.65] text-ink-2">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <dl className="mt-8 self-end md:mt-0">
        {[
          { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
          { label: 'LinkedIn', value: 'in/hosam1696', href: profile.linkedin },
          { label: 'GitHub', value: 'helnabawy', href: profile.github },
        ].map((item) => (
          <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-rule py-3 first:border-t">
            <dt className="text-[14px] text-ink-3">{item.label}</dt>
            <dd className="min-w-0 truncate text-[15px] font-medium">
              <a className="link" href={item.href} {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
                {item.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Contact({ year }: { year: number }) {
  return (
    <footer id="contact" className="mt-16 bg-field md:mt-24">
      <div className="mx-auto max-w-[1104px] px-5 pt-16 pb-10 md:px-8 md:pt-24">
        <div className="flex flex-col items-start gap-7 md:flex-row md:items-center md:gap-10">
          <span aria-hidden className="squircle grid size-[88px] shrink-0 place-items-center bg-blue text-[40px] font-bold text-white md:size-[120px] md:text-[54px]">
            {profile.monogram}
          </span>
          <div>
            <h2 className="max-w-[18ch] text-[34px] leading-[1.05] font-extrabold tracking-[-0.03em] md:text-[52px]">
              Hiring for a senior mobile role?
            </h2>
            <p className="mt-3 text-[17px] text-ink-2">Email is the quickest way to reach me.</p>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="pill pill-blue h-[52px] px-7 text-[17px] max-md:w-full">
            <Mail size={18} aria-hidden /> {profile.email}
          </a>
          <a href={`${basePath}${profile.cvFile}`} download className="pill h-[52px] bg-white px-7 text-[17px] text-blue-press hover:bg-[#e6e6ee] max-md:w-full">
            <Download size={18} aria-hidden /> Download CV
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-rule pt-6 text-[14px] text-ink-3 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {profile.name} · {profile.location}
          </p>
          <ul className="flex gap-6">
            {[
              { name: 'LinkedIn', href: profile.linkedin },
              { name: 'GitHub', href: profile.github },
            ].map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-ink-2 transition-colors duration-200 hover:text-ink">
                  {s.name} <ArrowUpRight size={15} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
