import React, { Component } from 'react'
import { Col } from 'reactstrap'
import styled from 'styled-components'
import PostView from '../../components/PostView/PostView'

class PostPage extends Component {

  state = {
    post: undefined
  }

  constructor(props) {
    super(props)
    this.getPost = this.getPost.bind(this)
  }

  async getPost() {
    const postId = this.props.location.pathname.slice(1).split('/')[1]
    console.log(postId)
    const response = await fetch(`/api/posts/id/${postId}`)
    const post = await response.json()
    this.setState({
      post: post
    })
    console.log(post)
  }

  async componentDidMount() {
    this.getPost()
  } 

  render() {
    return(
      <div>
        <PostView post={this.state.post}/>
      </div>
    )
  }
}

export default PostPage
