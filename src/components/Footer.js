import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import socialLinks from '../constants/social_links'
import { Link, Trans } from 'gatsby-plugin-react-i18next'
import links from '../constants/links-footer'

const Footer = () => {
  return (
    <footer className="text-center py-8 bg-cyan-600 text-gray-100 p-16">
      <div className="mb-10 md:mb-1">
        <StaticImage
          src="../assets/images/marcos-ivan.jpg"
          alt="Marcos Iván Quintana"
          className="rounded w-24"
        />
        <div className="flex gap-3 justify-center mt-4">
          {socialLinks.map((link) => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row justify-between">
        <div className="">
          <div className="underline" />
          <ul class="flex gap-3 capitalize">
            {links.map((item) => {
              return (
                <li class="footer__item" key={item.link}>
                  <Link to={item.url} className="link">
                    <Trans>{item.text}</Trans>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="">
          <div className="underline" />
          <p>
            <Trans>derechos de autor</Trans> &copy; {new Date().getFullYear()}{' '}
            <span className=" text-slate-300">Marcos Iván Quintana</span>{' '}
            <Trans>derechos reservados</Trans>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
