import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RandomWheel from './RandomWheel'
import GameOptions from './GameOptions'
import Games from './Games'
import Snowfetti from 'react-snowfetti'
import Home from './Home'

const palette = [
	'#55476a',
	'#ae3d63',
	'#db3853',
	'#f45c44',
	'#f8b646'
]

const snowfettiStyles = {
  backgroundColor: '#0a2933',
  opacity: '0.5'
}

const App = () => (
  <Router>
    <div className='app-container'>
      {/* <h1 className="title is-1">New Year App</h1> */}
      {/* <hr/> */}
      <Home />
      <Route exact path="/" component={Games} />
      <br/>
      <Route path="/gameoptions" component={GameOptions} />
      <Route path="/randomwheel" component={RandomWheel} />
      <div className="confetti">
      <Snowfetti
	      profile={ [ 'confetti', 'steady', palette ] }
	      amount={ 800 }
      	width={ 9000 }
	      height={ 1000 }
	      styles={ snowfettiStyles }
        />
        </div>
    </div>
  </Router>
)

export default App
