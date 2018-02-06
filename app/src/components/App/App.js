import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Toolbar from '../Toolbar/Toolbar'
import MainPage from '../MainPage/MainPage'
import Feed from '../Feed/Feed'
import Account from '../Account/Account'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/feed" component={Feed}/>
        <Route exact path="/account" component={Account}/>
      </div>
    )
  }
}

export default App
