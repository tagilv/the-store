import { getGlasswareCollection } from "@/lib/shopify/api";
import { ItemGrid } from "./item-grid";

export async function GlasswareGrid() {
  const { data: glasswareItems, error } = await getGlasswareCollection();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Error loading glassware collection</p>
      </div>
    );
  }

  return <ItemGrid items={glasswareItems} basePath="glassware" />;
}

