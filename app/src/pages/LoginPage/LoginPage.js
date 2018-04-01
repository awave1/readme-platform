import React, { Component } from 'react'
import { Col } from 'reactstrap'
import styled from 'styled-components'
import Register from '../../components/Register/Register'
import LoginForm from '../../components/LoginForm/LoginForm'

const Title = styled.h1`
  color: #424242;
  margin-top: 12px;
  margin-bottom: 12px;
`

class LoginPage extends Component {
  render() {
    const isRegister = this.props.location.pathname === '/register'

    return(
      <div>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          {isRegister ?
            <Title>Create Account</Title> : <Title>Login</Title> 
          }
        </Col>
        <LoginForm register={isRegister}/>
      </div>
    )
  }
}

export default LoginPage
