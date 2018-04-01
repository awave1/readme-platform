import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import PostList from '../../components/PostList/PostList'
import loggedIn from '../../authUtil'

class Feed extends Component {

  state = {
    user: undefined
  }

  async componentDidMount() {
    const user = await loggedIn()
    this.setState({
      user: user
    })
  }

  render() {
    if (this.state.user && !this.state.user.success)
      return <Redirect to='/login' />

    return(
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <PostList type='feed'/>
      </Col>
    )
  }
}

export default Feed
