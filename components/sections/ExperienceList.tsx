import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import experience from "@/data/experience";
import TagList from "@/components/ui/TagList";

const ExperienceList = () => {
  return (
    <div className="divide-y divide-line">
      {experience.map((role) => (
        <article key={role.id} className="py-12 first:pt-0 last:pb-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[10rem_1fr] md:gap-10">
            <div className="md:pt-1">
              <p className="label">{role.period}</p>
              <p className="mt-1.5 text-sm text-muted">{role.type}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-fg">
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
              <p className="mt-4 max-w-content text-base leading-relaxed text-fg/90">
                {role.summary}
              </p>

              <dl className="mt-7 space-y-5">
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

              <div className="mt-7">
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
