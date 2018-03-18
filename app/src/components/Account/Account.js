import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Header from '../Header/Header.js'
import ProfileCard from '../ProfileCard/ProfileCard.js'

class Account extends Component {
  render() {
    return(
      <div id="profile-page">
        <Header image='https://78.media.tumblr.com/26f1db79797aaf8577a32e288c5afefd/tumblr_n7yhhvUQtx1st5lhmo1_1280.jpg' lg/>
        <Row>
          <Col>
            <ProfileCard image='http://placehold.it/100x100?text=Picture' fitToCol/>
          </Col>
          <Col xs="6">
            {/* Content goes in this column */}
          </Col>
          <Col>
            {/* The rest is here */}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Account
