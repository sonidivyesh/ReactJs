import { lazy, Suspense } from "react";
import { useLoadingSequence } from "../../components/Hooks/useLoadingSequence";

import "./home.css";
import HomeSkeleton from "../../components/Skeleton/Home/HomeSkeleton";

const SalesOverview = lazy(() => import("./SalesOverview"));
const InventorySummary = lazy(() => import("./InventorySummary"));
const PurchaseOverview = lazy(() => import("./PurchaseOverview"));
const ProductSummary = lazy(() => import("./ProductSummary"));
const SalesAndPurchase = lazy(() => import("./SalesAndPurchase"));
const OrderSummary = lazy(() => import("./OrderSummary"));
const TopSellingStockTable = lazy(() => import("./TopSellingStockTable"));
const LowQuantityStockTable = lazy(() => import("./LowQuantityStockTable"));

export default function Home() {
  const { isInitialLoading } = useLoadingSequence();

  return (
    <>
      {!isInitialLoading ? (
        <div className="page-components lg:ms-[20.1rem]">
          <div className="grid grid-cols-12 gap-4">
            <Suspense fallback={null}>
              <div className="stat-cards col-span-12 md:col-span-7 row-span-3">
                <SalesOverview />
              </div>

              <div className="stat-cards col-span-12 md:col-span-5 row-span-3">
                <InventorySummary />
              </div>

              <div className="stat-cards col-span-12 md:col-span-7 row-span-3">
                <PurchaseOverview />
              </div>

              <div className="stat-cards col-span-12 md:col-span-5 row-span-3">
                <ProductSummary />
              </div>

              <div className="stat-cards col-span-12 md:col-span-7 row-span-3">
                <SalesAndPurchase />
              </div>

              <div className="stat-cards col-span-12 md:col-span-5 row-span-3">
                <OrderSummary />
              </div>

              <div className="stat-cards col-span-12 md:col-span-7 row-span-3">
                <TopSellingStockTable />
              </div>

              <div className="stat-cards col-span-12 md:col-span-5 row-span-3">
                <LowQuantityStockTable />
              </div>
            </Suspense>
          </div>
        </div>
      ) : (
        <HomeSkeleton />
      )}
    </>
  );
}
