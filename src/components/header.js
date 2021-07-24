import * as React from 'react'
import {Link} from 'gatsby'

const Header = () => {
    return (
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
    )
}

export default Header