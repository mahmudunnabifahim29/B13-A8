import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="not-found-card">
          <p className="text-sm uppercase tracking-[0.35em] text-ink-600">404</p>
          <h1 className="font-display text-4xl text-ink-900">
            This tile is out of reach
          </h1>
          <p className="text-base text-ink-600">
            The page you are looking for does not exist. Head back to the
            gallery to keep exploring.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/all-tiles" className="btn-outline">
              Browse All Tiles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
