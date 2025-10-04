import { Item } from "@/lib/data";
import { ItemGridClient } from "./item-grid-client";

interface ItemGridProps {
  items: Item[];
}

export function ItemGrid({ items }: ItemGridProps) {
  return <ItemGridClient items={items} />;
}
