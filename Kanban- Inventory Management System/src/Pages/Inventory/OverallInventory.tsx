import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OverallInventory() {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            Overall Inventory
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <div className="grid grid-cols-4 gap-4">
            {/* Categories */}
            <div className="col-span-2 2xl:col-span-1 flex flex-col after-element-inventory section-odd 2xl:w-[14rem]">
              <div className="text-[#1570EF] text-lg font-medium pb-2">
                Categories
              </div>
              <div className="font-medium text-lg text-gray-500 pb-2">14</div>
              <div className="text-gray-400 text-sm">Last 7 days</div>
            </div>

            {/* Total Products */}
            <div className="col-span-2 2xl:col-span-1 flex flex-col after-element-inventory section-even 2xl:w-[14rem]">
              <div className="text-[#E19133] text-lg font-medium pb-2">
                Total Products
              </div>
              <div className="flex justify-between items-center w-[10rem] sm:w-[14rem] md:w-[16rem]">
                <div>
                  <div className="font-medium text-lg text-gray-500 pb-2">
                    ₹ 18,300
                  </div>
                  <div className="text-gray-400 text-sm">Last 7 days</div>
                </div>
                <div>
                  <div>
                    <div className="font-medium text-lg text-gray-500 pb-2">
                      ₹ 25,000
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">Revenue</div>
                </div>
              </div>
            </div>

            {/* Top Selling */}
            <div className="col-span-2 2xl:col-span-1 flex flex-col after-element-inventory section-odd 2xl:w-[14rem]">
              <div className="text-[#845EBC] text-lg font-medium pb-2">
                Top Selling
              </div>
              <div className="flex justify-between items-center w-[10rem] sm:w-[14rem] md:w-[16rem]">
                <div>
                  <div className="font-medium text-lg text-gray-500 pb-2">
                    5
                  </div>
                  <div className="text-gray-400 text-sm">Last 7 days</div>
                </div>
                <div>
                  <div>
                    <div className="font-medium text-lg text-gray-500 pb-2">
                      ₹ 2,500
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">Cost</div>
                </div>
              </div>
            </div>

            {/* Low Stock */}
            <div className="col-span-2 2xl:col-span-1 flex flex-col section-even 2xl:w-[14rem]">
              <div className="text-[#F36960] text-lg font-medium pb-2">
                Low Stock
              </div>
              <div className="flex justify-between items-center w-[10rem] sm:w-[14rem] md:w-[16rem]">
                <div>
                  <div className="font-medium text-lg text-gray-500 pb-2">
                    12
                  </div>
                  <div className="text-gray-400 text-sm">Ordered</div>
                </div>
                <div>
                  <div>
                    <div className="font-medium text-lg text-gray-500 pb-2">
                      2
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">Not in stock</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
