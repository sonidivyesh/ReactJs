import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCount } from "./redux/features/counterSlice";
import { RefreshCcw } from "lucide-react";

export default function DisplayComp() {
  let dispatch = useDispatch();

  let data = useSelector((store) => {
    return store.counterSlice;
  });

  return (
    <div className="bg-success p-3">
      <h1 className="text-white mb-0">Count is {data.count}</h1>
      <p className="text-white mb-0">DisplayComp</p>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-danger w-25"
          onClick={() => dispatch(resetCount())}
        >
          <RefreshCcw height={20} width={20} /> Reset
        </button>
      </div>
    </div>
  );
}
