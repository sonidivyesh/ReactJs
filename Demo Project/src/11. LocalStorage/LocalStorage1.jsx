import React from "react";
import { Button } from "reactstrap";

export default function LocalStorage1() {
  // Set data into local storage (object)
  const setName = () => {
    let data = { name: "Divyesh" };
    let jsonString = JSON.stringify(data);
    localStorage.setItem("name", jsonString);
  };

  // Set data into local storage
  const setAge = () => {
    localStorage.setItem("age", "23");
  };

  // Update data into local storage
  const updateName = () => {
    let data = { name: "Vishvesh" };
    let jsonString = JSON.stringify(data);
    localStorage.setItem("name", jsonString);
  };

  // Remove single data from local storage
  const removeName = () => {
    localStorage.removeItem("name");
  };

  // Remove all data from local storage
  const removeAll = () => {
    localStorage.clear();
  };

  const getData = () => {
    let data = localStorage.getItem("name");
    console.log("data : ", data); // this returns data in string
    let normalData = JSON.parse(data);
    console.log("normalData : ", normalData); // this returns as a object
  };

  return (
    <div className="d-flex gap-2">
      <Button onClick={() => setName()}>Set Name</Button>
      <Button onClick={() => setAge()}>Set Age</Button>
      <Button onClick={() => updateName()}>Update Name</Button>
      <Button onClick={() => removeName()}>Remove Name</Button>
      <Button onClick={() => removeAll()}>Remove All</Button>
      <Button onClick={() => getData()}>Get Data</Button>
    </div>
  );
}
