import React, { Component } from 'react'
import { Col } from 'reactstrap'
import PostList from '../../components/PostList/PostList'


class Feed extends Component {
  render() {
    return(
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <PostList type='feed'/>
      </Col>
    )
  }
}

export default Feed
