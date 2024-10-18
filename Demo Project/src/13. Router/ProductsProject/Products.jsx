import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  let [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);
  console.log("products: ", products);
  return (
    <>
      <h1 className="fs-2 text-center mt-5">Products</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((e, i) => {
                return (
                  <tr key={e?.id}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <img src={e?.image} style={{ height: "50px" }} alt="" />
                    </td>
                    <td>{e?.title}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => navigate(`/products/${e?.id}`)}
                      >
                        <Eye />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
