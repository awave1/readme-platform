import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Feed from './pages/FeedPage/Feed'
import Account from './pages/AccountPage/Account'
import Editor from './pages/EditorPage/EditorPage'
import PostPage from './pages/PostPage/PostPage'
import CuteNotFoundPage from './pages/CuteNotFoundPage/CuteNotFoundPage'
import PrivateRoute from './components/PrivateRoute'

/** 
 * Site specific routes
 */
class Routes extends Component {
  render() {
    return(
      <div style={{height: "100%"}}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/register" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/feed" component={Feed}/>
          <PrivateRoute exact path="/editor" component={Editor}/>
          <Route path="/users/:username" component={Account} />
          <Route path="/posts/:postId" component={PostPage} />
          <Route path="*" component={CuteNotFoundPage}/>
        </Switch>
      </div>
    )
  }
}

export default Routes
