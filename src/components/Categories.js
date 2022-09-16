import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`

const Categories = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query)
  const { t } = useTranslation()
  return (
    <ul className="categories">
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className="category">
              {t(category)}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
