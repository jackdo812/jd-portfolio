import React from 'react'
import Nav from './Nav'
import { useState } from 'react'


const Header = ({mediaData, connectData}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header id="masthead" className="site-header relative">
        <div className='flex items-center'>
          <img className='w-[70px] m-2 ' src={mediaData.logo} alt="Logo" />
          <div className='hamburger-menu hidden sm:block sm:before:content-[""] sm:before:inline-block sm:before:w-[2px] sm:before:h-[26px] sm:before:mr-[1rem] sm:before:bg-black sm:before:align-middle'>
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