import React, { Component } from 'react'
import styled from 'styled-components'
import material from '../../components/common-style/material'
import Header from '../../components/Header/Header'
import PostList from '../../components/PostList/PostList'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const ListBackground = styled.section`
  background-color: ${material.md_grey_200};
`

class Account extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    this.getUser()
      .then(user => {
        this.setState({ user })
      })
      .catch(err => {
        console.log(err)
      })
  }

  async getUser() {
    const path = this.props.location.pathname
    const response = await fetch(`/api${path}`)
    const user = await response.json()

    return user
  }

  render() {
    const { user } = this.state
    const success = !user.hasOwnProperty('success')
    return(
      <div id="profile-page">
        { success ? (
        <div className="profile-page-container">
          <Header image='https://78.media.tumblr.com/26f1db79797aaf8577a32e288c5afefd/tumblr_n7yhhvUQtx1st5lhmo1_1280.jpg' lg>
            <ProfileCard user={ user } image='http://placehold.it/100x100?text=Picture' fitToCol/>
          </Header>
          <ListBackground>
            <PostList type='profile' user={this.props.location.pathname}/>
          </ListBackground>
        </div>
        ) : (
        <div className="profile-page-container">
          <h1>whoa whoa user doesn't exist buddy</h1>
        </div>
        )}
      </div>
    )
  }
}

export default Account
