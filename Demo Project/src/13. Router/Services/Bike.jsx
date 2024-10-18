import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Bike() {
  const navigate = useNavigate();

  return (
    <>
      <h3>Bike</h3>
      <li role="button" onClick={() => navigate("splender")}>
        Splender
      </li>
      <hr />
      <li role="button" onClick={() => navigate("passion_pro")}>
        Passion Pro
      </li>
      <hr />
      <li role="button" onClick={() => navigate("discover")}>
        Discover
      </li>
      <hr />
      <li role="button" onClick={() => navigate("fz5")}>
        FZ5
      </li>
      <hr />
      <li role="button" onClick={() => navigate("pulsur")}>
        Pulsur
      </li>
      <hr />
      <Button color="danger" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>
    </>
  );
}
