import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] items-center justify-center py-24">
      <div className="max-w-md text-center">
        <h1 className="text-7xl" style={{ fontFamily: "var(--font-display)" }}>404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page has moved or never existed. Head back home and start fresh.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--color-ink)] px-5 py-2.5 text-sm text-[color:var(--color-cream)]"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
