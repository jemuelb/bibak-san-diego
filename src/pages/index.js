import * as React from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"

const IndexPage = ({data}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <article key={data.mdx.id}>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
                <p>Last Updated: {data.mdx.frontmatter.date}</p>
            </article>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query {
        mdx(slug: {eq: "main"}) {
            frontmatter {
                title
                date
            }
            body
            id
            slug
        }
    }
`
