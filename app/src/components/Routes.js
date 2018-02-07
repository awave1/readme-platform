import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import Feed from './Feed/Feed'
import Account from './Account/Account'

/** 
 * Site specific routes
 */
class Routes extends Component {
  render() {
    return(
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/feed" component={Feed}/>
        <Route exact path="/account" component={Account}/>
      </div>
    )
  }
}

export default Routes
