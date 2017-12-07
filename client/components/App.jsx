import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import RandomWheel from './RandomWheel'
import GameOptions from './GameOptions'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1 className="title is-1">New Year App - completely bare</h1>
      <hr/>
      <Route exact path="/" component={Greetings} />
      <br/>
      <Route exact path="/" component={GameOptions} />
      <Route exact path="/randomwheel" component={RandomWheel} />
    </div>
  </Router>
)

export default App
