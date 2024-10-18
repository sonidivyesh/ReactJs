import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <div>
        <Button color="danger" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
      </div>
    </>
  );
}
