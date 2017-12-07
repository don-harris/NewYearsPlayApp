import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>New Year App - completely bare</h1>
      <Route exact path="/" component={Greetings} />
      <Route exact path="/randomwheel" component={RandomWheel} />
    </div>
  </Router>
)

export default App
