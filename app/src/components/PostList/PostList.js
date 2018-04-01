import React, { Component } from 'react'
import faker from 'faker'
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
      this.posts = posts.map(post => <Post author={post.author} title={post.title} />)
    } else {
      posts = await this.getPostsForUser()
      this.posts = posts.map(post => <ProfilePost title={post.title} />)
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
