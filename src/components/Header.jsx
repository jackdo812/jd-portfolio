import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'


const Header = ({mediaData}) => {
  
  return (
    <header id="masthead" className="site-header relative shadow-md md:py-[1vh] md:px-[3vw] min-[1200px]:px-[4vw] min-[1300px]:px-[5vw]  min-[1400px]:px-[7vw] min-[1500px]:px-[10vw] min-[1600px]:px-[13vw] min-[1700px]:px-[17vw]">
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