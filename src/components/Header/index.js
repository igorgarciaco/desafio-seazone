import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navbar from "../Navbar"
import NavFilter from "../NavFilter"

import './header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
    <NavFilter />
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
