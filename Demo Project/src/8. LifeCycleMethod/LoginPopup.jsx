import React, { Component } from "react";
import { Button } from "reactstrap";
import Unmount from "./Unmount";

export default class LoginPopup extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      id: "",
      id2: "",
      isLogin: false,
    };
  }

  componentDidMount() {
    let id = setInterval(() => {
      alert("please login");
    }, 5000);
    this.setState({ id: id });

    let id2 = setInterval(() => {
      alert("Still Login");
    }, 8000);
    this.setState({ id2: id2 });
  }

  componentDidUpdate(oldProps, oldState) {
    if (this.state.amount - oldState.amount === 1) {
      clearInterval(this.state.id);
    }

    if (this.state.amount - oldState.amount === 5) {
      clearInterval(this.state.id2);
      this.setState({ isLogin: true });
    }
  }

  render() {
    return (
      <>
        {!this.state.isLogin && <Unmount />}
        <h2>Amount is {this.state.amount}</h2>
        <Button
          color="primary"
          onClick={() => this.setState({ amount: this.state.amount + 1 })}
        >
          Inc Amount
        </Button>
        <Button
          className="ms-2"
          color="primary"
          onClick={() => this.setState({ amount: this.state.amount + 5 })}
        >
          Inc 5 Amount
        </Button>
      </>
    );
  }
}
