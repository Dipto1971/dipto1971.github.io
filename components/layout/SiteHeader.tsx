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
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md supports-[backdrop-filter]:bg-bg/75">
      <div className="gutter mx-auto w-full max-w-wide">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 md:py-4">
          {/* Row one on phones: identity and theme control stay on screen while
              the tab strip below is free to scroll sideways. */}
          <div className="flex min-w-0 items-center justify-between gap-3 py-3 md:py-0">
            <Link
              href="/"
              className="truncate text-sm font-semibold tracking-tight text-fg transition-colors hover:text-accent"
            >
              {profile.name}
            </Link>
            <div className="shrink-0 md:hidden">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-6">
            <nav aria-label="Primary" className="min-w-0 flex-1">
              <ul className="no-scrollbar scroll-fade-x -mx-1 flex items-center gap-0.5 overflow-x-auto pb-1 text-sm md:pb-0">
                {navItems.map((item) => (
                  <li key={item.href} className="shrink-0">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={classNames(
                        "flex min-h-[44px] items-center whitespace-nowrap rounded-md px-3 transition-colors md:min-h-0 md:px-2 md:py-1",
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
            <div className="hidden shrink-0 md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
