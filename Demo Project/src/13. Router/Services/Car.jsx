import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Car() {
  const navigate = useNavigate();

  return (
    <>
      <h3>Car</h3>
      <Button color="danger" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>
    </>
  );
}
