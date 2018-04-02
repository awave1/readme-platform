import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class PostView extends Component {

  render() {
    return(
      <section>
        <ReactMarkdown source={this.props.post ? this.props.post.content : ''}/>
      </section>
    )
  }
}

export default PostView
