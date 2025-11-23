import { getFurnitureCollection } from "@/lib/shopify/api";
import { ItemGrid } from "./item-grid";

export async function FurnitureGrid() {
  const { data: furnitureItems, error } = await getFurnitureCollection();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Error loading furniture collection</p>
      </div>
    );
  }

  return <ItemGrid items={furnitureItems} basePath="furniture" />;
}

