import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/app";

export default function AmountComp() {
  const dispatch = useDispatch();

  let data = useSelector((store) => {
    return store.amountSlice;
  });

  return (
    <div className="bg-success p-3 border-bottom">
      <h1 className="mb-0 text-white">Amount is {data.amount}</h1>
      <p className="text-white mb-0">AmountComp</p>
    </div>
  );
}
