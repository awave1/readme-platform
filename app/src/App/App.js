import React, { Component } from 'react'
import Toolbar from '../components/Toolbar/Toolbar'
import Routes from '../Routes'

/** 
 * App is the main content of the website.
 * Contains Routes and Toolbar
 * 
 * Toolbar will be present on the page at all times
*/
class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "100%"}}>
        <Toolbar/>
        <Routes />
      </div>
    )
  }
}

export default App
