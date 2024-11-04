import { createContext, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import salt from "../assets/lowQuantityStock/salt.png";
import lays from "../assets/lowQuantityStock/lays.png";

import Home from "@/Pages/Home/Home";

// Top selling stock types
export type TopSellingStockType = {
  productName: string;
  soldQuanitity: number;
  remainingQuantity: number;
  price: number;
};

// Low quantity stock types
export type LowQuantityStockType = {
  productName: string;
  thumbnail: string;
  remainingQuantity: number;
  status: string;
};

// Top selling stock columns defination
const topSellingStockColumns: ColumnDef<TopSellingStockType>[] = [
  {
    accessorKey: "productName",
    header: "Product",
  },
  {
    accessorKey: "soldQuanitity",
    header: "Sold Quantity",
  },
  {
    accessorKey: "remainingQuantity",
    header: "Remaining Quantity",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `₹ ${row.original.price.toFixed(2)}`,
  },
];

// Low quantity stock columns defination
const lowQuantityStockColumns: ColumnDef<LowQuantityStockType>[] = [
  {
    accessorKey: "thumbnail",
    header: "",
    cell: ({ row }) => (
      <img
        src={row.original.thumbnail}
        alt="Image"
        className="aspect-square rounded-md object-cover"
        height="60"
        width="60"
      />
    ),
  },
  {
    accessorKey: "productName",
    header: "",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <div className="font-medium text-gray-600 text-lg">
          {row.original.productName}
        </div>
        <div className="mt-0 text-left font-medium text-gray-400">
          Remaining Quantity: {row.original.remainingQuantity} Packet
        </div>
      </div>
    ),
  },
  {
    accessorKey: "remainingQuantity",
    header: "",
    cell: ({ row }) => (
      <Badge variant="outline" className="bg-red-50 text-red-700 px-3 py-1">
        {row.original.status}
      </Badge>
    ),
  },
];

// Top selling stock data
const top_selling_stock = [
  {
    productName: "Surf Excel",
    soldQuanitity: 30,
    remainingQuantity: 12,
    price: 100,
  },
  {
    productName: "Rin",
    soldQuanitity: 21,
    remainingQuantity: 15,
    price: 207,
  },
  {
    productName: "Parle G",
    soldQuanitity: 19,
    remainingQuantity: 17,
    price: 105,
  },
];

// Low quantity stock data
const low_quantity_stock = [
  {
    productName: "Tata Salt",
    thumbnail: salt,
    remainingQuantity: 10,
    status: "Low",
  },
  {
    productName: "Lays",
    thumbnail: lays,
    remainingQuantity: 8,
    status: "Low",
  },
  {
    productName: "Lays",
    thumbnail: lays,
    remainingQuantity: 12,
    status: "Low",
  },
];

// Context for top selling stock
export type TopSellingStockContextType = {
  columns: ColumnDef<TopSellingStockType>[];
  data: TopSellingStockType[];
};

export const TopSellingStockContext =
  createContext<TopSellingStockContextType | null>(null);

// Context for low quantity stock
export type LowQuantityStockContextType = {
  columns: ColumnDef<LowQuantityStockType>[];
  data: LowQuantityStockType[];
};

export const LowQuantityStockContext =
  createContext<LowQuantityStockContextType | null>(null);

export const Route = createFileRoute("/")({
  component: HomeLayout,
});

export function HomeLayout() {
  const [topSellingStockData, setTopSellingStockData] = useState<
    TopSellingStockType[]
  >([]);
  const [lowQuantityStockData, setLowQuantityStockData] = useState<
    LowQuantityStockType[]
  >([]);

  useEffect(() => {
    setTopSellingStockData(top_selling_stock);
    setLowQuantityStockData(low_quantity_stock);
  }, []);

  return (
    <>
      <TopSellingStockContext.Provider
        value={{ columns: topSellingStockColumns, data: topSellingStockData }}
      >
        <LowQuantityStockContext.Provider
          value={{
            columns: lowQuantityStockColumns,
            data: lowQuantityStockData,
          }}
        >
          <Home />
        </LowQuantityStockContext.Provider>
      </TopSellingStockContext.Provider>
    </>
  );
}
