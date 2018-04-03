/**
 * Handles post view. Shown when post is opened
 */

import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const PostViewContailer = styled.div`
  padding-top: 80px;
`
const Title = styled.h1`
  font-weight: bold;
`

class PostView extends Component {
  render() {
    const username = this.props.post ? this.props.post.author.username : ''
    return(
      <PostViewContailer>
        <Col sm="12" md={{ size: 6, offset: 3 }} >
          <Title>{this.props.post ? this.props.post.title : ''}</Title>
          <ReactMarkdown source={this.props.post ? this.props.post.content : ''}/>
          <div>
            by: 
            <Link to={`/users/${username}`}>
              {this.props.post ? ` @${username}` : ''}
            </Link>
          </div>
        </Col>
      </PostViewContailer>
    )
  }
}

export default PostView
