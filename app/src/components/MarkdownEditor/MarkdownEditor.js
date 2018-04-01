import React, { Component } from 'react'
import SplitPane from 'react-split-pane'
import ReactMarkdown from 'react-markdown'
import TextEditor from './TextEditor'
import './MarkdownEditor.css'

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
      <section>
        <SplitPane split="vertical" defaultSize="50%">
          <div className="editor-pane">
            <TextEditor value={this.state.markdownSrc} onChange={this.onMarkdownChange} />
          </div>
          <div className="preview-pane">
            <ReactMarkdown source={this.state.markdownSrc}/>
          </div>
        </SplitPane>
      </section>
    )
  }

}

export default MarkdownEditor
