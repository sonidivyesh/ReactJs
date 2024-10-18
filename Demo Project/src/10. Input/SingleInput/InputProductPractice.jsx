import React, { useState } from "react";
import {
  Card as ReactCard,
  CardBody,
  CardTitle,
  Input,
  Button,
} from "reactstrap";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export default function InputProductPractice() {
  let [product, setProduct] = useState("");
  let [productArr, setProductArr] = useState([]);
  let [index, setIndex] = useState(null);

  const getData = (ele) => {
    setProduct(ele?.target?.value);
  };

  const handleKeyPressEvents = (ele) => {
    if (ele?.key === "Enter") {
      {
        index ? updateProduct() : addData();
      }
    }
  };

  const addData = () => {
    if (product !== "") {
      if (productArr.includes(product)) {
        toast.warn("Product already exist!");
      } else {
        setProductArr([...productArr, product]);
        setProduct("");
      }
    } else {
      toast.warn("Please Add Product");
    }
  };

  const deleteData = (index) => {
    let filtereData = productArr.filter((e, i) => i !== index);
    console.log("filter Data : ", filtereData);
    setProductArr(filtereData);
  };

  const updateHandler = (ele, index) => {
    setProduct(ele);
    setIndex(index);
  };

  const updateProduct = () => {
    // index=>inde , Array=productArr , newData=>product

    if (product != "") {
      if (productArr.includes(product)) {
        toast.warn("Product Name Must be Different");
      } else {
        productArr.splice(index, 1, product);
        setProduct([...productArr]);
        setProduct("");
        setIndex(null);
      }
    } else {
      toast.warn("Please Add Product");
    }
  };

  return (
    <div className="d-flex justify-content-center pt-5">
      <ReactCard
        style={{
          width: "40rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h4" className="text-danger">
            Product Input Form
          </CardTitle>

          <h5 className="text-black-50 mt-4 mb-0">Product : {product}</h5>

          <div className="d-flex align-items-center">
            <Input
              className="mt-3 mb-3 rounded-end-0 "
              placeholder="Enter your product here"
              onChange={(e) => getData(e)}
              value={product}
              onKeyUp={(e) => handleKeyPressEvents(e)}
            ></Input>

            {/* index => null/0/undefined/false */}
            {index || index === 0 ? (
              <Button
                className="rounded-start-0"
                color="primary"
                onClick={() => updateProduct()}
              >
                Update
              </Button>
            ) : (
              <Button
                className="rounded-start-0"
                color="primary"
                onClick={() => addData()}
              >
                <Plus />
              </Button>
            )}
          </div>

          {productArr.map((e, i) => {
            return (
              <>
                <ReactCard
                  style={{
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  <CardBody className="p-2">
                    <div>
                      <div className="d-flex justify-content-between align-items-center ">
                        <li key={i}>
                          {i + 1}. {e}
                        </li>
                        <div className="d-flex align-items-center gap-3 ">
                          <Pencil
                            role="button"
                            size={20}
                            color="#0d6efd"
                            onClick={() => updateHandler(e, i)}
                          />
                          <Trash2
                            role="button"
                            size={20}
                            color="#ff0000"
                            onClick={() => deleteData(i)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </ReactCard>
              </>
            );
          })}
        </CardBody>
      </ReactCard>
    </div>
  );
}
