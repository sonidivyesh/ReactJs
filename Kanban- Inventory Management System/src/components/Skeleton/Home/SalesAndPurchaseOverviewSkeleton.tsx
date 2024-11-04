import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesAndPurchaseOverviewSkeleton() {
  const { isContentLoading } = useLoadingSequence();

  if (!isContentLoading) return null;

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
          <Skeleton width={200} />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-7">
        <div className="grid grid-cols-12 gap-4">
          {/* Skeleton for Sales */}
          <div className="col-span-6 2xl:col-span-3 flex justify-around after-element-home section-odd">
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
              <div className="col-span-2">
                <Skeleton circle={true} width={50} height={50} />
              </div>
              <div className="col-start-1 font-medium text-lg">
                <Skeleton width={80} />
              </div>
              <div className="col-start-2">
                <Skeleton width={50} />
              </div>
            </div>
          </div>

          {/* Skeleton for Revenue */}
          <div className="col-span-6 2xl:col-span-3 flex justify-around after-element-home section-even">
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
              <div className="col-span-2">
                <Skeleton circle={true} width={50} height={50} />
              </div>
              <div className="col-start-1 font-medium text-lg">
                <Skeleton width={80} />
              </div>
              <div className="col-start-2">
                <Skeleton width={50} />
              </div>
            </div>
          </div>

          {/* Skeleton for Profit */}
          <div className="col-span-6 2xl:col-span-3 flex justify-around after-element-home section-odd">
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
              <div className="col-span-2">
                <Skeleton circle={true} width={50} height={50} />
              </div>
              <div className="col-start-1 font-medium text-lg">
                <Skeleton width={80} />
              </div>
              <div className="col-start-2">
                <Skeleton width={50} />
              </div>
            </div>
          </div>

          {/* Skeleton for Cost */}
          <div className="col-span-6 2xl:col-span-3 flex justify-around section-even">
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center items-center w-full">
              <div className="col-span-2">
                <Skeleton circle={true} width={50} height={50} />
              </div>
              <div className="col-start-1 font-medium text-lg">
                <Skeleton width={80} />
              </div>
              <div className="col-start-2">
                <Skeleton width={50} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
