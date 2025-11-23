import { notFound } from "next/navigation";
import { getArtCollection } from "@/lib/shopify/api";
import { ItemModal } from "@/components/items/item-modal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArtItemModal({ params }: PageProps) {
  const { id } = await params;
  
  const { data: items } = await getArtCollection();
  const item = items?.find((item) => item.handle === id);

  if (!item) {
    notFound();
  }

  return <ItemModal item={item} basePath="art" />;
}