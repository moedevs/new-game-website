const imageSources = ["girls", "tweets", "images"];

const imageSourceFolders = imageSources.map(name => ({
  resolve: "gatsby-source-filesystem",
  options: {
    path: `${__dirname}/content/${name}`,
    name
  }
}));

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    description: "New Game! fan site made by the /r/NewGame community",
    url: "https://hifumi.io",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    ...imageSourceFolders,
    {
      resolve:"gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              withWebp: true,
              maxWidth: 500,
              quality: 80
            }
          }
        ]
      }
    },
    // {
    //   resolve: "gatsby-plugin-purgecss",
    //   options: {
    //     printRejected: true,
    //     purgeOnly: ['/bulma.scss']
    //   }
    // },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        path: "./content/images"
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
