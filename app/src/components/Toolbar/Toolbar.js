import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
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
        link: '/account,'
      }
    ]
  }

  menuToggle() {
    const mobileLinks = document.querySelector('.toolbar_links__mobile')
    const toolbar = document.querySelector('.toolbar_container')
    if (mobileLinks.style.display === 'block') {
      mobileLinks.style.display = 'none'
      toolbar.style.height = '64px'
    } else {
      mobileLinks.style.display = 'block'
      toolbar.style.height = '120px'
    }
  }

  render() {
    return(
      <nav className="toolbar_container">

        <div className="toolbar_container__wide">
          <img src={logo} alt="logo" className="toolbar_container__wide_logo" />
          <div className="toolbar_links__wide">
            <li className="toolbar_link"><Link to="/">Home</Link></li>
            <li className="toolbar_link"><Link to="/feed">Feed</Link></li>
            <li className="toolbar_link"><Link to="/account">Account</Link></li>
          </div>
        </div>

        <div className="toolbar_container__mobile">
          <div className="toolbar_btn__mobile">
            <FontAwesomeIcon onClick={this.menuToggle} className="" icon={faBars}/>
          </div>
          <div className="toolbar_links__mobile">
            <li onClick={this.menuToggle} className="toolbar_link"><Link to="/">Home</Link></li>
            <li onClick={this.menuToggle} className="toolbar_link"><Link to="/feed">Feed</Link></li>
            <li onClick={this.menuToggle} className="toolbar_link"><Link to="/account">Account</Link></li>
          </div>
        </div>

      </nav>
    )
  }

}

export default Toolbar
