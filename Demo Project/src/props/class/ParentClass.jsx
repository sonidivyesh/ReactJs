import React, { Component } from 'react'
import ChildCard from './ChildCard'

export default class ParentClass extends Component {
  render() {
    return (
        <>
          <ChildCard name={"Divyesh"} age={23}/>
        </>
      )
  }
}