import axios from "axios";
import { createContext } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";

import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Inventory from "@/Pages/Inventory/Inventory";
import { FilterConfig } from "@/components/DataTable/data-table-toolbar";

// type: for products
export type ProductsType = {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  description: string;
};

// columns: for inventory table
const columns: ColumnDef<ProductsType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-gray-400"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ps-0"
        >
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const truncateTitle =
        row.original.title.length > 50
          ? `${row.original.title.slice(0, 50)}...`
          : row.original.title;
      return (
        <Link
          to="/inventory/$inventoryId"
          params={{ inventoryId: row.original.id.toString() }}
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          <div className="flex items-center gap-2">
            <img
              src={row.original.image}
              alt="Image"
              className="aspect-square rounded-md object-cover"
              height="25"
              width="25"
            />
            {truncateTitle}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ps-0"
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ getValue }) => (
      <span className="capitalize">{getValue() as string}</span>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ps-0"
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(price);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const inventory = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(inventory.id.toString())
              }
            >
              Copy ID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// type: for inventory context
type InventoryContextType = {
  columns: ColumnDef<ProductsType>[];
  data: ProductsType[];
  filters: FilterConfig[];
};

// create context: for inventory
export const InventoryContext = createContext<InventoryContextType | null>(
  null
);

// route: for inventory page
export const Route = createFileRoute("/inventory/")({
  component: InventoryRoute,
});

// fetch: all products data
const fetchProducts = async () => {
  return await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);
};

// Helper function to generate filter options from data
const generateFilterOptions = (data: ProductsType[]): FilterConfig[] => {
  // Get unique categories from data
  const uniqueCategories = Array.from(
    new Set(data.map((product) => product.category))
  );

  // Create dynamic category filter configuration
  const categoryFilter: FilterConfig = {
    column: "category",
    title: "Category",
    options: uniqueCategories.map((category) => ({
      label: category
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" "),
      value: category,
    })),
  };

  // You can add more dynamic filters here if needed [categoryFilter, priceFilter, ...]
  return [categoryFilter];
};

// main function
function InventoryRoute() {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
    staleTime: 300000, // 300000ms = 3min // for 30s data will remain in Fresh mode
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <div>Fetching...</div>;
  }

  if (isError) {
    return <div>Error loading products: {error.message}</div>;
  }

  // Generate filters dynamically from the fetched data
  const filters = generateFilterOptions(data);

  return (
    <>
      <InventoryContext.Provider value={{ columns, data, filters }}>
        <Inventory />
      </InventoryContext.Provider>
    </>
  );
}
