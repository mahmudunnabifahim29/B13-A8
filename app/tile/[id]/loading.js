export default function Loading() {
  return (
    <section className="section section--compact">
      <div className="container space-y-8">
        <div className="h-4 w-32 rounded-full bg-stone-200/70" />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="tile-frame skeleton" />
          <div className="space-y-4">
            <div className="h-8 w-3/4 rounded-full bg-stone-200/70" />
            <div className="h-4 w-full rounded-full bg-stone-200/70" />
            <div className="h-4 w-5/6 rounded-full bg-stone-200/70" />
            <div className="h-24 rounded-2xl bg-stone-200/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
