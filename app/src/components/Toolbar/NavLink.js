import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink, DropdownItem } from 'reactstrap'

export class Navlink extends Component {
  render() {
    return(
      <NavLink>
        <Link style={{color:'#212529'}} to={this.props.to}>{this.props.children}</Link>
      </NavLink>
    )
  }
}

export class DropdownLink extends Component {
  render() {
    return(
      <DropdownItem>
        <Link style={{color:'#212529'}} to={this.props.to} >{this.props.children}</Link>
      </DropdownItem>
    )
  }
}
