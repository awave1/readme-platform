import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import Feed from '../pages/Feed/Feed'
import Account from '../pages/Account/Account'

/** 
 * Site specific routes
 */
// todo: replace with routes.js
class Routes extends Component {
  render() {
    return(
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/register" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/feed" component={Feed}/>
        <Route exact path="/account" component={Account}/>
      </div>
    )
  }
}

export default Routes
