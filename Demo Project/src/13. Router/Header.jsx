import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="d-flex gap-5 justify-content-center mt-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
      </div>
    </>
  );
}
