import React, { Component } from "react";
import { Button } from "reactstrap";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    console.log("----------- Constructor ------------");
    this.count = 100;

    this.state = {
      amount: 1900,
      point: 0,
    };
  }

  componentDidMount() {
    this.count2 = 999;
    console.log("----------- componentDidMount ------------");

    setTimeout(() => {
      alert("Please Login");
    }, 4000);
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("----------- oldProps ------------", oldProps);
    console.log("----------- oldState ------------", oldState);

    console.log("----------- componentDidUpdate ------------");

    if (this.state.amount - oldState.amount === 5) {
      alert("State is updated by 5");
      this.setState({ point: this.state.point + 1 });
    }
  }

  render() {
    console.log("---------- Render -------------");
    return (
      <>
        <div>LifeCycleMethod</div>
        <h2>Count is {this.count}</h2>
        <h2>Count2 is {this.count2}</h2>
        <hr />
        <h2>Amount is {this.state.amount}</h2>
        <h2>Point is {this.state.point}</h2>
        <Button
          color="primary"
          onClick={() => this.setState({ amount: this.state.amount + 1 })}
        >
          Inc Amount
        </Button>
        <Button
          className="ms-1"
          color="primary"
          onClick={() => this.setState({ amount: this.state.amount + 5 })}
        >
          Inc 5 Amount
        </Button>
      </>
    );
  }
}
