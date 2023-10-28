import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <header id="masthead" className="site-header">
        <div className="site-branding">
        <p className="site-title">JD Portfolio</p>
        </div>
        <Nav />
  </header>
  )
}

export default Header