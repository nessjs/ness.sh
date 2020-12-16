module.exports = {
  siteMetadata: {
    title: 'Ness',
    titleTemplate: '%s · Deploy web sites to your AWS account effortlessly',
    description: 'Ness is a CLI tool that makes it easy to deploy web sites to your AWS account.',
    siteUrl: 'https://ness.sh',
    image: '/images/ness-banner.png',
    twitterUsername: '@aeduhm',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-Y5B9TBHJ3G', // Google Analytics / GA
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ness.sh`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ness',
        short_name: 'Ness',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#006880',
        icon: 'static/images/ness-mark.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
  ],
}
