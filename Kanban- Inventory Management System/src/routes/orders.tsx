import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/orders")({
  component: OrdersLayout,
});

function OrdersLayout() {
  return <Outlet />;
}
