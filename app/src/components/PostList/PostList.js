import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { ProfilePost } from '../Post/Post.js'
import './PostList.css'

class PostList extends Component {
  render() {
    return(
      <div className="post-list">
        <ProfilePost/>
      </div>
    )
  }
}

export default PostList
