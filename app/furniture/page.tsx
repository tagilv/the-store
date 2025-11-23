import { ItemGrid } from "@/components/item-grid";
import { Metadata } from "next";
import { getFurnitureCollection } from "@/lib/shopify/api";

export const metadata: Metadata = {
  title: "Furniture Collection | De Boerderij",
  description:
    "Discover our curated selection of vintage and contemporary furniture pieces",
};

// revalidate every 1 hour
export const revalidate = 3600;

export default async function FurniturePage() {
  const { data: furnitureItems, error } = await getFurnitureCollection();

  if (error) {
    return <div>Error loading furniture collection</div>;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-4 text-balance">
              Furniture Collection
            </h1>
            <p className="text-muted-foreground text-lg text-pretty">
              Discover our curated selection of vintage and contemporary
              furniture pieces
            </p>
          </div>
          <ItemGrid items={furnitureItems} basePath="furniture" />
        </div>
      </section>
    </main>
  );
}
