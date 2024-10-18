import axios from "axios";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function ProductDetails() {
  let [productDetails, setProductDetails] = useState({});

  let { productId } = useParams();
  //   let productData = useParams();
  console.log("productId: ", productId);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${productId}`,
    })
      .then((response) => {
        // console.log("response: ", response?.data);
        setProductDetails(response?.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);
  console.log("productDetails: ", productDetails);
  return (
    <>
      <h1 className="fs-2 text-center mt-5">ProductDetails</h1>
      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-md-5">
            {
              <img
                src={productDetails?.image}
                style={{ height: "15vw" }}
                alt=""
              />
            }
          </div>
          <div className="col-md-5">
            <h4>{productDetails.title}</h4>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-md-2">
          <Button className="w-100" color="danger" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </Button>
        </div>
      </div>
    </>
  );
}
