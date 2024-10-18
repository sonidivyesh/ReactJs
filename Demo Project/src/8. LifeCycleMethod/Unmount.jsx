import React, { Component } from "react";
import { toast } from "react-toastify";

export default class Unmount extends Component {
  componentWillUnmount() {
    toast.info("Login Successful");
  }

  render() {
    return <h1>User is not Login</h1>;
  }
}
