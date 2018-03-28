import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap'
import { Navlink, DropdownLink } from './NavLink'
import './Toolbar.css'
import logo from '../../logo.svg'
import Register from '../Register/Register.js'

class Toolbar extends Component {

    constructor(props) {
      super(props)
      this.toggle = this.toggle.bind(this)
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
      
      this.state = {
        isOpen: false,
        width: window.innerWidth,
        height: window.innerHeight,
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

    componentDidMount() {
      this.updateWindowDimensions()
      window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
      window.removeEventListener('resize')
    }

    render() {
      const isMobile = this.state.width <= 767

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

                  <DropdownMenu>
                    <DropdownLink style={{color:'#212529'}} to="/account">Profile</DropdownLink>
                    <DropdownLink style={{color:'#212529'}} to="/settings">Settings</DropdownLink>
                    <DropdownItem divider />
                    <DropdownLink style={{color:'#212529'}} to="/logout">Logout</DropdownLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>

              {/* Collapsed menu */}
              <Collapse isOpen={this.state.isOpen} right Collapse navbar>
                <Nav className="mr" navbar>
                  <NavItem><Navlink to="/feed">Feed</Navlink></NavItem>
                  <NavItem><Navlink to="/account">Account</Navlink></NavItem>
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
                  <NavItem><Navlink to="/feed">Feed</Navlink></NavItem>
                  <NavItem><Navlink to="/account">Account</Navlink></NavItem>
                </Nav>
              </Collapse>

              <Nav>
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
              </Nav>
          </Navbar>
          )}
        </div>
      )
    }
}

export default Toolbar
