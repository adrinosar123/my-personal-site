import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Footer from "./shared/Footer"
import Header from "./shared/Header"

import "../styles/globalStyles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
