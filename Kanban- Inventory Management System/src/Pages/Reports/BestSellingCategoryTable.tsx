import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { CategoriesContext } from "@/routes/reports.index";

import Table from "../../components/Table";

export default function BestSellingCategoryTable() {
  const categoriesContext = useContext(CategoriesContext);

  if (!categoriesContext) {
    return <div>Error: Reports - categories context is not available</div>;
  }

  const { columns, data } = categoriesContext;

  return (
    <>
      <Card className="border-none shadow-none best-selling-category-table">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            <div className="flex justify-between">
              <div className="font-medium tracking-normal text-gray-700 text-xl">
                Best Selling Category
              </div>
              <Button className="bg-transparent hover:bg-transparent font-medium text-[#1570ef] text-lg">
                See All
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <Table columns={columns} data={data} />
        </CardContent>
      </Card>
    </>
  );
}
