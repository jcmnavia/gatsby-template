import React from "react"
import Navbar from "../navbar"
import Footer from "../footer"
import AOS, { init, refresh } from "aos"

const Layout = ({ children }) => {
  useEffect(() => {
    init({ once: true })
    if (AOS) refresh()
  }, [])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
