import React from "react";
import DisplayComp from "./DisplayComp";
import IncrementComp from "./IncrementComp";
import DecrementComp from "./decrementComp";
import MultiplyCount from "./MultiplyCount";
import AmountComp from "./AmountComp";

export default function Home() {
  return (
    <div className="row justify-content-center p-5">
      <div className="w-25 text-center">
        <DisplayComp />
        <IncrementComp />
        <DecrementComp />
        <MultiplyCount />
        <AmountComp />
      </div>
    </div>
  );
}
