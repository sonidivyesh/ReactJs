import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import salesIcon from "../../assets/salesOverview/Sales.png";
import revenueIcon from "../../assets/salesOverview/Revenue.png";
import profitIcon from "../../assets/salesOverview/Profit.png";
import costIcon from "../../assets/salesOverview/Cost.png";

export default function SalesOverview() {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            Sales Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <div className="grid grid-cols-12 gap-4">
            {/* Sales */}
            <div className="col-span-6 2xl:col-span-3 flex justify-around after-element-home section-odd">
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
                <div className="col-span-2">
                  <img src={salesIcon} alt="Logo" />
                </div>
                <div className="col-start-1 font-medium text-lg">₹ 832</div>
                <div className="col-start-2">Sales</div>
              </div>
            </div>

            {/* Revenue */}
            <div className="col-span-6 2xl:col-span-3 flex justify-around after-element-home section-even">
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
                <div className="col-span-2">
                  <img src={revenueIcon} alt="Logo" />
                </div>
                <div className="col-start-1 font-medium text-lg">₹ 18,300</div>
                <div className="col-start-2">Revenue</div>
              </div>
            </div>

            {/* Profit */}
            <div className="col-span-6 2xl:col-span-3 flex justify-around after-element-home section-odd">
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
                <div className="col-span-2">
                  <img src={profitIcon} alt="Logo" />
                </div>
                <div className="col-start-1 font-medium text-lg">₹ 868</div>
                <div className="col-start-2">Profit</div>
              </div>
            </div>

            {/* Cost */}
            <div className="col-span-6 2xl:col-span-3 flex justify-around section-even">
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
                <div className="col-span-2">
                  <img src={costIcon} alt="Logo" />
                </div>
                <div className="col-start-1 font-medium text-lg">₹ 17,432</div>
                <div className="col-start-2">Cost</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
