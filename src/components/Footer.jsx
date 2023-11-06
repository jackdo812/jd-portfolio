import React from 'react'
import { getYear } from "../utilities/dates";
import ThumbNav from './ThumbNav';

const Footer = () => {
  return (
    <footer className='pb-20 pt-[0.7rem] shadow-[0px_-4px_4px_-4px_gray] bg-foggy md:py-4'>
        <p className='italic text-[0.85rem] text-center text-forest'>&copy;{getYear()} Designed and Developed by Jack Do</p>
        <ThumbNav />
    </footer>
  )
}

export default Footer