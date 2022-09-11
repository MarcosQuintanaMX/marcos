module.exports = {
  siteMetadata: {
    title: `Software Design Engineer`,
    description: `Soy Doctor en Ciencias de la Computación por la Universidad de Birmingham (Reino Unido), Maestro en Ciencias (UNAM) e Ingeniero en Sistemas Computacionales (IT Cd Madero), México.`,
    titleTemplate: `%s | Marcos Quintana`,
    url: `https://marcosquintana.com`,
    twitterUsername: `@marcosiq`,
    image: `/desarrollador-web.jpg`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-mdx`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/mdx/',
      },
      __key: 'posts',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://marcosquintana.com/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
          pages: [
            {
              matchPath: '/posts/:title?',
              languages: ['en'],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
