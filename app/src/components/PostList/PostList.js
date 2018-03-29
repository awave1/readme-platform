import React, { Component } from 'react'
import faker from 'faker'
import { Post, ProfilePost } from '../Post/Post'
import './PostList.css'

class PostList extends Component {

  // only for testning
  // todo: remove later
  generatePosts() {
    let posts = []
    for (let i = 0; i < 20; i++) {
      posts.push(
        <ProfilePost title={`Title #${i}`} image="https://source.unsplash.com/random/800x600" />
      )
    }
    return posts
  }

  generatePostsFeed() {
    let posts = []
    for (let i = 0; i < 20; i++) {
      const author = {
        username: faker.internet.userName(),
        uid: faker.internet.userName(),
      }
      
      const article = {
        title: faker.lorem.words(2),
      }

      posts.push(
        <Post author={author} title={article.title} image="https://source.unsplash.com/random/800x600" />
      )
    }
    return posts
  }

  render() {
    const listClass = this.props.type === 'profile' ? 'post-list-horizontal' : 'post-list-vertical'
    return(
      <section className={listClass}>
        {this.props.type === 'profile' ? this.generatePosts() : this.generatePostsFeed()}
      </section>
    )
  }
}

export default PostList
