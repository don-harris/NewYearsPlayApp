import React, { Component } from "react"
import MDSpinner from "react-md-spinner"

export default class SecondWheel extends Component {
  render() {
    return (
      <div>
        <MDSpinner size={30} />
        <MDSpinner size={50} />
        <MDSpinner size={80} />
        <MDSpinner size={150} />
        <MDSpinner size={300} duration={2000}/>
      </div>
    )
  }
}