import React from "react"

import Nav from "./nav"
import Seo from "./seo"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout
