export default function Loading() {
  return (
    <section className="section section--compact">
      <div className="container space-y-6">
        <div className="h-8 w-48 rounded-full bg-stone-200/70" />
        <div className="tile-grid">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="tile-card skeleton" />
          ))}
        </div>
      </div>
    </section>
  );
}
