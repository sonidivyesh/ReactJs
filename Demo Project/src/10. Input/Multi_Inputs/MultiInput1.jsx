import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

let initialData = {
  name: "",
  email: "",
  password: "",
  city: "",
  state: "",
};

export default function MultiInput1() {
  const [user, setUser] = useState(initialData);
  const [userArr, setUserArr] = useState([]);
  const [index, setIndex] = useState(null);

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
  // console.log("userArr: ", userArr);

  const deleteHandler = (index) => {
    let filteredData = userArr.filter((e, i) => i !== index);
    console.log("filtered Data : ", filteredData);
    setUserArr(filteredData);
  };

  const updateHandler = (ele, index) => {
    // console.log("ele, index => ", ele, index);
    setUser(ele);
    setIndex(index);
  };

  const updateUser = (e) => {
    e.preventDefault();

    if (!empty) {
      if (userArr.includes(user)) {
        toast.warn("Cannot Update Same Data");
      } else {
        userArr.splice(index, 1, user);
        setUser([...userArr]);
        setUser(initialData);
        setIndex(null);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="w-50">
        <div className="border border-dark-subtle rounded-3 p-3">
          <h3>Multi Input Form 1</h3>
          <h6>Email : {user.email}</h6>
          <h6>Password : {user.password}</h6>
          <h6>Index : {index}</h6>
          <hr />
          <Form onSubmit={(e) => addUser(e)}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                id="city"
                placeholder="Enter your city"
                type="text"
                value={user.city}
                onChange={(e) => setUser({ ...user, city: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                id="state"
                placeholder="Enter your state"
                type="text"
                value={user.state}
                onChange={(e) => setUser({ ...user, state: e?.target?.value })}
              />
            </FormGroup>
            {index || index === 0 ? (
              <Button
                className="w-100"
                color="primary"
                onClick={(e) => updateUser(e)}
              >
                Update
              </Button>
            ) : (
              <Button className="w-100" color="primary">
                Submit
              </Button>
            )}
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
              <th>City</th>
              <th>State</th>
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
                  <td>{e?.city}</td>
                  <td>{e?.state}</td>
                  <td>
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
