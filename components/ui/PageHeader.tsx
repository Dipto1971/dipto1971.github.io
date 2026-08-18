interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

const PageHeader = ({ eyebrow, title, lead }: PageHeaderProps) => {
  return (
    <header className="border-b border-line pb-6 sm:pb-8">
      <p className="label">{eyebrow}</p>
      <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-4 max-w-content text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {lead}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
