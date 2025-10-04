import { ArtworkGrid } from "./artwork-grid";

export function FeaturedArt() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-4">
            Featured Art
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our latest acquisitions and available pieces
          </p>
        </div>
        <ArtworkGrid featured={true} />
      </div>
    </section>
  );
}
