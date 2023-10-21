import React from 'react'
import { getYear } from "../utilities/dates";

const Footer = () => {
  return (
    <footer>
        <p>&copy;{getYear()} by Jack Do</p>
    </footer>
  )
}

export default Footer