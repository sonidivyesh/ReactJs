import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import suppliersIcon from "../../assets/productSummary/Suppliers.png";
import categoriesIcon from "../../assets/productSummary/Categories.png";

export default function ProductSummary() {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            Product Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <div className="flex flex-row">
            {/* Number of Suppliers */}
            <div className="w-1/2 flex flex-col items-center gap-1 after-element-home">
              <div>
                <img src={suppliersIcon} alt="Logo" />
              </div>
              <div className="col-start-1 font-medium text-lg">31</div>
              <div className="col-start-1 text-center">Number of Suppliers</div>
            </div>

            {/* Number of Categories */}
            <div className="w-1/2 flex flex-col items-center gap-1">
              <div>
                <img src={categoriesIcon} alt="Logo" />
              </div>
              <div className="col-start-1 font-medium text-lg">21</div>
              <div className="col-start-1 text-center">
                Number of Categories
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
