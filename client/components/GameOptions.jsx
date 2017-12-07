import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class GameOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    
  }
  render () {
    return (
      <div>
          <button className="button"><Link to='/randomweheel'>Wheel of misfortune !</Link></button>
      </div>
    )
  }
}

export default GameOptions