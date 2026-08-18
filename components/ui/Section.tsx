interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}

const Section = ({ title, description, children, id }: SectionProps) => {
  return (
    <section
      id={id}
      className="border-t border-line py-10 first:border-t-0 sm:py-12"
    >
      <h2 className="label">{title}</h2>
      {description && (
        <p className="mt-3 max-w-content text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
};

export default Section;
