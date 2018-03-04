import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Toolbar.css'
import logo from '../../logo.svg'

class Toolbar extends Component {

  constructor(props) {
    super(props)

    this.menuItems = [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Feed',
        link: '/feed',
      },
      {
        name: 'Account',
        link: '/account',
      }
    ]
  }

  getMenuItems() {
    return this.menuItems.map(el =>
      <li className="nav-item">
        <Link className="nav-link" to={el.link}>{el.name}</Link>
      </li>
    )
  }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar_main">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
          {this.props.text}
        </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar_main__links">
          <ul class="navbar-nav mr-auto">
            {this.getMenuItems()}
          </ul>
        </div>

      </nav>
    )
  }

}

export default Toolbar
