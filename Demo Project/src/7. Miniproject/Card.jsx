import React from "react";
import "./Index.css";
import {
  Card as ReactCard,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle,
} from "reactstrap";

export default function Card({ products }) {
  return (
    <div>
      <ReactCard
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={products?.thumbnail} style={{ height: 200 }} />
        <CardBody>
          <CardTitle tag="h5" className="text-limit-1">
            {products?.title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            ₹{products?.price}/-
          </CardSubtitle>
          <CardText className="text-limit-2">{products?.description}</CardText>
          <Button color="dark" className="w-100">
            Buy
          </Button>
        </CardBody>
      </ReactCard>
    </div>
  );
}
