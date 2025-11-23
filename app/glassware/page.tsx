import { ItemGrid } from "@/components/item-grid";
import { Metadata } from "next";
import { getGlasswareCollection } from "@/lib/shopify/api";

export const metadata: Metadata = {
  title: "Glassware Collection | De Boerderij",
  description:
    "Explore our collection of fine glassware and decorative glass pieces",
};

// revalidate every 30 min
export const revalidate = 1800;

export default async function GlasswarePage() {
  const { data: glasswareItems, error } = await getGlasswareCollection();

  if (error) {
    return <div>Error loading glassware collection</div>;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-4 text-balance">
              Glassware Collection
            </h1>
            <p className="text-muted-foreground text-lg text-pretty">
              Exquisite hand-blown glass, crystal, and decorative pieces from
              master artisans
            </p>
          </div>
          <ItemGrid items={glasswareItems} basePath="glassware" />
        </div>
      </section>
    </main>
  );
}
