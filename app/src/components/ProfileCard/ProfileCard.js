import React, { Component } from 'react'
import './ProfileCard.css'


class ProfileCard extends Component {
    render() {
      return(
        <div className="profile-card">
          <div className="profile-thumbnail"
            style={{
              backgroundImage: `url(${this.props.image})`
            }}></div>

          <div className="profile-info">
            <h2>Test User</h2>
            <div className="profile-card-info">
              <p className="profile-info-text"> This is test info </p>
            </div>
            <div className="profile-info-social">
            </div>
          </div>
        </div>
      )
    }
}





export default ProfileCard
