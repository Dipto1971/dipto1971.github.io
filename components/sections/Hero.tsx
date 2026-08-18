import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import profile, { contacts } from "@/data/profile";

const Hero = () => {
  return (
    <header className="border-b border-line pb-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-line">
          <Image
            src={profile.image}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="96px"
            priority
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="label">{profile.location}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-base text-muted sm:text-lg">
            {profile.titleLong}
          </p>

          <p className="mt-6 max-w-content text-base leading-relaxed text-fg/90">
            {profile.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            {contacts.map((contact) => (
              <Link
                key={contact.id}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                {contact.label}
                {contact.external && (
                  <ArrowUpRight size={13} strokeWidth={1.75} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
