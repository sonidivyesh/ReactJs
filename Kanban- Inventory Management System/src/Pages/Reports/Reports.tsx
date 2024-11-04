import "./reports.css";
import BestSellingCategoryTable from "./BestSellingCategoryTable";
import BestSellingProductTable from "./BestSellingProductTable";
import Overview from "./Overview";
import ProfitRevenue from "./ProfitRevenue";

export default function Reports() {
  return (
    <>
      <div className="page-components lg:ms-[20.1rem]">
        <div className="grid grid-cols-12 gap-4">
          <div className="stat-cards col-span-12 md:col-span-6 row-span-3">
            <Overview />
          </div>
          <div className="stat-cards col-span-12 md:col-span-6 row-span-3">
            <BestSellingCategoryTable />
          </div>
          <div className="stat-cards col-span-12 row-span-3">
            <ProfitRevenue />
          </div>
          <div className="stat-cards col-span-12 row-span-3">
            <BestSellingProductTable />
          </div>
        </div>
      </div>
    </>
  );
}
