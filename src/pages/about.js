import React from "react"
import { Link } from "gatsby"
import AboutSection from "../components/aboutPage/AboutSection"

import Layout from "../components/Layout"
import AboutDescription from "../components/aboutPage/AboutDescription"

export default () => {
  return (
    <Layout>
      <AboutSection />
      <AboutDescription />
    </Layout>
  )
}
