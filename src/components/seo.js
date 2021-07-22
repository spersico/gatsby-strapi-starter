/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description = "", lang = "en", meta = [], title = "" }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Staatliches",
        },
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css",
        },
      ]}
      script={[
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
        },
        {
          src:
            "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js",
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
