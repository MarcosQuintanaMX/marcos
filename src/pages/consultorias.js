import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

const Cursos = () => {
  return (
    <Layout>
      <h1>Consultorías</h1>
      <StaticImage
        className="border mb-2 mt-5"
        src="../assets/images/coming-soon.jpg"
        alt="asml"
      />
    </Layout>
  )
}

export default Cursos
