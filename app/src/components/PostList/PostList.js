import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { ProfilePost } from '../Post/Post.js'
import './PostList.css'

class PostList extends Component {

  // only for testning
  // todo: remove later
  generatePosts() {
    let posts = []
    for (let i = 0; i < 20; i++) {
      posts.push(
        <ProfilePost title={`Title #${i}`} image="https://source.unsplash.com/random/800x600" />
      )
    }
    return posts
  }

  render() {
    return(
      <section className="post-list">
        {this.generatePosts()}
      </section>
    )
  }
}

export default PostList
