import React, { useState } from "react";
import "./Index.css";
import Card from "./Card";
import Data from "./data.json";
// console.log(Data);

export default function Body() {
  let [data, setData] = useState(Data);
  return (
    <div className="body">
      <h2>Products</h2>
      <div className="grid">
        {data?.map((e) => {
          return <Card products={e} key={e?._id} />;
        })}
        ;
      </div>
    </div>
  );
}
