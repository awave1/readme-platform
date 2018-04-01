import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Feed from './pages/FeedPage/Feed'
import Account from './pages/AccountPage/Account'

/** 
 * Site specific routes
 */
class Routes extends Component {

  constructor(props) {
    super(props)
    this.requireAuth = this.requireAuth.bind(this)
    this.loggedIn = this.loggedIn.bind(this)
  }

  async loggedIn() {
    const response = await fetch('/api/auth/loggedIn')
    const user = await response.json()
    console.log(user)
    return user
  }

  requireAuth(nextState, replace) {
    fetch('/api/auth/loggedIn')
      .then(res => {
        console.log(res.json())
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/register" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/feed" component={Feed}/>
        <Route path="/users/:username" component={Account} />
      </div>
    )
  }
}

export default Routes
