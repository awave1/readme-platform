/**
 * This is header component that is present on profile page
 * 
 * Used to show background image.
 */

import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

  constructor(props) {
    super(props)
    this.headerHeight = this.props.lg === true ? '450px' : '0px'
  }

  render() {
    return(
      <div 
        className="header-element"
        style={{
          background: `
            linear-gradient(
              rgba(0, 0, 0, 0.45), 
              rgba(0, 0, 0, 0.45)
            ),
            url(${this.props.image})`,
            height: this.headerHeight
        }}>
        {this.props.children}
      </div>
    )
  }
}

export default Header
