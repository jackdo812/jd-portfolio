import React from 'react'
import { getYear } from "../utilities/dates";
import ThumbNav from './ThumbNav';
import SocialMedia from './SocialMedia';
import { useLocation } from 'react-router-dom';

const Footer = ({connectData}) => {

  const location = useLocation();
  const isConnectPage = location.pathname === '/connect';

  return (
    <footer className={` ${isConnectPage ? 'md:!py-8' : ''} pb-24 pt-[1.25rem] shadow-[0px_-4px_4px_-4px_gray] bg-foggy md:py-4`}>
      <div className='flex flex-col justify-center'>
        {!isConnectPage &&
        <SocialMedia linkedInLink={connectData.linkedin_link} githubLink={connectData.github_link} isOnConnect={false} />
      }
      <p className='italic text-[0.85rem] text-center text-forest'>&copy;{getYear()} Designed and Developed by Jack Do</p>
      </div>
        <ThumbNav />
    </footer>
  )
}

export default Footer