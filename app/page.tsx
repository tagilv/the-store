import { FeaturedArt } from "@/components/featured-art";
import { StoreIntro } from "@/components/store-intro";
import { client } from "@/lib/shopify/client";
import { getCollection } from "@/lib/shopify/queries";
import { convertShopifyProductToItem } from "@/lib/shopify/mappers";
import { CollectionResponse } from "@/lib/shopify/types";

export default async function Home() {
  try {
    // Fetch featured art products from Shopify
    const { data, errors } = await client.request<CollectionResponse>(
      getCollection,
      {
        variables: { handle: "art-collection" },
      }
    );

    if (errors) {
      console.error("GraphQL errors:", errors);
      return (
        <main className="min-h-screen flex flex-col">
          <StoreIntro />
          <div className="px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <p>Error loading featured art</p>
            </div>
          </div>
        </main>
      );
    }

    // Convert Shopify products to your Item interface
    const featuredItems =
      data?.collection?.products?.edges
        ?.map((edge) => convertShopifyProductToItem(edge.node))
        .slice(0, 6) || []; // Limit to 6 featured items

    return (
      <main className="min-h-screen flex flex-col">
        <StoreIntro />
        <FeaturedArt items={featuredItems} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching featured art:", error);
    return (
      <main className="min-h-screen flex flex-col">
        <StoreIntro />
        <div className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p>Error loading featured art</p>
          </div>
        </div>
      </main>
    );
  }
}
