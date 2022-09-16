import React from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Trans, useTranslation, Link } from 'gatsby-plugin-react-i18next'
import Language from './Language'

const AboutHeader = ({ bgColor, image, main, sub, btnLink, btnText }) => {
  const { t } = useTranslation()
  return (
    <Wrapper style={{ backgroundColor: `${bgColor || 'var(--clr-white)'}` }}>
      <div className="hero">
        <StaticImage
          className="hero-img"
          alt="Marcos"
          src="../assets/images/money-1.jpg"
        />
        <div className="hero-container font-yrsa text-slate-300 text-center">
          <div className="header__text-box">
            <div className="text-4xl md:text-6xl">
              {main || 'Marcos Iván Quintana'}
            </div>
            <div className="text-xl md:text-4xl">
              {sub || t('El dinero no es suficiente')}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-2">
          <Language />
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutHeader

const Wrapper = styled.header`
  .hero-img {
    height: 100%;
    border-radius: var(--borderRadius);
  }
  .hero {
    height: 20vh;
    background-color: var(--clr-primary-9);
    background-size: cover;
    background-position: top;
    position: relative;
  }
  .hero-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 2px black;

    background: linear-gradient(
      to bottom right,
      rgba(0, 37, 92, 0.7),
      rgba(199, 226, 222, 0.9)
    );
  }
`
