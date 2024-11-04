import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { LowQuantityStockContext } from "@/routes";

import Table from "../../components/Table";

export default function LowQuantityStockTable() {
  const lowQuantityContext = useContext(LowQuantityStockContext);

  if (!lowQuantityContext) {
    return <div>Error: Low quantity stock context is not available</div>;
  }

  const { columns, data } = lowQuantityContext;
  return (
    <>
      <Card className="border-none shadow-none low-quantity-stock-table">
        <CardHeader className="p-0">
          <CardTitle>
            <div className="flex justify-between">
              <div className="font-medium tracking-normal text-gray-700 text-xl">
                Low Quantity Stock
              </div>
              <Button className="bg-transparent hover:bg-transparent font-medium text-[#1570ef] text-lg">
                See All
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <Table columns={columns} data={data} />
        </CardContent>
      </Card>
    </>
  );
}
