import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      created_at
      image {
        publicURL
      }
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown children={article.content} />
            <p>
              {new Date(article?.created_at).toLocaleDateString([], {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
