import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>New Year App - completely bare</h1>
      <Route exact path="/" component={Greetings} />
    </div>
  </Router>
)

export default App
