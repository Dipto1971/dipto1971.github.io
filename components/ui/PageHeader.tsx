interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

const PageHeader = ({ eyebrow, title, lead }: PageHeaderProps) => {
  return (
    <header className="border-b border-line pb-8">
      <p className="label">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-4 max-w-content text-base leading-relaxed text-muted">
          {lead}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
