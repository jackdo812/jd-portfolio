import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header id="masthead" className="site-header">
        <div className="site-branding">
        <p className="site-title">JD Portfolio</p>
        </div>
        <div className='hamburger-menu'>
          <button onClick={toggleMenu}>{isMenuOpen ? 'Close' : 'Menu'}</button>
        </div>
        {isMenuOpen &&
        <Nav />
        } 
  </header>
  )
}

export default Header