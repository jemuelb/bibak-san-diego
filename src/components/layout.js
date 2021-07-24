import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

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
            <p>{data.site.siteMetadata.title}</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link
                            to="https://www.facebook.com/groups/117966411709158/"
                        >
                            Facebook Group
                        </Link>
                    </li>

                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout
