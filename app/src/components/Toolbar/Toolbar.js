/**
 * A component that displays toolbar on the website
 */

import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap'
import { Navlink, DropdownLink } from './NavLink'
import './Toolbar.css'
import logo from '../../logo.svg'
import loggedIn from '../../authUtil'

class Toolbar extends Component {

    constructor(props) {
      super(props)
      this.toggle = this.toggle.bind(this)
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
      this.logout = this.logout.bind(this)
      
      this.state = {
        isOpen: false,
        width: window.innerWidth,
        height: window.innerHeight,
        loggedIn: false,
        username: ''
      }
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    async logout() {
      const res = await fetch('/api/auth/logout')
      await res.json()
    }

    async componentDidMount() {
      this.updateWindowDimensions()
      window.addEventListener('resize', this.updateWindowDimensions)
      const user = await loggedIn()
      if (user)
        this.setState({
          loggedIn: user.success,
          username: user.user ? user.user.username : '', 
        })
    }

    componentWillUnmount() {
      window.removeEventListener('resize')
    }

    render() {
      const isMobile = this.state.width <= 767
      const dropdownMenu = this.state.loggedIn ? (
        <DropdownMenu>
          <DropdownLink style={{color:'#212529'}} to={`/users/${this.state.username}`}>Profile</DropdownLink>
          <DropdownLink style={{color:'#212529'}} to="/editor">Write</DropdownLink>
          <DropdownLink style={{color:'#212529'}} to="/settings">Settings</DropdownLink>
          <DropdownItem divider />
          <DropdownLink style={{color:'#212529'}} to="/" onClick={this.logout}>Logout</DropdownLink>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownLink style={{color:'#212529'}} to="/login">Login</DropdownLink>
        </DropdownMenu>
      )

      return (
        <div>
          {isMobile ? (  
            <Navbar color="light" light expand="md" className="mr-auto">

              <NavbarToggler onClick={this.toggle} /> 

              <NavbarBrand className="toolbar-brand" href="/"> 
                <img src={logo} style={{width: '43px'}} className="d-inline-block align-top" alt="readMe logo"/>
              </NavbarBrand>

              <Nav>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <img src="http://placehold.it/50x50?text=Picture" className="profile-picture" alt="profile" />
                  </DropdownToggle>
                  { dropdownMenu }
                </UncontrolledDropdown>
              </Nav>

              {/* Collapsed menu */}
              <Collapse isOpen={this.state.isOpen} right Collapse navbar>
                <Nav className="mr" navbar>
                  <NavItem><Navlink to="/feed">Feed</Navlink></NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          ) : (
            <Navbar color="light" light expand="md" className="mr-auto">

              <NavbarBrand className="toolbar-brand" href="/"> 
                <img src={logo} style={{width: '43px'}} className="d-inline-block align-top" alt="readMe logo"/>
              </NavbarBrand>

              <NavbarToggler onClick={this.toggle} /> 


              {/* Collapsed menu */}
              <Collapse isOpen={this.state.isOpen} right Collapse navbar>
                <Nav className="mr" navbar>
                  <NavItem style={{marginLeft: "15px"}}><Navlink style={{color: "#eeeeee"}} to="/feed">Feed</Navlink></NavItem>
                </Nav>
              </Collapse>

              <Nav>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <img src="http://placehold.it/50x50?text=Picture" className="profile-picture" alt="profile" />
                  </DropdownToggle>
                  { dropdownMenu }
                </UncontrolledDropdown>
              </Nav>
          </Navbar>
          )}
        </div>
      )
    }
}

export default Toolbar
