import React from 'react'
import './App.css'

import Navbar from './components/navbar/navbar'

import LandingPage from './pages/landing-page/landing-page'
import AboutPage from './pages/about-page/about-page'
import MenuPage from './pages/menu-page/menu-page'

const sections = [
  {
    name: 'About',
    to: '#about'
  },
  {
    name: 'Menu',
    to: '#menu'
  },
  {
    name: 'Ipsum',
    to: ''
  },
  {
    name: 'Dolor',
    to: ''
  }
]

function App() {
  return (
    <>
      <Navbar items={sections} navbrand="LOGO"/>
      <div id='body'>
        <LandingPage/>
        <AboutPage/>
        <MenuPage/>
      </div>
    </>
  )
}

export default App
