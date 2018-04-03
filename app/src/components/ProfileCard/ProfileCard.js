/**
 * A user information card.
 */

import React, { Component } from 'react'
import './ProfileCard.css'

class ProfileCard extends Component {

  constructor(props) {
    super(props)
    this.inheritWidth = this.props.fitToCol === true ? 'inherit' : '300px'
  }

  render() {
    const { user } = this.props
    return(
      <div className="profile-card" style={{width: this.inheritWidth}}>
        <div className="profile-thumbnail"
          style={{
            backgroundImage: `url(${this.props.image})`
          }}></div>

        <div className="profile-info">
          <h2>{`${user.first} ${user.last}`}</h2>
          <div className="profile-card-info">
            <p className="profile-info-text">{user.email}</p>
          </div>
          <div className="profile-info-social">
          </div>
        </div>
      </div>
    )
  }
}





export default ProfileCard
