import research from "@/data/research";
import TagList from "@/components/ui/TagList";
import ExternalLinks from "@/components/ui/ExternalLinks";

const ResearchList = () => {
  return (
    <div className="divide-y divide-line">
      {research.map((item) => {
        const links = [
          item.links.paper && { label: "Conference", href: item.links.paper },
          item.links.repository && {
            label: "Repository",
            href: item.links.repository,
          },
        ].filter(Boolean) as { label: string; href: string }[];

        return (
          <article key={item.id} className="py-8 first:pt-0 last:pb-0 sm:py-10">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[10rem_1fr] md:gap-10">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 md:block md:pt-1">
                {item.conference && <p className="label">{item.conference}</p>}
                {item.paperNumber && (
                  <p className="text-sm text-muted md:mt-1.5">
                    Paper #{item.paperNumber}
                  </p>
                )}
              </div>

              <div className="max-w-content">
                <h3 className="text-base font-semibold tracking-tight text-fg sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg/90 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-5 space-y-4">
                  {item.details
                    .split("\n\n")
                    .map((paragraph) => paragraph.trim())
                    .filter(Boolean)
                    .map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>

                <div className="mt-6">
                  <TagList items={item.technologies} />
                </div>
                <div className="mt-4">
                  <ExternalLinks links={links} />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ResearchList;
