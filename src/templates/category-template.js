import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const CategoryTemplate = (props) => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props
  const { t } = useTranslation()
  return (
    <Layout>
      <Posts posts={posts} title={`${t('Categoría')} / ${t(category)}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($category: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          author
          category

          slug
          date(formatString: "MMMM Do, YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`

export default CategoryTemplate
