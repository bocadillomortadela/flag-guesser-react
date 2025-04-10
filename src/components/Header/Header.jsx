import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Guess the flag</NavLink>
          </li>
          <li>
            <NavLink to='/HigherLower'>Higher or lower?</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
