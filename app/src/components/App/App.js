import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
