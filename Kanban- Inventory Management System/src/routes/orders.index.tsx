import { createContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

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

import Orders from "@/Pages/Orders/Orders";
import { FilterConfig } from "@/components/DataTable/data-table-toolbar";

export type OrdersType = {
  product: string;
  orderValue: number;
  quantity: string;
  orderID: number;
  expectedDelivery: string;
  status: string;
};

const columns: ColumnDef<OrdersType>[] = [
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
    accessorKey: "orderID",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ps-0"
        >
          Order ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "product",
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
  },
  {
    accessorKey: "orderValue",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ps-0"
        >
          Order Value
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("orderValue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(price);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ps-0"
        >
          Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ getValue }) => <span>{getValue() as string} Products</span>,
  },
  {
    accessorKey: "expectedDelivery",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ps-0"
        >
          Expected Delivery
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ps-0"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.original.status;
      const statusColor =
        status === "Confirmed"
          ? "#1570EF"
          : status === "Delayed"
            ? "#F79009"
            : "#8a919e";

      return (
        <span style={{ color: statusColor, fontWeight: "bold" }}>{status}</span>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;

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
                navigator.clipboard.writeText(order.orderID.toString())
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

export type OrdersContextType = {
  columns: ColumnDef<OrdersType>[];
  data: OrdersType[];
  filters: FilterConfig[];
};

export const OrdersContext = createContext<OrdersContextType | null>(null);

const orders_data: OrdersType[] = [
  {
    product: "Tomato",
    orderValue: 468,
    quantity: "6",
    orderID: 2356,
    expectedDelivery: "25/10/24",
    status: "Confirmed",
  },
  {
    product: "Maggi",
    orderValue: 258,
    quantity: "4",
    orderID: 2458,
    expectedDelivery: "18/12/24",
    status: "Delayed",
  },
];

export const Route = createFileRoute("/orders/")({
  component: OrdersRoute,
});

// Helper function to generate filter options from data
const generateFilterOptions = (_data: OrdersType[]): FilterConfig[] => {
  // Define the static filter configurations for orders
  const statusFilter: FilterConfig = {
    column: "status",
    title: "Status",
    options: [
      { label: "Confirmed", value: "Confirmed" },
      { label: "Delayed", value: "Delayed" },
    ],
  };

  return [statusFilter];
};

function OrdersRoute() {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["orders"],
    queryFn: () => orders_data,
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

  const filters = generateFilterOptions(data || []);

  return (
    <>
      <OrdersContext.Provider value={{ columns, data: data || [], filters }}>
        <Orders />
      </OrdersContext.Provider>
    </>
  );
}
