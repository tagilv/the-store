import { Item } from "../types/common";
import { ShopifyProduct } from "./types";

export function convertShopifyProductToItem(product: ShopifyProduct, collectionHandle: string): Item {
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    category: mapCollectionToCategory(collectionHandle),
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
): "art" | "glassware" | "furniture" | "featured" {
  switch (collectionHandle) {
    case "art-collection":
      return "art";
    case "featured-art":
    case "featured-art-collection":
      return "featured";
    case "glassware-collection":
      return "glassware";
    case "furniture-collection":
      return "furniture";
    default:
      return "art";
  }
}
