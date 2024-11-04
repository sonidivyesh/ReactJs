import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/reports")({
  component: ReportsLayoout,
});

function ReportsLayoout() {
  return <Outlet />;
}
