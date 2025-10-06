import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { ShopifyCollection } from "@/lib/shopify/types";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const topic = (await headers()).get("x-shopify-topic") || "unknown";

  const productWebhooks = ["products/create", "products/update"];

  const isProductUpdate = productWebhooks.includes(topic);

  if (isProductUpdate) {
    // Always revalidate home page
    revalidatePath("/");

    // Get product data from request body to check collections
    const body = await req.json();
    const product = body.product;
    const collections = product?.collections || [];

    // Revalidate specific collection pages based on product's collections
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
  }

  return NextResponse.json({ status: 200, revalidated: true });
}
