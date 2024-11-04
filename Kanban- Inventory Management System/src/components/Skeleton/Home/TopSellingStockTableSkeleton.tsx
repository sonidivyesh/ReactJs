import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button } from "@/components/ui/button";
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TopSellingStockTableSkeleton() {
  const { isContentLoading } = useLoadingSequence();

  if (!isContentLoading) return null;
  return (
    <>
      <Card className="border-none shadow-none top-selling-stock-table">
        <CardHeader className="p-0">
          <CardTitle>
            <div className="flex justify-between">
              <div className="font-medium tracking-normal text-gray-700 text-xl">
                <Skeleton width={150} />
              </div>
              <Button className="bg-transparent hover:bg-transparent font-medium text-[#1570ef] text-lg">
                <Skeleton width={60} />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          {/* Skeleton for table rows */}
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} height={25} width="100%" />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
