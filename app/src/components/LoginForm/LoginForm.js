import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import styled from 'styled-components'

class LoginForm extends Component {
  render() {
    const btnText = this.props.register ? 'Submit' : 'Login'
    const register = this.props.register === true
    return(
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        { register ? (
        <Form className="registerForm">
          <FormGroup row>
            <Label for="firstName" sm={2}>First Name</Label>
            <Col sm={10}>
              <Input type="text" name="first" id="firstName" placeholder="First Name" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="lastName" sm={2}>Last Name</Label>
            <Col sm={10}>
              <Input type="text" name="last" id="lastName" placeholder="Last Name" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="username" sm={2}>Username</Label>
            <Col sm={10}>
              <Input type="text" name="username" id="username" placeholder="Username" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="password" placeholder="Password" />
            </Col>
          </FormGroup>
        </Form>
        ) : (
        <Form className="loginForm">
          <FormGroup row>
            <Label for="username" sm={2}>Username</Label>
            <Col sm={10}>
              <Input type="text" name="username" id="username" placeholder="Username" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="password" placeholder="Password" />
            </Col>
          </FormGroup>

        </Form>
        ) }

        <FormGroup check row >
          <Col sm={{ size: 10,offset: 2 }} style={{ paddingLeft: '0' }}>
            <Button>{btnText}</Button>
          </Col>
        </FormGroup>
      </Col>
    )
  }
}

export default LoginForm
