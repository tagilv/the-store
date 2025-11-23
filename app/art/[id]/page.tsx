import { notFound } from "next/navigation";
import { getArtCollection } from "@/lib/shopify/api";
import { ItemModal } from "@/components/item-modal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArtItemPage({ params }: PageProps) {
  const { id } = await params;
  
  const { data: items } = await getArtCollection();
  const item = items?.find((item) => item.handle === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <ItemModal item={item} basePath="art" />
      </div>
    </main>
  );
}