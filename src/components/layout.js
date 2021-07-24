import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Header from './header'
import {css} from '@emotion/react'
import {StaticImage} from "gatsby-plugin-image";

const container = css`
  max-width: 600px;
`

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <main>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <Header/>
            <StaticImage
                src="../images/hero.jpg"
                alt="Hero image"
                placeholder="blurred"
                aspectRatio={16/9}
            />
            <div className="container" css={container}>
                <h1>{pageTitle}</h1>
                {children}
            </div>
        </main>
    )
}

export default Layout
