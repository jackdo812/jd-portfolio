import React from 'react'
import { getYear } from "../utilities/dates";
import ThumbNav from './ThumbNav';

const Footer = () => {
  return (
    <footer className='pb-16'>
        <p>&copy;{getYear()} by Jack Do</p>
        <ThumbNav />
    </footer>
  )
}

export default Footer