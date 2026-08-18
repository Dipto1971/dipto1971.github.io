import Link from "next/link";
import profile, { contacts } from "@/data/profile";

const SiteFooter = () => {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex w-full max-w-wide flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-muted">
          {profile.name} - {profile.title}
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Link
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
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
