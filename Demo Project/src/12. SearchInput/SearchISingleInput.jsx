import React, { useEffect, useState } from "react";
import {
  Card as ReactCard,
  CardBody,
  CardTitle,
  Input,
  Button,
} from "reactstrap";
import { Plus } from "lucide-react";
import { toast } from "react-toastify";

export default function SearchISingleInput() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    let jsonData = localStorage.getItem("userTasks");
    let normalData = JSON.parse(jsonData) || [];
    let filteredData = normalData.filter((e) => e?.includes(searchTxt));
    setTaskArr(filteredData);
  }, [searchTxt]);

  const addData = () => {
    if (task !== "") {
      if (taskArr.includes(task)) {
        toast.warn("Can not assign same task");
        setTask("");
      } else {
        setTaskArr([...taskArr, task]);
        localStorage.setItem("userTasks", JSON.stringify([...taskArr, task]));
        setTask("");
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
          <div className="d-flex justify-content-between ">
            <CardTitle tag="h4" className="text-danger">
              Task Input Form
            </CardTitle>
            <Input
              className="w-50"
              placeholder="Search here"
              onChange={(e) => setSearchTxt(e?.target?.value)}
            ></Input>
          </div>

          <h5 className="text-black-50 mt-4 mb-0">Task : {task}</h5>

          <div className="d-flex align-items-center">
            <Input
              className="mt-3 mb-3 rounded-end-0 "
              placeholder="Enter your task here"
              onChange={(e) => setTask(e?.target?.value)}
              value={task}
            ></Input>

            <Button
              className="rounded-start-0"
              color="primary"
              onClick={() => addData()}
            >
              <Plus />
            </Button>
          </div>

          {taskArr.length > 0 ? (
            taskArr.map((e, i) => {
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
                        </div>
                      </div>
                    </CardBody>
                  </ReactCard>
                </>
              );
            })
          ) : (
            <p>No data found</p>
          )}
        </CardBody>
      </ReactCard>
    </div>
  );
}
