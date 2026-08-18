import projects from "@/data/projects";
import TagList from "@/components/ui/TagList";
import ExternalLinks from "@/components/ui/ExternalLinks";

const ProjectList = () => {
  return (
    <div className="divide-y divide-line">
      {projects.map((project) => (
        <article key={project.id} className="py-8 first:pt-0 last:pb-0 sm:py-10">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[10rem_1fr] md:gap-10">
            <div className="md:pt-1">
              <p className="label">{project.stack[0]}</p>
            </div>

            <div className="max-w-content">
              <h3 className="text-base font-semibold tracking-tight text-fg sm:text-lg">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-5">
                <TagList items={project.stack} />
              </div>
              <div className="mt-4">
                <ExternalLinks links={project.links} />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectList;
