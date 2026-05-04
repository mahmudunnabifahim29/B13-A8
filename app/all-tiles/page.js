import AllTilesClient from "@/app/all-tiles/AllTilesClient";
import { getTiles } from "@/lib/tiles";

export const dynamic = "force-dynamic";

export default async function AllTilesPage() {
  const tiles = await getTiles();

  return (
    <section className="section section--compact">
      <div className="container space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-ink-600">
            Gallery
          </p>
          <h1 className="font-display text-4xl text-ink-900">All Tiles</h1>
          <p className="text-base text-ink-600">
            Search by title and explore the full collection.
          </p>
        </div>
        <AllTilesClient tiles={tiles} />
      </div>
    </section>
  );
}
