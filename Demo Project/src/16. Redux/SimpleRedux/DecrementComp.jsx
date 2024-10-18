import React from "react";
import { useDispatch } from "react-redux";
import { decrementCount } from "./redux/features/counterSlice";

export default function DecrementComp() {
  const dispatch = useDispatch();
  return (
    <div className="bg-warning p-3 border-bottom">
      <p className="mb-0">DecrementComp</p>
      <button
        className="btn btn-success"
        onClick={() => dispatch(decrementCount())}
      >
        -1 Dec
      </button>
    </div>
  );
}
