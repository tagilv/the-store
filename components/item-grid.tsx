import { Item } from "@/lib/types/common";
import { ItemGridClient } from "./item-grid-client";

interface ItemGridProps {
  items: Item[] | null;
  basePath: string;
}

export function ItemGrid({ items, basePath }: ItemGridProps) {
  if (!items) {
    return <div>No items available</div>;
  }

  return <ItemGridClient items={items} basePath={basePath} />;
}
