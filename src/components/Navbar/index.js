import React, { useState } from 'react';
import PropTypes from "prop-types"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import links from './content'

import './navbar.scss'

import userIcon from "../../images/icons/user.svg"



const NavbarHome = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar" dark expand="md">
                <NavbarBrand href="/">
                    <StaticImage
                        src="../../images/seazone-logo.png"
                        width={150}
                        quality={80}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Seazone Logo"
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav>
                        {links.map((link, i) => {
                            return (
                                <Link key={i} className="nav-link" activeClassName="active" to={link.url}>{link.label}</Link>
                            )
                        })}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <img width="24px" src={userIcon} />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Login
                                </DropdownItem>
             
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

NavItem.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    active: PropTypes.bool,
    // pass in custom element to use
}

export default NavbarHome;