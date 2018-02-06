import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import './Toolbar.css'

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
    if (mobileLinks.style.display === 'block')
      mobileLinks.style.display = 'none'
    else
      mobileLinks.style.display = 'block'
  }

  render() {
    return(
      <nav className="toolbar_container">
        <div className="toolbar_container__wide">
          <div className="toolbar_links__wide">
            <a href="/" className="toolbar_link">Home</a>
						<a href="/feed" className="toolbar_link">Feed</a>
						<a href="/account" className="toolbar_link">Account</a>          
          </div>
        </div>
        <div className="toolbar_container__mobile">
          <FontAwesomeIcon onClick={this.menuToggle} className="toolbar_btn__mobile" icon={faBars}/>
          <div className="toolbar_links__mobile">
            <a href="/" onClick={this.menuToggle} className="toolbar_link">Home</a>
						<a href="/feed" onClick={this.menuToggle} className="toolbar_link">Feed</a>
						<a href="/account" onClick={this.menuToggle} className="toolbar_link">Account</a>          
          </div>
        </div>
      </nav>
    )
  }

}

export default Toolbar
