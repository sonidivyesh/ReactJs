import React from "react";
import { useDispatch } from "react-redux";
import { multiplyCount } from "./redux/features/counterSlice";

export default function MultiplyCount() {
  const dispatch = useDispatch();
  return (
    <div className="bg-warning p-3 border-bottom">
      <p className="mb-0">MultiplyComp</p>
      <button
        className="btn btn-success"
        onClick={() => dispatch(multiplyCount())}
      >
        Multi * 5
      </button>
    </div>
  );
}
