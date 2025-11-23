import { notFound } from "next/navigation";
import { getFurnitureCollection } from "@/lib/shopify/api";
import { ItemModal } from "@/components/item-modal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FurnitureItemModal({ params }: PageProps) {
  const { id } = await params;
  
  const { data: items } = await getFurnitureCollection();
  const item = items?.find((item) => item.handle === id);

  if (!item) {
    notFound();
  }

  return <ItemModal item={item} basePath="furniture" />;
}

