import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import profile, { contacts } from "@/data/profile";

const Hero = () => {
  return (
    <header className="border-b border-line pb-10 sm:pb-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line sm:h-24 sm:w-24">
          <Image
            src={profile.image}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(min-width: 640px) 96px, 80px"
            priority
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="label">{profile.location}</p>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-[0.9375rem] text-muted sm:text-lg">
            {profile.titleLong}
          </p>

          <p className="mt-5 max-w-content text-[0.9375rem] leading-relaxed text-fg/90 sm:mt-6 sm:text-base">
            {profile.summary}
          </p>

          <div className="-my-1 mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 sm:mt-7">
            {contacts.map((contact) => (
              <Link
                key={contact.id}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-[36px] items-center gap-1 text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
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
