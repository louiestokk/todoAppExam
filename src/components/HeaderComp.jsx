import React from 'react'

const HeaderComp = () => {
  return (
    <header>      
      <img src="../assets/hero.png" alt="Hero" />
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