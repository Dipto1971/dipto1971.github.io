import Link from "next/link";
import profile, { contacts } from "@/data/profile";

const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t border-line sm:mt-24">
      <div className="gutter mx-auto flex w-full max-w-wide flex-col gap-3 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">
          {profile.name} - {profile.title}
        </p>
        <ul className="-my-1 flex flex-wrap items-center gap-x-5 gap-y-1">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Link
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-[36px] items-center text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                {contact.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
