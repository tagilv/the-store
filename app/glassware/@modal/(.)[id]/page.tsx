import { notFound } from "next/navigation";
import { getGlasswareCollection } from "@/lib/shopify/api";
import { ItemModal } from "@/components/item-modal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function GlasswareItemModal({ params }: PageProps) {
  const { id } = await params;
  
  const { data: items } = await getGlasswareCollection();
  const item = items?.find((item) => item.handle === id);

  if (!item) {
    notFound();
  }

  return <ItemModal item={item} basePath="glassware" />;
}

