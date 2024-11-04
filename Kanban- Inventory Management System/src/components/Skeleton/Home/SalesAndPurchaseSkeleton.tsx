import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesAndPurchaseSkeleton() {
  const { isContentLoading } = useLoadingSequence();

  if (!isContentLoading) return null;

  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            <Skeleton width={150} />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          {/* Skeleton chart bars */}
          <div className="grid grid-cols-6 gap-2">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} height={150} width="100%" />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
