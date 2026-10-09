import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


export default ({ data }) => (
  <Layout>
    <div className={styles.textLeft}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <div>
        <h1>Mapena Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount} Markdown files found</h4>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`