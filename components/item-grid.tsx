import { Item } from "@/lib/types/common";
import { ItemGridClient } from "./item-grid-client";

interface ItemGridProps {
  items: Item[] | null;
  featured?: boolean;
  type?: "artwork" | "item";
}

export function ItemGrid({
  items,
  featured = false,
  type = "item",
}: ItemGridProps) {
  if (!items) {
    return <div>No items available</div>;
  }
  return <ItemGridClient items={items} featured={featured} type={type} />;
}
