import { ItemGrid } from "@/components/item-grid";
import { client } from "@/lib/shopify/client";
import { getCollection } from "@/lib/shopify/queries";
import { convertShopifyProductToItem } from "@/lib/shopify/mappers";
import { Metadata } from "next";
import { CollectionResponse } from "@/lib/shopify/types";
import { getFurnitureCollection } from "@/lib/shopify/api";

export const metadata: Metadata = {
  title: "Furniture Collection | De Boerderij",
  description:
    "Discover our curated selection of vintage and contemporary furniture pieces",
};

export default async function FurniturePage() {
  const { data: furnitureItems, error } = await getFurnitureCollection();

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
          <ItemGrid items={furnitureItems} />
        </div>
      </section>
    </main>
  );
}
