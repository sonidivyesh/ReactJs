import { Button } from "reactstrap";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Services</h1>
      <div className="d-flex gap-4 ">
        <Button color="danger" onClick={() => navigate("car")}>
          Car
        </Button>
        <Button color="danger" onClick={() => navigate("bike")}>
          Bike
        </Button>
      </div>
      <Outlet />
    </>
  );
}
