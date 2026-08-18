const TagList = ({ items, label }: { items: string[]; label?: string }) => {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {label && <span className="label mr-1">{label}</span>}
      {items.map((item) => (
        <span
          key={item}
          className="rounded border border-line bg-surface px-2 py-1 font-mono text-[11px] leading-none text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default TagList;
