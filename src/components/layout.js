import * as React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/react'

const container = css`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`

const heading = css`
  color: rgb(219, 31, 55);
`

const navLinks = css`
  display: flex;
  list-style: none;
  padding-left: 0;
`

const navLinkItem = css`
  padding-right: 2rem;
`

const navLinkText = css`
  color: black;
`

const Layout = ({pageTitle, children}) => {
    return (
        <main css={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul css={navLinks}>
                    <li css={navLinkItem}>
                        <Link to="/" css={navLinkText}>Home</Link>
                    </li>
                    <li css={navLinkItem}>
                        <Link to="/about" css={navLinkText}>About</Link>
                    </li>
                    <li css={navLinkItem}>
                        <Link
                            to="https://www.facebook.com/groups/117966411709158/"
                            css={navLinkText}
                        >
                            Facebook Group
                        </Link>
                    </li>

                </ul>
            </nav>
            <h1 css={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout
