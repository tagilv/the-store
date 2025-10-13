import { Item } from "@/lib/types/common";
import { ItemGridClient } from "./item-grid-client";

interface ItemGridProps {
  items: Item[] | null;
}

export function ItemGrid({ items }: ItemGridProps) {
  if (!items) {
    return <div>No items available</div>;
  }

  return <ItemGridClient items={items} />;
}
