import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import pageLinks from '../constants/links'
import { Link } from 'gatsby'
import { debounce } from '../utilities/helpers'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Navbar = ({ toggleSidebar }) => {
  const { t } = useTranslation()
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 60) ||
        currentScrollPos < 10,
    )

    setPrevScrollPos(currentScrollPos)
  }, 250)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <div>
      <div className="bg-cyan-600 text-gray-100 p-3">
        <button
          type="button"
          className="md:hidden flex gap-2 w-full items-center justify-center"
          onClick={toggleSidebar}
        >
          <FaBars /> <Trans>Menú</Trans>
        </button>
        <div className="container mx-auto hidden md:block">
          <div className="flex justify-between text-white">
            {pageLinks.map((link) => {
              return (
                <Link key={link.id} to={link.url}>
                  {t(link.text)}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
