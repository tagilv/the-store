import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Return webhook data in response for debugging (temporary)
  return Response.json({
    received: true,
    topic: body.topic,
    productTitle: body.product?.title,
    collections: body.product?.collections?.map((c: any) => c.handle) || [],
    bodyKeys: Object.keys(body),
  });
}
