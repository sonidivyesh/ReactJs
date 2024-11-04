import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OverallInventorySkeleton() {
  const { isContentLoading } = useLoadingSequence();

  if (!isContentLoading) return null;
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle>
            <Skeleton width={160} />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <div className="grid grid-cols-4 gap-4">
            {/* Categories */}
            <div className="col-span-2 2xl:col-span-1 flex flex-col after-element-inventory section-odd 2xl:w-[14rem]">
              <div className="text-[#1570EF] text-lg font-medium pb-2">
                <Skeleton width={130} />
              </div>
              <div className="font-medium text-lg text-gray-500 pb-2">
                <Skeleton width={100} />
              </div>
              <div className="text-gray-400 text-sm">
                <Skeleton width={80} />
              </div>
            </div>

            {/* Total Products */}
            <div className="col-span-2 2xl:col-span-1 flex flex-col after-element-inventory section-even 2xl:w-[14rem]">
              <div className="text-[#E19133] text-lg font-medium pb-2">
                <Skeleton width={130} />
              </div>
              <div className="flex justify-between items-center w-[10rem] sm:w-[14rem] md:w-[16rem]">
                <div>
                  <div className="font-medium text-lg text-gray-500 pb-2">
                    <Skeleton width={100} />
                  </div>
                  <div className="text-gray-400 text-sm">
                    <Skeleton width={80} />
                  </div>
                </div>
                <div>
                  <div>
                    <div className="font-medium text-lg text-gray-500 pb-2">
                      <Skeleton width={100} />
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    <Skeleton width={80} />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Selling */}
            <div className="col-span-2 2xl:col-span-1 flex flex-col after-element-inventory section-odd 2xl:w-[14rem]">
              <div className="text-[#845EBC] text-lg font-medium pb-2">
                <Skeleton width={130} />
              </div>
              <div className="flex justify-between items-center w-[10rem] sm:w-[14rem] md:w-[16rem]">
                <div>
                  <div className="font-medium text-lg text-gray-500 pb-2">
                    <Skeleton width={100} />
                  </div>
                  <div className="text-gray-400 text-sm">
                    <Skeleton width={80} />
                  </div>
                </div>
                <div>
                  <div>
                    <div className="font-medium text-lg text-gray-500 pb-2">
                      <Skeleton width={100} />
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    <Skeleton width={80} />
                  </div>
                </div>
              </div>
            </div>

            {/* Low Stock */}
            <div className="col-span-2 2xl:col-span-1 flex flex-col section-even 2xl:w-[14rem]">
              <div className="text-[#F36960] text-lg font-medium pb-2">
                <Skeleton width={130} />
              </div>
              <div className="flex justify-between items-center w-[10rem] sm:w-[14rem] md:w-[16rem]">
                <div>
                  <div className="font-medium text-lg text-gray-500 pb-2">
                    <Skeleton width={100} />
                  </div>
                  <div className="text-gray-400 text-sm">
                    <Skeleton width={80} />
                  </div>
                </div>
                <div>
                  <div>
                    <div className="font-medium text-lg text-gray-500 pb-2">
                      <Skeleton width={100} />
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    <Skeleton width={80} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
