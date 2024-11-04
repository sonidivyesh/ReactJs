import SuppliersTable from "./SuppliersTable";

export default function Suppliers() {
  return (
    <>
      <div className="page-components lg:ms-[20.1rem]">
        <div className="stat-cards col-span-12 row-span-3">
          <SuppliersTable />
        </div>
      </div>
    </>
  );
}
