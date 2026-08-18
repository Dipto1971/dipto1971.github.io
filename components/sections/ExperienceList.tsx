import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import experience from "@/data/experience";
import TagList from "@/components/ui/TagList";

const ExperienceList = () => {
  return (
    <div className="divide-y divide-line">
      {experience.map((role) => (
        <article key={role.id} className="py-10 first:pt-0 last:pb-0 sm:py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[10rem_1fr] md:gap-10">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 md:block md:pt-1">
              <p className="label">{role.period}</p>
              <p className="text-sm text-muted md:mt-1.5">{role.type}</p>
            </div>

            <div>
              <h3 className="text-base font-semibold tracking-tight text-fg sm:text-lg">
                {role.role}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {role.url ? (
                  <Link
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline-offset-4 transition-colors hover:text-fg hover:underline"
                  >
                    {role.company}
                    <ArrowUpRight size={13} strokeWidth={1.75} />
                  </Link>
                ) : (
                  role.company
                )}
              </p>
              <p className="mt-4 max-w-content text-[0.9375rem] leading-relaxed text-fg/90 sm:text-base">
                {role.summary}
              </p>

              <dl className="mt-6 space-y-5 sm:mt-7">
                {role.highlights.map((highlight) => (
                  <div key={highlight.label} className="max-w-content">
                    <dt className="text-sm font-semibold tracking-tight text-fg">
                      {highlight.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">
                      {highlight.text}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 sm:mt-7">
                <TagList items={role.stack} />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ExperienceList;
