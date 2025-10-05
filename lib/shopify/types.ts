export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  tags: string[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  collections: {
    edges: Array<{
      node: {
        title: string;
        handle: string;
      };
    }>;
  };
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

export interface ProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

export interface CollectionResponse {
  collection: ShopifyCollection | null;
}
