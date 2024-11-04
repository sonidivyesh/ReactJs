import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Overview() {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <div>
            {/* row 1 */}
            <div className="grid grid-cols-3 gap-4 mb-3">
              {/* Total Profit */}
              <div className="col-span-1 flex flex-col">
                <div className="font-medium text-lg text-gray-500 pb-2">
                  ₹ 21,190
                </div>
                <div className="text-[#555555] text-md">Total Profit</div>
              </div>
              {/* Revenue */}
              <div className="col-span-1 flex flex-col">
                <div className="font-medium text-lg text-gray-500 pb-2">
                  ₹ 18,300
                </div>
                <div className="text-[#DBA362] text-md">Revenue</div>
              </div>
              {/* Sales */}
              <div className="col-span-1 flex flex-col">
                <div className="font-medium text-lg text-gray-500 pb-2">
                  ₹ 17,432
                </div>
                <div className="text-[#845EBC] text-md">Sales</div>
              </div>
            </div>

            <hr />

            {/* row 2 */}
            <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4 mt-3">
              {/* Net Purchase Value */}
              <div className="col-span-1 flex flex-col">
                <div className="font-medium text-lg text-gray-500 pb-2">
                  ₹ 1,17,432
                </div>
                <div className="text-gray-400 text-md">Net Purchase Value</div>
              </div>
              {/* Net Sales Value */}
              <div className="col-span-1 flex flex-col">
                <div className="font-medium text-lg text-gray-500 pb-2">
                  ₹ 80,432
                </div>
                <div className="text-gray-400 text-md">Net Sales Value</div>
              </div>
              {/* MoM Profit */}
              <div className="col-span-1 flex flex-col">
                <div className="font-medium text-lg text-gray-500 pb-2">
                  ₹ 30,432
                </div>
                <div className="text-gray-400 text-md">MoM Profit</div>
              </div>
              {/* YoY Profit */}
              <div className="col-span-1 flex flex-col">
                <div className="font-medium text-lg text-gray-500 pb-2">
                  ₹ 1,10,432
                </div>
                <div className="text-gray-400 text-md">YoY Profit</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
