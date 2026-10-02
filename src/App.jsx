import { useState } from 'react'
import Button from './components/Button'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Footer from './components/Footer'
import HeaderComp from './components/HeaderComp'
import './App.css'

function App() {
  return (
    <>
    <HeaderComp />
    <main>
   <section id="center">
          <h1>Keep track of your tasks</h1>
          <p>Organize your day, stay focused, and never forget a to-do again.</p>
          <Button type="button" styles="counter" handleClick={() => {}} text="Todos for today is 0" />
           <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default App
