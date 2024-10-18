import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function BikeServices() {
  const navigate = useNavigate();
  const data = useParams(); // useParams function brings data from another page to current page to make route dynamic
  return (
    <>
      <h1>BikeServices</h1>
      <h2>Bike type is {data.bike_name}</h2>

      <Button color="danger" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>
    </>
  );
}
