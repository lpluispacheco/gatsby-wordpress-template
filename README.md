<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

PLUGINS INSTALLED:
    gatsby-source-wordpress
    gatsby-plugin-sass
    gatsby-plugin-offline
    gatsby-plugin-sharp
    gatsby-plugin-manifest
    gatsby-transformer-sharp
    gatsby-source-filesystem
    gatsby-plugin-react-helmet

After develop you need to install the following plugins in WordPress

1.  **ACF Advanced custom fields.**
    1.- Install the plugin: Advanced Custom Fields in wordpress

    2.- Install the plugin ACF-TO-REST-API in WordPress:
    http://github.com/airesvsg/acf-to-rest-api

1.  **Polylang.**
    Install the plugin: Polylang in wordpress

    Then Polylang integration for the WP REST API in wordpress:
    https://github.com/kadukeitor/wp-api-polylang

2.  **Yoast SEO.**

    Install the plugin Yoast SEO in wordpress and then Yoast to REST API
    https://github.com/niels-garve/yoast-to-rest-api

After this, you need to edit the gatsby-config.js file, in the section:

{
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "https://your-wordpress-page.here", // HERE <-
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      },
 }

