import skills from "@/data/skills";
import TagList from "@/components/ui/TagList";

const SkillMatrix = () => {
  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
      {skills.map((group) => (
        <div key={group.id}>
          <h3 className="text-sm font-semibold tracking-tight text-fg">
            {group.title}
          </h3>
          <div className="mt-3">
            <TagList items={group.items} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillMatrix;
