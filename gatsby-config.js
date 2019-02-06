module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    description: "New Game! fan site made by the /r/NewGame community",
    url: "https://hifumi.io",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-133545986-1",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/girls`,
        name: "girls"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/tweets`,
        name: "tweets"
      }
    },
    {
      resolve:"gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 100
            }
          }
        ]
      }
    },
  ],
};