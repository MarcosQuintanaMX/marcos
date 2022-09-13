import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'
import Footer from './Footer'

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
      <Footer />
    </div>
  )
}

export default Layout
