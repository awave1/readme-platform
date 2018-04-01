import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import styled from 'styled-components'

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
  }

  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleRegister(event) {
    event.preventDefault()
  }

  async handleLogin(event) {
    event.preventDefault()
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const data = { 
      username: this.state.username,
      password: this.state.password,
    }

    const response = await fetch('/api/auth/login', { 
      method: 'POST', 
      body: JSON.stringify(data),
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      credentials: 'same-origin',
    })
    await response.json()
  }

  render() {
    const btnText = this.props.register ? 'Submit' : 'Login'
    return(
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        { this.props.register ? (
        <Form action="/api/users/create" className="registerForm" method="POST" onSubmit={this.handleRegister}>
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

          <FormGroup check row >
            <Col sm={{ size: 10,offset: 2 }} style={{ paddingLeft: '0' }}>
              <Button type="submit">{btnText}</Button>
            </Col>
          </FormGroup>
        </Form>
        ) : (
        <Form className="loginForm" onSubmit={this.handleLogin}>
          <FormGroup row>
            <Label for="username" sm={2}>Username</Label>
            <Col sm={10}>
              <Input type="text" name="username" id="username" placeholder="Username"
                     onChange={(event) => this.setState({ username: event.target.value })} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="password" placeholder="Password" 
                     onChange={(event) => this.setState({ password: event.target.value })}/>
            </Col>
          </FormGroup>

          <FormGroup check row >
            <Col sm={{ size: 10,offset: 2 }} style={{ paddingLeft: '0' }}>
              <Button type="submit">{btnText}</Button>
            </Col>
          </FormGroup>

        </Form>
        ) }

      </Col>
    )
  }
}

export default LoginForm
