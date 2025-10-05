import { ItemGrid } from "@/components/item-grid";
import { client } from "@/lib/shopify/client";
import { getCollection } from "@/lib/shopify/queries";
import { convertShopifyProductToItem } from "@/lib/shopify/mappers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glassware Collection | De Boerderij",
  description:
    "Explore our collection of fine glassware and decorative glass pieces",
};

export default async function GlasswarePage() {
  try {
    const { data, errors } = await client.request(getCollection, {
      variables: { handle: "glassware-collection" },
    });

    if (errors) {
      console.error("GraphQL error:", errors);
      return <div>Error loading glassware collection</div>;
    }

    const glasswareItems =
      data?.collection?.products?.edges?.map((edge: any) =>
        convertShopifyProductToItem(edge.node)
      ) || [];

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
            <ItemGrid items={glasswareItems} />
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error fetching glassware collection:", error);
    return <div>Error loading glassware collection</div>;
  }
}
