import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Radio() {
  const [gender, setGender] = useState("");

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="w-25">
        <div className="border border-dark-subtle rounded-3 p-3">
          <h3>Radio Inputs</h3>
          <h6>Gender : {gender}</h6>
          <Form>
            <FormGroup check>
              <Input
                checked={gender === "Male"}
                type="radio"
                id="male"
                onChange={() => setGender("Male")}
              />
              <Label for="male" check>
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={gender === "Female"}
                type="radio"
                id="female"
                onChange={() => setGender("Female")}
              />
              <Label for="female" check>
                Female
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={gender === "Child"}
                type="radio"
                id="child"
                onChange={() => setGender("Child")}
              />
              <Label for="child" check>
                Child
              </Label>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
