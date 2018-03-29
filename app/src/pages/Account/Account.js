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
  render() {
    return(
      <div id="profile-page">
        <Header image='https://78.media.tumblr.com/26f1db79797aaf8577a32e288c5afefd/tumblr_n7yhhvUQtx1st5lhmo1_1280.jpg' lg>
          <ProfileCard image='http://placehold.it/100x100?text=Picture' fitToCol/>
        </Header>
        <ListBackground>
          <PostList type='profile'/>
        </ListBackground>
      </div>
    )
  }
}

export default Account
