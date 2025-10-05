import { ItemGrid } from "@/components/item-grid";
import { Metadata } from "next";
import { getArtCollection } from "@/lib/shopify/api";

export const metadata: Metadata = {
  title: "Art Collection | De Boerderij",
  description:
    "Browse our curated collection of fine art from independent artists",
};

export default async function ArtPage() {
  const { data: artItems, error } = await getArtCollection();

  if (error) {
    return <div>Error loading art collection</div>;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-4 text-balance">
              Art Collection
            </h1>
            <p className="text-muted-foreground text-lg text-pretty">
              Discover our carefully curated selection of paintings, prints, and
              mixed media works
            </p>
          </div>
          <ItemGrid items={artItems} />
        </div>
      </section>
    </main>
  );
}
