import React from 'react'
// import SocialLinks from "../../constants/socialLinks";
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Title title={t('acerca de mi')} />
      <StaticImage
        src="../../assets/images/banner-about.jpg"
        alt="about"
        layout="fixed"
        width={100}
        height={100}
        className="img"
      />
      <p>
        <Trans>AboutFrase1</Trans>
      </p>
      {/* <SocialLinks styleClass="banner-icons" /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
