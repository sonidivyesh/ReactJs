import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Make sure to import the skeleton styles
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductsTableSkeleton() {
  const { isContentLoading } = useLoadingSequence();

  if (!isContentLoading) return null;
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
          <div className="flex justify-between">
            <div className="font-medium tracking-normal text-gray-700 text-xl">
              <Skeleton width={150} height={30} />
            </div>
            <div className="flex gap-3 items-center">
              {/* Add Product Button Skeleton */}
              <Skeleton width={120} height={40} />

              {/* Download Button Skeleton */}
              <Skeleton width={120} height={40} />
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      {/* Product Table Skeleton */}
      <CardContent className="p-3 pt-7">
        <div className="space-y-3">
          {/* Skeleton rows for the table */}
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} height={40} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
