import { Suspense } from "react";
import { ArtGrid } from "@/components/art-grid";
import { ItemGridSkeleton } from "@/components/ItemGridSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Collection | De Boerderij",
  description:
    "Browse our curated collection of fine art from independent artists",
};

// revalidate every 1 hours
export const revalidate = 3600;

export default function ArtPage() {
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
          <Suspense fallback={<ItemGridSkeleton />}>
            <ArtGrid />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
