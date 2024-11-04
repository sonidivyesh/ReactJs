import { useContext, useState } from "react";
import { History, ListFilter, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Modal from "../../components/Modal/Modal";
import { DataTable } from "../../components/DataTable/data-table";

import { OrdersContext } from "@/routes/orders.index";
import { modalConfigs } from "../../components/Modal/modalConfigs";

export default function OrdersTable() {
  const [isModalOpen, setModalOpen] = useState(false);
  const ordersContext = useContext(OrdersContext);

  if (!ordersContext) {
    return <div>Error: Orders context is not available</div>;
  }

  const { columns, data, filters } = ordersContext;

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            <div className="flex justify-between">
              <div className="font-medium tracking-normal text-gray-700 text-xl">
                Orders
              </div>
              <div className="flex gap-3 items-center">
                {/* Add product */}

                <Button size="sm" className="h-10 gap-1" onClick={toggleModal}>
                  <PlusCircle className="h-3.5 w-3.5 sm:hidden" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Order
                  </span>
                </Button>

                {/* Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 gap-3 focus-visible:ring-0 focus-visible:ring-offset-0 px-4"
                    >
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Download */}
                <Button size="sm" variant="outline" className="h-10 gap-1 px-4">
                  <History className="h-3.5 w-3.5 sm:hidden" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Order History
                  </span>
                </Button>
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        {/* Product Table */}
        <CardContent className="p-3 pt-7">
          <DataTable columns={columns} data={data} filters={filters} />
        </CardContent>
      </Card>
      <Modal
        open={isModalOpen}
        onOpenChange={toggleModal}
        mode="create"
        config={modalConfigs["orders"]}
      />
    </>
  );
}
