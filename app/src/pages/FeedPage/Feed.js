import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import PostList from '../../components/PostList/PostList'
import loggedIn from '../../authUtil'

const FeedContainer = styled.div`
  margin-top: 15px
`
class Feed extends Component {
  render() {
    return(
      <FeedContainer>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <PostList type='feed'/>
        </Col>
      </FeedContainer>
    )
  }
}

export default Feed
