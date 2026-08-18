import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LinkItem {
  label: string;
  href: string;
}

const ExternalLinks = ({ links }: { links: LinkItem[] }) => {
  if (!links.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.map((link) => (
        <Link
          key={link.label + link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
        >
          {link.label}
          <ArrowUpRight size={13} strokeWidth={1.75} />
        </Link>
      ))}
    </div>
  );
};

export default ExternalLinks;
