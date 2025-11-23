import { Suspense } from "react";
import { FurnitureGrid } from "@/components/furniture-grid";
import { ItemGridSkeleton } from "@/components/ItemGridSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture Collection | De Boerderij",
  description:
    "Discover our curated selection of vintage and contemporary furniture pieces",
};

// revalidate every 1 hour
export const revalidate = 3600;

export default function FurniturePage() {
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
          <Suspense fallback={<ItemGridSkeleton />}>
            <FurnitureGrid />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
