const config = {
  siteMetadata: {
    title: 'Podium Ice Skate',
    description: '',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#32AA9F',
    //     theme_color: '#32AA9F',
    //     display: 'minimal-ui',
    //     icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
    //   },
    // },

    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}

module.exports = config
