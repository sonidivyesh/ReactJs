import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderSummarySkeleton() {
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
          {/* Skeleton line chart */}
          <Skeleton height={200} width="100%" />
        </CardContent>
      </Card>
    </>
  );
}
