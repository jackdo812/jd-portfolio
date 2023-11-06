import React from 'react'
import Nav from './Nav'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = ({mediaData, connectData}) => {

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // }

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };
  
  return (
    <header id="masthead" className="site-header relative shadow-md md:py-[1vh] md:px-[5vw] min-[1024px]:px-[10vw]">
        <div className='flex items-center justify-center md:justify-between'>
          <Link to='/'>
            <img className='w-[70px] block my-2 mx-auto' src={mediaData.logo} alt="Logo" />
          </Link>
          <Nav /> 
        </div>
        
        
  </header>
  )
}

export default Header