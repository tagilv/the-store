import { getFeaturedItems, getItemsByCategory, Item } from "@/lib/data";
import { ArtworkGridClient } from "./artwork-grid-client";

interface ArtworkGridProps {
  items?: Item[];
  featured?: boolean;
}

export function ArtworkGrid({ items, featured = false }: ArtworkGridProps) {
  // If items are provided, use them; otherwise fetch from data
  const artworks =
    items || (featured ? getFeaturedItems(6) : getItemsByCategory("art"));

  return <ArtworkGridClient artworks={artworks} featured={featured} />;
}
