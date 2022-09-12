import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const linkStyle = `
     hover:opacity-70 bg-red-300;
     text-sm
     sm:text-lg
     transition delay-150
    `
  const logoStyle = `
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `

  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <StaticImage
          className="border mb-2 mt-5"
          src="../assets/images/money-1.jpg"
          height={150}
          alt="asml"
        />
        <div className="text-center">
          <p className="font-yrsa text-3xl md:text-5xl">Marcos Ivan Quintana</p>
          <p className="font-yrsa text-gray-400 text-base md:text-lg">
            - Money is not enought -
          </p>
        </div>
      </div>

      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <main>{children}</main>

      <footer className="text-center py-8 bg-cyan-600 text-gray-100">
        <p>
          Copyright 2030 <span className={logoStyle}>Test Blog</span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
