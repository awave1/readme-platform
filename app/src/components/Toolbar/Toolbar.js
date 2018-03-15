import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap'
import { Navlink, DropdownLink } from './NavLink'
import './Toolbar.css'
import logo from '../../logo.svg'

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
          <Navbar color="light" light expand="md" className="mr-auto">
            
            <NavbarBrand href="/"> 
                <img src={logo} style={{width: '43px'}} className="d-inline-block align-top" alt="readMe logo"/>
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} /> 

            <Collapse isOpen={this.state.isOpen} right Collapse navbar>
              
              <Nav className="mr" navbar>
                <NavItem>
                  <Navlink to="/feed">Feed</Navlink>
                </NavItem>
                <NavItem>
                  <Navlink to="/account">Account</Navlink>
                </NavItem>
              </Nav>

              <Nav className="ml-auto">
                <NavItem>
                  
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <img src="http://placehold.it/50x50?text=Picture" className="profile-picture" alt="profile" />
                    </DropdownToggle>

                    <DropdownMenu>
                      <DropdownLink style={{color:'#212529'}} to="/account">Profile</DropdownLink>
                      <DropdownLink style={{color:'#212529'}} to="/settings">Settings</DropdownLink>
                      <DropdownItem divider />
                      <DropdownLink style={{color:'#212529'}} to="/logout">Logout</DropdownLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                </NavItem>
              </Nav>
            </Collapse>
            
          </Navbar>
        </div>
      )
    }
}

export default Toolbar
