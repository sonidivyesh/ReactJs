import { useLoadingSequence } from "./Hooks/useLoadingSequence";

import { Menu } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

import "./style.css";
import Sidebar from "./Sidebar";
import notificationIcon from "../assets/notificationIcon.png";
import userIcon from "../assets/avatarIcon.png";

import searchIcon from "../assets/searchIcon.png";
import NavbarSkeleton from "./Skeleton/Navbar/NavbarSkeleton";

export default function Navbar() {
  const { isInitialLoading } = useLoadingSequence();

  const [mobileHamburgerOpen, setMobileHamburgerOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileHamburgerOpen(!mobileHamburgerOpen);
  };
  return (
    <>
      {!isInitialLoading ? (
        <>
          <div className="navbar-section">
            <div className="navbar-hamburger">
              <button onClick={toggleSidebar}>
                <Menu />
              </button>
            </div>
            <div className="navbar-search">
              <Input placeholder="Search product, supplier, order" />
              <img src={searchIcon} alt="" />
            </div>
            <div className="navbar-icons">
              <img src={notificationIcon} alt="Logo" />
              <img src={userIcon} alt="Logo" />
            </div>
          </div>
          <Sidebar isOpen={mobileHamburgerOpen} toggleSidebar={toggleSidebar} />
        </>
      ) : (
        <NavbarSkeleton />
      )}
    </>
  );
}
