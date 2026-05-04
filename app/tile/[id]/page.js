import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getTileById } from "@/lib/tiles";

export const dynamic = "force-dynamic";

export default async function TileDetailsPage({ params }) {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect(`/login?next=/tile/${id}`);
  }

  const tile = await getTileById(id);

  if (!tile) {
    notFound();
  }

  return (
    <section className="section section--compact">
      <div className="container space-y-8">
        <Link href="/all-tiles" className="text-sm text-ink-600">
          Back to all tiles
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="tile-frame">
            <Image
              src={tile.image}
              alt={tile.title}
              width={960}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-ink-600">
                {tile.category}
              </p>
              <h1 className="font-display text-4xl text-ink-900">
                {tile.title}
              </h1>
              <p className="text-base text-ink-600">{tile.description}</p>
            </div>

            <div className="detail-card">
              <div className="grid gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
                    Creator
                  </p>
                  <p className="text-base text-ink-900">{tile.creator}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
                    Style Description
                  </p>
                  <p className="text-base text-ink-900">
                    {tile.styleDescription}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tile.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-list">
              <div className="detail-row">
                <span>Dimensions</span>
                <span className="text-ink-900">{tile.dimensions}</span>
              </div>
              <div className="detail-row">
                <span>Material</span>
                <span className="text-ink-900">{tile.material}</span>
              </div>
              <div className="detail-row">
                <span>Price</span>
                <span className="text-ink-900">
                  {tile.currency} {tile.price}
                </span>
              </div>
              <div className="detail-row">
                <span>Availability</span>
                <span className="text-ink-900">
                  {tile.inStock ? "In stock" : "Out of stock"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn-primary">
                Request Sample
              </button>
              <button type="button" className="btn-outline">
                Save to Moodboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
