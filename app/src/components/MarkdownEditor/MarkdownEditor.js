import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Input, Row, Col, ButtonGroup, Button } from 'reactstrap'
import styled from 'styled-components'
import TextEditor from './TextEditor'
import './MarkdownEditor.css'

const EditorContainder = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100%;
`

class MarkdownEditor extends Component {
  constructor(props) {
    super(props)
    this.onMarkdownChange = this.onMarkdownChange.bind(this)
  }

  state = {
    markdownSrc: '# hey\nstart typing here!',
  }

  onMarkdownChange(md) {
    this.setState({
      markdownSrc: md
    })
  }

  render() {
    return(
      <EditorContainder>
        <Button className="float-right">Publish</Button>
        <Input type="text" name="title" className="title" placeholder='Enter your title...'/>
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
    )
  }
}

export default MarkdownEditor
