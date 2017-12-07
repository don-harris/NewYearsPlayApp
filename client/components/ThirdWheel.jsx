import React, { Component } from "react"
import {render} from 'react-dom'
import Rotation from 'react-rotation'

export default class ThirdWheel extends Component {
  render() {
    return (
      <Rotation>
        <img src='https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F794277147846340608%2FTMfI-Dro.jpg&f=1' />
      </Rotation>
    )
  }
}