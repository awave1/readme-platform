import React, { Component } from 'react'
import './Post.css'

export class Post extends Component {
  render() {
    return(
      <div class="post">

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
