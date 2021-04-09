import PropTypes from 'prop-types'
import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

Layout.defaultProps = {
  children: <></>,
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}
