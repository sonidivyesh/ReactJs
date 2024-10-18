import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { toast } from "react-toastify";

let initialData = {
  name: "",
  email: "",
  password: "",
  gender: "",
  hobby: [],
};

export default function MultiInput2() {
  const [user, setUser] = useState(initialData);
  const [userArr, setUserArr] = useState([]);

  var valueArr = Object.values(user);
  var empty = valueArr.includes("");

  const addUser = (e) => {
    e.preventDefault();

    if (!empty) {
      setUserArr([user, ...userArr]);
      setUser(initialData);
    } else {
      toast.warn("Please fill all data");
    }
  };
  console.log("userArr : ", userArr);

  const hobbyHandler = (hby, e) => {
    console.log("e : ", e?.target?.checked);
    if (e?.target?.checked) {
      setUser({ ...user, hobby: [...user.hobby, hby] });
    } else {
      let filterHobbyData = user.hobby.filter((e) => e !== hby);
      setUser({ ...user, hobby: filterHobbyData });
    }
  };
  console.log("userArr2 : ", userArr);

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="w-50">
        <div className="border border-dark-subtle rounded-3 p-3">
          <h3>Multi Input Form 2</h3>
          <h6>Name : {user.name}</h6>
          <h6>email : {user.email}</h6>
          <h6>passsword : {user.password}</h6>
          <h6>gender : {user.gender}</h6>
          <h6>Hobby : {user.hobby.join(", ")}</h6>
          <hr />
          <Form onSubmit={(e) => addUser(e)}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                type="text"
                onChange={(e) => setUser({ ...user, name: e?.target?.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>

            <Label>Gender</Label>
            <FormGroup check className="d-flex" style={{ gap: "40px" }}>
              <div>
                <Label for="male">Male</Label>
                <Input
                  id="male"
                  type="radio"
                  checked={user.gender === "Male"}
                  onChange={() => setUser({ ...user, gender: "Male" })}
                />
              </div>
              <div>
                <Label for="female">Female</Label>
                <Input
                  id="female"
                  type="radio"
                  checked={user.gender === "Female"}
                  onChange={() => setUser({ ...user, gender: "Female" })}
                />
              </div>
              <div>
                <Label for="child">Child</Label>
                <Input
                  id="child"
                  type="radio"
                  checked={user.gender === "Child"}
                  onChange={() => setUser({ ...user, gender: "Child" })}
                />
              </div>
            </FormGroup>

            <Label>Hobby</Label>
            <FormGroup check className="d-flex" style={{ gap: "50px" }}>
              <div>
                <Input
                  id="exploring"
                  type="checkbox"
                  checked={user.hobby.includes("Exploring")}
                  onChange={(e) => hobbyHandler("Exploring", e)}
                />
                <Label for="exploring">Exploring</Label>
              </div>
              <div>
                <Input
                  id="sketching"
                  type="checkbox"
                  checked={user.hobby.includes("Sketching")}
                  onChange={(e) => hobbyHandler("Sketching", e)}
                />
                <Label for="sketching">Sketching</Label>
              </div>
              <div>
                <Input
                  id="badminton"
                  type="checkbox"
                  checked={user.hobby.includes("Badminton")}
                  onChange={(e) => hobbyHandler("Badminton", e)}
                />
                <Label for="badminton">Badminton</Label>
              </div>
              <div>
                <Input
                  id="cricket"
                  type="checkbox"
                  checked={user.hobby.includes("Cricket")}
                  onChange={(e) => hobbyHandler("Cricket", e)}
                />
                <Label for="cricket">Cricket</Label>
              </div>
              <div>
                <Input
                  id="learning"
                  type="checkbox"
                  checked={user.hobby.includes("Learning")}
                  onChange={(e) => hobbyHandler("Learning", e)}
                />
                <Label for="learning">Learning</Label>
              </div>
            </FormGroup>
            <Button className="w-100" color="primary">
              Submit
            </Button>
          </Form>
        </div>

        <hr className="mt-5" />

        <Table striped>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userArr?.map?.((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.password}</td>
                  <td>{e?.gender}</td>
                  <td>{e?.hobby.join(", ")}</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 ">
                      <Pencil role="button" size={20} color="#0d6efd" />
                      <Trash2 role="button" size={20} color="#ff0000" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
