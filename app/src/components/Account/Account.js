import React, { Component } from 'react'
import Header from '../Header/Header.js'
import ProfileCard from '../ProfileCard/ProfileCard.js';

class Account extends Component {
  render() {
    return(
      <div id="profile-page">
        <Header image='https://78.media.tumblr.com/26f1db79797aaf8577a32e288c5afefd/tumblr_n7yhhvUQtx1st5lhmo1_1280.jpg' lg></Header>
        <ProfileCard image='http://placehold.it/50x50?text=Picture'></ProfileCard>
      </div>
    )
  }
}

export default Account
