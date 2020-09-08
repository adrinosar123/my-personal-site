import React from "react"
import { Link } from "gatsby"
import HeroSection from "../components/indexPage/HeroSection"
import PortfolioSection from "../components/indexPage/PortfolioSection"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <HeroSection />
      <PortfolioSection />
    </Layout>
  )
}
