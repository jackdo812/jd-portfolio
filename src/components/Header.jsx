import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; // Import useSelector


const Header = ({mediaData}) => {
  // Use useSelector to get the isDarkMode state from Redux store
  const isDarkMode = useSelector((state) => state.darkMode);
  return (
    <header id="masthead" className={`site-header ${isDarkMode ? 'bg-forestbg' : 'bg-foggybg'} relative shadow-md md:py-[1vh] md:px-[3vw] min-[1200px]:px-[4vw] min-[1300px]:px-[5vw]  min-[1400px]:px-[7vw] min-[1500px]:px-[10vw] min-[1600px]:px-[13vw] min-[1700px]:px-[17vw]`}>
        <div className='flex items-center justify-center md:justify-between'>
          <Link to='/'>
            {isDarkMode ?
            <img className='w-[70px] block my-2 mx-auto' src={mediaData.logo_dark_mode} alt="Dark Mode Logo" />
            : 
            <img className='w-[70px] block my-2 mx-auto' src={mediaData.logo} alt="Light Mode Logo" />
          }
          </Link>
          <Nav /> 
        </div>
        
        
  </header>
  )
}

export default Header