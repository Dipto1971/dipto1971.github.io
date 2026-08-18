"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { navItems } from "@/lib/nav";
import profile from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const normalise = (path: string) =>
  path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

const SiteHeader = () => {
  const pathname = normalise(usePathname() || "/");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto w-full max-w-wide px-5 sm:px-8">
        <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-fg transition-colors hover:text-accent"
            >
              {profile.name}
            </Link>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav aria-label="Primary">
              <ul className="no-scrollbar -mx-1 flex items-center gap-1 overflow-x-auto text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={classNames(
                        "block whitespace-nowrap rounded-md px-2 py-1 transition-colors",
                        isActive(item.href)
                          ? "text-fg"
                          : "text-muted hover:text-fg"
                      )}
                    >
                      <span
                        className={classNames(
                          "border-b pb-1",
                          isActive(item.href)
                            ? "border-fg"
                            : "border-transparent"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
