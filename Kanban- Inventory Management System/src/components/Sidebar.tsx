import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";

import "./style.css";
import kanbanSidebarLogo from "../assets/kanbanSidebarLogo.png";
import homeIcon from "../assets/homeIcon.png";
import inventoryIcon from "../assets/inventoryIcon.png";
import reportsIcon from "../assets/reportsIcon.png";
import suppliersIcon from "../assets/suppliersIcon.png";
import ordersIcon from "../assets/ordersIcon.png";
import storeIcon from "../assets/storeIcon.png";
import settingIcon from "../assets/settingIcon.png";
import logoutIcon from "../assets/logoutIcon.png";
import SidebarSkeleton from "./Skeleton/Sidebar/SidebarSkeleton";

type SidebarProp = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProp) {
  const { isInitialLoading } = useLoadingSequence();

  return (
    <>
      {!isInitialLoading ? (
        <div className={`sidebar-section ${isOpen ? "open" : ""}`}>
          {/* Header - Kanban Logo */}
          <div className="sidebar-header">
            <img src={kanbanSidebarLogo} alt="Logo" />
            <div className="sidebar-close-btn">
              <span role="button" onClick={toggleSidebar}>
                <X />
              </span>
            </div>
          </div>

          {/* Menu */}
          <div className="sidebar-menu">
            <ul>
              <li>
                <div className="nav-menu">
                  <img src={homeIcon} alt="Logo" />
                  <Link to={"/"}>Dashboard</Link>
                </div>
              </li>
              <li>
                <div className="nav-menu">
                  <img src={inventoryIcon} alt="Logo" />
                  <Link to={"/inventory"}>Inventory</Link>
                </div>
              </li>
              <li>
                <div className="nav-menu">
                  <img src={reportsIcon} alt="Logo" />
                  <Link to={"/reports"}>Reports</Link>
                </div>
              </li>
              <li>
                <div className="nav-menu">
                  <img src={suppliersIcon} alt="Logo" />
                  <Link to={"/suppliers"}>Suppliers</Link>
                </div>
              </li>
              <li>
                <div className="nav-menu">
                  <img src={ordersIcon} alt="Logo" />
                  <Link to={"/orders"}>Orders</Link>
                </div>
              </li>
              <li>
                <div className="nav-menu">
                  <img src={storeIcon} alt="Logo" />
                  <Link to={"/stores"}>Manage Store</Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="sidebar-footer">
            <ul>
              <li>
                <div className="nav-menu">
                  <img src={settingIcon} alt="Logo" />
                  <a href="#">Setting</a>
                </div>
              </li>
              <li>
                <div className="nav-menu">
                  <img src={logoutIcon} alt="Logo" />
                  <a href="#">Log Out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <SidebarSkeleton />
      )}
    </>
  );
}
