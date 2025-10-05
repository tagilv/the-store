import { FeaturedArt } from "@/components/featured-art";
import { StoreIntro } from "@/components/store-intro";
import { getFeaturedArt } from "@/lib/shopify/api";

export const revalidate = 43200;

export default async function Home() {
  const { data: featuredItems, error } = await getFeaturedArt();

  if (error) {
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

  return (
    <main className="min-h-screen flex flex-col">
      <StoreIntro />
      <FeaturedArt items={featuredItems} />
    </main>
  );
}
