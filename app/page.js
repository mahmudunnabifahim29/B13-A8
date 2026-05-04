import Image from "next/image";
import Link from "next/link";
import { getFeaturedTiles } from "@/lib/tiles";
import TileCard from "@/app/components/TileCard";

export default async function Home() {
  const featuredTiles = await getFeaturedTiles();

  return (
    <div className="pb-16">
      <section className="section section--hero">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-ink-600">
            Tiles Gallery
          </p>
            <h1 className="font-display hero-title text-ink-900">
              Discover Your Perfect Aesthetic
            </h1>
            <p className="hero-subtitle">
              Curated tile collections for calm kitchens, bold bathrooms, and
              architectural statements. Explore materials, scale, and tone with
              a designer-first approach.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/all-tiles" className="btn-primary">
                Browse Now
              </Link>
              <Link href="/login" className="btn-outline">
                Member Login
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-ink-600">
              <div className="stat-card">
                <p className="text-xl font-semibold text-ink-900">120+</p>
                <p>Curated surfaces</p>
              </div>
              <div className="stat-card">
                <p className="text-xl font-semibold text-ink-900">24</p>
                <p>Material stories</p>
              </div>
              <div className="stat-card">
                <p className="text-xl font-semibold text-ink-900">8</p>
                <p>Design moods</p>
              </div>
            </div>
          </div>
          <div className="hero-image-grid">
            <div className="tile-frame tile-frame--hero animate__animated animate__fadeInUp">
              <Image
                src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=900&q=80"
                alt="Luxury Calacatta Marble Vein surface"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="tile-frame tile-frame--hero animate__animated animate__fadeInUp animate__delay-1s">
              <Image
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80"
                alt="Sand dune porcelain layout with organic shadows"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          <span>
            New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric
            Patterns | Join the Community | New Arrivals: Ceramic Blue Tile |
            Weekly Feature: Modern Geometric Patterns | Join the Community
          </span>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.35em] text-ink-600">
              Featured
            </p>
            <h2 className="font-display text-3xl text-ink-900">
              Featured Tiles
            </h2>
            <p className="text-base text-ink-600">
              A quick look at the most loved surfaces this week.
            </p>
          </div>
          <div className="tile-grid">
            {featuredTiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
