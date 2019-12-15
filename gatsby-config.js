module.exports = {
  siteMetadata: {
    title: "Open Source Festival",
    description: "An annual open source gathering under Open Source Community Africa",
    author: "@oscafrica"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Open Source Festival",
        short_name: "OSF",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#283756",
        display: "minimal-ui",
        icon: "https://res.cloudinary.com/osca/image/upload/v1576374354/osf/Logo/PNG/orange.png"
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    "gatsby-plugin-offline"
  ]
};
