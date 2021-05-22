import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navbar from "../Navbar"

import './header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
     <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
