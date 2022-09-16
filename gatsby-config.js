const { languages, defaultLanguage } = require('./languages.js')

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
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages,
        defaultLanguage,
        siteUrl: `https://marcosivan.com`,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },

    `gatsby-plugin-react-helmet`,
  ],
}
