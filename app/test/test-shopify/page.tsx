import { client } from "@/lib/shopify/client";
import { GET_PRODUCTS_QUERY } from "@/lib/shopify/queries";

export default async function TestShopify() {
  try {
    const { data, errors } = await client.request(GET_PRODUCTS_QUERY, {
      variables: { first: 5 },
    });

    if (errors) {
      return <div>Errors: {JSON.stringify(errors)}</div>;
    }

    return (
      <div className="p-8">
        <h1>Shopify Products Test</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
