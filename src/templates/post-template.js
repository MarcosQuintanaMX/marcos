import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useTranslation } from 'gatsby-plugin-react-i18next'
const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, embeddedImages },
      body,
    },
  } = data
  const { t } = useTranslation()
  return (
    <Layout>
      <Wrapper>
        {/* post info */}
        <article>
          <GatsbyImage
            image={getImage(image)}
            alt="title"
            className="main-img"
          />
          <div className="post-info">
            <span>{t(category)}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className="underline"></div>
          </div>
          <MDXRenderer embeddedImages={embeddedImages}>{body}</MDXRenderer>
        </article>
        {/* banner */}
        <article>
          <Banner />
        </article>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  width: 95vw;
  color: var(--clr-grey-5);
  margin: 2rem auto;
  @media (min-width: 1170px) {
    display: flex;
    gap: 2rem;
  }
  a {
    color: var(--clr-primary-5);
  }

  .main-img {
    display: block;
    margin: 0 auto;
    @media (min-width: 1170px) {
      width: 75%;
    }
  }
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
`

export default PostTemplate

export const query = graphql`
  query GetSinglePost($slug: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMMM Do, YYYY")
        slug
        title

        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`
