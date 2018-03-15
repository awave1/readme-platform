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
  DropdownItem } from 'reactstrap';

class Toolbar extends Component {

    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/"> 
                <img src="http://placehold.it/120x29?text=Logo" class="d-inline-block align-top" alt="readMe logo"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} right Collapse navbar>
            <Nav className="mr" navbar>
                <NavItem>
                  <NavLink href="/feed">Feed</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/account">Account</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
            <NavbarToggler onClick={this.toggle} /> 
              <Nav className="mr" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  <img src="http://placehold.it/50x50?text=Picture" class="profile-picture" />
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
            
          </Navbar>
        </div>

  // constructor(props) {
  //   super(props)

  //   this.menuItems = [
  //     {
  //       name: 'Home',
  //       link: '/',
  //     },
  //     {
  //       name: 'Feed',
  //       link: '/feed',
  //     },
  //     {
  //       name: 'Account',
  //       link: '/account',
  //     }
  //   ]
  // }

  // getMenuItems() {
  //   return this.menuItems.map(el =>
  //     <li class Name="nav-item">
  //       <Link className="nav-link" to={el.link}>{el.name}</Link>
  //     </li>
  //   )
  // }

  // render() {
  //   return(

      
      // <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar_main">
      //   <Link className="navbar-brand" to="/">
      //     <img src="http://placehold.it/120x29?text=Logo" class="d-inline-block align-top" alt=""/>
      //     {this.props.text}
      //   </Link>

        
					
				

      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>

      //   <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
      //     <ul class="navbar-nav mr-auto">
      //       {this.getMenuItems()}
      //     </ul>
      //   </div>

  

      //    <ul class="navbar-nav flex-row mr-lg-0">
      //       <li class="nav-item">
      //            <a class="nav-link pr-2"><i class="fa fa-search"></i></a>
      //       </li>
      //       <li class="nav-item">
      //           <a class="nav-link pr-2"><i class="fa fa-facebook"></i></a>
      //       </li>
      //       <li class="nav-item dropdown">
      //           <a class="nav-link dropdown-toggle mr-3 mr-lg-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
      //           <img src="http://placehold.it/50x50?text=Picture" class="profile-picture" /><span class="caret"></span>
      //           </a>
      //           <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
      //               <a class="dropdown-item" href="">test</a>
      //               <a class="dropdown-item" href="">test2</a>
      //           </div>
      //       </li>
      //   </ul>
      // </nav>
    )
  }

}

export default Toolbar
