import { getFeaturedItems, getItemsByCategory } from "@/lib/data";
import { ArtworkGridClient } from "./artwork-grid-client";

interface ArtworkGridProps {
  featured?: boolean;
}

export function ArtworkGrid({ featured = false }: ArtworkGridProps) {
  const artworks = featured ? getFeaturedItems(6) : getItemsByCategory("art");

  return <ArtworkGridClient artworks={artworks} featured={featured} />;
}
