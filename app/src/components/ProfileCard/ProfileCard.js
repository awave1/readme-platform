import React, { Component } from 'react'
import './ProfileCard.css'


class ProfileCard extends Component {

    constructor(props) {
        super(props)
      }

        


      render() {
        return(
            <div className="profile-card">
                <div className="profile-thumbnail">
                style={{
                    image: `url(${this.props.image})`
                }}</div>

                <div className="profile-card-wrap">
                    <h2> Test User </h2>
                    <div className="profile-card-info">
                        <p className="info"> This is test info </p>
                    </div>
                    <div className="social">
                        
                    </div>
                </div>

            </div>
        )
      }
}





export default ProfileCard