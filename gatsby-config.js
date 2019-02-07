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
    "gatsby-transformer-sharp",
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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/images`,
        name: "images"
      }
    },
    {
      resolve:"gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              withWebp: true,
              maxWidth: 500,
              quality: 100
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
        purgeOnly: ['/bulma.scss']
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "New Game!",
        short_name: "New Game!",
        start_url: "/",
        lang: "en-US",
        background_color: "#90adff",
        theme_color: "#90adff",
        display: "standalone",
        icon: "content/images/favicon.jpg",
        include_favicon: true
      }
    }
  ],
};
