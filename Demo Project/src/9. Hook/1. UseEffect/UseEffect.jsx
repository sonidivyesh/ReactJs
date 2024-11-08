import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState(0);

  useEffect(() => {
    console.log("=============== without dependency =============>");
  });

  useEffect(() => {
    console.log("=============== with [] dependency =============>");
  }, []);

  useEffect(() => {
    console.log("=============== with [count] dependency =============>");
  }, [count]);

  useEffect(() => {
    console.log("=============== with [amount] dependency =============>");
  }, [amount]);

  useEffect(() => {
    console.log(
      "=============== with [count, amount] dependency =============>"
    );
  }, [count, amount]);

  return (
    <div>
      <h1>Count is : {count}</h1>
      <Button color="primary" onClick={() => setCount(count + 1)}>
        Inc Count
      </Button>
      <hr />
      <h1>Amount is : {amount}</h1>
      <Button color="primary" onClick={() => setAmount(++amount)}>
        Inc Amount
      </Button>
    </div>
  );
}
