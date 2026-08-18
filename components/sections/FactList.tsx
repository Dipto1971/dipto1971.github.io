import profile from "@/data/profile";

const FactList = () => {
  return (
    <dl className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
      {profile.facts.map((fact) => (
        <div key={fact.label}>
          <dt className="label">{fact.label}</dt>
          <dd className="mt-1.5 text-sm text-fg">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default FactList;
