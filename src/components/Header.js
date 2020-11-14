import React from "react"
import { Link } from "gatsby"

import HeaderStyles from "./header.module.scss"

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" className={HeaderStyles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
