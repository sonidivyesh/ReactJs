import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button, Input } from "reactstrap";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { incrementCount } from "./redux/features/counterSlice";
import { userInputCount } from "./redux/features/counterSlice";

export default function IncrementComp() {
  const [input, setInput] = useState(0);

  const dispatch = useDispatch();

  const userInputHandler = () => {
    if (input != "") {
      dispatch(userInputCount(input));
      setInput("");
    } else {
      toast.error("This field is required.");
    }
  };

  return (
    <div className="bg-warning p-3 border-bottom">
      <p className="mb-0">IncrementComp</p>
      <button
        className="btn btn-success"
        onClick={() => dispatch(incrementCount())}
      >
        +1 Inc
      </button>

      <div className="d-flex mt-3">
        <Input
          value={input}
          className="rounded-end-0"
          onChange={(e) => setInput(e?.target?.value)}
        />
        <Button
          color="success"
          className="rounded-start-0"
          onClick={() => userInputHandler()}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
