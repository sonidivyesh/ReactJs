import { Pencil, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Card as ReactCard,
  Button,
  CardBody,
  CardTitle,
  Input,
} from "reactstrap";

export default function InputPractice2() {
  let [data, setData] = useState("");
  let [dataArr, setDataArr] = useState([]);
  let [index, setIndex] = useState(null);

  const getData = (ele) => {
    setData(ele?.target?.value);
  };

  const handleInputKeyPress = (ele) => {
    if (ele?.key === "Enter") {
      {
        index ? updateData() : addData();
      }
    }
  };

  const addData = () => {
    if (data != "") {
      if (dataArr.includes(data)) {
        toast.warn("Data Already Entered");
      } else {
        setDataArr([...dataArr, data]);
        setData("");
      }
    } else {
      toast.warn("Please Enter Data");
    }
  };

  const deleteData = (index) => {
    let filterData = dataArr.filter((e, i) => i !== index);
    console.log("filterData: ", filterData);
    setDataArr(filterData);
  };

  const updateHandler = (ele, index) => {
    // console.log("ele, index => ", ele, index);
    setData(ele);
    setIndex(index);
  };

  const updateData = () => {
    // newData=>data , array=>dataArr , index=>index
    if (data != "") {
      if (dataArr.includes(data)) {
        toast.warn("Cannot Update Same Data");
      } else {
        dataArr.splice(index, 1, data);
        setData([...dataArr]);
        setData("");
        setIndex(null);
      }
    } else {
      toast.warn("Please Enter Data");
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
          <h2>Index : {index}</h2>
          <CardTitle tag="h4">TODO</CardTitle>
          <h5 className="text-muted mt-4 mb-1">Your TODO : {data}</h5>
          <div className="d-flex align-items-center">
            <Input
              className="rounded-end-0 "
              placeholder="Write anything"
              onChange={(e) => getData(e)}
              value={data}
              onKeyUp={(e) => handleInputKeyPress(e)}
            ></Input>

            {/* index => null/0/undefined/false */}
            {index || index === 0 ? (
              <Button
                className="rounded-start-0"
                color="primary"
                onClick={() => updateData()}
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

          {dataArr.map((e, i) => {
            return (
              <>
                <ReactCard
                  style={{
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  <CardBody>
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
                          onClick={() => deleteData(i)}
                        />
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
