import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Hero />
      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {children}

      <footer className="text-center py-8 bg-cyan-600 text-gray-100">
        <p>Luego vamos por el footer</p>
      </footer>
    </div>
  )
}

export default Layout
