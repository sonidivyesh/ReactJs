import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export default function UseEffectProject() {
  let [count, setCount] = useState(1);
  let [amount, setAmount] = useState(1);
  let [point, setPoint] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      toast.info("Hello Soni!");
    }, 2000);
  }, []);

  useEffect(() => {
    if (count % 3 === 0) {
      toast.success("Count is divided by 3");
    }
  }, [count]);

  useEffect(() => {
    if (amount % 5 === 0) {
      setPoint(++point);
      toast.error("Point +1");
    }
  }, [amount]);

  useEffect(() => {
    if (count % 5 === 0 || amount % 5 === 0) {
      setPoint(point + 5);
    }
  }, [count, amount]);

  return (
    <div>
      <h1>Count is : {count}</h1>
      <Button color="primary" onClick={() => setCount(++count)}>
        Inc Count
      </Button>
      <hr />
      <h1>Amount is : {amount}</h1>
      <Button color="primary" onClick={() => setAmount(++amount)}>
        Inc Amount
      </Button>
      <hr />
      <h1>Point is : {point}</h1>
    </div>
  );
}
