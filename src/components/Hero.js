import React from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Trans, Link } from 'gatsby-plugin-react-i18next'

const AboutHeader = ({ bgColor, image, main, sub, btnLink, btnText }) => {
  return (
    <Wrapper style={{ backgroundColor: `${bgColor || 'var(--clr-white)'}` }}>
      <div className="hero">
        <StaticImage
          className="hero-img"
          alt="Marcos"
          src="../assets/images/money-1.jpg"
        />
        <div className="hero-container font-yrsa text-slate-100 text-center">
          <div className="header__text-box">
            <div className="text-4xl md:text-6xl">
              {main || 'Marcos Iván Quintana'}
            </div>
            <div className="text-xl">{sub || 'Money is not enough'}</div>
          </div>
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
