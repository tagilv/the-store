import { Item } from "../types/common";
import { ShopifyProduct } from "./types";

export function convertShopifyProductToItem(product: ShopifyProduct): Item {
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    category: mapCollectionToCategory(
      product.collections.edges[0]?.node?.handle
    ),
    medium:
      product.tags.find((tag: string) =>
        [
          "acrylic",
          "oil",
          "watercolor",
          "mixed media",
          "glass",
          "crystal",
          "glassware",
          "vase",
          "wood",
          "metal",
        ].includes(tag.toLowerCase())
      ) || "Other",
    year: new Date().getFullYear().toString(),
    dimensions: "Various",
    description: product.description,
    image: product.images.edges[0]?.node.url || "/placeholder.svg",
    price: product.priceRange.minVariantPrice.amount,
  };
}

// Determine category from collections
function mapCollectionToCategory(
  collectionHandle?: string
): "art" | "glassware" | "furniture" {
  switch (collectionHandle) {
    case "art":
      return "art";
    case "glassware":
      return "glassware";
    case "furniture":
      return "furniture";
    default:
      return "art";
  }
}
