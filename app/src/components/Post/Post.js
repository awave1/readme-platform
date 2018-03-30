import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

export class Post extends Component {
  render() {
    const { author } = this.props
    return(
      <div class="post">
        <div className="image" style={{backgroundImage:`url('${this.props.image}')`}}></div>
        <div>
          <h2>{this.props.title}</h2>
          <h3>By <Link to={`users/${author.uid}`}>{author.username}</Link></h3>
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
