import React from 'react'
import Nav from './Nav'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = ({mediaData, connectData}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header id="masthead" className="site-header relative shadow-md">
        <div className='flex items-center justify-center md:justify-start'>
          <Link to='/'>
            <img className='w-[70px] block my-2 mx-auto' src={mediaData.logo} alt="Logo" />
          </Link>
          <div className='hamburger-menu hidden md:block md:before:content-[""] md:before:inline-block md:before:w-[2px] md:before:h-[26px] md:before:mr-[1rem] md:before:bg-black md:before:align-middle'>
            <button onClick={toggleMenu} className={`text-blue-500 scale-1 hover:scale-x-[1.15] transition-all duration-300 ease-in-out ${isMenuOpen ? 'animate-fade' : 'animate-fade2'}`}>{isMenuOpen ? 'Close': 'Menu'}</button>
    
          </div>
        </div>
        {isMenuOpen && (
        <Nav connectData={connectData} closeMenu={closeMenu}/>) 
        } 
  </header>
  )
}

export default Header