import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/suppliers")({
  component: SuppliersLayout,
});

function SuppliersLayout() {
  return <Outlet />;
}
