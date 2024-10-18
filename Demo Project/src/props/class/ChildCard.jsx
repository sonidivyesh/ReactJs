import React, { Component } from 'react'

export default class ChildCard extends Component {
  render() {
    return (
        <>
        <h1>My name is  {this?.props?.name} & I'm {this?.props?.age || 1} years old.</h1>
        </>
    )
  }
}
