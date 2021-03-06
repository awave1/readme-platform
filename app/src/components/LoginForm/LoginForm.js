/**
 * This component used for login/register
 * 
 * Handles login/registrer requests to server 
 */

import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { withRouter, Link } from "react-router-dom"

class LoginForm extends Component {

  state = {
    first: '',
    last: '',
    email: '',
    username: '',
    password: '',
  }

  constructor(props, context) {
    super(props, context)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  async handleRegister(event) {
    event.preventDefault()
    event.preventDefault()
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const data = { 
      first: this.state.first,
      last: this.state.last,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    }

    const response = await fetch('/api/users/create', { 
      method: 'POST', 
      body: JSON.stringify(data),
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      credentials: 'same-origin',
    })
    const user = await response.json()
    if (user)
      this.props.history.push('/feed')
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
    const user = await response.json()
    console.log(this.props.history)
    if (user)
      this.props.history.push('/feed')
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
              <Input type="text" name="first" id="firstName" placeholder="First Name" 
                     onChange={(event) => this.setState({ first: event.target.value })} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="lastName" sm={2}>Last Name</Label>
            <Col sm={10}>
              <Input type="text" name="last" id="lastName" placeholder="Last Name" 
                     onChange={(event) => this.setState({ last: event.target.value })} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="username" sm={2}>Username</Label>
            <Col sm={10}>
              <Input type="text" name="username" id="username" placeholder="Username" 
                     onChange={(event) => this.setState({ username: event.target.value })} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="email" placeholder="Email" 
                     onChange={(event) => this.setState({ email: event.target.value })} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="password" placeholder="Password" 
                     onChange={(event) => this.setState({ password: event.target.value })} />
            </Col>
          </FormGroup>

          <FormGroup check row >
            <Col sm={{ size: 10,offset: 2 }} style={{ paddingLeft: '0' }}>
              <Button type="submit">{btnText}</Button>
            </Col>
          </FormGroup>
          <Link to='/login'>Login</Link>
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
          <Link to='/register'>Register</Link>
        </Form>
        ) }
      </Col>
    )
  }
}

export default withRouter(LoginForm)
