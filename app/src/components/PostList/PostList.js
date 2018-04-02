import React, { Component } from 'react'
import faker from 'faker'
import { Link } from 'react-router-dom'
import { Post, ProfilePost } from '../Post/Post'
import './PostList.css'

class PostList extends Component {

  state = {
    posts: []
  }

  constructor(props) {
    super(props)

    this.posts = []
    this.getAllPosts = this.getAllPosts.bind(this)
  }
  
  async getAllPosts() {
    const result = await fetch('/api/posts/all')
    const posts = await result.json()
    return posts
  }

  async getPostsForUser() {
    const username = this.props.user.slice(1).split('/')[1]
    const result = await fetch(`/api/posts/${username}`)
    const posts = await result.json()
    return posts
  }
      
  async componentDidMount() {
    let posts = []
    if (this.props.type === 'feed') {
      posts = await this.getAllPosts()
      this.posts = posts.map(post => <Link to={`/posts/${post.post_id}`}><Post author={post.author} title={post.title} /> </Link>)
    } else {
      posts = await this.getPostsForUser()
      this.posts = posts.map(post => <Link to={`/posts/${post.post_id}`}><ProfilePost title={post.title} /> </Link>)
    }
    this.setState({
      posts: this.posts
    })
  }

  render() {
    const listClass = this.props.type === 'profile' ? 'post-list-horizontal' : 'post-list-vertical'
    return(
      <section className={listClass}>
        {this.state.posts}
      </section>
    )
  }
}

export default PostList
