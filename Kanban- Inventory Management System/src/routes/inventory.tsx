import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/inventory")({
  component: InventoryLayout,
});

function InventoryLayout() {
  return <Outlet />;
}
