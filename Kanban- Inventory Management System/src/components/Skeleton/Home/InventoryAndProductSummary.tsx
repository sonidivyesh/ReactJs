import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InventoryAndProductSummary() {
  const { isContentLoading } = useLoadingSequence();

  if (!isContentLoading) return null;

  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            <Skeleton width={200} />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <div className="flex">
            {/* Quantity in Hand */}
            <div className="w-1/2 flex flex-col items-center gap-1 after-element-home">
              <div>
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-start-1 font-medium text-lg">
                <Skeleton width={80} />
              </div>
              <div className="col-start-1 text-center">
                <Skeleton width={80} />
              </div>
            </div>

            {/* To be Received */}
            <div className="w-1/2 flex flex-col items-center gap-1">
              <div>
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-start-1 font-medium text-lg">
                <Skeleton width={80} />
              </div>
              <div className="col-start-1 text-center">
                <Skeleton width={80} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
