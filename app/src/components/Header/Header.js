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
          backgroundImage: `url(${this.props.image})`,
          height: this.headerHeight
        }}></div>
    )
  }
}

export default Header
