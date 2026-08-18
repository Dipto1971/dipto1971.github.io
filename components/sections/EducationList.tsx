import education from "@/data/education";
import TagList from "@/components/ui/TagList";

const EducationList = () => {
  return (
    <div className="divide-y divide-line">
      {education.map((item) => (
        <article key={item.id} className="py-10 first:pt-0 last:pb-0 sm:py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[10rem_1fr] md:gap-10">
            <div className="md:pt-1">
              <p className="label">{item.period}</p>
            </div>

            <div className="max-w-content">
              <h3 className="text-base font-semibold tracking-tight text-fg sm:text-lg">
                {item.institution}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.degree}</p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-fg/90 sm:text-base">
                {item.description}
              </p>

              <div className="mt-6 sm:mt-7">
                <h4 className="label">Activities and societies</h4>
                <div className="mt-3">
                  <TagList items={item.activities} />
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default EducationList;
