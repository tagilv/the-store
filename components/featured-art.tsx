import { Suspense } from "react";
import { FeaturedGrid } from "./featured-grid";
import { ItemGridSkeleton } from "./ItemGridSkeleton";

export function FeaturedArt() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-4 text-balance">
            Featured Art
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Discover our carefully curated selection of featured artworks
          </p>
        </div>
        <Suspense fallback={<ItemGridSkeleton />}>
          <FeaturedGrid />
        </Suspense>
      </div>
    </section>
  );
}
