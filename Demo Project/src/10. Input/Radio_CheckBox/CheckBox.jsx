import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function CheckBox() {
  const [color, setColor] = useState([]);

  const colorHandler = (clr, e) => {
    console.log("e : ", e.target.checked);
    if (e?.target?.checked) {
      setColor([...color, clr]);
    } else {
      let filterData = color.filter((e) => e !== clr);
      console.log("filterData :", filterData);
      setColor(filterData);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <div className="w-25">
          <div className="border border-dark-subtle rounded-3 p-3">
            <h3>CheckBox Inputs</h3>
            <Form>
              <FormGroup check>
                <Input
                  type="checkbox"
                  checked={color.includes("Red")}
                  onChange={(e) => colorHandler("Red", e)}
                />
                <Label>Red</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  type="checkbox"
                  checked={color.includes("Green")}
                  onChange={(e) => colorHandler("Green", e)}
                />
                <Label>Green</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  type="checkbox"
                  checked={color.includes("Yellow")}
                  onChange={(e) => colorHandler("Yellow", e)}
                />
                <Label>Yellow</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  type="checkbox"
                  checked={color.includes("Black")}
                  onChange={(e) => colorHandler("Black", e)}
                />
                <Label>Black</Label>
              </FormGroup>
            </Form>
          </div>

          <hr className="mt-5" />

          <div>
            {color?.map((e, i) => {
              return <h6 key={i}>{e}</h6>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
