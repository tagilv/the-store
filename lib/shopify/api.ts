import { Item } from "../data";
import { client } from "./client";
import { convertShopifyProductToItem } from "./mappers";
import { getCollection } from "./queries";
import { CollectionResponse } from "./types";

export async function getArtCollection(): Promise<{
  data: Item[] | null;
  error: string | null;
}> {
  const { data, errors } = await client.request<CollectionResponse>(
    getCollection,
    {
      variables: { handle: "art-collection" },
    }
  );

  if (errors) {
    console.error("GraphQL error:", errors);
    return { data: null, error: "Failed to fetch art collection" };
  }

  const items =
    data?.collection?.products?.edges?.map((edge) =>
      convertShopifyProductToItem(edge.node)
    ) || [];

  return { data: items, error: null };
}
