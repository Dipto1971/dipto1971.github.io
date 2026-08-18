import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16">
      <p className="label">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg">
        Page not found
      </h1>
      <p className="mt-4 max-w-content text-base leading-relaxed text-muted">
        The page you requested does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm text-muted underline underline-offset-4 transition-colors hover:text-fg"
      >
        Back to overview
      </Link>
    </div>
  );
}
