module.exports = {
  siteMetadata: {
    title: 'Ness',
    titleTemplate: '%s · No-effort static sites deployed to your AWS account',
    description:
      'Ness is a CLI tool that makes it easy to deploy static sites to your AWS account.',
    url: 'https://ness.sh',
    image: '/images/ness-mark.png', // Path to your image you placed in the 'static' folder
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
        icon: 'src/images/ness-mark.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
