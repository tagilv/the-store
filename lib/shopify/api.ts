import { Item } from "../types/common";
import { client } from "./client";
import { convertShopifyProductToItem } from "./mappers";
import { getCollection } from "./queries";
import { CollectionResponse } from "./types";

export async function getFeaturedArt(): Promise<{
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
    return { data: null, error: "Failed to fetch featured art" };
  }

  const items =
    data?.collection?.products?.edges
      ?.map((edge) => convertShopifyProductToItem(edge.node))
      .slice(0, 6) || []; // Limit to 6 featured items

  return { data: items, error: null };
}

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

export async function getGlasswareCollection(): Promise<{
  data: Item[] | null;
  error: string | null;
}> {
  const { data, errors } = await client.request<CollectionResponse>(
    getCollection,
    {
      variables: { handle: "glassware-collection" },
    }
  );

  if (errors) {
    console.error("GraphQL error:", errors);
    return { data: null, error: "Failed to fetch glassware collection" };
  }

  const items =
    data?.collection?.products?.edges?.map((edge) =>
      convertShopifyProductToItem(edge.node)
    ) || [];

  return { data: items, error: null };
}

export async function getFurnitureCollection(): Promise<{
  data: Item[] | null;
  error: string | null;
}> {
  const { data, errors } = await client.request<CollectionResponse>(
    getCollection,
    {
      variables: { handle: "furniture-collection" },
    }
  );

  if (errors) {
    console.error("GraphQL error:", errors);
    return { data: null, error: "Failed to fetch furniture collection" };
  }

  const items =
    data?.collection?.products?.edges?.map((edge) =>
      convertShopifyProductToItem(edge.node)
    ) || [];

  return { data: items, error: null };
}
