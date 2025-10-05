import { Item } from "../data";

export function convertShopifyProductToItem(product: any): Item {
  return {
    id: product.id,
    title: product.title,
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
          "wood",
          "metal",
        ].includes(tag.toLowerCase())
      ) || "Mixed Media",
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
