import { notFound } from "next/navigation";
import { getFeaturedArt } from "@/lib/shopify/api";
import { ItemModal } from "@/components/items/item-modal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FeaturedItemModal({ params }: PageProps) {
  const { id } = await params;
  
  const { data: items } = await getFeaturedArt();
  const item = items?.find((item) => item.handle === id);

  if (!item) {
    notFound();
  }

  return <ItemModal item={item} basePath="featured" />;
}

