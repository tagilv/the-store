import { ItemGrid } from "@/components/item-grid";
import { getItemsByCategory } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture Collection | De Boerderij",
  description:
    "Browse our selection of vintage and contemporary furniture pieces",
};

export default function FurniturePage() {
  const furnitureItems = getItemsByCategory("furniture");

  return (
    <main className="min-h-screen flex flex-col">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-4 text-balance">
              Furniture Collection
            </h1>
            <p className="text-muted-foreground text-lg text-pretty">
              Vintage and contemporary furniture pieces selected for their
              design and craftsmanship
            </p>
          </div>
          <ItemGrid items={furnitureItems} />
        </div>
      </section>
    </main>
  );
}
