import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import purchaseIcon from "../../assets/purchaseOverview/Purchase.png";
import costIcon from "../../assets/purchaseOverview/Cost.png";
import cancelIcon from "../../assets/purchaseOverview/Cancel.png";
import profitIcon from "../../assets/purchaseOverview/Profit.png";

export default function PurchaseOverview() {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            Purchase Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <div className="grid grid-cols-12 gap-4">
            {/* Purchase */}
            <div className="col-span-6 2xl:col-span-3 flex justify-around after-element-home section-odd">
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
                <div className="col-span-2">
                  <img src={purchaseIcon} alt="Logo" />
                </div>
                <div className="col-start-1 font-medium text-lg">82</div>
                <div className="col-start-2">Purchase</div>
              </div>
            </div>

            {/* Cost */}
            <div className="col-span-6 2xl:col-span-3 2xl:col-start-4 flex justify-around after-element-home section-even">
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
                <div className="col-span-2">
                  <img src={costIcon} alt="Logo" />
                </div>
                <div className="col-start-1 font-medium text-lg">₹ 13,573</div>
                <div className="col-start-2">Cost</div>
              </div>
            </div>

            {/* Cancel */}
            <div className="col-span-6 2xl:col-span-3 2xl:col-start-7 flex justify-around after-element-home section-odd">
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
                <div className="col-span-2">
                  <img src={cancelIcon} alt="Logo" />
                </div>
                <div className="col-start-1 font-medium text-lg">5</div>
                <div className="col-start-2">Cancel</div>
              </div>
            </div>

            {/* Return */}
            <div className="col-span-6 2xl:col-span-3 2xl:col-start-10 flex justify-around section-even">
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
                <div className="col-span-2">
                  <img src={profitIcon} alt="Logo" />
                </div>
                <div className="col-start-1 font-medium text-lg">₹ 17,432</div>
                <div className="col-start-2">Return</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
