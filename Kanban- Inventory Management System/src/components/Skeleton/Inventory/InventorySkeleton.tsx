import "../../../Pages/Inventory/inventory.css";
import OverallInventorySkeleton from "./OverallInventorySkeleton";
import ProductsTableSkeleton from "./ProductsTableSkeleton";

export default function InventorySkeleton() {
  return (
    <>
      <div className="page-components lg:ms-[20.1rem]">
        <div className="grid grid-cols-12 gap-4">
          <div className="stat-cards col-span-12 row-span-3">
            <OverallInventorySkeleton />
          </div>
          <div className="stat-cards col-span-12 row-span-3">
            <ProductsTableSkeleton />
          </div>
        </div>
      </div>
    </>
  );
}
