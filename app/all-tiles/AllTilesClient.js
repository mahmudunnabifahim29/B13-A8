"use client";

import { useMemo, useState } from "react";
import TileCard from "@/app/components/TileCard";

export default function AllTilesClient({ tiles }) {
  const [query, setQuery] = useState("");

  const filteredTiles = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return tiles;
    }
    return tiles.filter((tile) =>
      tile.title.toLowerCase().includes(trimmed)
    );
  }, [query, tiles]);

  return (
    <div className="space-y-8">
      <div className="input-hero">
        <span className="input-hero__label">Search</span>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tiles by title"
          className="input-hero__field"
          aria-label="Search tiles by title"
        />
      </div>

      {filteredTiles.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-200 bg-white/60 p-10 text-center text-ink-600">
          No tiles match your search. Try a different title.
        </div>
      ) : (
        <div className="tile-grid">
          {filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} ctaLabel="Details" />
          ))}
        </div>
      )}
    </div>
  );
}
