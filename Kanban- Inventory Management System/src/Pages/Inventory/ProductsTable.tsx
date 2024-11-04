import { useContext, useState } from "react";
import { File, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Modal from "../../components/Modal/Modal";
import { DataTable } from "../../components/DataTable/data-table";
import { InventoryContext } from "@/routes/inventory.index";
import { modalConfigs } from "../../components/Modal/modalConfigs";

export default function ProductsTable() {
  const [isModalOpen, setModalOpen] = useState(false);
  const inventoryContext = useContext(InventoryContext);

  if (!inventoryContext) {
    return <div>Error: Inventory context is not available</div>;
  }

  const { columns, data, filters } = inventoryContext;

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
                Products
              </div>
              <div className="flex gap-3 items-center">
                {/* Add product */}

                <Button
                  size="sm"
                  className="h-10 w-10 sm:w-full gap-1"
                  onClick={toggleModal}
                >
                  <PlusCircle className="h-3.5 w-3.5 sm:mr-1" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>

                {/* Download */}
                <Button
                  size="sm"
                  variant="outline"
                  className="h-10 w-10 sm:w-full gap-1"
                >
                  <File className="h-3.5 w-3.5 sm:mr-1" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Download
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
        config={modalConfigs["products"]}
      />
    </>
  );
}
