import React from "react"
import SocialLinks from "../shared/SocialLinks"
import Links from "../shared/Links"

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="wrapper">
          <div className="footer-wrapper">
            <div className="footer-menu">
              <Links />
            </div>

            <div className="social-wrapper">
              <SocialLinks />
            </div>
            <div className="copyright-section">
              <h4>Saroj Adhikari</h4>
              <p>Copyright &copy;, 2020. All rights reserved.</p>
              <p>Powered by: React, Gatsby, Netlify, NodeJS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
