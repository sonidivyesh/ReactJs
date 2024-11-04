import { useState } from "react";
import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Sidebar from "@/components/Sidebar";

export default function NavbarSkeleton() {
  const { isContentLoading } = useLoadingSequence();

  if (!isContentLoading) return null;

  const [mobileHamburgerOpen, setMobileHamburgerOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileHamburgerOpen(!mobileHamburgerOpen);
  };
  return (
    <>
      <div className="navbar-section">
        {/* Hamburger Icon */}
        <div className="navbar-hamburger">
          <Skeleton circle={true} height={30} width={30} />
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <Skeleton width={200} height={30} />
        </div>

        {/* Notification and User Icons */}
        <div className="navbar-icons">
          <Skeleton circle={true} height={30} width={30} />
          <Skeleton circle={true} height={40} width={40} />
        </div>
      </div>
      <Sidebar isOpen={mobileHamburgerOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
