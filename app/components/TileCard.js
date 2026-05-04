import Image from "next/image";
import Link from "next/link";

export default function TileCard({ tile, ctaLabel = "View Details" }) {
  return (
    <article className="tile-card">
      <div className="tile-card__image">
        <Image
          src={tile.image}
          alt={tile.title}
          width={640}
          height={480}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="tile-card__body">
        <div className="tile-card__header">
          <h3 className="text-lg font-semibold text-ink-900">
            {tile.title}
          </h3>
          <span
            className={
              tile.inStock
                ? "status-pill status-pill--in"
                : "status-pill status-pill--out"
            }
          >
            {tile.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>
        <p className="text-sm text-ink-600">{tile.description}</p>
        <div className="tile-card__meta">
          <span className="tag">{tile.category}</span>
          <span className="tag">{tile.material}</span>
          <span className="tag">{tile.dimensions}</span>
        </div>
        <div className="tile-card__footer">
          <span className="text-base font-semibold text-ink-900">
            {tile.currency} {tile.price}
          </span>
          <Link href={`/tile/${tile.id}`} className="btn-outline">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
