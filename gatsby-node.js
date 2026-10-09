import path from "path"
import { fileURLToPath } from "url"
import { createFilePath } from "gatsby-source-filesystem"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
export const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: path.resolve(__dirname, "./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}