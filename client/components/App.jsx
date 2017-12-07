import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RandomWheel from './RandomWheel'
import GameOptions from './GameOptions'
import Games from './Games'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1 className="title is-1">New Year App - completely bare</h1>
      <hr/>
      <Route path="/" component={Games} />
      <br/>
      <Route path="/gameoptions" component={GameOptions} />
      <Route path="/randomwheel" component={RandomWheel} />
    </div>
  </Router>
)

export default App
