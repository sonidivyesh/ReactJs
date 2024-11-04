import StoreCards from "./StoreCards";

export default function Stores() {
  return (
    <>
      <div className="page-components lg:ms-[20.1rem]">
        <div className="grid grid-cols-12 gap-4">
          <div className="stat-cards col-span-12 row-span-3">
            <StoreCards />
          </div>
        </div>
      </div>
    </>
  );
}
