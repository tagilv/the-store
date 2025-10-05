import { Item } from "@/lib/types/common";
import { ArtworkGridClient } from "./artwork-grid-client";

interface ArtworkGridProps {
  items?: Item[];
  featured?: boolean;
}

export function ArtworkGrid({ items, featured = false }: ArtworkGridProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return <ArtworkGridClient artworks={items} featured={featured} />;
}
