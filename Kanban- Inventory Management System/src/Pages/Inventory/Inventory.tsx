import { lazy, Suspense } from "react";
import { useLoadingSequence } from "../../components/Hooks/useLoadingSequence";

import "./inventory.css";
import InventorySkeleton from "@/components/Skeleton/Inventory/InventorySkeleton";

const OverallInventory = lazy(() => import("./OverallInventory"));
const ProductsTable = lazy(() => import("./ProductsTable"));

export default function Inventory() {
  const { isInitialLoading } = useLoadingSequence();
  return (
    <>
      {!isInitialLoading ? (
        <div className="page-components lg:ms-[20.1rem]">
          <div className="grid grid-cols-12 gap-4">
            <Suspense fallback={null}>
              <div className="stat-cards col-span-12 row-span-3">
                <OverallInventory />
              </div>
              <div className="stat-cards col-span-12 row-span-3">
                <ProductsTable />
              </div>
            </Suspense>
          </div>
        </div>
      ) : (
        <InventorySkeleton />
      )}
    </>
  );
}
