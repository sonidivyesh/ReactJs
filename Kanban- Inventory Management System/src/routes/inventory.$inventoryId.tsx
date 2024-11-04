import { createFileRoute, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import ProductDetail from "@/Pages/Inventory/ProductDetail";

// route: for product details page
export const Route = createFileRoute("/inventory/$inventoryId")({
  component: ProductDetailRoute,
});

// function: fetch product details by inventory id
const fetchProductData = async (inventoryId: string) => {
  return await axios
    .get(`https://fakestoreapi.com/products/${inventoryId}`)
    .then((res) => res.data);
};

// main function
function ProductDetailRoute() {
  const { inventoryId } = useParams({ from: "/inventory/$inventoryId" });

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["product", inventoryId],
    queryFn: () => fetchProductData(inventoryId),
    staleTime: 300000, // 3min
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <div>Fetching...</div>;
  }

  if (isError) {
    return <div>Error loading product details: {error.message}</div>;
  }

  return <ProductDetail product={data} />;
}
