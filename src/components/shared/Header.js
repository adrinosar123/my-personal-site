import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Links from "./Links"
import LogoImg from "../../images/saroj-logo.png"

export default function Header() {
  return (
    <header className="header-section">
      <div className="wrapper">
        <div className="header-wrapper">
          <div className="logo-section">
            <Link to="/">
              {" "}
              <img src={LogoImg} width="40%" />
            </Link>{" "}
          </div>
          <div className="menu-section">
            <Links />
          </div>
        </div>
      </div>
    </header>
  )
}
