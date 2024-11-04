import { lazy, Suspense } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import Loader from "@/components/Loader";

const Navbar = lazy(() => import("@/components/Navbar"));

export const Route = createRootRoute({
  component: () => {
    const { isInitialLoading } = useLoadingSequence();

    return (
      <>
        {!isInitialLoading ? (
          <Suspense fallback={null}>
            <div className="home-section">
              <Navbar />
              <Outlet />
              <TanStackRouterDevtools initialIsOpen={false} />
            </div>
          </Suspense>
        ) : (
          <Loader />
        )}
      </>
    );
  },
});
