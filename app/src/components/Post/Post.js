import React, { Component } from 'react'
import './Post.css'

export class Post extends Component {
  render() {
    return(
      <div class="post">
        <div className="image" style={{backgroundImage:`url('${this.props.image}')`}}></div>
        <div>
          <h2>{this.props.title}</h2>
          <h3>By {this.props.author}</h3>
        </div>
      </div>
    )
  }
}

export class ProfilePost extends Component {
  render() {
    return(
      <div className="profile-post">
        <div className="profile-post-image" style={{ height: "100px", backgroundImage: `url(${this.props.image})`}}></div>
        <div className="profile-post-title">
          <h3>{this.props.title}</h3>
        </div>
      </div>
    )
  }
}
