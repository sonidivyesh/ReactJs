import React from "react";
import {
  Card as ReactCard,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

export default function Card() {
  return (
    <div>
      <ReactCard style={{ width: "18rem", boxShadow: "0 2px 10px" }}>
        <img
          alt="Sample"
          style={{ maxHeight: "200px", borderRadius: "10px 10px 0 0" }}
          src={props?.product?.thumbnail}
        />
        <CardBody>
          <CardTitle tag="h5">{props?.product?.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            $ {props?.product?.price}.00
          </CardSubtitle>
          <CardText>{props?.product?.description}</CardText>
          <Button className="w-100" color="danger">
            Buy
          </Button>
        </CardBody>
      </ReactCard>
    </div>
  );
}
