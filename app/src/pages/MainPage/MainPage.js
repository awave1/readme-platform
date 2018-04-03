import React, { Component } from 'react'
import styled from 'styled-components'
import { Col, ButtonGroup, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header/Header'

const HeaderText = styled.h1`
  position: relative;
  transform: translateY(-50%);
  top: 50%;
  color: white;
`

class MainPage extends Component {
  render() {
    return(
      <div style={{height: "100%"}}>
        <Header image='https://78.media.tumblr.com/26f1db79797aaf8577a32e288c5afefd/tumblr_n7yhhvUQtx1st5lhmo1_1280.jpg' lg>

          <HeaderText>Welcome to readMe</HeaderText>
        </Header>
        <Button size='lg' block onClick={() => this.props.history.push('/login')}>Login</Button>
        <Button size='lg' block onClick={() => this.props.history.push('/register')}>Register</Button>
      </div>
    )
  }
}

export default withRouter(MainPage)
