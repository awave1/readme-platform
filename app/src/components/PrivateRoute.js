import React from 'react'
/**
 * Route that can only be accessed if user is logged in
 */

import { Route, Redirect } from 'react-router-dom'
import loggedIn from '../authUtil'

class PrivateRoute extends React.Component {

  state = {
    loggedIn: false
  }

  componentDidMount() {
    const user = loggedIn()
    if (user !== undefined)
      this.setState({
        loggedIn: user.success
      })
  }
  
  render() {
    const { Component, ...rest } = this.props
    return(
      <Route {...rest} render = { props => {
        this.state.loggedIn ? 
        <Component {...props} />
        : <Redirect to='/login' /> 
      }} />
    )
  }
}

export default PrivateRoute
