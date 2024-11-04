"use clinet";

import { createFileRoute } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";
import { createContext, useEffect, useState } from "react";

import Reports from "@/Pages/Reports/Reports";

// Best Selling Product Type
export type ProductsType = {
  productName: string;
  productID: number;
  categoryName: string;
  remainingQuantity: string;
  turnOver: number;
  increaseBy: number;
};

// Bese Selling Category Type
export type CategoriesType = {
  categoryName: string;
  turnOver: number;
  increaseBy: number;
};

// Products Columns Defination
const productColumns: ColumnDef<ProductsType>[] = [
  {
    accessorKey: "productName",
    header: "Product",
  },
  {
    accessorKey: "productID",
    header: "Product ID",
  },
  {
    accessorKey: "categoryName",
    header: "Category",
  },
  {
    accessorKey: "remainingQuantity",
    header: "Remaining Quantity",
  },
  {
    accessorKey: "turnOver",
    header: "Turn Over",
    cell: ({ row }) => `₹ ${row.original.turnOver.toFixed(2)}`,
  },
  {
    accessorKey: "increaseBy",
    header: "Increase By",
    cell: ({ getValue }) => (
      <span style={{ color: "#10A760" }}>{getValue() as string}%</span>
    ),
  },
];

// Category Columns Defination
const categoryColumns: ColumnDef<CategoriesType>[] = [
  {
    accessorKey: "categoryName",
    header: "Categoty",
  },
  {
    accessorKey: "turnOver",
    header: "Turn Over",
    cell: ({ row }) => `₹ ${row.original.turnOver.toFixed(2)}`,
  },
  {
    accessorKey: "increaseBy",
    header: "Increase By",
    cell: ({ getValue }) => (
      <span style={{ color: "#10A760" }}>{getValue() as string}%</span>
    ),
  },
];

// Products Data
const best_selling_product: ProductsType[] = [
  {
    productName: "Tomato",
    productID: 23567,
    categoryName: "Vegtable",
    remainingQuantity: "225 kg",
    turnOver: 17000,
    increaseBy: 2.3,
  },
  {
    productName: "Onion",
    productID: 25831,
    categoryName: "Vegtable",
    remainingQuantity: "200 kg",
    turnOver: 12000,
    increaseBy: 1.3,
  },
  {
    productName: "Maggi",
    productID: 56841,
    categoryName: "Instant Food",
    remainingQuantity: "200 packets",
    turnOver: 10000,
    increaseBy: 1.3,
  },
  {
    productName: "Surf Excel",
    productID: 23568,
    categoryName: "Households",
    remainingQuantity: "125 packets",
    turnOver: 9000,
    increaseBy: 1.0,
  },
];

// Category Data
const best_selling_category: CategoriesType[] = [
  {
    categoryName: "Vegetable",
    turnOver: 26000,
    increaseBy: 3.2,
  },
  {
    categoryName: "Instant Food",
    turnOver: 22000,
    increaseBy: 2.0,
  },
  {
    categoryName: "Households",
    turnOver: 22000,
    increaseBy: 3.2,
  },
];

// Context for Products
export type ProductsContextType = {
  columns: ColumnDef<ProductsType>[];
  data: ProductsType[];
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

// Context for Categories
export type CategoriesContextType = {
  columns: ColumnDef<CategoriesType>[];
  data: CategoriesType[];
};

export const CategoriesContext = createContext<CategoriesContextType | null>(
  null
);

export const Route = createFileRoute("/reports/")({
  component: ReportsLayout,
});

function ReportsLayout() {
  const [productsData, setProductsData] = useState<ProductsType[]>([]);
  const [categoriesData, setCategoriesData] = useState<CategoriesType[]>([]);

  useEffect(() => {
    setProductsData(best_selling_product);
    setCategoriesData(best_selling_category);
  }, []);

  return (
    <>
      <ProductsContext.Provider
        value={{ columns: productColumns, data: productsData }}
      >
        <CategoriesContext.Provider
          value={{ columns: categoryColumns, data: categoriesData }}
        >
          <Reports />
        </CategoriesContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}
