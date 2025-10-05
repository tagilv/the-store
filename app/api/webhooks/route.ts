import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { ShopifyCollection } from "@/lib/shopify/types";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.topic === "products/create" || body.topic === "products/update") {
    // Get the product's collection from the webhook data
    const product = body.product;
    const collections = product?.collections || [];

    // Revalidate based on which collections are affected
    revalidatePath("/");

    collections.forEach((collection: ShopifyCollection) => {
      switch (collection.handle) {
        case "art-collection":
          revalidatePath("/art");
          break;
        case "glassware-collection":
          revalidatePath("/glassware");
          break;
        case "furniture-collection":
          revalidatePath("/furniture");
          break;
      }
    });

    return Response.json({ revalidated: true });
  }

  return Response.json({ revalidated: false });
}
