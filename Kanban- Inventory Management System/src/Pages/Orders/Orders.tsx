import "./orders.css";
import OrdersTable from "./OrdersTable";
import OverallOrders from "./OverallOrders";

export default function Orders() {
  return (
    <>
      <div className="page-components lg:ms-[20.1rem]">
        <div className="grid grid-cols-12 gap-4">
          <div className="stat-cards col-span-12 row-span-3">
            <OverallOrders />
          </div>
          <div className="stat-cards col-span-12 row-span-3">
            <OrdersTable />
          </div>
        </div>
      </div>
    </>
  );
}
