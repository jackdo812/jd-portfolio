import React from 'react'
import { getYear } from "../utilities/dates";
import ThumbNav from './ThumbNav';
import SocialMedia from './SocialMedia';

const Footer = ({connectData}) => {
  return (
    <footer className='pb-20 pt-[0.7rem] shadow-[0px_-4px_4px_-4px_gray] bg-foggy md:py-4'>
      {/* <div className='flex justify-center'>
        <SocialMedia linkedInLink={connectData.linkedin_link} githubLink={connectData.github_link} cuswidth={'36px'} cusheight={'36px'} />
      </div> */}
        <p className='italic text-[0.85rem] text-center text-forest'>&copy;{getYear()} Designed and Developed by Jack Do</p>
        <ThumbNav />
    </footer>
  )
}

export default Footer