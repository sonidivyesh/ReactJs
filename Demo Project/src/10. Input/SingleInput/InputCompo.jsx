import React, { useState } from "react";
import {
  Card as ReactCard,
  CardBody,
  CardTitle,
  Input,
  Button,
} from "reactstrap";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export default function InputCompo() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [index, setIndex] = useState(null);

  // to get data from input
  const getData = (ele) => {
    // console.log("---------->", ele.target.value);
    setTask(ele?.target?.value);
  };

  const handleKeyPressEvents = (ele) => {
    if (ele?.key === "Enter") {
      {
        index ? updateTask() : addData();
      }
    }
  };

  //   to add input data into array
  const addData = () => {
    if (task !== "") {
      if (taskArr.includes(task)) {
        toast.warn("Can not assign same task");
        setTask("");
      } else {
        // to copy old data
        setTaskArr([...taskArr, task]);
        // to make input field empty after onclick event
        setTask("");
      }
    } else {
      toast.warn("Please enter something");
    }
  };

  const deleteHandler = (index) => {
    let filteredData = taskArr.filter((e, i) => i !== index);
    console.log("filtered Data : ", filteredData);
    setTaskArr(filteredData);
  };

  const updateHandler = (ele, index) => {
    setTask(ele);
    setIndex(index);
  };

  const updateTask = () => {
    if (task != "") {
      if (taskArr.includes(task)) {
        toast.warn("Cannot write same task");
      } else {
        taskArr.splice(index, 1, task);
        setTask([...taskArr]);
        setTask("");
        setIndex(null);
      }
    } else {
      toast.warn("Please enter something");
    }
  };

  return (
    <div className="d-flex justify-content-center pt-5">
      <ReactCard
        style={{
          width: "40rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h4" className="text-danger">
            Task Input Form
          </CardTitle>

          <h5 className="text-black-50 mt-4 mb-0">Task : {task}</h5>

          <div className="d-flex align-items-center">
            <Input
              className="mt-3 mb-3 rounded-end-0 "
              placeholder="Enter your task here"
              onChange={(e) => getData(e)}
              // we take value to control input value
              value={task}
              onKeyUp={(e) => handleKeyPressEvents(e)}
            ></Input>

            {index || index === 0 ? (
              <Button
                className="rounded-start-0"
                color="primary"
                onClick={() => updateTask()}
              >
                Update
              </Button>
            ) : (
              <Button
                className="rounded-start-0"
                color="primary"
                onClick={() => addData()}
              >
                <Plus />
              </Button>
            )}
          </div>

          {taskArr.map((e, i) => {
            return (
              <>
                <ReactCard
                  style={{
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  <CardBody className="p-2">
                    <div>
                      <div className="d-flex justify-content-between align-items-center ">
                        <li key={i}>
                          {i + 1}. {e}
                        </li>
                        <div className="d-flex align-items-center gap-3 ">
                          <Pencil
                            role="button"
                            size={20}
                            color="#0d6efd"
                            onClick={() => updateHandler(e, i)}
                          />
                          <Trash2
                            role="button"
                            size={20}
                            color="#ff0000"
                            onClick={() => deleteHandler(i)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </ReactCard>
              </>
            );
          })}
        </CardBody>
      </ReactCard>
    </div>
  );
}
