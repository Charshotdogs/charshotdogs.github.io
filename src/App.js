import React from 'react'
import './App.css'

import Navbar from './components/navbar/navbar'

import LandingPage from './pages/landing-page/landing-page'
import AboutPage from './pages/about-page/about-page'
import MenuPage from './pages/menu-page/menu-page'
import WherePage from './pages/where-page/where-page'

const sections = [
  {
    name: 'HOME',
    to: 'landing'
  },
  {
    name: 'MENU',
    to: 'menu'
  },
  {
    name: 'WHERE',
    to: 'where'
  },
  {
    name: 'ABOUT',
    to: 'about'
  },
]

function App() {
  return (
    <>
      <Navbar items={sections} navbrand="LOGO"/>
      <div id="landing-background"></div>
      <div id='body'>
        <LandingPage/>
        <MenuPage/>
        <WherePage/>
        <AboutPage/>
      </div>
    </>
  )
}

export default App
