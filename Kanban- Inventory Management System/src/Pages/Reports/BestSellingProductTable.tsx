import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ProductsContext } from "@/routes/reports.index";

import Table from "../../components/Table";

export default function BestSellingProductTable() {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    return <div>Error: Reports - products context is not available</div>;
  }

  const { columns, data } = productsContext;

  return (
    <>
      <Card className="border-none shadow-none best-selling-product-table">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            <div className="flex justify-between">
              <div className="font-medium tracking-normal text-gray-700 text-xl">
                Best Selling Product
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
