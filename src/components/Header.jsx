import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header id="masthead" className="site-header">
        <div className="site-branding">
        <p className="site-title">JD Portfolio</p>
        </div>
        <nav className="site-navigation">
        <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/experiences'>Experiences</NavLink></li>
        </ul>
        </nav>
  </header>
  )
}

export default Header