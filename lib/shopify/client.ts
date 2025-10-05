import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const client = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN!,
  apiVersion: "2023-10",
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});
