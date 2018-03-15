import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Toolbar.css'
import logo from '../../logo.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

class Toolbar extends Component {

    constructor(props) {
      super(props)
      this.toggle = this.toggle.bind(this)
      this.state = {
        isOpen: false
      }
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            
            <NavbarBrand href="/"> 
                <img src="http://placehold.it/120x29?text=Logo" className="d-inline-block align-top" alt="readMe logo"/>
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} /> 

            <Collapse isOpen={this.state.isOpen} right Collapse navbar>
              
              <Nav className="mr" navbar>
                <NavItem>
                  <NavLink href="/feed">Feed</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/account">Account</NavLink>
                </NavItem>

              <UncontrolledDropdown nav inNavbar>

                <DropdownToggle nav caret>
                  <img src="http://placehold.it/50x50?text=Picture" className="profile-picture" alt="profile" />
                </DropdownToggle>

                <DropdownMenu >
                  <DropdownItem href="/account">
                    Profile
                  </DropdownItem>

                  <DropdownItem>
                    Settings
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem href="#">
                    Logout
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

              </Nav>
            </Collapse>
            
          </Navbar>
        </div>
      )
    }
}

export default Toolbar
