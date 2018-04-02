import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Input, Row, Col, Button } from 'reactstrap'
import styled from 'styled-components'
import { withRouter } from "react-router-dom"
import TextEditor from './TextEditor'
import './MarkdownEditor.css'

const EditorContainder = styled.section`
  overflow-y: hidden;
  height: 100%;
`

class MarkdownEditor extends Component {
  constructor(props) {
    super(props)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onMarkdownChange = this.onMarkdownChange.bind(this)
    this.publishPost = this.publishPost.bind(this)
  }

  state = {
    markdownSrc: '# hey\nstart typing here!',
    title: '',
  }

  onMarkdownChange(md) {
    this.setState({
      markdownSrc: md
    })
  }

  async publishPost() {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const data = {
      title: this.state.title,
      content: this.state.markdownSrc,
    }

    const response = await fetch('/api/posts/create', {
      method: 'POST', 
      body: JSON.stringify(data),
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      credentials: 'same-origin',
    })
    const post = await response.json()
    console.log('publish')
    console.log(post)
    if (post)
      this.props.history.push(`/posts/${post.post_id}`)

  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value,
    })
  }

  render() {
    return(
      <div style={{height: "100%"}}>
        <Button onClick={this.publishPost} className="float-right">Publish</Button>
        <Input type="text" name="title" className="title" placeholder='Enter your title...' onChange={this.onTitleChange}/>
        <EditorContainder>
          <Row style={{height: "100%"}}>
            <Col style={{height: "100%"}}>
              <div className="editor-pane">
                <TextEditor value={this.state.markdownSrc} onChange={this.onMarkdownChange} />
              </div>
            </Col>
            <Col sm='6' style={{height: "100%"}}>
              <div className="preview-pane">
                <ReactMarkdown className="render-output" source={this.state.markdownSrc}/>
              </div>
            </Col>
          </Row>
        </EditorContainder>
      </div>
    )
  }
}

export default withRouter(MarkdownEditor)
