import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap"
import classnames from "classnames"
import AnchorLink from "react-anchor-link-smooth-scroll"

const NavbarPremier = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <header className={classnames({ scrolled: scrolled })}>
      <Container fluid>
        <Navbar light className="main-navbar" sticky="top" expand="lg">
          <NavbarBrand
            href="/"
            title="Home"
            className="mr-auto main-navbar--brand"
          >
            <figure className="main-navbar--logo m-0 p-0">
              <img src="" alt="logo" />
            </figure>
          </NavbarBrand>
          <NavbarToggler
            className="main-navbar--toggler p-0 w-0"
            onClick={toggle}
          />

          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav className="main-navbar--nav mt-4 mt-md-0" navbar>
              <NavItem>
                <AnchorLink className="nav-link" offset="80" href="#about">
                  About
                </AnchorLink>
              </NavItem>
            </Nav>
            <NavbarText className="px-0 px-md-3 d-block d-lg-inline text-right">
              <Link href={`tel:`} className="btn btn-primary m-auto text-right">
                Phone number
              </Link>
            </NavbarText>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default NavbarPremier
