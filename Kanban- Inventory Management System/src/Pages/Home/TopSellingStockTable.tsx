import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { TopSellingStockContext } from "@/routes";

import Table from "../../components/Table";

export default function TopSellingStockTable() {
  const topSellingStockContext = useContext(TopSellingStockContext);

  if (!topSellingStockContext) {
    return <div>Error: Top selling stock context is not available</div>;
  }

  const { columns, data } = topSellingStockContext;

  return (
    <>
      <Card className="border-none shadow-none top-selling-stock-table">
        <CardHeader className="p-0">
          <CardTitle>
            <div className="flex justify-between">
              <div className="font-medium tracking-normal text-gray-700 text-xl">
                Top Selling Stock
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
