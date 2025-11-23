import { getFeaturedArt } from "@/lib/shopify/api";
import { ItemGrid } from "./item-grid";

export async function FeaturedGrid() {
  const { data: featuredItems, error } = await getFeaturedArt();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Error loading featured art</p>
      </div>
    );
  }

  if (!featuredItems || featuredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No featured art available at this time
        </p>
      </div>
    );
  }

  return <ItemGrid items={featuredItems} basePath="featured" />;
}

