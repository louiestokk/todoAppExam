import React from 'react'
import heroImg from '../assets/hero.png'

const HeaderComp = () => {
  return (
    <header>      
      <img src={heroImg} alt="Hero" />
      <nav>
        <ul className="nav-list">
          <li><a href="#center">Home</a></li>
          <li><a href="#next-steps">Next Steps</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComp