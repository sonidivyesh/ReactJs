import "../../../Pages/Home/home.css";
import InventoryAndProductSummary from "./InventoryAndProductSummary";
import LowQuantityStockTableSkeleton from "./LowQuantityStockTableSkeleton";
import OrderSummarySkeleton from "./OrderSummarySkeleton";
import SalesAndPurchaseOverviewSkeleton from "./SalesAndPurchaseOverviewSkeleton";
import SalesAndPurchaseSkeleton from "./SalesAndPurchaseSkeleton";
import TopSellingStockTableSkeleton from "./TopSellingStockTableSkeleton";

export default function HomeSkeleton() {
  return (
    <>
      <div className="page-components lg:ms-[20.1rem]">
        <div className="grid grid-cols-12 gap-4">
          <div className="stat-cards col-span-12 md:col-span-7 row-span-3">
            <SalesAndPurchaseOverviewSkeleton />
          </div>

          <div className="stat-cards col-span-12 md:col-span-5 row-span-3">
            <InventoryAndProductSummary />
          </div>

          <div className="stat-cards col-span-12 md:col-span-7 row-span-3">
            <SalesAndPurchaseOverviewSkeleton />
          </div>

          <div className="stat-cards col-span-12 md:col-span-5 row-span-3">
            <InventoryAndProductSummary />
          </div>

          <div className="stat-cards col-span-12 md:col-span-7 row-span-3">
            <SalesAndPurchaseSkeleton />
          </div>

          <div className="stat-cards col-span-12 md:col-span-5 row-span-3">
            <OrderSummarySkeleton />
          </div>

          <div className="stat-cards col-span-12 md:col-span-7 row-span-3">
            <TopSellingStockTableSkeleton />
          </div>

          <div className="stat-cards col-span-12 md:col-span-5 row-span-3">
            <LowQuantityStockTableSkeleton />
          </div>
        </div>
      </div>
    </>
  );
}
