import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { ShopifyCollection } from "@/lib/shopify/types";
import crypto from "crypto";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const rawBody = await req.text();

  const headersList = await headers();
  const hmac = headersList.get("x-shopify-hmac-sha256");
  const topic = headersList.get("x-shopify-topic") || "unknown";

  if (!hmac || !process.env.SHOPIFY_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "Missing signature or secret" },
      { status: 401 }
    );
  }

  const hash = crypto
    .createHmac("sha256", process.env.SHOPIFY_WEBHOOK_SECRET)
    .update(rawBody, "utf8")
    .digest("base64");

  if (hash !== hmac) {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 401 }
    );
  }

  const body = JSON.parse(rawBody);
  const product = body.product;
  const collections = product?.collections || [];

  const productWebhooks = ["products/create", "products/update"];
  const isProductUpdate = productWebhooks.includes(topic);

  if (isProductUpdate) {
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
  }

  return NextResponse.json({ status: 200, revalidated: true });
}