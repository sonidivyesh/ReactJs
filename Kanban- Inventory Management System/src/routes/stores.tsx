import { createFileRoute } from "@tanstack/react-router";

import Stores from "@/Pages/ManageStore/Stores";

export const Route = createFileRoute("/stores")({
  component: StoresLayout,
});

function StoresLayout() {
  return <Stores />;
}
