import { getArtCollection } from "@/lib/shopify/api";
import { ItemGrid } from "./item-grid";

export async function ArtGrid() {
  const { data: artItems, error } = await getArtCollection();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Error loading art collection</p>
      </div>
    );
  }

  return <ItemGrid items={artItems} basePath="art" />;
}

